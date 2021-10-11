import React from "react";
import {View,Text, Button,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";



const Demoscreen=({navigation})=>
{
    return(
        <SafeAreaView>
        <View>
            <Text style={styles.txt}>Hey this is homescreen</Text>
            <Button onPress={()=>navigation.navigate('Home')} title="Go to demo screen"></Button>
        </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    txt:
    {
        fontSize:30
    }
});

export default Demoscreen;