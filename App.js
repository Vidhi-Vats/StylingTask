import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

//import Screencomponent from './src/components/Screencomponent';
//import Homescreen from './src/screens/Homescreen';
//mport Demoscreen from './src/screens/Demoscreen';
import Clipboardscreen from './src/Screens/Clipboardscreen';
import Nextscreen from './src/Screens/Nextscreen';

const Stack = createNativeStackNavigator();


function App() {
  return (
    <NavigationContainer>
    <Stack.Navigator>
      <Stack.Screen name="Clipboardcopyscreen" component={Clipboardscreen} />
      <Stack.Screen name="Pastescreen" component={Nextscreen} />
    </Stack.Navigator>
  </NavigationContainer>
  );
}

export default App;

// import React from "react";
// import Backpressedintercept from "./src/Screens/Backpressedintercept";

// function App()
// {
//   return(
//     <Backpressedintercept/>
//   )
// }
// export default Backpressedintercept;