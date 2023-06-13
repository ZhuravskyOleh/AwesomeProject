import React from "react";
import {
    View,
    StyleSheet,
    Text,
    TextInput,
    Image,
    TouchableOpacity,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard
} from "react-native";

const RegistrationScreen = () => {
    return (
        <>
            <KeyboardAvoidingView
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
                <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                    <View style={styles.formWrap}>
                        <Text style={styles.title}>Реєстрація</Text>
                        <TextInput style={styles.input} placeholder="Логін" />
                        <TextInput style={styles.input} placeholder="Адреса електронної пошти" />
                        <TextInput style={styles.input} placeholder="Пароль" />
                        <View style={styles.photoWrapp}>
                            <TouchableOpacity style={styles.add}>
                                <Image source={require('../assets/add.png')} />
                            </TouchableOpacity>
                        </View>
                    </View>
                </TouchableWithoutFeedback>
            </KeyboardAvoidingView>
            <View style={styles.bottomWrap}>
                <TouchableOpacity style={styles.button} onPress={() => { }}>
                    <Text style={styles.buttonText}>Зареєстуватися</Text>
                </TouchableOpacity>
                <View style={styles.footerWrap}>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Вже є акаунт?</Text>
                    </TouchableOpacity>
                    <TouchableOpacity>
                        <Text style={styles.footerText}>Увійти</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    formWrap: {
        position:'relative',
        paddingTop: 92,
        // paddingBottom: 45,
        maxHeight: 549,
        backgroundColor: "#fff",
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
    },
    bottomWrap: {
        paddingBottom: 45,
        backgroundColor:'#fff',
    },

    title: {
        fontSize: 30,
        fontWeight: 'bold',
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
        fontSize: 16,
    },
    button: {
        marginTop: 43,
        marginLeft: 16,
        marginBottom: 32,
        width: 343,
        height: 50,
        borderRadius: 25,
        backgroundColor: '#FF6C00',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        color: '#ffffff',
        fontSize: 16,
        lineHeight: 19,
        fontWeight: 400,
    },
    footerWrap: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5,
        justifyContent: 'center',
    },
    footerText: {
        fontSize: 16,
        fontWeight: 400,
        color: '#1B4371',
        textDecorationLine: 'underline',
    },
    photoWrapp: {
        position: 'absolute',
        top: -60,
        right:128,
        width: 120,
        height: 120,
        backgroundColor: "#F6F6F6",
        borderRadius:16,
    },
    add: {
        position: 'absolute',
        right: -12,
        bottom:14,
        width: 25,
        height: 25,
        borderRadius: '50%',
        // borderWidth: 1,
        // borderColor:'#FF6C00',
    }
});


export default RegistrationScreen;