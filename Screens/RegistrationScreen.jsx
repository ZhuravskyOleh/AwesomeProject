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


  const RegistrationScreen = () => {
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
                <Text style={styles.title}>Реєстрація</Text>
                <TextInput
                  style={[
                    styles.input,
                    focusedInput === "login" && styles.focusedInput,
                  ]}
                  onFocus={() => handleFocus("login")}
                  onBlur={handleBlur}
                  placeholder="Логін"
                  value={login}
                  onChangeText={setLogin}
                />
                <TextInput
                  style={[
                    styles.input,
                    focusedInput === "email" && styles.focusedInput,
                  ]}
                  onFocus={() => handleFocus("email")}
                  onBlur={handleBlur}
                  placeholder="Адреса електронної пошти"
                  textContentType="emailAddress"
                  value={email}
                  onChangeText={setEmail}
                  keyboardType="email-address"

                />
                <View style={styles.passWrap}>
                  <TextInput
                    style={[
                      styles.input,
                      focusedInput === "password" && styles.focusedInput,
                    ]}
                    onFocus={() => handleFocus("password")}
                    onBlur={handleBlur}
                    placeholder="Пароль"
                    textContentType="password"
                    secureTextEntry={!showPassword}
                    value={password}
                    onChangeText={setPassword}
                  />
                  <TouchableOpacity style={styles.visiblePass} onPress={togglePasswordVisibility}>
                    <Text style={styles.passText}>
                      {showPassword ? "Приховати" : "Показати"}
                    </Text>
                  </TouchableOpacity>
                </View>
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
          <View style={styles.bottomWrap}>
            <TouchableOpacity
              style={styles.button}
              onPress={handleSubmit}
            >
              <Text style={styles.buttonText}>Зареєстуватися</Text>
            </TouchableOpacity>
            <View style={styles.footerWrap}>
              <TouchableOpacity>
                <Text style={styles.footerText}>Вже є акаунт?</Text>
              </TouchableOpacity>
              <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                <Text style={styles.footerText}>Увійти</Text>
              </TouchableOpacity>
            </View>
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

    input: {
      width: 343,
      backgroundColor: "#F6F6F6",
      height: 50,
      marginHorizontal: 16,
      marginBottom: 16,
      padding: 16,
      borderWidth: 1,
      borderColor: "#E8E8E8",
      borderRadius: 8,
      color: "#BDBDBD",
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
    },

    focusedInput: {
      borderColor: "#FF6C00",
    },

    passWrap: {
      position: "relative",
    },

    visiblePass: {
      position: "absolute",
      right: 32,
      top: 16,
    },

    passText: {
      color: "#1B4371",
      fontFamily: 'Roboto_400Regular',
      fontSize: 16
    },

    button: {
      marginTop: 43,
      marginLeft: 16,
      marginBottom: 32,
      width: 343,
      height: 50,
      borderRadius: 25,
      backgroundColor: "#FF6C00",
      alignItems: "center",
      justifyContent: "center",
    },

    buttonText: {
      color: "#ffffff",
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      lineHeight: 19,
      fontWeight: "400",
    },

    footerWrap: {
      display: "flex",
      flexDirection: "row",
      gap: 5,
      justifyContent: "center",
    },

    footerText: {
      fontFamily: 'Roboto_400Regular',
      fontSize: 16,
      fontWeight: "400",
      color: "#1B4371",
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

  export default RegistrationScreen;
