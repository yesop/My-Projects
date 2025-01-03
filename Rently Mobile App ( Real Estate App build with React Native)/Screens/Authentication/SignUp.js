import React, {useState} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, TextInput} from "react-native-paper";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";
import {useNavigation} from "@react-navigation/native";

const SignUp = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15,}}>
            <View style={{paddingTop:"45%", gap:15}}>
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
                    label={'Your phone number'}
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
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={"Your password"}
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
                    label={'Confirm password'}
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
            <View style={{gap:85}}>
                <View style={{padding:15, justifyContent:'center', alignItems:'center', backgroundColor:'#3E297B', borderRadius:10}}>
                    <Text style={{color:'white', fontFamily:'sf-semiBold'}}>Create Account</Text>
                </View>
                
                <View style={{flexDirection:'column', gap:50, paddingTop:20}}>
                    <TouchableOpacity onPress={() => navigation.navigate('login')} style={{padding:15, alignItems:"center", borderRadius:10, backgroundColor:'#9D93BC'}}>
                        <Text style={{color:'white', fontFamily:'sf-regular'}}>I already have an account</Text>
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

export default SignUp;
const styles = StyleSheet.create({})
