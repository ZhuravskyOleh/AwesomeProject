import React, { useState } from "react";
  import { useNavigation } from "@react-navigation/core";
  import {
    View,
    StyleSheet,
    Platform,
    Text,
    TextInput,
    Image,
    ImageBackground,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
  } from "react-native";


  const ProfileScreen = () => {
    const [login, setLogin] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [focusedInput, setFocusedInput] = useState("");

    const navigation = useNavigation();

    const handleSubmit = () => {
      console.log({login,email,password})
      setLogin('');
      setEmail('');
      setPassword('');
    }

    const handleFocus = (inputName) => {
      setFocusedInput(inputName);
    };

    const handleBlur = () => {
      setFocusedInput("");
    };

    const togglePasswordVisibility = () => {
      setShowPassword(!showPassword);
    };


    return (
      <View style={styles.container}>
        <ImageBackground
          source={require("../assets/bg.jpg")}
          resizeMode="cover"
          style={styles.image}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS === "ios" ? "padding" : "height"}
          >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
              <View style={styles.formWrap}>
                <View style={styles.photoWrapp}>
                  <TouchableOpacity style={styles.add}>
                    <Image
                      source={require("../assets/add.png")}
                      style={styles.addIcon}
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </KeyboardAvoidingView>
          <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('../assets/grid.png')} style={styles.gridIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.addBtn} onPress={()=>navigation.navigate('CreatePost')}>
                    <Image source={require('../assets/user.png')} style={styles.userIcon} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>navigation.navigate('Profile')}>
                    <Image source={require('../assets/Union.png')} style={styles.unionIcon} />
                </TouchableOpacity>
            </View>
        </ImageBackground>
      </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
    },

    image: {
      flex: 1,
      justifyContent: "flex-end",
    },

    formWrap: {
      position: "relative",
      paddingTop: 92,
      maxHeight: 549,
      backgroundColor: "#fff",
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
    },

    bottomWrap: {
      paddingBottom: 45,
      backgroundColor: "#fff",
    },

    title: {
      fontFamily: 'Roboto_500Medium',
      fontSize: 30,
      fontWeight: "bold",
      textAlign: "center",
      marginBottom: 33,
    },

    footer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 9,
        height: 83,
        borderTopWidth: 1,
      borderTopColor: '#BDBDBD',
        backgroundColor:'#ffffff'
    },
    gridIcon: {
        width: 40,
        height: 40,
    },
    addBtn: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 40,
        backgroundColor: '#FF6C00',
        borderRadius: 20,
    },
    unionIcon: {
        width: 13,
      height: 13,
        color:'#000000'
    },
    userIcon: {
        width: 40,
        height: 40,
    },

    photoWrapp: {
      position: "absolute",
      top: -60,
      right: 128,
      width: 120,
      height: 120,
      backgroundColor: "#F6F6F6",
      borderRadius: 16,
    },

    add: {
      position: "absolute",
      right: -12,
      bottom: 14,
      width: 25,
      height: 25,
      borderRadius: 50,
    },

    addIcon: {
      width: 25,
      height: 25,
    },
  });

  export default ProfileScreen;
