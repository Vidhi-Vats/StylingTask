import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Screencomponent from './src/components/Screencomponent';
import Homescreen from './src/screens/Homescreen';
import Demoscreen from './src/screens/Demoscreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Homescreen} />
      <Stack.Screen name="Demo" component={Demoscreen} options={({route})=>({title:route.params.name})}/>
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;
