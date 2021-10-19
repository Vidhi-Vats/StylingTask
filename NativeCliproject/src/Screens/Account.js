import React, { useState } from "react";
import {View,Text,StyleSheet, TouchableOpacity,
Dimensions,Image, FlatList, ScrollView,Modal, TextInput} from "react-native";


import Cards from "./Cards";


const{width,height}=Dimensions.get('window');

const Account=(navigation)=>
{
    const[modalopen,setmodalopen]=useState(false);
    const[modalopen1,setmodalopen2]=useState(false);

    return(
        <ScrollView>
        <View style={styles.container}>
                  <Text style={styles.txt}>Welcome!</Text>
                  <View style={styles.container2}>
                  <TouchableOpacity onPress={()=>setmodalopen(true)}>
                      <Text>SIGNIN</Text>
                  </TouchableOpacity>
                  <View style={styles.line}/>
                  <TouchableOpacity onPress={()=>setmodalopen2(true)}>
                      <Text>JOIN</Text>
                  </TouchableOpacity>
                  </View>
                <View style={styles.line2}/>
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

        <Modal visible={modalopen1}animationType='slide'>
        <View style={styles.modalcontainer}>
        <View style={styles.mod}>
                  <TouchableOpacity onPress={()=>setmodalopen2(false)}>
                      <Image source={require('./imagees1/cross.png')}/>
                  </TouchableOpacity>
        </View>
        <TextInput style={styles.modalinput}
         placeholder="First Name">
        </TextInput>
        <TextInput style={styles.modalinput}
         placeholder="Last Name"
         keyboardType="name-phone-pad">
        </TextInput>
        <TextInput style={styles.modalinput}
         placeholder="Your Email"
         keyboardType="name-phone-pad">
        </TextInput>
        <TextInput style={styles.modalinput}
         placeholder="Password"
         keyboardType="name-phone-pad">
        </TextInput>
        </View>
        <View style={styles.modalcontainer8}>
            <TouchableOpacity>
                <Text style={{color:'white'}}>Join now</Text>
            </TouchableOpacity>
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
        </Modal>


        
        
        
                <Cards img={require('./imagees1/trackorder.png')} 
                    cardstxt="Track Order"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/chart.png')} 
                    cardstxt="Size Chart"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/notifications.png')} 
                    cardstxt="Notification"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/locator.png')} 
                    cardstxt="Store locate"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line4}/>

                <Cards img={require('./imagees1/globe.png')} 
                    cardstxt="Country"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/lang.png')} 
                    cardstxt="Langugae"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/about.png')} 
                    cardstxt="About us"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/Ques.png')} 
                    cardstxt="FAQ"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/shipping.png')} 
                    cardstxt="Shipping & Returns"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/chat.png')} 
                    cardstxt="Chat With Us"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/star.png')} 
                    cardstxt="Rate Application"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/share.png')} 
                    cardstxt="Share Application"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/privacy.png')} 
                    cardstxt="Privacy Policy"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/terms.png')} 
                    cardstxt="Terms & Conditions"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.line3}/>
                <Cards img={require('./imagees1/send.png')} 
                    cardstxt="Send Email"
                    img1={require('./imagees1/greater.png')}
                />
                <View style={styles.container4}>
                <Text style={{color:'#888'}}>App Version4.0.6(1)</Text>
                </View>
        </View>

        </ScrollView>

    )
}

const styles = StyleSheet.create({
    container:
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
    line4:
    {
        borderBottomWidth:7,
        borderBottomColor:'#d3d3d3',
        paddingTop:6
    },
    line3:
    {
        borderBottomWidth:1,
        borderBottomColor:'#d3d3d3',
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
    modaltouch1:
    {
        marginHorizontal:15
    },
    mod:
    {
        paddingBottom:10,
        marginHorizontal:270
    } ,
    modalcontainer8:
    {
        padding:20,
        justifyContent:'center',
        alignItems:'center',
        borderWidth:1,
        width:width/1.2,
        backgroundColor:'#000',
        marginHorizontal:30
    }
});

export default Account;