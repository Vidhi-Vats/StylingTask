import React,{useState,useEffect} from "react";
import {View,Text,Image,SafeAreaView,FlatList,StyleSheet} from "react-native";

const Virtualisedlist=()=>
{
    const[data,setdata]=useState({pageNo:1,listData:[]});
    const[refresh,setrefresh]=useState(false)

    const listItem=({item})=>
    {
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.container2} >
                    <Text style={styles.txt}>{item.first_name}{item.last_name}</Text>
                    <Image style={styles.img} source={{uri:item.avatar}}></Image>
                </View>
                    <Text style={styles.txt2}>{item.email}</Text>
            </SafeAreaView>
        )
    }



    const getdata=(pageNo=1)=>
    {
        setrefresh(true)
        fetch('https://reqres.in/api/users?page',{
            method:'GET',
        })
        .then(response=>response.json()
        .then(result=>{
            /*setTimeout(()=>
            {
                setrefresh(false)
            },1000)*/
               setdata({
                   pageNo,
                   listData:pageNo===1 ? result.data:[...data.listData,result.data]
                   
               }); 
               console.log(data.listData)
               setrefresh(false);
               
        })
        .catch(error=>{
            console.log(error);
        })
        )
    }
    useEffect(()=>
    {
        getdata();
    },[])
    return(
        <SafeAreaView style={{flex: 1}}>
            <FlatList style={styles.flat}
            keyExtractor={(item,index)=>index.toString()}
            data={data.listData}
            renderItem={listItem}
             refreshing={refresh}
             onRefresh={()=>getdata(1,true)}
             onEndReached={()=>{
                 getdata(data.pageNo+1)
             }}           
            />

        </SafeAreaView>

    )

}
const styles = StyleSheet.create({
    container:
    {
        width:'100%',
        padding:60,
        borderWidth:10,
        borderRadius:25,
        backgroundColor:`#ff69b4`
    },
    container2:
    {
        flexDirection:'row'
    },
    img:
    {
        width:90,
        height:80,
        borderRadius:30,
    },
    txt:
    {
        fontSize:20,
        color:'skyblue',
        paddingHorizontal:40
    },
    txt2:
    {
        paddingLeft:30
    },
    flat:
    {
       
    }

});



export default Virtualisedlist;