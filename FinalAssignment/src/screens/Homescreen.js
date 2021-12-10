import React, { Component } from 'react'
import { Text, View,StyleSheet,Image,TouchableOpacity } from 'react-native'
import {menu,plus} from '../constants'
import { Personalschema } from '../Database/Schema/Personalschema'
import Modalcontainer from './Modalcontainer'
import Nav from '../components/Nav'
import { Notes } from '../Database/Schema/Personalschema'

// import { connect } from 'react-redux'
// import reducer from '../Redux/Reducer/Reducer'

export default class Homescreen extends Component {

    state={
        plusshow:false,
        personal:false,
        ideas:false,
        work:false,
        list:false,
        personalData:[],
        workData:[],
        listData:[],
        ideasData:[]
    }

    onPlusSignPressed=()=>{
        this.setState({
            plusshow:true
        })
    }
    componentDidMount() {
        Realm.open({
          schema: [Notes]
        }).then(realm => {
          const arr = realm.objects('notes')
          console.log("heey",arr)
          const val=arr.filter((item)=>{
              const{personalData}=this.state
              if(item.type=='Personal')
              {
                // console.log('hiiii',item)
                // this.setState({personalData:item})
                // console.log("jjii",Object.value(personalData))
                return item
              }
              else if(item.type=='Work')
              {
                console.log('hiiii',item)
                this.setState({workData:item})
                console.log("jjii",this.state.workData)
              }
              else if(item.type=='Ideas')
              {
                  return item
              }
              else if(item.type=='Lists')
              {
                  return item
              }
          })
        })
      }

      handlePersonal = () => {
        this.setState({personal: true, work: false, idea: false, list: false});
        this.props.navigation.navigate('Personal');
      };
      handleWork = () => {
        this.setState({personal: false, work: true, idea: false, list: false});
        this.props.navigation.navigate('Work');
      };
      handleIdea = () => {
        this.setState({personal: false, work: false, idea: true, list: false});
        this.props.navigation.navigate('Ideas');
      };
      handleList = () => {
        this.setState({personal: false, work: false, idea: false, list: true});
        this.props.navigation.navigate('List');
      };

    render() {
        const{work,personal,list,ideas,Data}=this.state
        return (
            <View styles={styles.container}>
            <View style={styles.headingcontainer}>
            <Text style={styles.mytxt}>My</Text>
            <Text style={styles.notetxt}>Notes</Text> 
            </View>

            <View style={styles.perview}>
            <TouchableOpacity
            onPress={()=>this.handlePersonal()}>
            <Text style={[
                  styles.pertxt,
                  {
                    color: personal ? 'red' : 'blue',
                  },
                ]}>Personal</Text>
            </TouchableOpacity>
            <Text style={styles.datalengthtxt}>{this.state.personalData.length}</Text>
            </View>

            <View style={styles.perview}>
            <TouchableOpacity
            onPress={()=>this.handleWork()}>
            <Text style={[
                  styles.pertxt,
                  {
                    color: work ? 'red' : 'blue',
                  },
                ]}>Work</Text>
            </TouchableOpacity>
            <Text style={styles.datalengthtxt2}>{this.state.personalData.length}</Text>
            </View>

            <View style={styles.perview}>
            <TouchableOpacity
            onPress={()=>this.handleList()}>
            <Text style={[
                  styles.pertxt,
                  {
                    color: list ? 'red' : 'blue',
                  },
                ]}>List</Text>
            </TouchableOpacity>
            <Text style={styles.datalengthtxt3}>{this.state.personalData.length}</Text>
            </View>

            <View style={styles.perview}>
            <TouchableOpacity
            onPress={()=>this.handleIdea()}>
            <Text style={[
                  styles.pertxt,
                  {
                    color: ideas ? 'red' : 'blue',
                  },
                ]}>Ideas</Text>
            </TouchableOpacity>
            <Text style={styles.datalengthtxt4}>{this.state.personalData.length}</Text>
            </View>

            <View style={styles.imagecontainer}>
            <Image style={styles.menuimage}
            source={menu}/>
            {
                this.state.plusshow ?<Modalcontainer/>:
                <TouchableOpacity 
                onPress={()=>this.onPlusSignPressed()}>
                <Image style={styles.plusimage}
                source={plus}/>
                </TouchableOpacity>
            }
            </View> 
            {/* <View style={styles.menutxtview}>
            <Text style={styles.menutxt}>Menu</Text>
            </View>   */}
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:30
    },
    headingcontainer:
    {
        marginTop:60,
        flexDirection:'row',
        marginHorizontal:40,

    },
    mytxt:
    {
        fontSize:55,
        fontWeight:'bold',
        color:'red',
        marginRight:15
    },
    notetxt:
    {
        fontSize:55,
        fontWeight:'bold',
        color:'blue',
    },
    imagecontainer:
    {
        marginTop:50,
        marginLeft:40,
        flexDirection:'row',
    },
    menuimage:
    {
        marginRight:250
    },
    menutxt:
    {
        fontSize:20,
        fontWeight:'600',
        color:'red',
        marginLeft:40,
    },
    menutxtview:
    {
        marginBottom:-30
    },
    perview:
    {
        marginTop:60,
        marginLeft:90,
        flexDirection:'row',
        
    },
    datalengthtxt:
    {
        marginLeft:90,
        fontSize:30,
        fontWeight:'600'
    },
    pertxt:
    {
        fontSize:30,
        fontWeight:'bold',
        color:'purple'
    },
    datalengthtxt2:
    {
        marginLeft:140,
        fontSize:30,
        fontWeight:'600'
    },
    datalengthtxt3:
    {
        marginLeft:160,
        fontSize:30,
        fontWeight:'600'
    },
    datalengthtxt4:
    {
        marginLeft:140,
        fontSize:30,
        fontWeight:'600'
    }
});
