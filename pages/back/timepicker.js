import React from 'react';
import { ApplicationProvider, Layout, Text, Datepicker } from '@ui-kitten/components';
import { mapping, light as lightTheme } from '@eva-design/eva';
import { useState } from 'react';
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  
  TouchableOpacity, 
  ScrollView
} from "react-native";



  

const Tickerer = () => (
  

  
    <View  style={styles.datec}>
          <Datepicker

  label="Pick your day"
/>
    </View>

  
);




const TimeP = () => (
  <ApplicationProvider mapping={mapping} theme={lightTheme}>
    <Tickerer />
  </ApplicationProvider>
);


const styles = StyleSheet.create({
  datec: {
    flexDirection: "row",
    flexWrap: "wrap",
    paddingLeft:'10%',
    paddingTop:150,
    
  },

})


export default TimeP;