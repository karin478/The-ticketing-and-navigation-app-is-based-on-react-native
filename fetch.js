import React, { Component } from 'react';

import { StyleSheet, ScrollView, ActivityIndicator, View , Text} from 'react-native';
import { ListItem } from 'react-native-elements';
import { getDatabase, ref, onValue, get, DataSnapshot} from "firebase/database";
import firbaseDatabase from './config';
import { initializeApp } from "firebase/app";
import { getFirestore} from  'firebase/firestore';
import { database } from 'firebase/database';



/*
The purpose of this page is to use the database data in the config file to connect to the firebase database and fetch data
*/


/*
After starting firebase, you can get a response by submitting a query to the firebase server
*/


firebase.initializeApp(firebaseConfig);

class FetchListScreen extends Component {

    constructor(props) {
        super(props);
        
        /*Here we can receive all data from firebase
        this.state = {
            db: '',
            loading: true,
            bid: '',
            cid: '',
            castle_info: '',
            price: '',
            time: '',
            date: '',
        };
        
        
        */
        this.state = {
            db: '',
            loading: true,
            bid: '',
        };
      }
    
      /*
      Here we can filter the data we need and sort by time.
       E.g:
      startAt(value: number | string | boolean | null, key?: undefined | string): Query;
      orderByValue(): Query;
      The data received here will fully meet the requirements of front-end rendering.

      */
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


       
      }
   
      componentWillUnmount(){
        this.unsubscribe();
      }
      
      /*
       getjourneysData = (querySnapshot) => {
        const journeys = [];
        querySnapshot.forEach((res) => {
          const {  time, castle_info } = res.data();
          journeys.push({
            key: res.cid,
            time,
            castle_info
          });
        });
        this.setState({
          journeys,
          isLoading: false
       });
      }


At the end, all data will be generated in the form of {this.state.value}. Then transfer to other pages for rendering via import
      */
    
      
    }
    
   

export default FetchListScreen;
