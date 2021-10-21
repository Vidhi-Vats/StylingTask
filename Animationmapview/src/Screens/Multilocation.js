import React, { Component } from 'react'
import { Text, View,Dimensions,StyleSheet} from 'react-native'
import MapView ,{ Marker } from 'react-native-maps';

const {height,width}=Dimensions.get('window');


const DATAARRAY=[
    {
        latitudeval:29.097099,
        longitudeval:77.273003,
    },
    {
        latitudeval:29.095000,
        longitudeval:77.273223,
    },
    {
        latitudeval:29.097999,
        longitudeval:77.273323,
    },
];

export default class Multilocation extends Component {

    state={
        region:
        {
            latitude:29.097099,
            longitude:77.273003,
            latitudeDelta:0.0922,
            longitudeDelta:0.0421,
        }
    }

    render() {
        DATAARRAY.map(
            data=>{
                console.log(data.latitudeval,data.longitudeval);
            }
        )
        return (
            <View style={styles.container}>
            <MapView style={styles.map}
            initialRegion={region}>
            <Marker>
                coordinate={{
                    latitude:29.097099,
                    longitude:77.273003,
                }}
                image={require('../Screens/images/map2.png')}
            </Marker>
            <Marker>
                coordinate={{
                    latitude:29.095000,
                    longitude:77.273223,
                }}
                image={require('../Screens/images/map2.png')}
            </Marker>
            <Marker>
                coordinate={{
                    latitude:29.097999,
                    longitude:77.273323,
                }}
                image={require('../Screens/images/map2.png')}
            </Marker>
            </MapView>
                
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:
    {
        flex:1
    },
    map:
    {
        top:0,
        bottom:0,
        right:0,
        left:0,
        position:'absolute'
    }
});
