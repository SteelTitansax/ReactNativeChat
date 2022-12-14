import React, {useState , useEffect} from "react"
import { KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import { Button, Input, Image} from "react-native-elements";
import { StatusBar } from "expo-status-bar";
import {auth} from "../firebase";
 
const LoginScreen = ({navigation}) =>  {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    useEffect( () => {
       const unsubscribe =  auth.onAuthStateChanged((authUser) => {
            console.log(authUser);
            if(authUser) {
                navigation.replace("Home");
            }
        });

        return unsubscribe;  

    }, []);

    const signIn = () => {
        auth.signInWithEmailAndPassword(email,password)
        .catch((error) => alert(error));
    };


    return (
        <KeyboardAvoidingView behavior="padding" style={styles.container}>
            <StatusBar style="light"/>
            <Image
              source={{
                  uri: 
                  "https://blog.mozilla.org/internetcitizen/files/2018/08/signal-logo.png",

              }}
              style ={{ width:200,height: 200}}
            />
            <View style={styles.inputContainer}>
              <Input 
              placeholder="Email" 
              autofocus 
              type="Email"
              value={email}
              onChangeText={(text) => setEmail(text)}
              />
              <Input 
              placeholder="Password" 
              secureTextEntry 
              type="Password"
              value={password}
              onChangeText ={(text) => setPassword(text)}
              onSubmitEditing ={signIn}
              />
             
            </View>
            <Button containerStyle={styles.button} onPress={signIn} title="Login" />
            <Button containerStyle={styles.button} onPress={() => navigation.navigate("Register")} type="outline" title="Register" />
            <View style={{ height:100}} />

        </KeyboardAvoidingView>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1, 
        alignItems: "center",
        justifyContent: "center",
        padding: 10,


    },
    inputContainer: {},
    button: {
        width: 200,
        marginTop: 10,

    },

});