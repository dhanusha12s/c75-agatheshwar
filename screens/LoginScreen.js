import React from 'react';
import { Text, View, TouchableOpacity, TextInput, Image, StyleSheet, KeyboardAvoidingView, Alert } from 'react-native';

export default class LoginScreen extends React.Component{
    render(){
        return(
            <KeyboardAvoidingView style={{alignItems:'center', marginTop:20}}>
                    <View>
                        <Image 
                        source={require("../assets/booklogo.jpg")}
                        style={{width:200,height:200}}/>
                <Text style ={{textAlign:'center', fontSize:30}}>Wily</Text>
                </View>
                <View>
                    <TextInput style={StyleSheet.loginBox}
                    placeholder="abc@example.com"
                    keyboardType="email-address"
                    onChangeText={(text=>{this.setState({
                        emailId:text
                    })})} />


<TextInput style={StyleSheet.loginBox}
                    placeholder="enter password"
                    secureTextEntry={true}
                    onChangeText={(text=>{this.setState({
                        password:text
                    })})} />
                </View>
              </KeyboardAvoidingView>
        )
    }
}


const styles=StyleSheet.create({
    loginBox:{
        width:300,
        height:50,
        borderWidth:2,
        fontSize:20,
        margin:10,
        paddingLeft:10,

    }
})