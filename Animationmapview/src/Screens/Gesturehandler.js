import React, { Component } from 'react'
import { Text, View,StyleSheet,Dimensions,Animated } from 'react-native';
import {PanGestureHandler} from 'react-native-gesture-handler';

const{height,width}=Dimensions.get('window');

export default class Gesturehandler extends Component {
    translateX = new Animated.Value(0);
    translateY = new Animated.Value(0);

    handleGesture = Animated.event([{
        nativeEvent:{
            translationX:this.translateX,
            translationY:this.translateY
        }}],{useNativeDriver:true}
        );

    render() {
        let circleTransformation
        circleTransformation={
            transform:[
                {
                    translateX:this.translateX
                },
                {
                    translateY:this.translateY
                }
            ]
        }
        return (
            <View style={styles.container}>
                <PanGestureHandler 
                onGestureEvent={this.handleGesture}>
                <Animated.View style=
                {[styles.circle,circleTransformation]}>
                </Animated.View>  
                </PanGestureHandler> 
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        justifyContent: 'center',
        backgroundColor:'#fff',
        alignContent: 'center',
        padding:10
    },
    circle:
    {
        height:height/8,
        width:width/4.5,
        backgroundColor:'#000',
        borderRadius:40
        
    },
});
