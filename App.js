import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import FlatButton from './components/button';
import FWMapView from './components/fwMap';

import React, { Component } from 'react';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      isHidden: false,
    };
  }
  render() {
    return (
      <View style={styles.container}>
        <StatusBar style="auto" />
        <FWMapView hide={this.state.isHidden} />
        <FlatButton onPress={ ()=> {
          this.state.isHidden = true
        }
        } text='Map' />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;