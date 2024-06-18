import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text, SafeAreaView, TextInput, Button, Image} from "react-native";
import { useState } from 'react';

export default function Login({ navigation }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    return (
        <SafeAreaView style={styles.safeArea}>
            <View style={styles.container}>
                <Text style={styles.job}>Jobizz</Text>
                <Text style={styles.welcome}>Welcome Back 👋</Text>
                <Text style={styles.headline}> Let's log in. Apply to jobs!</Text>
                <StatusBar style="auto" />
                <View>
                    <TextInput style={styles.name}
                    placeholder='Name'
                    value={name}
                    onChangeText={setName}/>
                    <TextInput style={styles.email}
                    placeholder='Email'
                    value={email}
                    onChangeText={setEmail}/>
                    <View style={styles.login}>
                        <Button
                        color="white"
                        title="Login"
                        onPress={() => (navigation.navigate("Home", {myName: name, myEmail: email}))}/>
                    </View>  
                </View>
                <View style={styles.alt}>
                    <View style={styles.line}/>
                    <Text style={styles.text}> Or continue with</Text>
                    <View style={styles.line}/>
                </View>
                <View style={styles.alt}>
                    <View style={styles.image} >
                        <Image style={styles.img} source={require('../images/apple.png')}/>
                    </View>
                    <View style={styles.image}>
                        <Image style={styles.img} source={require('../images/facebook.png')}/>
                    </View>
                    <View style={styles.image}>
                        <Image style={styles.img} source={require('../images/google.png')}/>
                    </View>
                </View>
                <View style={{opacity: 1, top: 160}}>
                    <Text style={{opacity: 0.4}}>
                        Haven't an account? <Text style={{color: 'blue', fontWeight: 'bold', opacity: 1}}>Register</Text>
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
  }

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#FAFAFD',
        alignItems: 'center',
        justifyContent: 'center',
    },
    safeArea: {
        flex: 1,
        backgroundColor: '#FAFAFD',
    },
    job: {
        color: '#356899',
        fontSize: 23,
        fontWeight: '600',
        bottom: 135,
        right: 150,
    },
    welcome: {
        fontSize: 24,
        fontWeight: '600',
        bottom: 110,
        right: 90,
    },
    headline: {
        fontWeight: '400',
        fontSize: 14,
        opacity: 0.4,
        bottom: 100,
        right: 99
    },
    name: {
        borderWidth: 1,
        width: 370,
        padding: 20,
        borderRadius: 10,
        borderColor: '#AFB0B6',
        bottom: 49,
        right: 5
    },
    email: {
        borderWidth: 1,
        width: 370,
        padding: 20,
        borderRadius: 10,
        borderColor: '#AFB0B6',
        fontSize: 14,
        fontWeight: '500',
        bottom: 32,
        right: 5
    },
    login: {
        bottom: -5,
        backgroundColor: '#356899',
        height: 58,
        width: 370,
        paddingTop: 10,
        borderRadius: 10,
        right: 5
    },
    alt: {
        flexDirection: 'row',
        alignItems: 'center',
        top: 70
    },
    line: {
        flex: 0.5,
        height: 1,
        width: '80%',
        backgroundColor: '#AFB0B6'
    },
    text: {
        color: '#AFB0B6'
    },
    img: {
        position: 'absolute',
       
    },
    image: { 
        borderRadius: 100,
        height: 56,
        width: 56,
        top: 40,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        backgroundColor: '#FFFFFF',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.3,
        shadowRadius: 2,
    },
}); 