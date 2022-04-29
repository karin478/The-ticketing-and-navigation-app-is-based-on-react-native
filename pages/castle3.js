import React, { Component } from "react";
import {
  StyleSheet,
  View,
  Image,
  ImageBackground,
  Text,
  TouchableOpacity, 
  ScrollView
} from "react-native";

function BamburghCastle(props) {
  return (
    <View style={styles.container}>
                    <ScrollView>
      <View style={styles.imageStack}>
        <Image
          source={require("D:/my-app3/assets/images/Bamburgh_2006_closeup.jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.loremIpsum1StackStack}>
        <View style={styles.loremIpsum1Stack}>
          <Text style={styles.loremIpsum1}>
            Adult Ticket Entrance Fee: £14.10 {"\n"}Also uses Arriva busses like
            the trip to Alnwick and fits within the specified Adult Day
            Northeast fare: £8.60
          </Text>
          <Text style={styles.loremIpsum2}>
            Bamburgh Castle is a castle on the northeast coast of England, by
            the village of Bamburgh in Northumberland. It is a Grade I listed
            building.In the 17th century, financial difficulties led to the
            castle deteriorating, but it was restored by various owners during
            the 18th and 19th centuries.
          </Text>
          <Text style={styles.loremIpsum3}></Text>
        </View>
        <Text style={styles.price1}>Price</Text>
      </View>
      <Text style={styles.bamburghCastle3}>Bamburgh Castle</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    top: 20,
    left: 20,
    width: 360,
    height: 298,
    position: "absolute"
  },
  imageStack: {
    width: 360,
    height: 318,
    marginTop: 38
  },
  text: {

    color: "#121212",
    marginTop: 260,
    marginLeft: 180
  },
  loremIpsum1: {
    top: 159,
    left: 0,
    position: "absolute",

    color: "#121212",
    height: 79,
    width: 318,
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
    width: 318,
    height: 238,
    position: "absolute"
  },
  price1: {
    top: 137,
    left: 0,
    position: "absolute",

    color: "#121212",
    textDecorationLine: "underline",
    width: 43,
    height: 17,
    fontWeight: 'bold'
  },
  loremIpsum1StackStack: {
    width: 318,
    height: 238,
    marginTop: 42,
    marginLeft: 27
  },
  bamburghCastle3: {

    color: "#121212",
    textDecorationLine: "underline",
    height: 25,
    width: 135,
    marginTop: -264,
    marginLeft: 27,
    fontWeight: 'bold'
  }
});

export default BamburghCastle;
