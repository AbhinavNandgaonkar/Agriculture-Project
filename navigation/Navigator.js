import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

import HomeScreen from '../Screens/HomeScreen';
import LoginScreen from '../Screens/LoginScreen';
import Registration from '../Screens/Registration';
import MainPageScreen from '../Screens/MainPageScreen';
import CalculatorScreen from '../Screens/CalculatorScreen';
import CurrencyScreen from '../Screens/CurrencyScreen';
import DiceScreen from '../Screens/DiceScreen';

const GameNavigator = createStackNavigator({
    HomePage : HomeScreen,
    Login : LoginScreen,
    Register : Registration,
    MainPage : MainPageScreen,
    SimpleCalculator : CalculatorScreen,
    CurrencyConverter : CurrencyScreen,
    Dice : DiceScreen
});

export default createAppContainer(GameNavigator);
  