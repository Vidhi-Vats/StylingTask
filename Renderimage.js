import React, { useState } from "react";

import {View,Image,ActivityIndicator, SafeAreaView,StyleSheet} from "react-native";

const Renderimage =()=>
{
    const [Loadingtime,setloadingtime]=useState(false);
    return(
        <SafeAreaView>
            <View style={styles.container}>
                <Image  style={styles.img} source={{uri:'https://reactnative.dev/img/tiny_logo.png'}}
                onLoadStart={()=> {setloadingtime(true)}}
                onLoadEnd={()=> {setloadingtime(false)}}
                />
                {Loadingtime ? (
                <ActivityIndicator
                size="large" color="#000"/>):null}
            </View>
        </SafeAreaView>

    );
}
const styles = StyleSheet.create({
    container:
    {
       justifyContent:'center',
       alignItems:'center',
       paddingVertical:50

    },
    img:
    {
        width:110,
        height:90
    }
});
export default Renderimage;