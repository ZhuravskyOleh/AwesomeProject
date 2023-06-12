import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import { SafeAreaView } from 'react-native';



const App = () => (
  <View style={styles.container}>
    <ImageBackground source={require('./assets/bg.jpg')} resizeMode="cover" style={styles.image}>
      <RegistrationScreen/>
    </ImageBackground>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    flex: 1,
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    fontWeight: 'bold',
    textAlign: 'center',
    backgroundColor: '#000000c0',
  },
});

export default App;