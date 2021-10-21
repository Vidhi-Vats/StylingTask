import React from "react";
import { View, Text } from "react-native";
import MapView,{Marker} from "react-native-maps";
import Geolocation from "react-native-geolocation-service";
export default class Changelocation extends React.Component {
    constructor(props) {
        super(props);
         this.state = {
            latitude: 0,
            longitude: 0,
            coordinates: [],
         };
       }
     componentDidMount()
     {
        Geolocation.getCurrentPosition(
            position => {
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                coordinates: this.state.coordinates.concat({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                })
              });
            },
            error => {
              Alert.alert(error.message.toString());
            },
            {
              showLocationDialog: true,
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 0
            }
          );
          Geolocation.watchPosition(
            position => {
              this.setState({
                latitude: position.coords.latitude,
                longitude: position.coords.longitude,
                coordinates: this.state.coordinates.concat({
                  latitude: position.coords.latitude,
                  longitude: position.coords.longitude
                })
              });
            },
            error => {
              console.log(error);
            },
            {
              showLocationDialog: true,
              enableHighAccuracy: true,
              timeout: 20000,
              maximumAge: 0,
              distanceFilter: 0
            }
          );
          
     }
     

  render() {
    return (
      <View style={{ flex: 1 }}>
        <MapView
          style={{ flex: 1 }}
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421
          }}>
              <Marker
            coordinate={{
            latitude: this.state.latitude,
            longitude: this.state.longitude,
        }}>
    </Marker>
          </MapView>
      </View>
    );
  }
}