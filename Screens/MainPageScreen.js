
import React from 'react';
import { Text,Button, StyleSheet, ImageBackground } from 'react-native';

const MainPageScreen = props => {
  return (
     <ImageBackground source={require('../assets/Registration.jpg')}
    style={styles.screen}>
      <Text style={styles.text}>Our Apps</Text>
      <Button
       title="Calculator"
      onPress={()=>{
          props.navigation.replace('SimpleCalculator');
      }}
      />
      <Text></Text>
      <Button
       title="Currency Converter"
      onPress={()=>{
          props.navigation.replace('CurrencyConverter');
      }}
      />
      <Text></Text>
      <Button
       title="Dice Game"
      onPress={()=>{
          props.navigation.replace('Dice');
      }}
      />
      <Text></Text>
      <Button
       title="LOGOUT"
      onPress={()=>{
          props.navigation.replace('HomePage');
      }}
      />
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  text:{
    fontSize:50,
    marginBottom:50,
    paddingTop:30,
    fontStyle:"italic",
    fontWeight:"bold",
    textAlign:"center",
    textShadowColor:"purple",
    textShadowRadius:6
  }
});

export default MainPageScreen;