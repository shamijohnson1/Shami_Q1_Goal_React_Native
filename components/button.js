import React from 'react';
import { StyleSheet, TouchableOpacity, Text, View } from 'react-native';
import { Image } from 'react-native'
import ImageMap from './images/map';


export default function FlatButton({ text, onPress }) {
  return (
    <TouchableOpacity onPress={onPress}>
      <View style={styles.button}>
        <ImageMap/>
        <Text style={styles.buttonText}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 30,
    backgroundColor: '#97191b',
    paddingTop: 10,
    marginTop:450
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontSize: 16,
    textAlign: 'center',
  }
});