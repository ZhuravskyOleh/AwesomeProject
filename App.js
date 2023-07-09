import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import {  useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';
import RegistrationScreen from './Screens/RegistrationScreen';
import LoginScreen from './Screens/LoginScreen';
import PostsScreen from './Screens/PostsScreen';
import CreatePostScreen from './Screens/CreatePostsScreen';
import ProfileScreen from './Screens/ProfileScreen';

const MainStack = createStackNavigator();

const App = () => {
  const [fontsLoaded] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium
  });
  if (!fontsLoaded) {
    return null;
  }
  return (
    <NavigationContainer>
      <MainStack.Navigator initialRouteName='Login'>
        <MainStack.Screen name='Registration' component={RegistrationScreen} options={{ headerShown: false}}/>
        <MainStack.Screen name='Login' component={LoginScreen} options={{ headerShown: false}}/>
        <MainStack.Screen name='Posts' component={PostsScreen} options={{ headerShown: false }} />
        <MainStack.Screen name='CreatePost' component={CreatePostScreen} options={{ headerShown: false }} />
        <MainStack.Screen name='Profile' component={ProfileScreen} options={{ headerShown: false }}/>
      </MainStack.Navigator>
    </NavigationContainer>
  );
};

export default App;

