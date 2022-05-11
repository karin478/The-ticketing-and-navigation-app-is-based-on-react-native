/*

Page designer: Binghan Lyu

Reviewed by: Caitlin Brown

Review date: 2022/05/11

Modification history -
Description:
1) Page reconfigured to reflect return journey - walk placed at start of 
each item and castle and original departure location reversed. Price 
and map removed as already displayed to user

Date:
1) 11/05/2022

*/


import React from 'react';
import { StyleSheet, View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';


/*
The method of the internary page, by allowing the user to view the specific transfer information of return trip.
Takes navigation as parameter to aid with stack navigation. Route parameter used to obtain variables
from previous page
*/
export default function internary({ navigation, route }) {
      /*Objects from item of FlatList selected */
      const { castle, DepartTime, arriveTime, jourLength, changes, day,
        bus, operator, departs, walkTime, walkDistance, changeOver1Arrive, changeOver1Departs,
        changeOver2Arrive, changeOver2Departs, jour1Length, jour2Length, jour3Length, bus2,
        operator2, bus3, operator3, busPrice, busPrice2, castlePrice, changeOverArrStop,
        changeOverDepStop, changeOverArrStop2, changeOverDepStop2, departStop } = route.params;
   

        /*
        Display chnages function displays information about bus stops, buses, operators and times depending on
        number of change overs required.
        */
        const displayChanges = () => {
            if(changes === '0') {
                return(
                <View style={styles.container}>
                    <Text style={styles.titleText}>{ walkDistance } {'\n'}{ walkTime } {'\n'}{'\n'}{ departStop } </Text>
                    <FontAwesome5 style={styles.walking} name="walking" size={24} color="black"  />

                    <View style={styles.line} ></View>
                    <Text style={styles.titleText}>{ DepartTime } { departStop }  {'\n'}{'\n'}{'\n'}{ arriveTime }  { departs } {'\n'}</Text>
                    <Ionicons name="bus-sharp" size={34} color="black" />
                    <Text style={styles.text}> Bus: { bus } | Operator: {operator} {'\n'} {jour1Length} {'\n'}</Text>
                    <View style={styles.line} ></View>

                </View>
                )
            }
            if(changes === '1'){
                return (
                <View style={styles.container}>

<                   Text style={styles.titleText}>{ walkDistance } {'\n'}{ walkTime } {'\n'}{'\n'}{ departStop } </Text>
                    <FontAwesome5 style={styles.walking} name="walking" size={24} color="black"  />

<                   View style={styles.line} ></View>
                    <Text style={styles.titleText}>{ DepartTime } { departStop }  {'\n'}{'\n'}{'\n'}{ changeOver1Arrive }  { changeOverArrStop } {'\n'}</Text>
                    <Ionicons name="bus-sharp" size={34} color="black" />
                    <Text style={styles.text}> Bus: { bus } | Operator: {operator} {'\n'} {jour1Length} {'\n'}</Text>
                    <View style={styles.line} ></View>

                    <Text style={styles.titleText}>{ changeOver1Departs } { changeOverDepStop }  {'\n'}{'\n'}{'\n'}{ arriveTime } { departs } {'\n'}</Text>
                    <Ionicons name="bus-sharp" size={34} color="black" />
                    <Text style={styles.text}> Bus: { bus2 } | Operator: {operator2} {'\n'} {jour2Length} {'\n'}</Text>
                    <View style={styles.line} ></View>

                </View>
                )
            } else if (changes === '2') {
                return (
                <View style={styles.container}>
                    <Text style={styles.titleText}>{ walkDistance } {'\n'}{ walkTime } {'\n'}{'\n'}{ departStop } </Text>
                    <FontAwesome5 style={styles.walking} name="walking" size={24} color="black"  />

<                   View style={styles.line} ></View>
                    <Text style={styles.titleText}>{ DepartTime } { departStop }  {'\n'}{'\n'}{'\n'}{ changeOver1Arrive }  { changeOverArrStop } {'\n'}</Text>
                    <Ionicons name="bus-sharp" size={34} color="black" />
                    <Text style={styles.text}> Bus: { bus } | Operator: {operator} {'\n'} {jour1Length} {'\n'}</Text>
                    <View style={styles.line} ></View>

                    <Text style={styles.titleText}>{ changeOver1Departs } { changeOverDepStop }  {'\n'}{'\n'}{'\n'}{ changeOver2Arrive }  { changeOverArrStop2 } {'\n'}</Text>
                    <Ionicons name="bus-sharp" size={34} color="black" />
                    <Text style={styles.text}> Bus: { bus2 } | Operator: {operator2} {'\n'} {jour2Length} {'\n'}</Text>
                    <View style={styles.line} ></View>
     
                    <Text style={styles.titleText}>{ changeOver2Departs } { changeOverDepStop2 }  {'\n'}{'\n'}{'\n'}{ arriveTime } { departs }         {'\n'}</Text>
                    <Ionicons name="bus-sharp" size={34} color="black" />
                    <Text style={styles.text}> Bus: { bus3 } | Operator: {operator3} {'\n'} {jour3Length} {'\n'}</Text>
                    <View style={styles.line} ></View>


                </View>
                )
            }
        }



      /*Returns the specific rendering of the page, using different containers to render the different transfer parts formed this time*/
      return (
        <View style={styles.container}>
            <View style={styles.topslide}></View>
            <View style={styles.title}>
                {/* Header for the page displaying departure location, castke, total journey length */}
                <Text style={styles.titleText}>{castle} Castle - {departs} </Text> 
                <Text style={styles.text}> Duration: {jourLength} | Changes: {changes} </Text>
            </View>
            {/* ScrollView component enables user to scroll through information while keeping header and button
            fixed in place */}
            <ScrollView>
                <View style={styles.journeyBox}>
                    {displayChanges()}
                </View>
            </ScrollView>
           <View style={styles.rect6}>
               {/*The confirmation button confirms this formation after confirming the data, click the next page of the reaction stack */}
        <TouchableOpacity style={styles.button}  
             onPress={() => navigation.navigate('Order Confirm', {busPrice, busPrice2, castlePrice, castle})}
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
        padding: 5,
        flexDirection: 'column'
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
        flexDirection: 'row',
        padding: 5 
        

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

