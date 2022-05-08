/*

Page designer: Binghan Lyu

Reviewed by: Binghan Lyu

Review date: 2022/05/11

Modification history -

Description:

Date:

*/








import * as React from 'react';
import { Button, View,StyleSheet,Text } from 'react-native';
import { FontAwesome5 } from '@expo/vector-icons';




/*
The OrderConfirm method creates a complete order page with text, icons and a confirm button to return to the main page
*/
function OrderConfirm({ navigation }) {
    return (
        <View>
             <View style={styles.topslide}></View>
     <View style={styles.textpart}>
         <Text style={styles.text}>Thank you for your order, enjoy your trip!!</Text>
          <FontAwesome5 style={styles.icon1}  name="kiss-wink-heart" size={44} color="red" />
         </View>
        
        {/*Created a button, click to return to the main page*/}
      <View style={{  alignItems: 'center', justifyContent: 'center' }}>
        <Button style={styles.Button1} color="#b22222"
          title="Order confirmed"
          onPress={() => navigation.navigate('HomeScreen')}
        />
      </View>
    
    </View>
    );
  }



/*
style file for this page
*/
  const styles = StyleSheet.create ({

    text: {
        fontSize: 20,
        color: '#333',
        paddingBottom: '10%',
        paddingTop: '30%',
        alignSelf: 'center', 
        justifyContent: 'center'
        
    },
    textpart: {
        paddingTop: '20%',
        paddingBottom: '10%'
        
    },
    icon1:{
        alignSelf: 'center',
        paddingBottom: '30%',
        
    },

   topslide:{
        backgroundColor: "rgba(255,0,0,1)",
        height:25,
        width: '100%',
        
    },
})


/*
output default method
*/
  export default  OrderConfirm;
  
  


