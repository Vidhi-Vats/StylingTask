import React, { useState } from 'react';
import {ActivityIndicator, SafeAreaView,StyleSheet} from "react-native";
import WebView from 'react-native-webview';

const Showwebview=()=>

{
    const [Webshow,Setwebshow]=useState(false);
    return(
            <SafeAreaView style={styles.container}>
            <WebView 
            onLoadStart={()=>Setwebshow(true)}
            onLoadEnd={()=>Setwebshow(false)}
            style={styles.web}
            source={{uri: 'https://google.com'}}
            />
            {
            Webshow ? (
            <ActivityIndicator style={styles.indicator}
            size="large" color="#000"/>):null}
            
            </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent:'center'
    },
    web:
    {
        flex:1
    },
    indicator:
    {
        justifyContent:'center',
        flex:1
    }
});


export default Showwebview;