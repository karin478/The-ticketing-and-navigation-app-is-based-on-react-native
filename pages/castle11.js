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

function AlnwickCstle(props) {
  return (
    <View style={styles.container}>
        <ScrollView>
      <View style={styles.imageStack}>
        <Image
          source={require("D:/my-app3/assets/images/Alnwick_Castle_02.jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      </View>
      <View style={styles.loremIpsum1StackStack}>
        <View style={styles.loremIpsum1Stack}>
          <Text style={styles.loremIpsum1}>
          Alnwick Castle is a castle and country house {"\n"}in Alnwick in the
          English county of Northumb-{"\n"}erland. It is the seat of The 12th
          Duke of Nort{"\n"}humberland, built following the Norman conq{"\n"}
          uest and renovated and remodelled a number {"\n"}of times.
          </Text>
          <Text style={styles.loremIpsum2}>
          Adult Ticket Entrance Fee: £19.50 {"\n"}Adult Day Northeast (Bus Fare
          / Arriva): £8.60
          </Text>
          <Text style={styles.loremIpsum3}></Text>
        </View>
        <Text style={styles.price1}>Price</Text>
      </View>
      <Text style={styles.bamburghCastle3}>Alnwick Castle</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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

export default AlnwickCstle;
