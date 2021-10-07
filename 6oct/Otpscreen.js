import React, { Component } from "react";
import { StyleSheet,View,Text, TextInput, TouchableOpacity,ImageBackground} from "react-native";



export default class Otpscreen extends Component
{
    render()
    {
        return(
            <View>
            

            <View style={styles.container}>
            <Text style={styles.containertxt}>Log into Saavan</Text>
            </View>

            
            
            <View style={styles.secondcontainer}>
            <Text style={styles.innertxt}>Enter your Code</Text>
            </View>

            
           <View style={styles.input}>
           <TextInput style={styles.inputtext} keyboardType="number-pad"/>
           <TextInput style={styles.inputtext} keyboardType="number-pad"/>
           <TextInput style={styles.inputtext} keyboardType="number-pad"/>
           <TextInput style={styles.inputtext} keyboardType="number-pad"/>
           </View>

           <View style={styles.buttonview}>
           <TouchableOpacity style={styles.touch}>
           <Text style={styles.touchtxt}>Continue</Text>
           </TouchableOpacity>
           </View>

            
            </View>
        );

    }
}
//<TextInput style={styles.innerinputview}></TextInput>
            //<TextInput style={styles.innerinputview}></TextInput>
            //<TextInput style={styles.innerinputview}></TextInput>

const styles = StyleSheet.create({
    container:
    {
        backgroundColor:'#32cd32',
        paddingTop:40,
        justifyContent:'center',
        alignItems:'center',
        marginTop:20
    },
    containertxt:
    {
        color:`#f0f8ff`,
        fontSize:20,
        marginBottom:10
        
    },
    secondcontainer:
    {
        justifyContent:'center',
        alignItems:'center',
        paddingTop:50
    },
    innertxt:
    {
        fontSize:20,
        
        
    },
    input:
    {
        flex:1,
        justifyContent:'space-evenly',
        flexDirection:'row',
        paddingTop:50,
        marginHorizontal:30
    },
    inputtext:
    {
       borderWidth:2,
       borderRadius:3,
       width:40,
       height:40 ,
       borderColor:'#888'
    },
    buttonview:
    {
        marginTop:90,
        marginHorizontal:60,
        
    },
    touch:
    {
        borderWidth:2,
        borderRadius:3,
        height:50,
        justifyContent:'center',        
        alignItems:'center',
        borderColor:`#98fb98`,
        
    },
    touchtxt:
    {
        color:`#98fb98`
    }
   
});