import React, { Component } from "react";
import { ActivityIndicator, Button,StyleSheet,View,Text } from "react-native";

class Fetchingdata extends Component{
    state={
        loading:false,
        datasource:"",
        
    }
    loadbtn=()=>
    {
        this.setState({loading:this.state.loading=true})
         fetch('https://reqres.in/api/users',{
             method:'GET'
         })
        .then(response => response.json())
        .then((responseJson)=>
        {
                    this.setState({
                            loading:this.state.loading=false,
                            datasource:responseJson
                    });
                    
                })
        
    }
    


    render()
    {
        return(
            <View style={styles.container}>
                <Button style={styles.btn} onPress={this.loadbtn}  
                title="Fetchdata"></Button>
                <ActivityIndicator animating={this.state.loading} 
                style={styles.indicator} size="large" color="#000"/>
                <Text>{JSON.stringify(this.state.datasource)}</Text>
                
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container:
    {
        paddingTop:100,
        marginHorizontal:30,
        justifyContent:'center',
        alignItems:'center'
    },
    btn:
    {

    },
    indicator:
    {
        position:'absolute',
        top:0,
        bottom:0,
        right:0,
        left:0,
        paddingTop:300

    }

});

export default Fetchingdata;