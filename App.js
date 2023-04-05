import { StatusBar } from 'expo-status-bar';
import { Alert, StyleSheet, Text, View } from 'react-native';
import FlatButton from './components/button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <FlatButton onPress={ ()=> {
        Alert.alert("I am pressed!")
      }
      } text='Map' />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
