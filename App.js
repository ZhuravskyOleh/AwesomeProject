import React from 'react';
import { ImageBackground, StyleSheet, Text, View, KeyboardAvoidingView } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';



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
    paddingTop: 263,
    flex: 1,
    justifyContent: 'center',
  },
});

export default App;