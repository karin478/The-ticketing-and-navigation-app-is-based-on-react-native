/*

Page designer:  Caitlin Brown

Reviewed by: Binghan Lyu

Review date: 2022/05/08

Modification history -

Description:

Date:

*/




import * as React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet, View } from 'react-native';

// Function to display map of the North East on app homepage
export default function MapHP() {
  const region = {      

    latitude: 54.97808288666505,

    longitude: -1.618360943588188,

    latitudeDelta: 1.1,

    longitudeDelta: 1.1 }


    return (
        <View style={styles.container}>
        {/* MapView component loads Google map to display view of the 
        North East for homepage  */}
          <MapView style={styles.map}
                initialRegion={     
                  region}
                provider="google" >
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