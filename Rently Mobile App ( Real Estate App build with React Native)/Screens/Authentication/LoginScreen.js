import React, {useState} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, TextInput} from "react-native-paper";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";
import {useNavigation} from "@react-navigation/native";

const LoginScreen = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const handleLogin = () => {
        navigation.navigate('bottomTab')
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15,}}>
            <View style={{paddingTop:"60%", gap:15}}>
            <View style={{justifyContent:'center', alignItems:'center', gap:10}}>
                <Text style={{fontFamily:'sf-semiBold'}}>
                    Sign in to your account
                </Text>
                <Text style={{fontFamily:"sf-regular", color:"#3E297B"}}>
                    To access all our features
                </Text>
            </View>
            <View style={{gap: 10, marginTop: 30,}}>
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={"Your email"}
                    value={email}
                    onChangeText={setEmail}
                    style={{backgroundColor: Colors.background, fontFamily:'sf-regular'}}
                    theme={{
                        colors: {
                            primary: '#3E297B',
                        },
                    }}
                />
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={'Your password'}
                    value={password}
                    secureTextEntry={true}
                    onChangeText={setPassword}
                    style={{backgroundColor: Colors.background, fontFamily:'sf-regular'}}
                    theme={{
                        colors: {
                            primary: '#3E297B',
                        },
                    }}
                />
            </View>
            <View style={{gap:30}}>
                <TouchableOpacity onPress={() => navigation.navigate('bottomTab')} style={{padding:15, justifyContent:'center', alignItems:'center', backgroundColor:'#3E297B', borderRadius:10}}>
                    <Text style={{color:'white', fontFamily:'sf-semiBold'}}> Sign In</Text>
                </TouchableOpacity>
                <TouchableOpacity onPress={() => navigation.navigate('forgotpassword')} style={{justifyContent:"center", alignItems:'center'}}>
                    <Text style={{color:'#363636', fontFamily:'sf-regular'}}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>
                <View style={{flexDirection:'column', gap:60, paddingTop:70}}>
                    <TouchableOpacity onPress={() => navigation.navigate('signUp')} style={{padding:15, alignItems:"center", borderRadius:10, backgroundColor:'#9D93BC'}}>
                        <Text style={{color:'white', fontFamily:'sf-regular'}}>I don't have an account</Text>
                    </TouchableOpacity>
                    <View style={{flexDirection:"column", padding:15, justifyContent:'center', alignItems:'center'}}>
                        <Text style={{color:'#878787', fontSize:11, fontFamily:'sf-regular'}}>from</Text>
                        <Text style={{color:'#878787', fontSize:11, fontFamily:'sf-regular'}}>Rently LLC</Text>
                    </View>
                </View>

            </View>
            </View>
        </SafeAreaView>

    );
};

export default LoginScreen;
const styles = StyleSheet.create({})
