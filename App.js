import React from 'react';
import { StyleSheet, Text, View, SafeAreaView, ScrollView, Dimensions } from 'react-native';
import {createDrawerNavigator, createAppContainer, DrawerItems} from 'react-navigation';
import HomeScreen from './screens/HomeScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends React.Component {
  render() {
    return (
      <MyApp />
    );
  }
}

const AppDrawerNavigator = createDrawerNavigator({
  Home: HomeScreen,
  Settings: SettingsScreen
});
const MyApp = createAppContainer(AppDrawerNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
