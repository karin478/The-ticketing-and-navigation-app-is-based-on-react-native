import React, { Component } from "react";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import AlnwickCstle from './castle1';
import AucklandCastle from './castle2';
import BamburghCastle from './castle3';
import BarnardCastle from './castle4';





function CSTchose(props) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("AucklandCastle")}
        style={styles.button2}
      >
        <Text style={styles.aucklandCastle}>Auckland Castle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("AlnwickCstle")}
        style={styles.button}
      >
        <Text style={styles.alnwickCastle}>Alnwick Castle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("BamburghCastle")}
        style={styles.button3}
      >
        <Text style={styles.bamburghCastle}>Bamburgh Castle</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => props.navigation.navigate("BarnardCastle")}
        style={styles.button4}
      >
        <Text style={styles.barnardCastle}>Barnard Castle</Text>
      </TouchableOpacity>
    </View>
  );
}






const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  button2: {
    width: 236,
    height: 71,
    backgroundColor: "rgba(243,117,117,1)",
    borderWidth: 5,
    borderColor: "#000000",
    borderRadius: 29,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0,
    marginTop: 234,
    marginLeft: 62
  },
  aucklandCastle: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    textDecorationLine: "underline",
    fontSize: 19,
    marginTop: 25,
    marginLeft: 53
  },
  button: {
    width: 236,
    height: 71,
    backgroundColor: "rgba(243,117,117,1)",
    borderWidth: 5,
    borderColor: "#000000",
    borderRadius: 29,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0,
    marginTop: -185,
    alignSelf: "center"
  },
  alnwickCastle: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    textDecorationLine: "underline",
    fontSize: 19,
    marginTop: 24,
    marginLeft: 53
  },
  button3: {
    width: 236,
    height: 71,
    backgroundColor: "rgba(243,117,117,1)",
    borderWidth: 5,
    borderColor: "#000000",
    borderRadius: 29,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0,
    marginTop: 163,
    marginLeft: 62
  },
  bamburghCastle: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    textDecorationLine: "underline",
    fontSize: 19,
    marginTop: 24,
    marginLeft: 53
  },
  button4: {
    width: 236,
    height: 71,
    backgroundColor: "rgba(243,117,117,1)",
    borderWidth: 5,
    borderColor: "#000000",
    borderRadius: 29,
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 3
    },
    elevation: 5,
    shadowOpacity: 0.58,
    shadowRadius: 0,
    marginTop: 40,
    marginLeft: 62
  },
  barnardCastle: {
    fontFamily: "roboto-700",
    color: "rgba(255,255,255,1)",
    textDecorationLine: "underline",
    fontSize: 19,
    marginTop: 24,
    marginLeft: 58
  }
});

export default CSTchose;
