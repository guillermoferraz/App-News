import React from 'react'
import PropTypes from 'prop-types'

//text to speech
import * as Speech from 'expo-speech'

//styles
import {View, Text, Image, ActivityIndicator, TouchableOpacity, Touchable} from 'react-native'
import styles from './styles'

const SelectedNews = ({data, section, activeVoice, setActiveVoice}) => {

    const classes = styles


    const speak = (name , description) =>{
        console.log("data speack:",data)
        const thingsToSay = `${name}${'.;.'}${'.;.'}${description}`;
        Speech.speak(thingsToSay)
    }

    
    return (
        <View style={classes.root}>
            <Text style={classes.textAsistent}>{'Presiona sobre la imagen y el asistente leera los articulos'}</Text>
           {data && data.length > 0 ? 
             data.map(d=>(
               <TouchableOpacity  onPress={activeVoice ? ()=> speak(d.name, d.description) : null } >
               <View style={classes.containerNew} >
               <Text style={classes.textTitle}>{d.name}</Text>
               {d.image && d.image.thumbnail ? 
                 <View style={classes.containerImg}>
                   <Image 
                  
                       source={{uri:d.image.thumbnail.contentUrl}}
                       style={classes.image}
                   />    
                 </View>
               : null}
               <Text style={classes.textDescription}>{d.description}</Text>
           </View>
               </TouchableOpacity>
             ))
            : 
            <View style={classes.containerLoader}>
                <ActivityIndicator size={80} color="#0000ff"/>
            </View>
        }
        </View>
    )
}
SelectedNews.propType = {
    data: PropTypes.any,
    section: PropTypes.string,
    activeVoice: PropTypes.bool,
    setActiveVoice: PropTypes.func
}

export default SelectedNews