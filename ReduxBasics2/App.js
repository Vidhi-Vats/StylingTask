import React, { Component } from 'react'
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import store from './src/Redux/Store/Storestate';
import HomeScreen from './src/Screens/HomeScreen';
import Detailscreen from './src/Screens/Detailscreen';

const Stack = createNativeStackNavigator();
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} />
      <Stack.Screen name="Detail" component={Detailscreen} />
      </Stack.Navigator>
      </NavigationContainer>
      </Provider>
    )
  }
}
