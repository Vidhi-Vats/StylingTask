import React from "react";
import {View,Text, Button,StyleSheet} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";


const Homescreen=({navigation})=>
{
    return(
        <SafeAreaView>
        <View>
            <Text style={styles.txt}>Hey this is homescreen</Text>
            <Button 
            onPress={()=>navigation.navigate('Demo',{name:'MydemoScreen'})} title="Go to demoscreen"></Button>
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

export default Homescreen;