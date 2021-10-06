import React, { Component } from "react";
import { View,StyleSheet,Text, TouchableOpacity, ScrollView} from "react-native";

export default class Screenstyling extends Component{
    render()
    {
        return(
                <ScrollView showsVerticalScrollIndicator={false}>
                <View>
                   <View style={styles.container}>
                        <Text style={styles.heading}>Product Details</Text> 
                   </View>

                   <View style = {styles.line}/> 

                   <View>
                   <View style = {styles.img}/>
                   </View>

                   <View>
                   <Text style={styles.headingtext}>How To Train YourDragon The Hidden</Text>
                   <Text style={styles.headingtext1}>World</Text>
                   <Text style={styles.subheadingtext}>Part III</Text>

                   <View style={styles.categories}>
                   <TouchableOpacity style={styles.cat1}>
                   <Text style={styles.txtcat}>Adventure</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.cat1}>
                   <Text style={styles.txtcat}>Family</Text>
                   </TouchableOpacity>
                   <TouchableOpacity style={styles.cat1}>
                   <Text style={styles.txtcat}>Fantasy</Text>
                   </TouchableOpacity>
                   </View>

                   <View style = {styles.lining}/>
                   </View>

                    <View style = {styles.venue}>
                   <View style = {styles.details}>
                   <Text style={styles.innerdetails}>
                   Year
                   </Text>
                   <Text style={styles.innermostdetails1}>
                   2019
                   </Text>
                   </View>
                   <View style = {styles.details}>
                   <Text style={styles.innerdetails}>
                   Country
                   </Text>
                   <Text style={styles.innermostdetails1}>
                   USA
                   </Text>
                   </View>
                   <View style = {styles.details}>
                   <Text style={styles.innerdetails}>
                    Length
                   </Text>
                   <Text style={styles.innermostdetails1}>
                   112min
                   </Text>
                   </View>
                   </View>

                   <View style={styles.para}>
                   <Text style={styles.para1}>About Home</Text>
                   <Text style={styles.para2}>When Hiccup Discovers Toothless is not
                    the only Night Fury,he must seek "The Hidden World",a secret Dragon Utopia
                    Before a hired tyrant named Grimmel finds its first.</Text>
                    <Text style={styles.para3}>Screenshots</Text>
                   </View>

                   <View style={styles.lining2}/>

                   <View style={styles.img1}>
                   <View style={styles.innerimg1}/>
                   <View style={styles.innerimg1}/>
                   </View>
                   <View style={styles.event}>
                   <TouchableOpacity style={styles.eventbutton}><Text style={
                       styles.eventtext}>Buy Ticket</Text>
                    </TouchableOpacity>
                    </View>
                   
                
                </View>
                </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        width:'100%',
        height:50,
        backgroundColor:'#fff',
        justifyContent:'center',
        alignItems:'center',
        marginBottom:25,
        paddingTop:20
        
    },
    heading:
    {
        color:'#888',
        paddingTop:30,
        color:'black',
        fontSize:20,
        
    },
    line:
    {
        borderBottomWidth:2,
        borderBottomColor:'#f5f5f5',
        marginBottom:20
        
    },
    
    img:
    {
        
        backgroundColor:'#ffb6c1',
        width:'70%',
        height:400,
        borderRadius:10,
        marginLeft:50
    },
    headingtext:
    {
        
        fontSize:15,
        paddingTop:15,
        paddingLeft:47,
        
    },
    headingtext1:
    {
        fontSize:15,
        textAlign:'center'
        
    },
    subheadingtext:
    {
        textAlign:"center",
        fontSize:15,
        paddingTop:10
    },
    categories:
    {
        flexDirection:'row',
        paddingTop:20,
        
    },
    cat1:
    {
        backgroundColor:'skyblue',
        borderRadius:20,
        width:80,
        height:40,
        marginHorizontal:20,
        padding:20,
        paddingHorizontal:10,
        alignItems:'center',
        justifyContent:'center'
    },
    txtcat:
    {
        fontSize:13,
        alignItems:'center',
        
    },
    lining:
    {
        borderBottomWidth:1,
        borderBottomColor:'#f5f5f5',
        width:'200%',
        paddingTop:60

    },
    venue:
    {
        flexDirection:'row',
        justifyContent:'center',
        paddingTop:30
        
    },
    details:
    {
        marginRight:10,
        borderRadius:20,
        padding:5,
        paddingHorizontal:15,
        
    },
    innerdetails:
    {
        color:'#888',
        fontSize:13,
        
    },
    innermostdetails1:
    {
        color:'#000'
    },
    para:
    {
        paddingTop:20,
        paddingLeft:20,
        
    },
    para1:
    {
        color:'#000',fontSize:20
    },
    para2:
    {
        color:'#888',
        paddingTop:20,
        fontSize:15
    },
    para3:
    {
        color:'#000',
        fontSize:20,
        paddingTop:20
    },
    lining2:
    {
        borderBottomWidth:1,
        borderBottomColor:'#f5f5f5',
        
    },
    img1:
    {
        flexDirection:"row",paddingTop:10,
        paddingHorizontal:15
    },
    innerimg1:{
        backgroundColor:'#90ee90',
        width:'50%',
        height:100,
        borderRadius:10,
        marginRight:10   
    },
    event:
    {
        paddingTop:30,
        paddingBottom:20
        
        
    },
    eventbutton:
    {
        backgroundColor:'skyblue',
        borderRadius:10,
        marginHorizontal:10,
        height:60,
        justifyContent: 'center',
        alignItems: 'center'
    },
    eventtext:
    {
        color:'white',
        fontSize:25,
    }
});

