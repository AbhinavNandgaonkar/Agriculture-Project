import React from 'react';
import { View, Text,TextInput,Button, StyleSheet, ImageBackground } from 'react-native';

const Registration = props => {
  return (
    <ImageBackground source={require('../assets/Registration.jpg')} style={styles.imageback}>
    <View style={styles.screen}>
      <Text style={styles.header}>REGISTRATION</Text>
      <TextInput style={styles.textinput}placeholder="Your Name" underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput}placeholder="Your Email" underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput}placeholder="Username" underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput}placeholder="Mobile No" underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput}placeholder="Password" underlineColorAndroid={'transparent'}/>
      <TextInput style={styles.textinput}placeholder="Confirm Password" underlineColorAndroid={'transparent'}/>
      <Button style={styles.Button} title="SIGN UP"
      onPress={()=>{
          props.navigation.replace('Login');
      }}
      />
    
    </View>
    </ImageBackground>   
  );
};

const styles = StyleSheet.create({
    imageback:{
        flex:1
    },
    screen:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingLeft:60,
        paddingRight:60
        },

    header:{
        color:"red",
        fontSize:30,
        textAlign:"center",
        marginBottom:50,
    },

    textinput:{
        backgroundColor:"#d92027",
        alignSelf:"stretch",
        marginBottom:35,
        height:40
    }

    
});

export default Registration;