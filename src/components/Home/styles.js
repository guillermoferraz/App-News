import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    image:{
        width:50,
        height:50,
        alignItems:"center",
        marginBottom:5,
        marginLeft:15
    },
    separator:{
        height:50
    },
    none:{
        display:"none"
    },
    view:{
        borderWidth:0,
        flexDirection:"row",
        alignItems:"center",
        marginTop:20,
        borderRadius:10,
        backgroundColor:"rgb(72,61,139)",               
    },
    title:{
        color:"rgb(240,248,255)",
        fontWeight:'bold',
        letterSpacing:3,
        fontSize:16,
        marginLeft:20,
        marginRight:15
    },
    safeArea:{
        backgroundColor:"rgb(240,248,255)",
        height:'100%',
        alignItems:"center",
    },
    touchBtn:{
        position:'absolute',
        width:70,
        height:70,
        top:'77%',
        borderRadius:50,
        left:'77%',
        zIndex:100,
        backgroundColor:"rgb(75,0,130)",
        justifyContent:"center",
        alignItems:"center",
        elevation:30
       
    },
    touchBtnBack:{
        position:'absolute',
        width:70,
        height:70,
        top:'65%',
        borderRadius:50,
        left:'77%',
        zIndex:100,
        backgroundColor:"rgb(75,0,130)",
        justifyContent:"center",
        alignItems:"center",
        elevation:30
       
    },
    btn:{
        width:70,
        height:70,
        borderRadius:50,
        backgroundColor:"black"
        
    },
    voice:{
        width:25,
        height:25
    },
    touchVoice:{
        position:'absolute',
        width:40,
        height:40,
        top:15,
        borderRadius:50,
        left:'85%',
        zIndex:200,
        backgroundColor:"rgb(75,0,130)",
        justifyContent:"center",
        alignItems:"center",
        elevation:30
       
    },
})
export default styles