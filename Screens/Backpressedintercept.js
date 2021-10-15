import React, { Component } from "react";
import { View,Text,StyleSheet ,Alert, BackHandler, Button} from "react-native";

export default class Backpressedintercept extends Component
{
    backinterceptaction=()=>
    {
        Alert.alert('Hey!','Do you really want to quit',[
            {
                text:'cancel',
                onPress:()=>null,
                style:'cancel',
            },
            {
                text:'yes',
                onPress:()=>BackHandler.exitApp()
            },
        ]);
        return true;
    };
    componentDidMount()
    {
        console.log("componentdid mount called");
        this.BackHandler=BackHandler.addEventListener('hardwareBackPress',this.backinterceptaction);
    }
    componentWillUnmount()
    {
        console.log("component will unmount called");
        BackHandler.removeEventListener();
    }
    render()
    {
        return(
            <View style={styles.container}>
            <Text style={{fontSize:18,fontWeight:'bold',color:'#000',paddingVertical:10}}>click back</Text>
            <Button
            onPress={this.backinterceptaction}
            title="exit"
            />
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
        justifyContent: 'center',
    }
});
