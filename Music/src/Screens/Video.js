import React, { Component } from 'react'
import {
    Text, View, SafeAreaView,
    StyleSheet, Dimensions
} from 'react-native';
import Video from 'react-native-video';

const { height, width } = Dimensions.get('window')

export default class Videosystem extends Component {
    render() {
        return (
            <SafeAreaView style={styles.maincontainer}>
                <Video controls={true}
                    muted={false}
                    source={require('../../src/video2.mp4')}
                    style={styles.backgroundVideo} />
            </SafeAreaView>
        )
    }
}
const styles = StyleSheet.create({
    maincontainer:
    {
        flex: 1,
        alignItems:'center',
        justifyContent:'center'
    },
    backgroundVideo:
    {
        flex: 1,
        height: 500,
        width: width
    }
});
