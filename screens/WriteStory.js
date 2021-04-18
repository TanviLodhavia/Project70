import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';


export default class Write extends React.Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={styles.header}>Story Hub</Text>
                <TextInput style={styles.inputBox} 
            placeholder= 'Story Title'/>
                <TextInput style={styles.inputBox} 
            placeholder= 'Author'/>
                <TextInput style={styles.writeStory} 
                multiline = {true}
            placeholder= 'Write Your Story...'/>
                <TouchableOpacity style={styles.submitButton}><Text>SUBMIT</Text></TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputBox: { 
        width: 300, 
        height: 35, 
        borderWidth: 1.5, 
        borderRightWidth: 1.5, 
        fontSize: 15,
        marginTop: 25
    }, 
    writeStory: { 
        width: 300, 
        height: 275, 
        borderWidth: 1.5, 
        borderRightWidth: 1.5, 
        fontSize: 15,
        marginTop: 25,
    }, 
    submitButton: { 
        backgroundColor: "pink", 
        width: 100, 
        height: 25,
        alignItems: 'center',
        marginTop:70
    }, 
    header: {
        backgroundColor: "pink",
        width: 300,
        textAlign: 'center',
        fontSize: 25,
        fontWeight: 'bold'
    }
  });