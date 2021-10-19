import React from 'react'
import { View, Text,StyleSheet,Image,TouchableOpacity} from 'react-native'

export default function Cards(props) {
    return (
        <View style={styles.innercontainer}>
                <Image source={props.img}/>
                <View style={styles.innercontainer2}>
                <TouchableOpacity>
                    <Text style={styles.cards}>{props.cardstxt}</Text>
                </TouchableOpacity>
                <View style={styles.innercontainer3}>
                <Image source={props.img1}/>
                </View>
                </View>
                
        </View>
    )
}
const styles = StyleSheet.create({
    innercontainer:
    {
        padding:10,
        flexDirection:'row'
    },
    innercontainer2:
    {
        marginHorizontal:15,
        flexDirection:'row'
    },
    
    cards:
    {
        fontWeight:'600'
    },
    innercontainer3:
    {
        marginHorizontal:270,
        position:'absolute'
    }
    
});
