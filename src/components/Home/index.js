import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'

//redux data
import newsSlice ,{getNews} from '../../data/newsData'

//components
import SelectedNews from '../selectedNews'
import Find from '../Find'

//text to speech
import * as Speech from 'expo-speech'

//files
import Feed from '../../../assets/img/feed.png'
import Graphic from '../../../assets/img/graphics.png'
import Idea from '../../../assets/img/idea.png'
import Music from '../../../assets/img/music.png'
import Soccer from '../../../assets/img/soccer.png'
import Tech from '../../../assets/img/tech.png'
import Tv from '../../../assets/img/tv.png'
import Search from '../../../assets/img/search.png'
import Back from '../../../assets/img/back.png'
import VoiceOn from '../../../assets/img/voiceOn.png'
import VoiceOff from '../../../assets/img/voiceOff.png'

//styles
import {
    View, 
    Text, 
    Image, 
    SafeAreaView, 
    ScrollView, 
    TouchableOpacity
    } from 'react-native'
import styles from './styles'


const Home = () => {

    const classes = styles
    const dispatch = useDispatch()
    const {news} = useSelector((state) => state.news)
    const dataList = require('./dataList.json')
    let icon;
    const [selected , setSelected] = useState(false)
    const [getData, setGetData] = useState(null)
    const [actionFind, setActionFind] = useState(false)
    const [section, setSection] = useState(null)
    const [activeFind, setActiveFind] = useState(false)
    const [activeVoice, setActiveVoice] = useState(true)

    useEffect(() => {
        if(!news)dispatch(getNews())
        setGetData(news)
    },[news])

    const handleSelected = (data, info) => {
        dispatch(getNews(data))
        setSelected(true)
        setGetData(info)
    }
    const handleSearch = () => {
        setSelected(false)
        setActionFind(!actionFind)
        dispatch(getNews('uruguay'))
    }
 
    const speak = (data) =>{
        console.log("data speach:",data)
        if(!activeVoice){
            Speech.stop()
        } else if (activeVoice) {
            const thingsToSay = data;
            Speech.speak(thingsToSay)
        }
    }
    

    
    console.log("activeVoice:",activeVoice)

    return (
        
            <SafeAreaView style={classes.safeArea}>
                <TouchableOpacity style={classes.touchVoice}
                    onPress={()=>setActiveVoice(!activeVoice)}
                >
                    <Image style={classes.voice} source={activeVoice ? VoiceOn : VoiceOff} />
                </TouchableOpacity>
                {!actionFind ?                     
                    <ScrollView style={classes.scroll}>            
                    { !selected  ? 
                        <View>
                            <View style={classes.separator}></View>
                            {dataList.data.map(data=>(
                            <TouchableOpacity key={data.id} style={classes.touch}
                                onPress={()=>handleSelected(data.title, data) || activeVoice ? speak(data.title) : null}
                            >
                        
                                <View style={classes.view}>
                                    {data.title === 'Ultimas noticias' ? <Image style={classes.image} source={Feed}/>
                                    :data.title === 'Finanzas' ? <Image style={classes.image} source={Graphic}/>
                                    :data.title === 'Novedades' ? <Image style={classes.image} source={Idea}/>
                                    :data.title === 'Musica' ? <Image style={classes.image} source={Music}/>
                                    :data.title === 'Deportes' ? <Image style={classes.image} source={Soccer}/>
                                    :data.title === 'Tecnologia' ? <Image style={classes.image} source={Tech}/>
                                    :data.title === 'Top Netflix' ? <Image style={classes.image} source={Tv}/>
                                    : null
                                    }
                                    <Text style={classes.title}>{data.title}</Text>
                                </View>
                            </TouchableOpacity>
                        ))}            
                    </View>
                    : 
                    <SelectedNews 
                        activeVoice={activeVoice}
                        setActiveVoice={setActiveVoice}
                        data={getData} 
                    />  
                    }
                    </ScrollView>                
                    : 
                        <Find 
                            activeFind={activeFind}
                            setActiveFind={setActiveFind}
                            section={section} 
                            setSection={setSection}
                            activeVoice={activeVoice}
                            setActiveVoice={setActiveVoice} 
                        />
                }
                {selected ? 
                    <TouchableOpacity style={classes.touchBtnBack}
                    onPress={()=>setSelected(!selected)}
                    >                   
                        <Image  style={classes.search} source={Back} />                    
                    </TouchableOpacity>    
                : null}

                <TouchableOpacity style={classes.touchBtn}
                onPress={section ==='FIND' ?()=> setSection(null) || setActiveFind(false) : ()=>handleSearch()}
                >                   
                    <Image  style={classes.search} source={actionFind ? Back : Search} />                    
                </TouchableOpacity>
            </SafeAreaView>
        
    )
}
export default Home