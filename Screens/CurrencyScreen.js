import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Button,StyleSheet,Keyboard, Text, View,SafeAreaView,TextInput,TouchableOpacity, Alert ,TouchableWithoutFeedback} from 'react-native';


const currencyPerRupee =
{
  DOLLAR:0.014,
  EURO:0.012,
  POUND:0.099
}

export default class App extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        inputValue:"",
        resultValue :"0.0"
      }
  }
  buttonPressed = (currency) =>{
    if(this.state.inputValue ==="")
    {
       Alert.alert("Enter Some Value In  "+currency);
    }
    else
    {
      let result = parseFloat(this.state.inputValue)  * currencyPerRupee[currency];
      this.setState({resultValue:result.toFixed(2)})
    }
  }
  render(){

  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
    <SafeAreaView style={styles.container}>
      <View style={styles.screenview}>
          <View style={styles.resultcontainer}>
            <Text style={styles.resultValue}>{this.state.resultValue}</Text>
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              selectionColor="white"
              keyboardType="number-pad"
              placeholder="Enter Amount"
              placeholderTextColor="white"
              value={this.state.inputValue}
              onChangeText={
                inputValue => this.setState({
                  inputValue
                })
              }
            />
          </View>
          <View style={styles.converterButtonContainer}>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("DOLLAR");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>$</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("EURO");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>EURO</Text>
            </TouchableOpacity>
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("POUND");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>POUND</Text>
            </TouchableOpacity>
          </View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Button title="BACK"
      onPress={()=>{
          this.props.navigation.replace('MainPage');
      }}
      />
 </View>
      <StatusBar style="auto" />
    </SafeAreaView>
    </TouchableWithoutFeedback>
  );

}
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ed6663',
   
  
  },
  screenview:{
    marginTop:20,
  },
  resultcontainer:{
    height:70,
    marginTop:70,
    justifyContent:"center",
    borderColor:"black",
    borderWidth:2,
    backgroundColor:"#59405c",
    alignItems:"center",
  

  },
  resultValue:{
fontSize:30,
fontWeight:"bold",
color:"white"
  },
  inputcontainer:{
    height:90,
    backgroundColor:"#59405c",
    marginTop:50,
    borderWidth:2,
    alignItems:"center",
    borderColor:"#c1c1c1",
    justifyContent:"center",
    color:"white"

  },
  input:{
    color:"white",
    fontSize:30

  },
  converterButtonContainer:{
    flexDirection:"row",
    flexWrap:"wrap",
    marginTop:50,
    borderColor:"#c1c1c1",
    borderWidth:2
  },
  buttonConverter:{
    alignItems:"center",
    justifyContent:"center",
    height:150,
    borderColor:"red",
    borderWidth:2,
    width:"33.33%",
    backgroundColor:"#ffbd69"

  },
  textButtonConverter:
  {
    color:"purple",
    fontSize:20,
    fontWeight:"bold"

  }


});


