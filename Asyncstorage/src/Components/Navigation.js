import React, { Component } from 'react'
import { Text,Alert,TouchableOpacity} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from '../Screens/HomeScreen';
import Signup from '../Screens/Signup';
import Asyncstoragepractice from '../Screens/Asyncstoragepractice';


const Stack = createNativeStackNavigator();


const Navigation=()=> {
  // alertperform=()=>
  // Alert.alert(
  //   "Hold on",
  //   'Do you want to quit',
  //   [
  //     {
  //       text:'YES',
  //       onPress:()=>
  //           this.props.navigation.
  //         navigate('Signupscreen')
  //       },
  //       {
  //       text:'NO',
  //       onPress:()=>null
  //     }
  //   ]
  // );
  return (
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Signupscreen'>
      <Stack.Screen 
      name="Home" component={HomeScreen}
      options={({route,navigation})=>({
        headerRight:()=>(
          <TouchableOpacity
          onPress={
            ()=>
            {
              Alert.alert('HOLDON','Are you sure you want to logout'),
              [
                {
                  text:'NO',
                  onPress:()=>null,
                  style:'cancel'
                },
                {
                  text:'YES',
                  onPress:()=>{
                    navigation.navigate('Signup')
                  }
                }
              ]
            }
          }>
            <Text style={{fontSize:18,fontWeight:'500',color:'blue'}}>LOGOUT</Text>
          </TouchableOpacity>
        )
      })
      }
      />
      <Stack.Screen 
      name="Signupscreen" component={Signup}/>
      <Stack.Screen 
      name="Async" component={Asyncstoragepractice}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

const AppNavigator=()=>
{
  return (
      <Navigation/>
    
  )
}



export default AppNavigator;