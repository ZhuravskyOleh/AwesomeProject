import React from 'react';
import { StyleSheet, View } from 'react-native';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';



const App = () => (
  <View style={styles.container}>
      {/* <RegistrationScreen/> */}
      <LoginScreen/>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;