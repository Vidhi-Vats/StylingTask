import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import{Image} from "react-native";


import Screencomponent from './src/components/Screencomponent';
import Homescreen from './src/screens/Homescreen';
//import Demoscreen from './src/screens/Demoscreen';
import Categories from './src/screens/Categories';
import Mycart from './src/screens/Mycart';
import Wishlist from './src/screens/Wishlist';
import Account from './src/screens/Account';


const Tab = createBottomTabNavigator();


function App() {
  return (
    <NavigationContainer>
    <Tab.Navigator
    screenOptions={{
      tabBarInactiveTintColor: "#dc143c" ,
      tabBarActiveTintColor: "#888"
    }}>
      <Tab.Screen name="Home" component={Homescreen} 
      options={{headerTitle:'MEN CLOTHING',
      tabBarIcon:({focused})=>(
        <Image source={require('./assets/images/ttn2.png')}
        style={{
          tintColor:focused?"#dc143c" :"#888"
        }}
        /> 
      )
      }}
      />
      <Tab.Screen name="Category" component={Categories}
      options={{tabBarIcon:()=>(
        <Image source={require('./assets/images/ttn6.png')}/>
      )
      }}
      />
      <Tab.Screen name="Mycart" component={Mycart}
      options={{tabBarIcon:()=>(
        <Image source={require('./assets/images/ttn3.png')}/>
      )
      }}
      />
      <Tab.Screen name="wishlist" component={Wishlist}
      options={{tabBarIcon:()=>(
        <Image source={require('./assets/images/ttn5.png')}/>
      )
      }}
      />
      <Tab.Screen name="Account" component={Account}
      options={{tabBarIcon:()=>(
        <Image source={require('./assets/images/ttn4.png')}/>
      )
      }}
      
      />

    </Tab.Navigator>
    
  </NavigationContainer>
  );
}

export default App;
