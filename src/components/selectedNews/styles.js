import React from "react";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    root:{
        alignItems:"center"
    },
    containerNew:{
       borderColor:'rgb(220,220,220)',
       borderWidth:1,
       borderRadius:15,
       elevation:10,
       marginTop:25,
       marginBottom:20,
       justifyContent:"center",
       width:"96%",
       backgroundColor:'rgb(245,255,250)'
    },
    containerImg:{
        alignItems:"center",
        marginTop:15,
        marginBottom:15
    },
    image:{
        width:260,
        height:220,
    },
    textTitle:{
        color:"black",
        textAlign:"center",
        fontSize:16,
        fontWeight:'bold',
        paddingLeft:10,
        paddingRight:10,
        paddingTop:10
    },
    textDescription:{
        fontSize:14,
        textAlign:"center",
        paddingLeft:15,
        paddingRight:15,
        paddingBottom:15
    },
    containerLoader:{
        marginTop:250,
        justifyContent:"center",
        alignItems:"center",
        flexDirection:"column",
    
    },
    textAsistent:{
        fontSize:14,
        width:250,
        textAlign:'center',
        fontWeight:'bold',
        marginTop:10
    }
})
export default styles