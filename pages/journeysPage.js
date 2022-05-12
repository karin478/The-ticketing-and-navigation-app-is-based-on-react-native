/*
Page designer: Caitlin Brown
Reviewed by: Binghan Lyu
Review date: 2022/05/11
Modification history -
Description: 
1. States from homepage added and setFrom function added 
    - modified by Caitlin Brown
2. Data from database added to front end. 
   useEffect hook with filteredJourney function added to sort data
   - modified by Caitlin Brown
3. Route data added to local JSON file and imported into routesOutbound object
    - modified by Caitlin Brown
Date:
1. 09/05/2022
2. 10/05/2022
3. 11/05/2022
*/


import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState, useEffect } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import * as data from '../routesOutbound.json';

/*
Array of objects containing the data for all outbound routes for each castle. Data taken from database and reformatted with variable names
in a JSON file to be obtained easily in Flatlist
*/
const routesOutbound = data.routesOutbound;

/*
Function outputs data with a list of journey times based on user selection on the homepage. Originally
data was to be obtained from a MySQL/Firebase database, however due to a setback when creating the backend 
the data has been hardcoded into this page
Journeys takes navigation as parameter to aid with stack navigation. Route parameter used to obtain variables
from previous page
*/
export default function Journeys({ navigation, route }) {
    
    //State for getting and setting which routes to show based on user selection
    const [journey, setJourney] = useState()
    // Parameters containing the user input passed from the homepage
    const { castle, date, time, people } = route.params
   
    
    
    //Function for setting the departure location based on castle selected
    const setFrom = () => {
        if(castle === 'Alnwick'){
            return 'Haymarket'
        } else if(castle === 'Bamburgh'){
            return 'Haymarket'
        } else if(castle === 'Auckland'){
            return 'Eldon Sqaure'
        } else {
            return 'Eldon Square'
        }

    }
   

    //useEffect hook filters array of all routes on render and creates a new array which contains only
    // routes for the castle and day selected. 'Journeys' is then set with the new array
    useEffect(() => {
        const filteredJourneys = routesOutbound.filter(routesOutbound => {
            if(routesOutbound.castle.includes(castle) && routesOutbound.day.includes(date)) {
                return true;
            }
        })
        setJourney(filteredJourneys)
      }, [])

      return (
        <View style={styles.container}>
            <View style={styles.topslide}></View>
            <View style={styles.title}>
                <Text style={styles.titleText}> {setFrom()} - {castle} </Text> 
            </View>

        {/* FlatList renders journey array into a list and displays the selected objects in a scrollable list */}
          <FlatList data={journey} renderItem={({ item }) => (
            //  On pressing FlatList item user is directed to itinierary page containing further information
            // about the item selected
             <TouchableOpacity           title="Go to ITpage"
             onPress={() => navigation.navigate('Itinerary', item)} 
             >                 
                <View style={styles.journeyBox}>
                    <Text style={styles.titleText}>{ item.DepartTime } - { item.arriveTime }</Text>
                    <Text style={styles.text}>{ item.jourLength }</Text>
                    <Text style={styles.text}>Changes: { item.changes } {'\n'}</Text>
                    <View style={styles.line} ></View>
                    <Text style={styles.text}>Bus: { item.bus } { item.operator }{'\n'}{ item.departs } </Text>
                    <Text style={styles.text}> From £{ parseFloat(item.busPrice) + parseFloat(item.castlePrice) } </Text>
                    <View style={styles.walking}>
                    <FontAwesome5 style={styles.icon} name="walking" size={24} color="black"  />
                    <Text style={styles.text}> { item.walkTime } {'\n'} { item.walkDistance } </Text>
                    </View>
                </View>
            </TouchableOpacity>
          )} />
        </View>
      );
    }




/*
style file for this page
*/   
const styles = StyleSheet.create ({
    container: {
        flex: 1,
        padding: 5
    },
    title: {
        padding: 5,
        marginTop: 5,
        marginLeft: 5,
    },
   
    text: {
        fontSize: 14,
        color: '#333',
    },
    titleText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333'
    },
    journeyBox: {
        padding: 16,
        marginTop: 16,
        borderColor: '#bbb',
        backgroundColor: '#fff',
        borderStyle: 'solid',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'center',
        justifyContent: 'space-between',
        shadowColor: '#470000',
        shadowOffset: {width: 0, height: 5},
        shadowOpacity: 0.3,
        elevation: 5,
    },
    line: {
        marginTop: 10,
        marginBottom: 15,
        height: 2,
        width: '100%',
        backgroundColor: 'black',
    },
    icon: {
        marginTop: 5
    },
    walking: {
        flexDirection: 'row'

    },
    topslide:{
        backgroundColor: "rgba(255,0,0,1)",
        height:25,
        width: '100%',
        
    },
})
