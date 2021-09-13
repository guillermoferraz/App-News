import React, {useState} from 'react'
import { useSelector, useDispatch } from 'react-redux'
import PropTypes from 'prop-types'

//redux data
import newsSlice ,{getNews} from '../../data/newsData'

//components
import SelectedNews from '../selectedNews'

//styles
import {
    View, 
    Text, 
    TextInput, 
    TouchableOpacity, 
    SafeAreaView, 
    ScrollView
    } from 'react-native'
import styles from './styles'

const Find = ({section , setSection, activeFind, setActiveFind, activeVoice, setActiveVoice}) => {

    const classes = styles
    const dispatch = useDispatch()
    const {news} = useSelector((state) => state.news)
    const [dataFind, setDataFind] = useState(null)

    const handleInput = (e) =>{
        setDataFind(e)
    }
    const sendFind = () => {
        if(dataFind){
            dispatch(getNews(dataFind))
            setSection('FIND')
            setActiveFind(true)
        }
    }
    
    console.log("in find active find:",activeFind)

    return (
       <View>
        {!activeFind ? 
            <View style={classes.root}>
            <TextInput
                style={classes.input}
                
                placeholder='Buscar'
                onChangeText={(e)=> handleInput(e)}
            />
            <View style={classes.containerText}>
                <Text style={classes.text}>
                    {'Utiliza el buscador para encontrar la noticia que desees!'}
                </Text>
                
                <TouchableOpacity style={classes.touchBtn} onPress={()=> sendFind()}>
                    <Text style={classes.textBtn}>{'Buscar'}</Text>
                </TouchableOpacity>

            </View>
        </View>
        :
           <SafeAreaView>
            <ScrollView>
            <SelectedNews data={news ? news : ''} section={section} activeVoice={activeVoice} setActiveVoice={setActiveVoice} />
            </ScrollView>
           </SafeAreaView>
        }
       </View>
    )
}
Find.propTypes = {
    setction : PropTypes.string,
    setSection: PropTypes.func,
    activeFind: PropTypes.bool,
    setActiveFind: PropTypes.func,
    activeVoice: PropTypes.bool,
    setActiveVoice: PropTypes.func
}

export default Find