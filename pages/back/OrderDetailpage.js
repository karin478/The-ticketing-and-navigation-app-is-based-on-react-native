/*

Page designer: Binghan Lyu

Reviewed by:

Review date:

Modification history -

Description:

Date:

*/






import React from 'react';
import { StyleSheet, View, Text, FlatList, TouchableOpacity } from 'react-native';
import { useState } from 'react';
import { FontAwesome5 } from '@expo/vector-icons';




/*

*/
export default function JourneysReturn({ navigation }) {
    
    const [journeys] = useState([
        { DepartTime: '08:38', arriveTime: '09:53', jourLength: '1hr 22mins', changes: '0', bus: 'X15', operator: 'Arriva', departs: ' Haymarket Bus Station', walkTime: '7 mins', walkDistance: '0.4 miles', key: '1' },
        { DepartTime: '09:38', arriveTime: '10:57', jourLength: '1hr 26mins', changes: '0', bus: 'X15', operator: 'Arriva', departs: ' Haymarket Bus Station', walkTime: '7 mins', walkDistance: '0.4 miles', key: '2' },
        { DepartTime: '10:38', arriveTime: '11:57', jourLength: '1hr 26mins', changes: '0', bus: 'X15', operator: 'Arriva', departs: ' Haymarket Bus Station', walkTime: '7 mins', walkDistance: '0.4 miles', key: '3' },
        { DepartTime: '09:38', arriveTime: '10:57', jourLength: '1hr 26mins', changes: '0', bus: 'X15', operator: 'Arriva', departs: ' Haymarket Bus Station', walkTime: '7 mins', walkDistance: '0.4 miles', key: '4' },
        { DepartTime: '10:38', arriveTime: '11:57', jourLength: '1hr 26mins', changes: '0', bus: 'X15', operator: 'Arriva', departs: ' Haymarket Bus Station', walkTime: '7 mins', walkDistance: '0.4 miles', key: '5' },
      ]);

      return (
        <View style={styles.container}>
                       <View style={styles.topslide}></View>
            <View style={styles.title}>
               
                <Text style={styles.titleText}> Haymarket - Alnwick </Text> 
                <Text style={styles.text}> Today - Fri 10/04/2022 </Text>
            </View>

          <FlatList data={journeys} renderItem={({ item }) => (
             <TouchableOpacity           title="Go to ITpage"
             onPress={() => navigation.navigate('internary return')} 
             >
                <View style={styles.journeyBox}>
                    <Text style={styles.titleText}>{ item.DepartTime } - { item.arriveTime }</Text>
                    <Text style={styles.text}>{ item.jourLength }</Text>
                    <Text style={styles.text}>Changes: { item.changes } {'\n'}</Text>
                    <View style={styles.line} ></View>
                    <Text style={styles.text}> Bus: { item.bus } { item.operator }{'\n'}{ item.departs } </Text>
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

