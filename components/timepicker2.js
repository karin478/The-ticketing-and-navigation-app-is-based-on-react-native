/*

Page designer: Binghan Lyu

Reviewed by: Binghan Lyu

Review date: 2022/05/08

Modification history -

Description:

Date:

*/





import React, { useState } from "react";
import reactDom from "react-dom";
import {StyleSheet, Button, View } from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";





/*
This method comes from the date time picker of an external library, and can use a component to create date time pickers on Android and iOS.*/
const Datechose1 = () => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  /*Show date selection*/
  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };
  /*Confirm date selection, then hide time date picker*/
  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };
  /*The datetime picker can be triggered by clicking the button, and it will automatically close after the selection is complete.*/
  return (
    <View style={styles.chosedates}>
      <Button style={styles.Button} color='#696969' title="Set your Date and Time" onPress={showDatePicker} />
      <DateTimePickerModal
      
        isVisible={isDatePickerVisible}
        mode="time"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      />
    </View>
  );
};



/*
style file for this page
*/
const styles = StyleSheet.create({
    chosedates:{
       
        borderRadius: 14,
        marginTop: 20,
        color: 'white'

    },
 


})

/*
output default method
*/
export default Datechose1;