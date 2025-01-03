import React, {useState} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {useNavigation} from "@react-navigation/native";
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, TextInput} from "react-native-paper";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";

const ChangePassword = () => {
    const navigation = useNavigation()
    const [oldPassword, setOldPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [password, setPassword] = useState('');
    const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handlePasswordIconPress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const handleConfirmPasswordIconPress = () => {
        setIsConfirmPasswordVisible(!isConfirmPasswordVisible);
    };
    const handleProceed = () => {
        navigation.navigate('profile')
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            <View style={{flexDirection: 'row', position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 20,}}>Enter new password</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{position: 'absolute', left: 0}}
                >
                    <Avatar.Icon
                        icon={"chevron-left"}
                        size={25}
                        style={{backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,}}
                    />
                </TouchableOpacity>

            </View>
            <View style={{gap: 15, marginTop: 30,}}>
                <Text style={{fontFamily: 'sf-light', textAlign: 'center',}}>Please create a new password</Text>
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={'Enter old password'}
                    value={oldPassword}
                    secureTextEntry={isPasswordVisible}
                    onChangeText={setOldPassword}
                    style={{backgroundColor: 'white'}}
                    theme={{
                        colors: {
                            primary: Colors.skyblue,
                        },
                    }}
                    right={
                        <TextInput.Icon
                            icon={isPasswordVisible ? "eye-off" : "eye"}
                            onPress={handlePasswordIconPress}
                        />
                    }
                />
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={'Enter new password'}
                    value={password}
                    secureTextEntry={isPasswordVisible}
                    onChangeText={setPassword}
                    style={{backgroundColor: 'white'}}
                    theme={{
                        colors: {
                            primary: Colors.skyblue,
                        },
                    }}
                    right={
                        <TextInput.Icon
                            icon={isPasswordVisible ? "eye-off" : "eye"}
                            onPress={handlePasswordIconPress}
                        />
                    }
                />
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={"confirm password"}
                    value={confirmPassword}
                    onChangeText={setConfirmPassword}
                    secureTextEntry={!isConfirmPasswordVisible}
                    style={{backgroundColor: 'white'}}
                    theme={{
                        colors: {
                            primary: Colors.skyblue,
                        },
                    }}
                    right={
                        <TextInput.Icon
                            icon={isConfirmPasswordVisible ? "eye-off" : "eye"}
                            onPress={handleConfirmPasswordIconPress}
                        />
                    }
                />
                <LongButton textColor={"white"} text={"Confirm password change"} backgroundColor={Colors.skyblue} onPress={handleProceed}/>
            </View>
        </SafeAreaView>

    );
};

export default ChangePassword;
const styles = StyleSheet.create({})
