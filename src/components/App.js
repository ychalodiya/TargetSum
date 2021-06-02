/* eslint-disable indent */
import React, { Component } from 'react';
import { Text, View, StyleSheet} from 'react-native';

export default class App extends Component {
  render() {
    return (
          <View style = {styles.container}>
              <Text>TargetSum</Text>
          </View> 
        );
    // eslint-disable-next-line indent
    }
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    }
});