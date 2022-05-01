import * as React from 'react';
import { Button, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';



  const Drawer = createDrawerNavigator();

  function MyDrawer() {
    return (
      <Drawer.Navigator useLegacyImplementation>
        <Drawer.Screen name="HomeScreen" component={HomeScreen} />
        <Drawer.Screen name="AlnwickCstle" component={AlnwickCstle} />
        <Drawer.Screen name="AucklandCastle" component={AucklandCastle} />
        <Drawer.Screen name="BamburghCastle" component={BamburghCastle} />
        <Drawer.Screen name="BarnardCastle" component={BarnardCastle} />
        <Drawer.Screen name="internary" component={internary} />
        <Drawer.Screen name="journeys" component={journeys} />
        <Drawer.Screen name="aboutus" component={aboutus} />
      </Drawer.Navigator>
    );
  }
  



  export default function Navigationd() {
    return (
      <NavigationContainer>
<MyDrawer />
      </NavigationContainer>
    );
  }
  











