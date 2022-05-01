import * as React from 'react';
import { View, Text , Button} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import AlnwickCstle from './pages/castle11';
import AucklandCastle from './pages/castle2';
import BamburghCastle from './pages/castle3';
import BarnardCastle from './pages/castle4';
import internary from './pages/NewITpage';
import internaryReturn from './pages/NewITReturnpage';
import journeys from './pages/journeysPage';
import aboutus from './pages/aboutuspage';
import HomeScreen from './pages/homepage';
import JourneysReturn from './pages/journeysReturnPage';
import { createStackNavigator } from '@react-navigation/stack';


const Drawer = createDrawerNavigator();

const notShow = () => ({
  headerShown: false
})


function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
      <Drawer.Screen name="NC Navigatior" component={MyStack}  />
      <Drawer.Screen name="AlnwickCstle" component={AlnwickCstle} />
      <Drawer.Screen name="AucklandCastle" component={AucklandCastle} />
      <Drawer.Screen name="BamburghCastle" component={BamburghCastle} />
      <Drawer.Screen name="BarnardCastle" component={BarnardCastle} />
      <Drawer.Screen name="aboutus" component={aboutus} />
    </Drawer.Navigator>
  );
}


const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="HomeScreen" component={HomeScreen}  />
      <Stack.Screen name="journeys" component={journeys} />
      <Stack.Screen name="internary" component={internary} />
      <Stack.Screen name="journeys return" component={JourneysReturn} />
      <Stack.Screen name="internary return" component={internaryReturn} />

    </Stack.Navigator>
  );
}












export default function App() {
  return (
    <NavigationContainer>
      
 <MyDrawer></MyDrawer>
    </NavigationContainer>
  );
}
