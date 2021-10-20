import React, { Component } from "react";

import {SafeAreaView, Text,View,StyleSheet,Switch} from "react-native";

import Slider from '@ptomasroos/react-native-multi-slider';

class Sliderview extends Component{
    constructor() {
        super();
        this.state={
            slidervalue:0,
            isOn:false,
            
        }
    }

    
    
    render()
    {
        return(
            <View style={styles.container}>
            <SafeAreaView>
             <View>
             { this.state.isOn ? (
            <Slider 
            min={0}
            onValuesChange={val=>
            this.setState({
                slidervalue:val
            })}
            max={100}/>):null}
            { this.state.isOn ? (<Text style={styles.txt}>slide value:{this.state.slidervalue}
            </Text>):null}
            </View>
            <Switch
            onValueChange={vals=>
            this.setState({
                isOn:vals,    
            })}
            value={this.state.isOn}
            thumbColor={this.state.isOn ? 'red':'black'}
            trackColor={{false: 'gery' ,true:'yellow'}}/>
            </SafeAreaView>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:
    {
        paddingLeft:20
    },
    txt:{
        marginHorizontal:60,
        paddingTop:20
    },
    
    
});
export default Sliderview;