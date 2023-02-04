import React from 'react';
import { View, Text,Button, StyleSheet, ImageBackground } from 'react-native';

const HomeScreen = props => {
  return (
    <ImageBackground source={require('../assets/MainScreen.png')}
    style={styles.screen}>
      
        <Text style={styles.Text}>
          MANY APPLICATION IN ONE APP
        </Text>
      <Button style={styles.button}
       title="GO TO LOGIN"
      onPress={()=>{
          props.navigation.replace('Login');
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
  button:{
    alignSelf:"stretch",
    color:"#ed6663",
    alignItems:'center',
    padding:20,
    marginTop:50

  },
  Text:{
    fontSize:50,
    marginTop:0,
    paddingTop:50,
    fontStyle:"italic",
    fontWeight:"bold",
    textAlign:"center",
    textShadowColor:"red",
    color:"red",
    textShadowRadius:6
  }
});

export default HomeScreen;