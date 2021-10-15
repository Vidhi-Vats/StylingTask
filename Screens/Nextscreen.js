
import React from "react";
import { TextInput,View,Text,StyleSheet,Dimensions,Button } from "react-native";


const {height,width}=Dimensions.get('window');

function Nextscreen({navigation})
{
    return(
        <View style={styles.container}>
        <Text style={styles.txt}>Paste the clipboard text here</Text>
        <TextInput style={styles.txtinput}
            placeholder="paste the clipboard text here"
        />
        <Button
            onPress={()=>navigation.navigate('Clipboardcopyscreen')}
            title="go to clibboardscreen"
        />
        </View>
    )
}
const styles = StyleSheet.create({
    container:
    {
        flex:1,
        alignItems:'center',
        top:40
    },
    txt:
    {
        fontSize:15,
        fontWeight:'800',
        padding:10,
        color:'#000'
    },
    txtinput:
    {
        borderWidth:2,
        borderColor:'#000',
        borderRadius:10,
        width:width-100,
        height:height/20,
        marginVertical:30
    },
    
    
});
export default Nextscreen;