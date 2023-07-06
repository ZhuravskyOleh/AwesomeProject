import React from "react";
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
    SafeAreaView, 
    Button
} from "react-native";
import {  useFonts, Roboto_400Regular, Roboto_500Medium } from '@expo-google-fonts/roboto';


const PostsScreen = () => {
    const [fontsLoaded] = useFonts({
        Roboto_500Medium
    })
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Публікації</Text>
                <TouchableOpacity>
                    <Image source={require('../assets/log-out.png')} style={styles.logOutIcon} />
                </TouchableOpacity>
            </View>
            <View style={styles.main}>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity>
                    <Image source={require('../assets/grid.png')} style={styles.gridIcon} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.add}>
                    <Image source={require('../assets/Union.png')} style={styles.unionIcon} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image source={require('../assets/user.png')} style={styles.userIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
    },
    header: {
        margin: 0,
        padding: 0,
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#BDBDBD',
        height: 44,
    },
    logOutIcon: {
        // flex:0.5,
        width: 24,
        height: 24,
        marginLeft: 109,
    },
    title: {
        marginLeft: 130,
        fontFamily: 'Roboto_500Medium',
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
    },
    main: {
        
        height: Platform.OS === 'ios' ? 641 : 685
    },
    footer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 9,
        height: 83,
        borderTopWidth: 1,
        borderTopColor: '#BDBDBD',
    },
    gridIcon: {
        width: 40,
        height: 40,
    },
    add: {
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
    },
    userIcon: {
        width: 40,
        height: 40,
    }
});

export default PostsScreen;