import React, { Component } from 'react'
import { Text, SafeAreaView, StyleSheet, 
 TouchableOpacity } from 'react-native'
import Signup from './Signup';


export default class Homescreen extends Component {
    opensignupscreen=()=>
    {
        this.props.navigation.navigate('Signupscreen');
    }
    openasyncscreen=()=>
    {
        this.props.navigation.navigate('Async');
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                {/* <Text style={styles.txt}>Hey this is homescreen</Text> */}
                <TouchableOpacity style={styles.button1} 
                onPress={this.opensignupscreen}>
                    <Text style={{alignSelf:'center',
                    marginTop:15,fontSize:15,fontWeight:'600'}}>Go to signup screen</Text>
                </TouchableOpacity>
                
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    txt:
    {
        fontSize: 20
    },
    container:
    {
        justifyContent: 'center',
        alignItems: 'center',
        margin: 100,
        flex:1
    },
    button1:
    {
        borderWidth:2,
        width:200,
        height:50,
        borderRadius:20,
        marginTop:20,
        backgroundColor:'#4169e1',
        borderColor:'white'
    }
});