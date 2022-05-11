/*

Page designer: Binghan Lyu

Reviewed by: Caitlin Brown

Review date: 08/05/2022

Modification history -

Description: 

1) Added states to each drop down menu so store user selection. Removed timepicker
component as unable to store date and time in seperate varibles. 
Replaced with two drop down menus for user to select date and time
  - modified by Caitlin Brown

Date: 
1) 08/05/2022

*/


import React from "react";
import { FormControl, Select, Center, CheckIcon, NativeBaseProvider } from "native-base";
import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from "react-native";
import { useState } from 'react';
import { AntDesign } from '@expo/vector-icons';
import MapHP from './mapHP';


/*
The Tolocation method is used to create a user-selectable option where the user can select four different castles
Takes state as parameter to store castle variable and change castle variable.
*/
const Tolocation = ( { castle, setCastle } ) => {
 
  return <Center >    
      <FormControl w="3/4" maxW="300" >
        <FormControl.Label>Select Castle</FormControl.Label>
        <Select selectedValue={castle} 
              onValueChange={itemValue => setCastle(itemValue)} minWidth="300" 
              accessibilityLabel="Choose Service" placeholder="Castle" 
              _selectedItem={{
              bg: "teal.600",
              endIcon: <CheckIcon size={5} />
              }} mt="1" >
          <Select.Item label="Alnwick Castle" value="Alnwick" />
          <Select.Item label="Auckland Castle " value="Auckland" />
          <Select.Item label="Bamburgh Castle " value="Bamburgh" />
          <Select.Item label="Barnard Castle " value="Barnard" />
        </Select>
      </FormControl>
    </Center>;
     
};


/*
The PeopleNumber method establishes a method for selecting a number of people from 1 to 5
Takes state as parameter to store people variable and change people variable.
*/
const PeopleNumber = ({ people, setPeople }) => {
  return <Center>
      <FormControl w="3/4" maxW="300" >
        <FormControl.Label>No. People</FormControl.Label>
        <Select selectedValue={people} 
              onValueChange={itemValue => setPeople(itemValue)} minWidth="100" accessibilityLabel="Choose Number" placeholder="Number" _selectedItem={{
        bg: "teal.600",
        endIcon: <CheckIcon size={5} />
      }} mt="1">
          <Select.Item label="1" value={1} />
          <Select.Item label="2" value={2} />
          <Select.Item label="3" value={3} />
          <Select.Item label="4" value={4} />
          <Select.Item label="5" value={5} />
        </Select>
      </FormControl>
    </Center>;
};



/*
A warning method to inform the user that at this stage from a specific castle can only be reached from a specific station
*/
const Warning = () => {
  return <Center>
    <View style={styles.warningcon}>
    <AntDesign name="infocirlce" size={18} color="#696969" />
    <Text  style={styles.text}> 
    Buses to Alnwick and Bamburgh depart from Haymarket Bus Station{"\n"}
    Buses to Auckland and Barnard depart from Eldon Square Bus Station</Text>
    </View>
</Center>;
};

// Function that allows the user to pick a date from a drop down menu,
// takes date and setDate as parameters to set the state of date when the user selects it.
// Monday - Friday assigned the same value bus times for those days are the same
const PickDate = ({ date, setDate }) => {
  return <Center>
  <FormControl w="3/4" maxW="300" >
    <FormControl.Label>Day</FormControl.Label>
    <Select selectedValue={date} 
              onValueChange={itemValue => setDate(itemValue)} minWidth="100" accessibilityLabel="Choose day" placeholder="Day" _selectedItem={{
    bg: "teal.600",
    endIcon: <CheckIcon size={5} />
  }} mt="1">
      <Select.Item label="Monday" value="Weekday" />
      <Select.Item label="Tuesday" value="Weekday" />
      <Select.Item label="Wednesday" value="Weekday" />
      <Select.Item label="Thursday" value="Weekday" />
      <Select.Item label="Friday" value="Weekday" />
      <Select.Item label="Saturday" value="Saturday" />
      <Select.Item label="Sunday" value="Sunday" />
    </Select>
  </FormControl>
</Center>;
};


// Function that allows the user to pick a time from a drop down menu, time in 30 minute intervals
// from 08:00 - 12:00 as buses departing after this time do not allow user enough time at castle.
// Takes time and setTime as parameters to set the state of time when the user selects it.
const PickTime = ({ time, setTime }) => {
  return <Center>
  <FormControl w="3/4" maxW="300" >
    <FormControl.Label>Time</FormControl.Label>
    <Select selectedValue={time} 
          onValueChange={itemValue => setTime(itemValue)} minWidth="100" accessibilityLabel="Choose time" placeholder="Time" _selectedItem={{
    bg: "teal.600",
    endIcon: <CheckIcon size={5} />
  }} mt="1">
      <Select.Item label="08:00" value="08:00" />
      <Select.Item label="08:30" value="08:30" />
      <Select.Item label="09:00" value="09:00" />
      <Select.Item label="09:30" value="09:30" />
      <Select.Item label="10:00" value="10:00" />
      <Select.Item label="10:30" value="10:30" />
      <Select.Item label="11:00" value="11:00" />
      <Select.Item label="11:30" value="11:30" />
      <Select.Item label="12:00" value="12:00" />
    </Select>
  </FormControl>
</Center>;
};


/*
style file for this page
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 5,
  },
  text: {
    color: '#808080',
    fontSize: 12,
  },
  warningcon: {
    marginTop: 20,
    flexDirection: "row",
    flexWrap: "wrap",
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

  }, rect6: {
    width: '100%',
    height: 60,
    marginTop: 'auto',
    justifyContent: 'space-between'

  },
  topslide:{
    backgroundColor: "rgba(255,0,0,1)",
    height:25,
    width: '100%',
    
},
BusCastleCon:{
  marginTop: 20, 
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: 'flex-start',
  alignItems: 'center'
},
Middleslide:{
  marginRight: 20,
  flexDirection: 'row',
  alignContent: 'center',
  justifyContent: 'space-evenly'
},
})


/*
Output the main screen page, including the map, options, time settings, and finally confirm the options to enter other pages
*/
export default function HomeScreen({ navigation }) {
  
  // States to set castle, people, date and time variables based on
  // user selections 
  const [castle, setCastle] = useState(' ');
  const [people, setPeople] = useState(null);
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');

  
  return (
  <NativeBaseProvider>
      <View style={styles.topslide}></View>
      {/* Component to display map of the North East */}
      <MapHP />
    <View style={styles.BusCastleCon}>
        <Tolocation castle={castle} setCastle={setCastle}/>
        </View> 
          <View style={styles.Middleslide}>
            <PickDate date={date} setDate={setDate}  /> 
            <PickTime time={time} setTime={setTime} />
            <PeopleNumber people={people} setPeople={setPeople} />
          </View>
        <Warning />
      
    {/*Confirm the data received by clicking on the page, then navigate the page to the journeys page for itinerary selection*/}
    <View style={styles.rect6}>
    <TouchableOpacity style={styles.button}  
          onPress={() => navigation.navigate('Journeys', {castle, date, time, people})}
          >
      <Text style={styles.confirmtext}>Confirm</Text>
    </TouchableOpacity>
        </View>
  </NativeBaseProvider>
);
};
    
