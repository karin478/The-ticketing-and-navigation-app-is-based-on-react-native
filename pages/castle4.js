import React, { Component } from "react";
import { StyleSheet, View, Image, TouchableOpacity, Text, ScrollView   } from "react-native";

function BarnardCastle(props) {
  return (
    <View style={styles.container}>

      <View style={styles.imageStack}>
        <Image
          source={require("D:/my-app3/assets/images/BarnardCastleMarketplace.jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <Text style={styles.loremIpsum1}>
        Adult Ticket Entrance Fee (with donation): £10.00{"\n"}Adult Ticket
        Entrance Fee (without donation): £9.00
      </Text>
      <View style={styles.price1Stack}>
        <Text style={styles.price1}>Price</Text>
        <Text style={styles.loremIpsum2}>
          Barnard Castle is a market town on the north bank of the River Tees,
          in County Durham, Northern England. The town is named after and built
          around a mediaeval castle ruin. The town&#39;s Bowes Museum&#39;s has
          an 18th-century Silver Swan automaton exhibit and paintings by Goya
          and El Greco.
        </Text>
        <Text style={styles.loremIpsum3}></Text>
      </View>
      <Text style={styles.text}>Barnard Castle</Text>

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
  loremIpsum1: {

    color: "#121212",
    height: 78,
    width: 308,
    textAlign: "left",
    marginTop: 197,
    marginLeft: 33
  },
  price1: {
    top: 145,
    left: 0,
    position: "absolute",

    color: "#121212",
    textDecorationLine: "underline",
    width: 43,
    height: 17,
    fontWeight: 'bold'
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
  price1Stack: {
    width: 295,
    height: 165,
    marginTop: -249,
    marginLeft: 33
  },
  text: {

    color: "#121212",
    textDecorationLine: "underline",
    height: 25,
    width: 135,
    marginTop: -191,
    marginLeft: 33,
    fontWeight: 'bold'
  }
});

export default BarnardCastle;
