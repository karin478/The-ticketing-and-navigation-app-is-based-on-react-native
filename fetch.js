import React, { Component } from 'react';

import { StyleSheet, ScrollView, ActivityIndicator, View , Text} from 'react-native';
import { ListItem } from 'react-native-elements';
import { getDatabase, ref, onValue, get, DataSnapshot} from "firebase/database";
import firbaseDatabase from './config';
import { initializeApp } from "firebase/app";
import { getFirestore} from  'firebase/firestore';
import { database } from 'firebase/database';



/*
const firebase = require('firebase/app');
require('firebase/database');
*/


/*
const database = getDatabase();
*/
const firebaseConfig = {
    apiKey: "AIzaSyBYTOIrHA0iXUWKoq9to1gQvPhuFSKORQ4",
    authDomain: "team7-9fa42.firebaseapp.com",
    databaseURL: "https://team7-9fa42-default-rtdb.europe-west1.firebasedatabase.app/",
    projectId: "team7-9fa42",
    storageBucket: "team7-9fa42.appspot.com",
    messagingSenderId: "1091777150689",
    appId: "1:1091777150689:web:9afa98b773f8b92eb9c1a0"
  };

firebase.initializeApp(firebaseConfig);

class FetchListScreen extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            db: '',
            loading: true,
            bid: '',
        };
      }
    
      queryRecipes = () => {
          firebase.database().ref('/route_info/0').on('bid', snapshot => {})
            const recipes = snapshot.val();
      
            this.setState({
                meals: recipes,
                loading: false,

            })



        }

      
     
      componentDidMount() {
        this.setState({
          db: firbaseDatabase()
        });


/*
       this.queryRecipes();
*/




        /*
        this.unsubscribe = this.docs.onSnapshot(this.getStudentsData);
         database()
        .ref('/route_info/0')
        .on('stop_arrival', snapshot => {

            this.setState({
              bid:snapshot.val()
            })
        });

*/ 
      }
   
      componentWillUnmount(){
        this.unsubscribe();
      }
    
      
    
    
    
      render() {
          
        return (
       
              <View>
                  <Text>123</Text>
                   <Text>{this.state.bid}</Text>
                   </View>
          
        );
      }
    }
    
    const styles = StyleSheet.create({
      wrapper: {
       flex: 1,
       paddingBottom: 22
      },
      loader: {
        position: 'absolute',
        alignItems: 'center',
        justifyContent: 'center',    
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
      }
    })

export default FetchListScreen;