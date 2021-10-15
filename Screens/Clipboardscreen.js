import React, {useState} from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Button,
  TextInput,
  Dimensions
} from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { NavigationContainer } from '@react-navigation/native';


const {height,width}=Dimensions.get('window');


const Clipboardscreen = ({navigation}) => {
  const [copiedText, setCopiedText] = useState('');

  const copyToClipboard = () => {
    Clipboard.setString(copiedText)
    alert('Text copy!');
  };

  const fetchCopiedText = async () => {
    const text = await Clipboard.getString();
    alert(text);
  };

  return (
      <View style={styles.container}>
        <Button onPress={fetchCopiedText} title="show text"/>
        <TextInput
          style={styles.textinput}
          placeholder="Enter text"
          value={copiedText}
          onChangeText={setCopiedText}
          onPress={copyToClipboard}
        />
        <Button
          onPress={copyToClipboard}
          title="copytoclipboard"
        />

        <View style={{padding:20}}> 
        </View>
        <Button
          onPress={()=>navigation.navigate('Pastescreen')}
          title="Move to paste screen"
        />
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textinput:
  {
    borderWidth:2,
    borderColor:'#888',
    width:width-100,
    height:height/20,
    borderRadius:10,
    borderColor:'#000',
    marginVertical:20
  },
  
});

export default Clipboardscreen;
