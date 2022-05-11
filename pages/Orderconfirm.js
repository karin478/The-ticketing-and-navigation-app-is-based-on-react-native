/*

Page designer: Binghan Lyu

Reviewed by: Caitlin Brown

Review date: 2022/05/11

Modification history -
Description:
1) Added function to get variables from previous page and altered text 
to include these 

Date:
1) 11/05/2022

*/


import * as React from 'react';
import { Button, View,StyleSheet,Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';
import { useState, useEffect } from 'react';


/*
The OrderConfirm method creates a complete order page with text, icons and a confirm button to return to the main page
*/
function OrderConfirm({ navigation, route }) {
  // Parameters from the FlatList item from previous page 
  const { castle, busPrice, busPrice2, castlePrice } = route.params
  // State to set price of Scarlet Band buses to a number
  const [bus2Price, setBus2Price] = useState();

  // useEffect hook renders price2 function as page loads and set's state of bus2Price
  useEffect(() => {
    //price2 function checks whether busPrice2 is an empty string and if so
    //converts it to an integer. If busPrice2 has a value, function parses it to a float
  const price2 = () => {
    if(busPrice2 === '') {
      return 0
    } else {
      return parseFloat(busPrice2)
    }
  }
  setBus2Price(price2)
}, [])

    return (
    <View>
      <View style={styles.topslide}></View>
     <View style={styles.textpart}>
        <Text style={styles.text}>Your trip to { castle } Castle: {'\n'} 
        Bus price: £{Math.round((parseFloat(busPrice) + bus2Price) * 100) / 100} per person
        {'\n'}Castle price: £{castlePrice} per person </Text>
         <Text style={styles.text}>Thank you, enjoy your trip!!</Text>
          <FontAwesome5 style={styles.icon1}  name="kiss-wink-heart" size={44} color="red" />
         </View>
        
        {/*Created a button, click to return to the main page*/}
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
        <Button style={styles.button1} color="rgba(255,0,0,1)"
          title="Order confirmed"
          onPress={() => navigation.navigate('Home Screen')}
        />
      </View>
    
    </View>
    );
  }



/*
style file for this page
*/
  const styles = StyleSheet.create ({

    text: {
        fontSize: 20,
        color: '#333',
        paddingBottom: '10%',
        paddingTop: '30%',
        alignSelf: 'center', 
        justifyContent: 'center'
        
    },
    textpart: {
        paddingTop: '20%',
        paddingBottom: '10%'
        
    },
    icon1:{
        alignSelf: 'center',
        paddingBottom: '30%',
        
    },

   topslide:{
        backgroundColor: "rgba(255,0,0,1)",
        height:25,
        width: '100%',
        
    },
    button1: {
      width: 285,
      height: 51,
      backgroundColor: "rgba(255,36,36,1)",
      display: 'flex', 
      justifyContent: 'center',
      alignSelf: 'center',
      alignItems: 'center',
      borderRadius: 14,
    }
})


/*
output default method
*/
  export default  OrderConfirm;
  
  


