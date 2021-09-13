import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        alignItems:'center'
    },
    input:{
        borderColor:"rgb(220,220,220)",
        borderWidth:1,
        borderRadius:10,
        paddingLeft:20,
        paddingRight:20,
        marginTop:50,
        width:260,
        height:60,
        fontSize:16,
        elevation:10,
        backgroundColor:'white'
    },
    containerText:{
        width:230,
        marginTop:25
    },
    text:{
        textAlign:"center"
    },
    textBtn:{
        color:"white",
        textAlign:"center",
        alignItems:"center",
        alignContent:"center",
        fontSize:16
    },
    touchBtn:{
        marginTop:30,
        borderRadius:10,
        height:45,
        borderColor:"rgb(72,61,139)",
        backgroundColor:"rgb(72,61,139)",
        borderWidth:1,
        alignContent:"center",
        justifyContent:"center"
    }
})
export default styles