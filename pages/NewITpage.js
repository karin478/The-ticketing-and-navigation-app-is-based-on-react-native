/*

Page designer: Binghan Lyu

Reviewed by: Caitlin Brown

Review date: 2022/05/10

Modification history -

Description:

Date:

*/






import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity ,Button} from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { Center } from 'native-base';




/*
The method of the internary page, by allowing the user to view the specific transfer information of this trip.
*/
export default function internary({ navigation }) {
      /*List all the data in the itinerary, you can connect to the database from here. 
      After receiving the data from the database, the parameters will be passed to the specific method for rendering the front-end page*/
    const [journeys] = useState([
        { DepartTime: '09:17',
         arriveTime: '10:24',
         DepartLocation: 'Nupermarket', 
         ArriveLocation: 'Newcastle castle',
         jourLength: '1hr 22mins', 
         changes: '0', 
         busID: 'IC108', 
         Destination: 'London Center', 
         departs: ' Haymarket Bus Station', 
         platformStart: '7', 
         platformEnd: '3', 
         key: '1' },
         { DepartTime: '09:17',
         arriveTime: '10:24',
         DepartLocation: 'Nupermarket', 
         ArriveLocation: 'Newcastle castle',
         jourLength: '1hr 22mins', 
         changes: '0', 
         busID: 'IC108', 
         Destination: 'London Center', 
         departs: ' Haymarket Bus Station', 
         platformStart: '7', 
         platformEnd: '3', 
         key: '2' },
  
      ]);
      /*Returns the specific rendering of the page, using different containers and 
      flatlists to render the different transfer parts formed this time*/
      return (
        <View style={styles.container}>
            <View style={styles.topslide}></View>
            <View style={styles.title}>
                <Text style={styles.titleText}>Today, 01-05-2022{"\n"}  Nupermarket - Newcastle castle </Text> 
                <Text style={styles.text}> Duration: 1:10 | 0 change </Text>
            </View>

          <FlatList data={journeys} renderItem={({ item }) => (
            
                <View style={styles.journeyBox}>
                    <Text style={styles.titleText}>{ item.DepartTime }        { item.DepartLocation }  {'\n'}{'\n'}{'\n'}{ item.arriveTime }        { item.ArriveLocation } {'\n'}</Text>
                    <Text style={styles.titleText}>Pl. { item.platformStart }{'\n'}{'\n'}{'\n'}Pl. { item.platformEnd }</Text>

                    <View style={styles.line} ></View>
                    <Ionicons name="bus-sharp" size={34} color="black" />
                    <Text style={styles.text}> Bus：{ item.busID } {'\n'}To: { item.Destination }{'\n'}</Text>
                    <View style={styles.walking}>
                    
                    </View>

                </View>
        
          )} />
           <View style={styles.rect6}>
               {/*The confirmation button confirms this formation after confirming the data, click the next page of the reaction stack */}
        <TouchableOpacity style={styles.button}  
             onPress={() => navigation.navigate('journeys return')}
             >
          <Text style={styles.confirmtext}>Confirm</Text>
        </TouchableOpacity>
           </View>
     
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
    rect6: {
        width: '100%',
        height: 60,
        backgroundColor: "rgba(255,255,255,1)",
        marginTop: 26,
        color: 'white',
      },
      button: {
        width: 285,
        height: 51,
        backgroundColor: "rgba(255,36,36,1)",
        display: 'flex', 
        justifyContent: 'center',
        alignSelf: 'center',
        alignItems: 'center',
        borderRadius: 14,
        
      },
      confirmtext: {
        color: "rgba(255,255,255,1)",
        fontSize: 17,
        fontWeight: 'bold',

      },
      topslide:{
          backgroundColor: "rgba(255,0,0,1)",
          height:25,
          width: '100%',
          
      },
    
})

