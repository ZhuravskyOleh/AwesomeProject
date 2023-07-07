import React from 'react';
import { StyleSheet, View } from 'react-native';
import {  useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';

import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/PostsScreen';



const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <View style={styles.container}>
    {/* <RegistrationScreen/> */}
    {/* <LoginScreen /> */}
    <PostsScreen />
  </View>
  )
}
  


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;

