import * as React from 'react';
import { Text, View, StyleSheet, Button } from 'react-native';
import Constants from 'expo-constants';
import { createAppContainer, createSwitchNavigator, } from 'react-navigation'; 
import {createBottomTabNavigator} from 'react-navigation-tabs'

// You can import from local files
import Look from './components/search';
import Trans from './components/transaction';

// or any pure javascript modules available in npm
//import { Card } from 'react-native-paper';

export default class App extends React.Component {
  render() {
    return (
      <View style={{flex:1}}>
        <Appcontainer />
      </View>
    )
  }
}

var switchContainer = createBottomTabNavigator({
  Search : Look,
  Transaction: Trans
})
const Appcontainer = createAppContainer(switchContainer)