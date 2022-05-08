/*

Page designer: Binghan Lyu

Reviewed by: Binghan Lyu

Review date: 2022/05/08

Modification history -

Description:

Date:

*/








import React from "react";
import { FormControl, Select, Center, CheckIcon, WarningOutlineIcon, NativeBaseProvider } from "native-base";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Button,
} from "react-native";
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import Datechose from './timepicker2';
import MapHP from './mapHP';





/*
The Fromlocation method is used to create an optional from, which contains two bus stations.
*/
const Fromlocation = () => {
  return <Center>
      <FormControl w="3/4" maxW="300" >
        <FormControl.Label>Departure</FormControl.Label>
        <Select minWidth="100" accessibilityLabel="Choose Service" placeholder="Bus" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="Haymarket Bus Station" value="HA" />
          <Select.Item label="Eldon Square Bus Station" value="EL" />
        </Select>
        <FormControl.ErrorMessage  leftIcon={<WarningOutlineIcon size="xs" />} >
        Haymarket for Alnwick and Bamburgh{"\n"}Eldon Square for Auckland and Barnard
        </FormControl.ErrorMessage>
      </FormControl>
    </Center>;
};




/*
The Tolocation method is used to create a user-selectable option where the user can select four different castles
*/
const Tolocation = () => {
  return <Center >
      <FormControl w="3/4" maxW="300" >
        <FormControl.Label>Arrive</FormControl.Label>
        <Select minWidth="100" accessibilityLabel="Choose Service" placeholder="Castle" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="Alnwick Castle" value="AL" />
          <Select.Item label="Auckland Castle " value="AU" />
          <Select.Item label="Bamburgh Castle " value="BAM" />
          <Select.Item label="Barnard Castle " value="BAR" />
        </Select>
      </FormControl>
    </Center>;
};



/*
The PeopleNumber method establishes a method for selecting a number of people from 1 to 5
*/
const PeopleNumber = () => {
  return <Center>
      <FormControl w="3/4" maxW="300" >
        <FormControl.Label>People</FormControl.Label>
        <Select minWidth="100" accessibilityLabel="Choose Number" placeholder="Number" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="1" value="11" />
          <Select.Item label="2 " value="22" />
          <Select.Item label="3 " value="33" />
          <Select.Item label="4 " value="44" />
          <Select.Item label="5 " value="55" />
        </Select>
      </FormControl>
    </Center>;
};



/*
A warning method to inform the user that at this stage from a specific castle can only be reached from a specific station
*/
const Warming = () => {
  return <Center>
    <View style={styles.warmingcon}>
    <AntDesign name="infocirlce" size={18} color="#696969" />
    <Text  style={styles.text}> 
Haymarket Bus Station can go to Castle Alnwick and Bamburgh{"\n"}
     Eldon Square Bus Station can go to Castle Auckland and Barnard</Text>
    

    </View>


</Center>;
};





/*
style file for this page
*/
const styles = StyleSheet.create({

  text: {
    color: '#808080',
    fontSize: 12,
  },
  warmingcon: {
   
    paddingTop: '10%',
    flexDirection: "row",
    flexWrap: "wrap",
  },  button: {
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

  }, rect6: {
    width: '100%',
    height: 60,
 
    
    marginTop: 'auto',
   justifyContent: 'space-between'
  },
  datec: {
    flexDirection: "row",
    flexWrap: "wrap",
    width: 100,
    height: 100,
    padding: 10,
  },
  topslide:{
    backgroundColor: "rgba(255,0,0,1)",
    height:25,
    width: '100%',
    
},
BusCastleCon:{
  flexDirection: "row",
  flexWrap: "wrap",
  marginTop: '10%'
},
DAspace:{
 margin: 10,
},
Middleslide:{
  backgroundColor: "#a9a9a9",
  height:1,
  width: '90%',
  marginTop: '20%'
},
})


/*
Output the main screen page, including the map, options, time settings, and finally confirm the options to enter other pages
*/

export default function HomeScreen({ navigation }) {
        return (
          <NativeBaseProvider>
             <View style={styles.topslide}></View>
             <MapHP></MapHP>
            <Center flex={1} px="3">
              
            <View style={styles.BusCastleCon}>
              <View style={styles.DAspace}>
                <Fromlocation />
                </View>
                <View style={styles.DAspace}>
              <Tolocation />
              </View>
              <PeopleNumber />
                </View>  
                
                   <View>
                      <Datechose />
                </View>
                
                <View style={styles.Middleslide}></View>
                <Warming />
             
        {/*Confirm the data received by clicking on the page, then navigate the page to the journeys page for itinerary selection*/}
  <View style={styles.rect6}>
        <TouchableOpacity style={styles.button}  
             onPress={() => navigation.navigate('journeys')}
             >
          <Text style={styles.confirmtext}>Confirm</Text>
        </TouchableOpacity>
           </View>
        
     
            </Center>
            
          </NativeBaseProvider>
        );
    };
    