/*

Page designer: Binghan Lyu

Reviewed by: Binghan Lyu

Review date: 2022/05/07

Modification history -

Description:

Date:

*/






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
import OrderConfirm from './pages/Orderconfirm';






/*
This is a drawer component built through the navigation external library. 
Users can switch between different pages through the component's sidebar.
*/


const Drawer = createDrawerNavigator();




function MyDrawer() {
  return (
    <Drawer.Navigator useLegacyImplementation>
          
      <Drawer.Screen name="HomeScreen" component={HomeScreen}  options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }} />
      <Drawer.Screen name="AlnwickCstle" component={AlnwickCstle} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
      <Drawer.Screen name="AucklandCastle" component={AucklandCastle} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
      <Drawer.Screen name="BamburghCastle" component={BamburghCastle} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
      <Drawer.Screen name="BarnardCastle" component={BarnardCastle} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
      <Drawer.Screen name="About us" component={aboutus} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
    </Drawer.Navigator>
  );
}

/*
This is a stack component built through the navigation external library. 
The page is established through the stack component, which is similar to 
the page switching method of the stack in java. Complete the ticket purchase 
requirements step by step by clicking the confirm button
*/
const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="MYdrawer" component={MyDrawer}  options={{ headerShown: false,  headerStyle: {
            backgroundColor: '#f4511e',
          } }}/>
   
      <Stack.Screen name="journeys" component={journeys} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
      <Stack.Screen name="internary" component={internary} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
      <Stack.Screen name="journeys return" component={JourneysReturn} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
      <Stack.Screen name="internary return" component={internaryReturn} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>
      <Stack.Screen name="Order Confirm" component={OrderConfirm} options={{  headerStyle: {
            backgroundColor: '#d3d3d3',
          } }}/>

    </Stack.Navigator>
  );
}




/*
This is the function of the output page, which embeds the drawer in the stack structure. Final output of all pages
*/

export default function App() {
  return (
    <NavigationContainer>
      
 <MyStack></MyStack>
    </NavigationContainer>
  );
}



