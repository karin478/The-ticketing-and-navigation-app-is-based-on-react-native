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
import MapViewDirections from 'react-native-maps-directions';

// Function takes castle as a parameter to show the route corresponding 
// to that castle on a map
export default function MapRoute({ castle }) {

    // State to retrieve and set origin location for route, set to Haymarket as default 
    const [origin, setOrigin] = useState({
      latitude: 54.9770553403552, 
      longitude: -1.6146178153274584});
    // State to retireve and set destination for route, set to Alniwck as default
    const [destination, setDestination] = useState({
      latitude: 55.41568630863513, 
      longitude: -1.705931130370866 });
    // Variable containing API key for Google Places API to use MapViewDirections functionality
    const GOOGLE_MAPS_APIKEY = 'AIzaSyC-OGwgj9VJXtod_QI331mDjbUGTzDui8g';

    // State to retireve and set initial region for MapView component, set to Alnwick as default
    const [region, setRegion] = useState({
      latitude: 54.9770553403552, 
      longitude: -1.6146178153274584,
      latitudeDelta: 0.9,
      longitudeDelta: 0.9,
    });

    //Function to set region, origin and destination variables based on castle 
    // triggered when page loaded using useEffect hook
    const onScreenLoad = () => {
      if(castle === 'Alnwick'){
        setRegion({latitude: 55.18135132868621, longitude: -1.6568234841926792, latitudeDelta: 0.9,
          longitudeDelta: 0.9,})
        setOrigin({latitude: 54.9770553403552, longitude: -1.6146178153274584})
        setDestination({latitude: 55.41568630863513, longitude: -1.705931130370866})
      } else if(castle === 'Auckland') {
        setRegion({latitude: 54.832089333493236, longitude: -1.6244674386914677, latitudeDelta: 0.7,
          longitudeDelta: 0.7,})
        setOrigin({latitude: 54.97584528831199, longitude: -1.6157643576016247})
        setDestination({latitude: 54.66798110729705, longitude: -1.6702816535272247})  
      } else if (castle === 'Bamburgh') {
        setRegion({latitude: 55.29274225146542, longitude: -1.7165255584111838, latitudeDelta: 0.9,
          longitudeDelta: 0.9,})
        setOrigin({latitude: 54.9770553403552, longitude: -1.6146178153274584})
        setDestination({latitude: 55.609086841344144, longitude: -1.70994301708667,})
      } else {
        setRegion({latitude: 54.754689051658744, longitude: -1.678327283333873, latitudeDelta: 0.9,
          longitudeDelta: 0.9,})
        setOrigin({latitude: 54.97584528831199, longitude: -1.6157643576016247})
        setDestination({latitude: 54.54415430889468, longitude: -1.9260682337126496})
      }
    }

    // useEffect hook triggers setting of region, origin and destination variables
    // when page loads.
    useEffect(() => {
      onScreenLoad();
    }, [])

    return (
        <View style={styles.container}>
          {/* MapView component loads map to display route between origin and castle */}
            <MapView style={styles.map}
                initialRegion={region}
                provider="google" >
                {/* MapViewDirections component uses Google Place API to plot route between 
                origin coordinates and destination coordinates. Can take additional prop to plot 
                route based on coordinates in any array to map exact bus stops, however unable to 
                implement this due to issues obtaining coordinates from backend */}
                  <MapViewDirections
                    origin={origin}
                    destination={destination}
                    apikey={GOOGLE_MAPS_APIKEY}
                    strokeWidth={5}
                    strokeColor={'#ff0000'}
                />
            {/* Markers to highlight start and end destination */}
             <Marker coordinate={origin} />
             <Marker coordinate={destination} />            
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