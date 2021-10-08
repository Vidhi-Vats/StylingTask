import React,{useState} from "react";
import { Button,Text,View,ActivityIndicator,StyleSheet } from "react-native";

const Fetchingvalue=()=>
{
    const[data,setdata]=useState('');
    const[loading,isloading]=useState(false);

    buttonpress=()=>{
        isloading(true);
        fetch('https://reqres.in/api/users',{
            method:'GET'
        })
       .then(response => response.json())
       .then((data)=>setdata(data))
        isloading(false);
    };
    return(
        <View style={styles.container}>
            <ActivityIndicator size='large' color='#000'
            style={styles.indicator} animating={loading}/>
            <Text>{JSON.stringify(data)}</Text>
            <Button onPress={buttonpress} title="Fetchdata"/>
        </View>
    );

}

const styles = StyleSheet.create({
    container:
    {
        paddingTop:100,
        marginHorizontal:30,
        
    },
    indicator:
    {
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
        paddingTop:600

    }
})
export default Fetchingvalue;