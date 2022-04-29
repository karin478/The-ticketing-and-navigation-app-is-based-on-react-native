import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CSTchose from './pages/mapchose';
import AlnwickCstle from './pages/castle11';
import AucklandCastle from './pages/castle2';
import BamburghCastle from './pages/castle3';
import BarnardCastle from './pages/castle4';
import internary from './pages/ITpage';
import journeys from './pages/journeysPage';
import aboutus from './pages/aboutuspage';



const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
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

export default function App() {
  return (
    <NavigationContainer>
      <MyDrawer />
    </NavigationContainer>
  );
}
