import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export default class HomeScreen extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Text>HomeScreen :3!</Text>
        <TouchableOpacity
          style={styles.button}
          onPress={() => this.props.navigation.openDrawer()}
        >
          <Text style={styles.buttonText}>Open Drawer</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    position: 'absolute',
    top: 50,
    left: 0,
    width: 150,
    height: 50,
    backgroundColor: '#f39c12',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonText: {
    color: 'white'
  }
});
