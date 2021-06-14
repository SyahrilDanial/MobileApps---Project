import React, {Component, useState} from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    TextInput,
    Button,
    View,
    Text,
    StatusBar,
    ImageBackground,
    Image
} from 'react-native';
import firebase from 'firebase';
import fire from './fire.js';
import { createStackNavigator } from '@react-navigation/stack';

// const firebaseConfig = {
//     apiKey: "AIzaSyDvwPclOEvtAmYCsQXcypuuhd7z0Jo9My0",
//     authDomain: "eazybook-45865.firebaseapp.com",
//     databaseURL: "https://eazybook-45865-default-rtdb.firebaseio.com",
//     projectId: "eazybook-45865",
//     storageBucket: "eazybook-45865.appspot.com",
//     messagingSenderId: "892214484892",
//     appId: "1:892214484892:web:1e2d274c2a8b266442f259",
//     measurementId: "G-8L5BZY46BW"
//   };

//   if(!firebase.apps.length){
//     firebase.initializeApp(firebaseConfig);
//   }

const Cancel = createStackNavigator();

const Cancel_Test = () => {
    return(
            <Cancel.Navigator  >
                <Cancel.Screen name="Cancelation"  component={Cancelation}/>
            </Cancel.Navigator>
    );
}


 export default class Cancelation extends React.Component {

    render(){
        return(
            <View style={styles.container}>
			<ImageBackground source={require('./assets/bg2.jpg')} style={styles.image}>


            
            <View style = {{flex : 1, justifyContent : 'flex-start', alignItems : 'center', height: 260, paddingVertical: 30}}>
                
                <View>
                    <Image source={require('./app/component/logo.png')} style={styles.image1}/>
                </View>

                <View style={{flexDirection: 'row', marginVertical: 10, alignItems:'center'}}>
                    <Text style={{fontSize: 17, color:'white'}}><b>RESERVATION DETAILS </b></Text>
                </View>
                
                <View style={styles.row}>
                    <View style={styles.col1}><Text style={styles.text1}>Organization : </Text></View>
                    <View style={{width: '60%'}}><TextInput style={styles.textinput} placeholder = "IIUM Sports" editable={false} /></View>
                </View>

                <View style={styles.row}>
                    <View style={styles.col1}><Text style={styles.text1}>Venue : </Text></View>
                    <View style={{width: '60%'}}><TextInput style={styles.textinput} placeholder = "Wadi Budi" editable={false}/></View>
                </View>

                <View style={styles.row}>
                    <View style={styles.col1}><Text style={styles.text1}>Time : </Text></View>
                    <View style={{width: '60%'}}><TextInput style={styles.textinput} placeholder = "8:00 - 10:00" editable={false}/></View>
                </View>

                <View style={styles.row}>
                    <View style={styles.col1}><Text style={styles.text1}>Date : </Text></View>
                    <View style={{width: '60%'}}><TextInput style={styles.textinput} placeholder = "13/5/2021" editable={false}/></View>
                </View>
                

                <View style = {{marginTop : 25, width :'75%', flexDirection: 'row', }}>
                    <View style={{width: '50%'}}></View>
                    <View style={{width: '50%'}}>
                    
                    <Button
                    title = "Cancel Booking"
                    />
                    </View>
                </View>
            </View>
            </ImageBackground>
            </View>
            
        );
    }
}

const styles = StyleSheet.create({ 
    textinput: {
        height: 35,
        width: '80%',
        fontSize: 14,
        borderWidth: 0.4,
        borderRadius: 3,
        borderColor: 'white',
        backgroundColor: 'rgba(0,0,0,0.6)',
        color: 'white',
        paddingLeft: 6
    },

    row:{
        flexDirection: 'row', 
        width: '99%',
        marginTop: 10
    },

    col1: {
        width: '40%', 
        alignItems:'flex-end',
        justifyContent: 'center', 
        paddingRight: 10,
        fontSize: 18,
        fontColor : 'white'
    },

    image: {
        flex: 1,
        width: '100%'
      },

      container: {
        flex: 1,
        alignItems: 'center',
      },

      text1:{
          color: 'white',
          fontSize: 15
      },
      image1:{
      width: 100,
      height: 60,
      borderRadius: 5,
      marginBottom: 30,
  },

})