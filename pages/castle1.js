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

function AlnwickCstle1(props) {
  return (
    <View style={styles.container}>
      <ScrollView>
      <Image
          source={require("D:/my-app3/assets/images/Alnwick_Castle_02.jpeg")}
          resizeMode="contain"
          style={styles.image}
        ></Image>
      <View style={styles.loremIpsum2Stack}>
        <Text style={styles.loremIpsum2}></Text>
        <Text style={styles.loremIpsum3}>
          Alnwick Castle is a castle and country house {"\n"}in Alnwick in the
          English county of Northumb-{"\n"}erland. It is the seat of The 12th
          Duke of Nort{"\n"}humberland, built following the Norman conq{"\n"}
          uest and renovated and remodelled a number {"\n"}of times.
        </Text>
        <Text style={styles.price}>Price</Text>
        <Text style={styles.loremIpsum5}>
          Adult Ticket Entrance Fee: £19.50 {"\n"}Adult Day Northeast (Bus Fare
          / Arriva): £8.60
        </Text>
      </View>
      <Text style={styles.alnwickCastle}>Alnwick Castle</Text>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  image: {
    height: 253,
    marginTop: 37
  },
  loremIpsum2: {
    top: 0,
    left: 264,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212"
  },
  loremIpsum3: {
    top: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    left: 0,
    width: 295,
    height: 165,
    textAlign: "left"
  },
  price: {
    top: 121,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    width: 33,
    height: 17
  },
  loremIpsum5: {
    top: 149,
    left: 0,
    position: "absolute",
    fontFamily: "roboto-regular",
    color: "#121212",
    height: 33,
    width: 284,
    textAlign: "left"
  },
  loremIpsum2Stack: {
    width: 318,
    height: 238,
    marginTop: 42,
    marginLeft: 27
  },
  alnwickCastle: {
    fontFamily: "roboto-700",
    color: "#121212",
    textDecorationLine: "underline",
    height: 25,
    width: 135,
    marginTop: -191,
    marginLeft: 33

  },
});

export default AlnwickCstle1;
