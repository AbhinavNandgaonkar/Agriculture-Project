import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet,Keyboard, Text, View,SafeAreaView,TextInput,TouchableOpacity, Alert ,TouchableWithoutFeedback,Button} from 'react-native';

export default class App extends React.Component{
  constructor(props){
    super(props);
      this.state ={
        inputValue1:"",
        inputValue2:"",
        resultValue :"0.0"
      }
  }
  buttonPressed = (Operation) =>{
    if(this.state.inputValue1 ==="")
    {
       Alert.alert("Enter Some Value In  "+Operation);
    }
    else if(Operation==="Addition")
    {
      let result = parseFloat(this.state.inputValue1)  + parseFloat(this.state.inputValue2);
      this.setState({resultValue:result.toFixed(2)})
    }
    else if(Operation==="Subtraction")
    {
      let result = parseFloat(this.state.inputValue1)  - parseFloat(this.state.inputValue2);
      this.setState({resultValue:result.toFixed(2)})
    }
    else if(Operation==="Multiply")
    {
      let result = parseFloat(this.state.inputValue1)  * parseFloat(this.state.inputValue2);
      this.setState({resultValue:result.toFixed(2)})
    }
    else if(Operation==="Division")
    {
      let result = parseFloat(this.state.inputValue1)  / parseFloat(this.state.inputValue2);
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
              placeholder="Enter 1st no"
              placeholderTextColor="white"
              value={this.state.inputValue1}
              onChangeText={
                inputValue1 => this.setState({
                  inputValue1
                })
              }
            />
          </View>
          <View style={styles.inputcontainer}>
            <TextInput
              style={styles.input}
              selectionColor="white"
              keyboardType="number-pad"
              placeholder="Enter 2nd no"
              placeholderTextColor="white"
              value={this.state.inputValue2}
              onChangeText={
                inputValue2 => this.setState({
                  inputValue2
                })
              }
            />
          </View>

          <View style={styles.converterButtonContainer}>
            
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("Addition");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>+</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("Subtraction");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>-</Text>
            </TouchableOpacity>
            
            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("Multiply");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity
            onPress={()=> {
              this.buttonPressed("Division");
            }}
            style={styles.buttonConverter}
            >
              <Text style={styles.textButtonConverter}>/</Text>
            </TouchableOpacity>
          </View>
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
    backgroundColor: 'lightpink',
  },
  screenview:{
    marginTop:20,
  },
  resultcontainer:{
    height:70,
    marginTop:30,
    justifyContent:"center",
    borderColor:"black",
    borderWidth:2,
    backgroundColor:"red",
    alignItems:"center",
  

  },
  resultValue:{
fontSize:30,
fontWeight:"bold",
color:"white"
  },
  inputcontainer:{
    height:90,
    backgroundColor:"#0A79DE",
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
    height:100,
    borderColor:"red",
    borderWidth:2,
    width:"25%",
    backgroundColor:"lightgreen"

  },
  textButtonConverter:
  {
    color:"purple",
    fontSize:20,
    fontWeight:"bold"

  }


});


