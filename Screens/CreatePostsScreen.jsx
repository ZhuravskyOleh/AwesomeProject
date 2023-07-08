import React from "react";
import { useNavigation } from "@react-navigation/core";
import {
    View,
    StyleSheet,
    Platform,
    Text,
    TextInput,
    Image,
    TouchableOpacity,   
    SafeAreaView,   
} from "react-native";



const CreatePostScreen = () => {
    const navigation = useNavigation();

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={()=>navigation.navigate('Posts')}>
                    <Image source={require('../assets/arrow.png')} style={styles.return} />
                </TouchableOpacity>
                <Text style={styles.title}>Створити публікацію</Text>
            </View>
            <View style={styles.main}>
                <TouchableOpacity style={styles.addPhoto}>
                    <View style={styles.addPhotoIconWrapp}>
                        <Image source={require('../assets/camera.png')} style={styles.camera} />
                    </View>
                </TouchableOpacity>
                <Text style={styles.addPhotoText}>Завантажте фото</Text>
                <TextInput placeholder="Назва..." style={styles.input} />
                <TextInput placeholder="Місцевість" style={styles.input} />
                <TouchableOpacity style={styles.publish}>
                    <Text style={styles.publishText}>Опублікувати</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.footer}>
                <TouchableOpacity style={styles.delete}>
                    <Image source={require('../assets/trash.png')} style={styles.deleteIcon} />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 16,
        backgroundColor:'#ffffff'
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

    return: {
        width: 24,
        height: 24,
        marginLeft: 16,
    },

    title: {
        marginLeft: 58,
        fontFamily: 'Roboto_500Medium',
        fontSize: 17,
        fontWeight: '500',
        textAlign: 'center',
    },
    main: {  
        height: Platform.OS === 'ios' ? 641 : 685,
        paddingHorizontal:16,
    },

    addPhoto: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        marginTop: 32,
        marginBottom:8,
        width: 343,
        height: 240,
        backgroundColor: '#F6F6F6',
        borderRadius:8
    },

    addPhotoIconWrapp: {
        display: 'flex',
        alignItems: 'center',
        justifyContent:'center',
        width: 60,
        height: 60,
        borderRadius: 50,
        backgroundColor:'#ffffff'
    },

    camera: {
        width: 16,
        height:16
    },

    addPhotoText: {
        marginBottom:32,
        fontFamily: 'Roboto_400Regular',
        fontSize: 16,
        color:'#BDBDBD'
    },

    input: {
        marginBottom:16,
        padding: 16,
        borderBottomWidth: 1,
        borderColor:'#E8E8E8'
    },

    publish: {
        display: 'flex',
        alignItems:'center',
        marginTop:16,
        width: '100%',
        paddingVertical: 16,
        paddingHorizontal: 32,
        borderRadius:100,
        backgroundColor: '#F6F6F6',
    },

    publishText: {
        fontFamily: 'Roboto_400Regular',
        fontSize:16,
        color:'#BDBDBD'
    },

    footer: {
        justifyContent: 'space-around',
        flexDirection: 'row',
        padding: 9,
        height: 83,
    },
    
    delete: {
        alignItems: 'center',
        justifyContent: 'center',
        width: 70,
        height: 40,
        backgroundColor: '#F6F6F6',
        borderRadius: 20,
    },

    deleteIcon: {
        width: 24,
        height: 24,
    },
});

export default CreatePostScreen;

