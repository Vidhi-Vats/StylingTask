import React, { Component } from 'react'
import { Text, View, StyleSheet, TextInput, TouchableOpacity } from 'react-native'

export default class HEXtoRGB2 extends Component {

    state = {
        setValue: '',
        setColor: []
    }
    btnPress = (props) => {
        const{setValue,setColor}=this.state
        const pattern = /^#+([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/

        if (setValue.length == " ") {
            alert('Please Enter Hexa Code');
        }
        else if (pattern.test(setValue) === false) {
            alert('Invalid Hexa Code')
        }
        else {
            var hexToRgb = setValue =>
            setValue
                .replace((r, g, b) => r + g + b)
                .substring(1).match(/.{2}/g)
                .map(x => parseInt(x, 16))
            console.log(hexToRgb(setValue));
           this.setState({setColor:hexToRgb(setValue)})
        }
    }

    render() {
        return (
            <View style={StyleSheet.container}>
                <Text style={styles.heading}>
                    Hexa Code to RGB Color Convertor</Text>
                <View style={styles.InputContainer}>
                    <TextInput
                        value={this.state.setValue}
                        onChangeText={(text) =>
                            this.setState({ setValue: text })
                            }
                        placeholder='Enter Hexa Code'>
                    </TextInput>
                    </View>
                    <TouchableOpacity
                        style={styles.btnContainer}
                        onPress={this.btnPress} >
                        <Text>Submit</Text>
                    </TouchableOpacity>
                    <Text style={styles.CodeIndicator}>RGB Color: {this.state.setColor[0]},{this.state.setColor[1]}, 
                    {this.state.setColor[2]}</Text>
                    <View style={{
                    width: 500, height: 100, backgroundColor:
                        `rgb(${this.state.setColor[0]}, ${this.state.setColor[1]}, ${this.state.setColor[2]})`
                }}></View>

            </View>
        )
    }
}
const styles = StyleSheet.create({
    heading: {
        justifyContent: 'center',
        alignSelf: 'center',
        fontSize: 20,
        margin: 20
    },
    InputContainer: {
        borderWidth: 1,
        borderColor: '#000',
        width: '50%',
        marginHorizontal: 100,
        marginVertical: 30,
        paddingLeft: 40,
        height: 30,
        borderRadius: 10,
        paddingTop: 5
    },
    btnContainer:
    {
        backgroundColor: 'lightblue',
        width: 180,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        marginVertical: 30,
        borderRadius: 20
    },
    CodeIndicator: {
        color: 'red',
        textAlign: 'center',
        fontSize: 18
    },
})
