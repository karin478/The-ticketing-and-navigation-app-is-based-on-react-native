import React, { Component } from "react";
import { StyleSheet, View, ScrollView, Text, Image } from "react-native";

/*

Page designer: Binghan Lyu

Reviewed by: Binghan Lyu

Review date: 2022/05/08

Modification history -

Description:

Date:

*/



/*
Ways to enumerate the responsibilities of all software producers on the job. 
Added scrollview so that the text information in the entire page can be slid vertically
*/

function aboutus(props) {
  return (
    <View style={styles.container}>
       <View style={styles.topslide}></View>
      <View style={styles.scrollArea}>
        {/*Added scrollview so that the text information in 
        the entire page can be slid vertically*/}
        <ScrollView
          horizontal={false}
          contentContainerStyle={styles.scrollArea_contentContainerStyle}
        >
          <Text style={styles.anandaSamaddar}>Ananda Samaddar</Text>
          <Text style={styles.loremIpsum}>
            Responsible for the writing of the back-end program, {"\n"}which can
            query data from the database and send it {"\n"}to the front-end in
            the required format.
          </Text>
          <Text style={styles.binghanLyu}>Binghan Lyu</Text>
          <Text style={styles.loremIpsum5}>
            Responsible for the writing of front-end programs, {"\n"}
            establishing the program interface and obtaining {"\n"}data from the
            back-end and displaying it to the {"\n"}front-end.
          </Text>
          <Text style={styles.boningYang}>Boning Yang</Text>
          <Text style={styles.loremIpsum6}>
            Responsible for the writing of front-end programs, {"\n"}
            establishing the program interface and obtaining {"\n"}data from the
            back-end and displaying it to the {"\n"}front-end.
          </Text>
          <Text style={styles.caitlinBrown}>Caitlin Brown</Text>
          <Text style={styles.loremIpsum7}>
            Responsible for the writing of front-end programs, {"\n"}
            establishing the program interface and obtaining {"\n"}data from the
            back-end and displaying it to the {"\n"}front-end.
          </Text>
          <Text style={styles.liuliCao}>Liuli Cao</Text>
          <Text style={styles.loremIpsum2}>
            Responsible for designing and adjusting the {"\n"}database structure, 
            using SQL statements to create tables {"\n"}and inserting corresponding 
            values, testing and producing {"\n"}visual tables, and writing SQL 
            statements to query {"\n"}data that meets requirements.
          </Text>
          <Text style={styles.loganJones2}>Logan Jones</Text>
          <Text style={styles.loremIpsum1}>
            Responsible for documentation, and database {"\n"}construction.
          </Text>
        </ScrollView>
      </View>
      {/*picture inserted*/}
      <Image
        source={require("D:/my-app3/assets/images/Newcastle-University-logo.jpg")}
        resizeMode="contain"
        style={styles.image}
      ></Image>
    </View>
  );
}


/*
style file for this page
*/
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  scrollArea: {
    height: 474,
    marginTop: 243
  },
  scrollArea_contentContainerStyle: {
    height: 821,
 
  },
  anandaSamaddar: {
    fontWeight: 'bold',
    color: "#121212",
    marginTop: 31,
    marginLeft: 16
  },
  loremIpsum: {

    color: "#121212",
    textAlign: "left",
    marginTop: 17,
    marginLeft: 16
  },
  binghanLyu: {
    fontWeight: 'bold',
    color: "#121212",
    marginTop: 36,
    marginLeft: 16
  },
  loremIpsum5: {

    color: "#121212",
    textAlign: "left",
    marginTop: 19,
    marginLeft: 16
  },
  boningYang: {
    fontWeight: 'bold',
    color: "#121212",
    marginTop: 32,
    marginLeft: 16
  },
  loremIpsum6: {
 
    color: "#121212",
    textAlign: "left",
    marginTop: 21,
    marginLeft: 16
  },
  caitlinBrown: {
    fontWeight: 'bold',
    color: "#121212",
    marginTop: 35,
    marginLeft: 16
  },
  loremIpsum7: {

    color: "#121212",
    textAlign: "left",
    marginTop: 13,
    marginLeft: 16
  },
  liuliCao: {
    fontWeight: 'bold',
    color: "#121212",
    marginTop: 33,
    marginLeft: 16
  },
  loremIpsum2: {

    color: "#121212",
    textAlign: "left",
    marginTop: 17,
    marginLeft: 16
  },
  loganJones2: {
    fontWeight: 'bold',
    color: "#121212",
    marginTop: 36,
    marginLeft: 16
  },
  loremIpsum1: {


    
    color: "#121212",
    textAlign: "left",
    marginTop: 15,
    marginLeft: 16
  },
  image: {
    width: 300,
    height: 200,
    marginTop: -689,
    marginLeft: 74,
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

export default aboutus;