
import React from 'react';
import { View, Text,Button, StyleSheet,Image,TouchableOpacity,Alert } from 'react-native';

export default class App extends React.Component{
  myButton = ()=>{
    var numBer = this.getRandomNumber();
    switch (numBer)
    {
      case 1:
        this.setState({
          uri:require('../assets/dice1.png')})
          break;
      case 2:
        this.setState({
          uri:require('../assets/dice2.png')})
          break;
      case 3:
        this.setState({
          uri:require('../assets/dice3.png')})
          break;
      case 4:
        this.setState({
          uri:require('../assets/dice4.png')})
          break;
      case 5:
        this.setState({
          uri:require('../assets/dice5.png')})
          break;
      case 6:
        Alert.alert("It's 6,Play again !!!");
        this.setState({
          uri:require('../assets/dice6.png')})
          break;
      default:
        Alert.alert("hello");


    }
  
  }
  getRandomNumber= ()=>{
    return Math.floor(Math.random()*6)+1;

   }
  constructor(props){
    super(props);
    this.state =
    {
                uri:require('../assets/dice.jpg')
    }
    };

   

  render(){

    return( 
    <View style={styles.container}>
        <Text style={styles.text}>Let's Play The Game</Text>
      
      <Image source={this.state.uri}/>
      <TouchableOpacity
        onPress={this.myButton}
      >
      <Text style={styles.button}>Click Here To Play</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text></Text>
      <Button title="BACK"
      onPress={()=>{
          this.props.navigation.navigate('MainPage');
      }}
      />
    </View>
    );
  }

}

const styles = StyleSheet.create({
  container:{
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    fontSize:60,
    backgroundColor:"#59405c"
  },
  button:{
    fontSize:30,
    marginTop:50,
    color:"#cffffe",
    fontWeight:"bold",
    borderWidth:5,
    borderColor:"#ff5722",
    padding:20,
    borderRadius:10
  },
  text:{
      color:"#d54062",
      fontSize:35,
      marginBottom:50,
      fontWeight:"bold",
      textAlign:"center"
  }
})



