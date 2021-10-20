import React, {useState}from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar,TouchableOpacity,Dimensions,Image,Modal,TextInput } from 'react-native';
const{width,height}=Dimensions.get('window');
import Join from '../Components/Join';

import {
trackorder,
    chart,
    notifications,
    locator
    ,globe
    ,lang
    ,about
    ,Ques
    ,shipping
    ,chat
    ,star
    ,share
    ,privacy
    ,terms
    ,send}
 from '../Screens/imagees1';


const DATA = [
        {
            id:1,
            title:'Track Order',
            icons:'trackorder'
        },
        {
            id:2,
            title:'Size Chart',
            icons:'chart'
        },
        {
            id:3,
            title:'Notifications',
            icons:'notifications'
        },
        {
            id:4,
            title:'Store Locator',
            icons:'locator'
        },
    ];
const Data2=[
        {
            id:1,
            title:'Country',
            icons:'globe'
        },
        {
            id:2,
            title:'Language',
            icons:'lang'
        },
        {
            id:3,
            title:'About Us',
            icons:'about'
        },
        {
            id:4,
            title:'FAQ',
            icons:'Ques'
        },
        {
            id:5,
            title:'Shipping & Returns',
            icons:'shipping'
        },
        {
            id:6,
            title:'Chat With Us',
            icons:'chat'
        },
        {
            id:7,
            title:'Rate Application',
            icons:'star'
        },
        {
            id:8,
            title:'Share Application',
            icons:'share'
        },
        {
            id:9,
            title:'Privacy Policy',
            icons:'privacy'
        },
        {
            id:10,
            title:'Terms & Conditions',
            icons:'terms'
        },
        {
            id:11,
            title:'Send Email',
            icons:'send'
        },
    ];
    
const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);
const Item2 = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

const Account = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title}  />
  );
  const renderData = ({ item }) => (
    <Item2 title={item.title}
             />
  );
  const[modalopen,setmodalopen]=useState(false);
  const[modalopen1,setmodalopen1]=useState(false);

  return (
    <SafeAreaView style={styles.container}>
    <View  style={styles.viewcontainer}>
                <Text style={styles.txt}>Welcome!</Text>
                  <View style={styles.container2}>
                  <TouchableOpacity onPress={()=>setmodalopen(true)}>
                      <Text>SIGNIN</Text>
                  </TouchableOpacity>
                  <View style={styles.line}/>
                  <TouchableOpacity onPress={()=>setmodalopen1(true)}>
                      <Text>JOIN</Text>
                  </TouchableOpacity>
                  </View>
                <View style={styles.line2}/>
    </View>
    <View style={styles.list1}>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
      </View>
      <View style={styles.line3}/>
      <FlatList
        data={Data2}
        renderItem={renderData}
        keyExtractor={item => item.id}
      />
      <View style={styles.container4}>
                <Text style={{color:'#888'}}>App Version4.0.6(1)</Text>
        </View>
        <Modal visible={modalopen}animationType='slide'>
        <View style={styles.modalcontainer}>
        <View style={styles.mod}>
                  <TouchableOpacity onPress={()=>setmodalopen(false)}>
                      <Image source={require('./imagees1/cross.png')}/>
                  </TouchableOpacity>
        </View>
        <TextInput style={styles.modalinput}
         placeholder="Your Email Address">
        </TextInput>
        <TextInput style={styles.modalinput}
         placeholder="Password"
         keyboardType="name-phone-pad">
        </TextInput>
        <View style={styles.modalcontainer2}>
        <Text>Forgot Password?</Text>
        </View>
        <View style={styles.modalcontainer3}>
            <TouchableOpacity>
                <Text style={{color:'white'}}>Sign In</Text>
            </TouchableOpacity>
        </View>
        </View>
        <View style={styles.line6}/>
        <View style={styles.modalcontainer4}>
        <TouchableOpacity style={styles.modaltouch}>
            <Image source={require('./imagees1/google.png')}/>
            <Text style={styles.modaltxt}>Sign in with Google</Text>
        </TouchableOpacity>
        </View>
        <View style={styles.modalcontainer5}>
        <TouchableOpacity style={styles.modaltouch}>
            <Image source={require('./imagees1/fb.png')}/>
            <Text style={styles.modaltxt1}>Sign in with Facebbok</Text>
        </TouchableOpacity>
         </View>
         <View style={styles.modalcontainer6}>
        <TouchableOpacity style={styles.modaltouch}>
            <Image source={require('./imagees1/apple3.png')}/>
            <Text style={styles.modaltxt1}>Sign in with Apple</Text>
        </TouchableOpacity>
         </View>

         <View style={styles.modalcontainer7}>
        <TouchableOpacity style={styles.modaltouch}>
            <Text style={{color:'#888'}}>Don't have an account?</Text>
            <TouchableOpacity style={styles.modaltouch1}>
            <Text style={styles.modaltxt2}>join</Text>
            </TouchableOpacity>
        </TouchableOpacity>
         </View>
        </Modal>
        
        <Join/>
        

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  viewcontainer:
  {
       height:height/9.5,
       padding:20,
  },
  txt:
    {
        fontWeight:'600',
        fontSize:20,
        marginBottom:10
    },
    line:
    {
        width:1,
        height:15,
        backgroundColor:'#000',
        marginHorizontal:10
    },
    container2:
    {
        flexDirection:'row',
        backgroundColor:'#fffacd',
        width:width/3.5,
        borderRadius:4
    },
    line2:
    {
        borderBottomWidth:7,
        borderBottomColor:'#d3d3d3',
        paddingTop:15
    },
  item: {
    backgroundColor: 'white',
    padding: 20,
    marginVertical: 1,
    marginHorizontal: 6,
  },
  title: {
    fontSize: 15,
    fontWeight:'500'
  },
  line3:
    {
        borderBottomWidth:7,
        borderBottomColor:'#d3d3d3',
        marginHorizontal:18,
        marginBottom:3
    },
    container4:
    {
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'#d3d3d3',
        height:height/17
    },
    modalcontainer:
    {
        paddingTop:100,
        paddingLeft:30,
    },
    modalinput:
    {
        borderWidth:1,
        height:height/16,
        width:width/1.2,
        borderColor:'#d3d3d3',
        borderRadius:2,
        marginBottom:20
    },
    modalcontainer2:
    {
        justifyContent:'center',
        alignItems:'center',
        padding:20
    },
    modalcontainer3:
    {
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        width:width/1.2,
        backgroundColor:'#000',
        
    },
    line6:
    {
        borderBottomWidth:1,
        borderBottomColor:'#d3d3d3',
        paddingTop:20,
        width:width/-1
    },
    modalcontainer4:
    {
        marginTop:20,
        borderWidth:2,
        height:height/16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2,
        marginHorizontal:27
    },
    modaltouch:
    {
        flexDirection:'row',
    },
    modaltxt:
    {
        marginHorizontal:10
    },
    modalcontainer5:
    {
        marginTop:20,
        borderWidth:2,
        height:height/16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2,
        marginHorizontal:27,
        backgroundColor:'#4169e1'
    },
    modalcontainer6:
    {
        marginTop:20,
        borderWidth:2,
        height:height/16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:2,
        marginHorizontal:27,
        backgroundColor:'#000'
    },
    modaltxt1:
    {
        marginHorizontal:10,
        color:'white'
    },
    modalcontainer7:
    {
        marginTop:20,
        borderWidth:2,
        height:height/16,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius:1,
        marginHorizontal:27,
        borderColor:'#888'
        
    },
    mod:
    {
        paddingBottom:10,
        marginHorizontal:270
    },
    modaltxt2:
    {
        marginHorizontal:20
    },
    

});

export default Account;