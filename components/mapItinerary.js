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

//Function to place a marker on a map at the castle location, takes in the castle as a parameter 
export default function mapItinerary({ castle }) {
    
    // State to retrieve and set the location of the castle, set to Alnwick as default
    const [location, setLocation] = useState({latitude: 55.41568630863513, longitude: -1.705931130370866, latitudeDelta: 0.004, longitudeDelta: 0.004,});
    
    //Function to set location variables based on castle triggered when 
    //page loaded using useEffect hook
    const onScreenLoad = () => {
      if(castle === 'Alnwick'){
        setLocation({latitude: 55.41568630863513, longitude: -1.705931130370866, latitudeDelta: 0.004, longitudeDelta: 0.004})
      } else if(castle === 'Auckland') {
        setLocation({latitude: 54.6673486383856,  longitude: -1.6700774093589317, latitudeDelta: 0.004, longitudeDelta: 0.004})  
      } else if (castle === 'Bamburgh') {
        setLocation({latitude: 55.609086841344144, longitude: -1.70994301708667, latitudeDelta: 0.004, longitudeDelta: 0.004})
      } else {
        setLocation({latitude: 54.54415430889468, longitude: -1.9260682337126496, latitudeDelta: 0.004, longitudeDelta: 0.004})
      }
    }

    // useEffect hook triggers setting of location variables when page loads.
    useEffect(() => {
      onScreenLoad();
    }, [])

    return (
        <View style={styles.container}>
        {/* MapView component loads Google map to display view of the 
        the castle for the itinerary page */}
          <MapView style={styles.map}
                initialRegion={location}
                provider="google" >
            {/* Places a marker on the location of the castle */}
              <Marker coordinate={location} /> 
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
    