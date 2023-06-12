import React from "react";
import { View, StyleSheet,Text, TextInput, Button } from "react-native";

export default function RegistrationScreen () {
    return (
        <View style={styles.wrap}>
            <Text style={styles.title}>Реєстрація</Text>
            <TextInput style={styles.input} placeholder="Логін" />
            <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
            <TextInput style={styles.input} placeholder="Пароль" />
            <Button title="Зареєстуватися" style={styles.button} />
        </View>
    );
};

const styles = StyleSheet.create({
    wrap: {
        marginTop: 263,
        paddingTop: 92,
        height: "100%",
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },

    title: {
        fontSize: 30,
        fontWeight: 500,
        textAlign: 'center',
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
        color: '#BDBDBD',
        fontSize:16,
    },
    button: {
        marginTop:43,
        // backgroundColor: "#FF6C00",
        // width: 343,
        // marginLeft:16,
    },
});