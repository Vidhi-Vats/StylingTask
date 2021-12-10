import React, { Component } from 'react'
import { Text, View, Modal, StyleSheet, TouchableOpacity, TextInput } from 'react-native'
import { Dropdown } from 'react-native-element-dropdown';
import { Notes } from '../Database/Schema/Personalschema';
import Realm from 'realm';
import { connect } from 'react-redux';
import { ObjectID } from 'bson'


const data = [
    { label: 'Personal', value: '1' },
    { label: 'Work', value: '2' },
    { label: 'Ideas', value: '3' },
    { label: 'Lists', value: '4' },
];

class Modalcontainer extends Component {

    state = {
        type: '',
        isFocus: false,
        title: '',
        body: '',
        onedit: false
    }

    onCreateNotePress = () => {
        if(this.state.title==""||this.state.body=="")
        {
            alert('Please fill details');
        }
        // if (this.state.type = "Personal") {
        //     this.props.getTitle(this.props.title)
        //     this.props.getBody(this.state.body)
        // }
        // else if(this.state.type=="Work")
        // {
        //     this.props.getWorkTitle(this.state.title)
        //     this.props.getWorkBody(this.state.body)
        // }
        // else if(this.state.type="Ideas")
        // {
        //     this.props.getIdeasTitle(this.state.title)
        //     this.props.getIdeasBody(this.state.body)
        // }
        // else if(this.state.type="Lists")
        // {
        // this.props.getListTitle(this.state.title)
        // this.props.getListBody(this.state.body)
        // }
        else{
        Realm.open({
            schema: [Notes]
        })
            .then(realm => {
                realm.write(() => {

                    realm.create('notes', {
                        type: this.state.type,
                        id: new ObjectID(),
                        title: this.state.title,
                        body: this.state.body,
                        getDate: new Date()
                    })
                })
                console.log("done")
                realm.close()
            })
            .catch(err => {
                console.log(err)
            })
        }
    }

    onEditButton = () => {
        this.setState({
            onedit: true
        })
    }





    render() {
        return (
            <Modal
                animationType="slide">
                <View style={styles.container}>
                    <Dropdown
                        style={[styles.dropdown, this.state.isFocus && { borderColor: 'blue' }]}
                        placeholderStyle={styles.placeholderStyle}
                        selectedTextStyle={styles.selectedTextStyle}
                        inputSearchStyle={styles.inputSearchStyle}
                        iconStyle={styles.iconStyle}
                        data={data}
                        search
                        maxHeight={300}
                        labelField="label"
                        valueField="value"
                        placeholder={!this.state.isFocus ? 'Select item' : '...'}
                        searchPlaceholder="Search..."
                        // value={this.state.type}
                        onFocus={() => this.setState({ isFocus: true })}
                        onBlur={() => this.setState({ isFocus: false })}
                        onChange={item => {
                            console.log(item.label)
                            this.setState({ type: item.label });
                        }}
                    />

                    <TextInput placeholder="Enter Title"
                    placeholderTextColor="#000"
                        value={this.state.title}
                        onChangeText={text =>
                            this.setState({
                                title: text
                            })
                        }
                        style={styles.titletxt}>
                    </TextInput>

                    <TextInput value={this.state.body}
                        onChangeText={text =>
                            this.setState({
                                body: text
                            })
                        }
                        placeholder="Enter Body"
                        placeholderTextColor="#000"
                        style={styles.titletxt}>
                    </TextInput>
                    <Text></Text>

                    {/* <Text>{this.state.title}</Text>
                    <Text>{this.state.body}</Text>
                    <Text>pt:{this.props.val.title}</Text>
                    <Text>pb:{this.props.val.body}</Text>
                    <Text>wt:{this.props.workvalues.title}</Text>
                    <Text>wb:{this.props.workvalues.body}</Text> */}
                    <View style={styles.buttonview}>
                        <TouchableOpacity onPress={() => this.onCreateNotePress()}
                            style={styles.button}>
                            <Text style={styles.buttontxt}>CREATE NOTE</Text>
                        </TouchableOpacity>
                        {/* <TouchableOpacity onPress={() => {this.props.navigation.navigate('Home')}}
                            style={styles.button}>
                            <Text style={styles.buttontxt}>GO BACK</Text>
                        </TouchableOpacity> */}
                    </View>
                </View>
            </Modal>
        )
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        marginTop: 40
    },
    dropdown: {
        height: 50,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 22,
        top: 8,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 14,
    },
    placeholderStyle: {
        fontSize: 16,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
    button:
    {
        marginTop: 50,
        borderWidth: 2,
        borderColor: '#000',
        borderRadius: 6,
        width: 150,
        height: 50,
        backgroundColor: 'purple',
        marginLeft: 20,
    },
    buttontxt:
    {
        fontSize: 18,
        fontWeight: 'bold',
        alignSelf: 'center',
        marginTop: 10,
        color: 'white',
    },
    titletxt:
    {
        width: 350,
        height: 50,
        borderWidth: 3,
        borderRadius: 15,
        marginTop: 30,
        marginLeft: 20,
        borderColor:'#888',
    },
    buttonview:
    {
        flexDirection: 'row',
        marginTop:250,
        marginLeft:30
    }
});
const mapStateToProps = state => {

    return {
        val: state.personalVal,
        workvalues: state.workVal,
        ideavalues: state.ideaVal,
        listvalues: state.listVal
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getTitle: title => dispatch({ type: 'TITLE', payload: title }),
        getBody: body => dispatch({ type: 'BODY', payload: body }),
        getWorkTitle: title => dispatch({ type: 'GET_TITLE', payload: title }),
        getWorkBody: body => dispatch({ type: 'GET_BODY', payload: body }),
        getIdeasTitle: title => dispatch({ type: 'GET_TITLES', payload: title }),
        getIdeasBody: body => dispatch({ type: 'GET_BODYS', payload: body }),
        getListTitle: title => dispatch({ type: 'GET_TITLELIST', payload: title }),
        getListBody: body => dispatch({ type: 'GET_BODYLIST', payload: body })
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Modalcontainer);