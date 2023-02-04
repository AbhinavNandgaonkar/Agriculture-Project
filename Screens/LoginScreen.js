import React from 'react';
import {  Text,Button, StyleSheet,ImageBackground,TextInput } from 'react-native';

const LoginScreen = props => {
  return (
    <ImageBackground source={require('../assets/Login.jpg')}
    style={styles.screen}>
      <Text style={styles.text}>LOGIN</Text>
      <TextInput style={styles.textinput}placeholder="Enter Login ID" underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput}placeholder="Enter Password" underlineColorAndroid={'transparent'}/>
      <Button title="LOGIN"
      onPress={()=>{
          props.navigation.replace('MainPage');
      }}
      />
      <Button style={styles.Button} title="Registration"
      onPress={()=>{
          props.navigation.replace('Register');
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
  textinput:{
    alignSelf:'stretch',
    height:40,
    marginBottom:36,
    color:"#111d5e",
    borderBottomColor:"black",
    borderBottomWidth:1
  },
  Button:{
    alignSelf:"stretch",
    alignItems:'center',
    padding:20,
    backgroundColor:"#59cbbd",
    marginTop:50
  },
  text:{
    fontWeight:"bold",
    fontSize:50,
    textAlign:"center",
    color:"#394989"
    
  }
      
  });

export default LoginScreen;