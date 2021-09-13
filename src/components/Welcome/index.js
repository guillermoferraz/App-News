import React from 'react'

//files
import Logo from '../../../assets/img/logoAppNews.png'


//styles
import {View, Text, Image} from 'react-native'
import styles from './styles'

const Welcome = () => {

    const classes = styles

    return (
        <View style={classes.root}>
            <View style={classes.containerLogo}>
                <Image style={classes.logo} source={Logo} />
            </View>
        </View>
    )
}
export default Welcome