/*

Page designer: Binghan Lyu

Reviewed by: Binghan Lyu

Review date: 2022/05/08

Modification history -

Description:

Date:

*/




import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text ,  ScrollView} from "react-native";
import MapAmenities from './mapAmenities';



/*
AucklandCastle Castle page method, showing pictures and text
*/





function AucklandCastle(props) {
  return (
    <View style={styles.container}>
       <View style={styles.topslide}></View>
       <ScrollView >
       <View>
         <MapAmenities castle={'Auckland'} />
    </View>
      
      <View style={styles.imageStack}>
        {/*picture inserted*/}
        <Image
          source={require("D:/my-app3/assets/images/Auckland_Castle_Crop.jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.loremIpsum1StackStack}>
        <View style={styles.loremIpsum1Stack}>
          <Text style={styles.loremIpsum1}>
            Adult Ticket Entrance Fee: £14.00 {"\n"}Adult All Zones – 1 day (Bus
            Fare / Go Northeast): £6.00
          </Text>
          <Text style={styles.loremIpsum2}>
            Auckland Castle, which is also known as Auckland Palace and to
            people that live locally as the Bishop&#39;s Castle or Bishop&#39;s
            Palace, is located in the town of Bishop Auckland in County Durham,
            England.
          </Text>
          <Text style={styles.loremIpsum3}></Text>
        </View>
        <Text style={styles.price1}>Price</Text>
      </View>
      <Text style={styles.text}>Auckland Castle</Text>
  
      </ScrollView>
  
    </View>
  );
}



/*
style file for this page
*/
const styles = StyleSheet.create({
  container: {
    flex: 1,
    
  },
  image: {
    top: 20,
    left: 20,
    width: 360,
    height: 298,
  
  },

  loremIpsum1: {
    top: 160,
    left: 0,


    color: "#121212",
    height: 33,
    width: 315,
    textAlign: "left"
  },
  loremIpsum2: {
    top: 0,
    position: "absolute",

    color: "#121212",
    left: 0,
    width: 295,
    height: 165,
    textAlign: "left"
  },
  loremIpsum3: {
    top: 0,
    left: 264,
    position: "absolute",

    color: "#121212"
  },
  loremIpsum1Stack: {
    top: 0,
    left: 0,
    width: 315,
    height: 193,
    position: "absolute"
  },
  price1: {
    top: 133,
    left: 0,
    position: "absolute",

    color: "#121212",
    textDecorationLine: "underline",
    width: 43,
    height: 17,
    fontWeight: 'bold'
  },
  loremIpsum1StackStack: {
    width: 315,
    height: 193,
    marginTop: 45,
    marginLeft: 26
  },
  text: {

    color: "#121212",
    textDecorationLine: "underline",
    height: 25,
    width: 135,
    marginTop: -218,
    marginLeft: 26,
    fontWeight: 'bold'
  },
  topslide:{
    backgroundColor: "rgba(255,0,0,1)",
    height:25,
    width: '100%',
    
},
});


/*
output default method
*/
export default AucklandCastle;
