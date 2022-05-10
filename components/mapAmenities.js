/*

Page designer: Caitlin Brown

Reviewed by: Binghan Lyu

Review date: 2022/05/08

Modification history -

Description:

Date:

*/






import * as React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { StyleSheet, View } from 'react-native';
import { useState, useEffect } from 'react';

//Function to display castle location with the location of amenities around the 
// castle displayed, takes in the castle as a parameter 
export default function MapAmenities1({ castle }) {
    
    // State to retrieve and set the location to show points of interest around the
    // castle, set to Alnwick as default
    const [location, setLocation] = useState({latitude: 55.41568630863513, longitude: -1.705931130370866, latitudeDelta: 0.004, longitudeDelta: 0.004,});
    
    //Function to set location variables based on castle triggered when 
    //page loaded using useEffect hook
    const onScreenLoad = () => {
      if(castle === 'Alnwick'){
        setLocation({latitude: 55.41568630863513, longitude: -1.705931130370866, latitudeDelta: 0.004, longitudeDelta: 0.004})
      } else if(castle === 'Auckland') {
        setLocation({latitude: 54.66686466668416, longitude:-1.6701417824627744, latitudeDelta: 0.004, longitudeDelta: 0.004})  
      } else if (castle === 'Bamburgh') {
        setLocation({latitude: 55.609086841344144, longitude: -1.70994301708667, latitudeDelta: 0.004, longitudeDelta: 0.004})
      } else {
        setLocation({latitude: 54.54430367963529,  longitude: -1.9259823982034356, latitudeDelta: 0.004, longitudeDelta: 0.004})
      }
    }

    // useEffect hook triggers setting of location variables when page loads.
    useEffect(() => {
      onScreenLoad();
    }, [])


  return (
    <View style={styles.container}>
      {/* MapView component loads Google map to display view of the 
        castle, showsPointsOfInterest, showsIndoors and showsBuildings
        props are set to true to display restaurants and another amenities
        around the castle*/}
      <MapView style={styles.map}
            initialRegion={location}
            provider='google'
            showsPointsOfInterest={true}
            showsIndoors={true}
            showsBuildings={true} >
      </MapView>  
    </View>
  );
}

  //Styles centers map within a container, stretches map across width of screen
  // and is 250px high
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#fff',
      justifyContent: 'center',
    },
    map: {
      width: 500,
      height: 250
    },
  });
