import React, { Component } from "react";
import { StyleSheet,Image,ActivityIndicator,View } from "react-native";

export default class Viewimage extends Component
{
    state={
        load:true
    }
    onload=()=>
    {
        this.setState({load:false})
    }
    
    render()
    {
        return(
            <View style={styles.container}>
            <Image style={styles.imageview}
            onload1={this.onload}
            source={{uri:'https://www.google.com/search?q=hd+images+download&sxsrf=AOaemvJwg44gydgW9tj5YXA4mF7n63zdUA:1633581040069&source=lnms&tbm=isch&sa=X&sqi=2&ved=2ahUKEwjM8-rMu7fzAhXaqZUCHfzzAWkQ_AUoAXoECAEQAw&biw=1299&bih=669&dpr=1#imgrc=Qv6K7pIzJsF94M'}}/>
            <ActivityIndicator 
            size='large' color="#000"
            style={styles.indicator}
            animate={this.state.load}
            />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    imageview:
    {
        height:50,
        width:50
    },
    indicator:
    {
        position:'absolute',
        left:0,
        right:0,
        top:0,
        bottom:0
    }
    
});