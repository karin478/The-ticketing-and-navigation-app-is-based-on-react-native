import * as React from 'react';
import {
  StyleSheet,
  View,
  TextInput,
  Text,
  TouchableOpacity,
  Button,
  ScrollView,
  FlatList  
} from "react-native";
import EntypoIcon from "react-native-vector-icons/Entypo";
import MaterialCommunityIconsIcon from "react-native-vector-icons/MaterialCommunityIcons";
import IoniconsIcon from "react-native-vector-icons/Ionicons";
import 'react-native-gesture-handler';
import { useState } from 'react';



function trainList({navigation}){
  <View style={styles.container}>
            <View style={styles.title}>
                {/* Todo: get variables from Home page input */}
                <Text style={styles.titleText}> Haymarket - Alnwick </Text> 
                <Text style={styles.text}> Today - Fri 10/04/2022 </Text>
            </View>

          <FlatList data={journeys} renderItem={({ item }) => (
             <TouchableOpacity           title="Go to ITpage"
             onPress={() => navigation.navigate('internary')} //onPress={() => navigation.navigate('itinerary', item)}
             >
                <View style={styles.journeyBox}>
                    <Text style={styles.titleText}>{ item.DepartTime } - { item.arriveTime }</Text>
                    <Text style={styles.text}>{ item.jourLength }</Text>
                    <Text style={styles.text}>Changes: { item.changes } {'\n'}</Text>
                    <View style={styles.line} ></View>
                    <Text style={styles.text}> Bus: { item.bus } { item.operator }{'\n'}{ item.departs } </Text>
                    <View style={styles.walking}>
                    <FontAwesome5 style={styles.icon} name="walking" size={24} color="black"  />
                    <Text style={styles.text}> { item.walkTime } {'\n'} { item.walkDistance } </Text>
                    </View>

                </View>
            </TouchableOpacity>
          )} />
        </View>

}

function internary(props) {
  return (
    <View style={styles.container}>
      <View style={styles.rect}>
        <View style={styles.iconRow}>
          <EntypoIcon name="chevron-left" style={styles.icon}></EntypoIcon>
          <TextInput
            placeholder="internary"
            placeholderTextColor="rgba(249,4,4,1)"
            style={styles.textInput}
          ></TextInput>
        </View>
        <View style={styles.icon2}></View>

      </View>
      <View style={styles.rect2}></View>
      <View style={styles.rect3Stack}>
        <View style={styles.rect3}>
          <View style={styles.loremIpsumRow}>
            <Text style={styles.loremIpsum}>
              Today, 04-04-2022{"\n"}Nupermarket - Newcastle castle
            </Text>
            <MaterialCommunityIconsIcon
              name="heart"
              style={styles.icon3}
            ></MaterialCommunityIconsIcon>
          </View>
        </View>
        <View style={styles.rect4}>
          <Text style={styles.loremIpsum2}>Duration: 1:10 | 0 change</Text>
        </View>
      </View>
      <View style={styles.rect5}>
        <View style={styles.icon5Row}>
          <IoniconsIcon name="md-train" style={styles.icon5}></IoniconsIcon>
          <Text style={styles.loremIpsum3}>09:17 Nupermarket</Text>
          <Text style={styles.pl3}>Pl. 3</Text>
        </View>
        <Text style={styles.loremIpsum5}>IC 1828{"\n"}-&gt;London center</Text>
        <View style={styles.loremIpsum4Row}>
          <Text style={styles.loremIpsum4}>10:24 Newcastle castle</Text>
          <Text style={styles.pl6}>Pl. 6</Text>
        </View>
      </View>
      <View style={styles.rect6}>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.mapView}>Confirm</Text>
        </TouchableOpacity>
      </View>
      <View>
        <trainList></trainList>
      </View>
    </View>
  );
}


















const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(230, 230, 230,1)"
  },
  rect: {
    width: '100%',
    height: 49,
    backgroundColor: "#E6E6E6",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 3,
      height: 10
    },
    elevation: 60,
    shadowOpacity: 0.31,
    shadowRadius: 20,
    flexDirection: "row",
    marginTop: 50,
    marginLeft: -1
  },
  icon: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    height: 45,
    width: 40
  },
  textInput: {
    color: "#121212",
    fontSize: 27,
    fontWeight: 'bold',
    width: 126,
    height: 32,
    marginLeft: 105,
    marginTop: 7
  },
  iconRow: {
    height: 45,
    flexDirection: "row",
    marginLeft: 13,
    marginTop: 2
  },
  icon2: {
    color: "rgba(0,0,0,1)",
    fontSize: 40,
    fontWeight: 'bold',
    height: 45,
    width: 40,
    flex: 1,
    marginRight: 10,
    marginLeft: 67,
    marginTop: 9
  },
  rect2: {
    width: '100%',
    height: 24,
    backgroundColor: "rgba(255,0,0,1)",
    marginTop: -76,
    marginLeft: -1
  },
  rect3: {
    top: 0,
    left: 1,
    width: '100%',
    height: 91,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)",
    flexDirection: "row"
  },
  loremIpsum: {
    color: "#121212"
  },
  icon3: {
    color: "rgba(255,0,0,1)",
    fontSize: 31,
    width: 70,
    height: 34,
    marginLeft: 122
  },
  loremIpsumRow: {
    height: 34,
    flexDirection: "row",
    flex: 1,
    marginRight: 11,
    marginLeft: 24,
    marginTop: 24
  },
  rect4: {
    top: 58,
    left: 0,
    width: '100%',
    height: 28,
    position: "absolute",
    backgroundColor: "rgba(255,255,255,1)"
  },
  loremIpsum2: {
    color: "#121212",
    marginTop: 11,
    marginLeft: 25
  },
  rect3Stack: {
    width: '100%',
    height: 91,
    marginTop: 73
  },
  rect5: {
    width: '100%',
    height: 217,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 31
  },
  icon5: {
    color: "rgba(128,128,128,1)",
    fontSize: 44,
    fontWeight: 'bold',
    height: 48,
    width: 31
  },
  loremIpsum3: {
    color: "#121212",
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 37,
    marginTop: 4
  },
  pl3: {
    color: "#121212",
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 72,
    marginTop: 4
  },
  icon5Row: {
    height: 48,
    flexDirection: "row",
    marginTop: 22,
    marginLeft: 37,
    marginRight: 14
  },
  loremIpsum5: {
    color: "#121212",
    marginTop: 7,
    marginLeft: 150
  },
  loremIpsum4: {
    color: "#121212",
    fontWeight: 'bold',
    fontSize: 17
  },
  pl6: {
    color: "#121212",
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 46
  },
  loremIpsum4Row: {
    height: 20,
    flexDirection: "row",
    marginTop: 44,
    marginLeft: 103,
    marginRight: 14
  },
  rect6: {
    width: '100%',
    height: 90,
    backgroundColor: "rgba(255,255,255,1)",
    marginTop: 146
  },
  button: {
    width: 285,
    height: 51,
    backgroundColor: "rgba(255,36,36,1)",
    marginTop: 19,
    marginLeft: 62 
  },
  mapView: {
    color: "rgba(255,255,255,1)",
    fontSize: 17,
    fontWeight: 'bold',
    marginTop: 16,
    marginLeft: '37%'
  }
});













export default internary;