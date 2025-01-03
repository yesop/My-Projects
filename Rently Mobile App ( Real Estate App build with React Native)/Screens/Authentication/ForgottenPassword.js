import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, TextInput} from "react-native-paper";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";
import {useNavigation} from "@react-navigation/native";

const ForgorttenPassword = () => {
    const navigation = useNavigation()
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15,}}>
            <View style={{paddingTop:"60%", gap:10}}>
            <View style={{justifyContent:'center', alignItems:'center', gap:8}}>
                <Text style={{fontFamily:'sf-semiBold'}}>
                    Forgot Password
                </Text>
                <Text style={{fontFamily:"sf-regular", color:"#3E297B"}}>
                    Password reset
                </Text>
            </View>
            <View style={{gap: 10, marginTop: 30,}}>
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={'Your email'}
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
                <TouchableOpacity onPress={() => navigation.navigate('forgotpasswordsent')}  style={{padding:15, justifyContent:'center', alignItems:'center', backgroundColor:'#3E297B', borderRadius:9}}>
                    <Text style={{color:'white', fontFamily:'sf-semiBold'}}> Reset Password</Text>
                </TouchableOpacity>

                <View style={{flexDirection:'column', gap:60, paddingTop:200}}>
                    <TouchableOpacity onPress={() => navigation.navigate('login')} style={{padding:15, alignItems:"center", borderRadius:9, backgroundColor:'#9D93BC'}}>
                        <Text style={{color:'white', fontFamily:'sf-regular'}}>Go Back</Text>
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

export default ForgorttenPassword;
const styles = StyleSheet.create({})

