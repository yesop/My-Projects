import React, {useState} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, Divider, Icon, TextInput} from "react-native-paper";
import {Colors} from "../../components/Colors";
import {useNavigation, useRoute} from "@react-navigation/native";
import LongButton from "../../components/Buttons/LongButton";

const SignUpPassword = () => {
    const router = useRoute()
    const navigation = useNavigation()
    // const {email} = router.params
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    const handlePasswordIconPress = () => {
        setIsPasswordVisible(!isPasswordVisible);
    };
    const validatePassword = (password) => {
        // Check for minimum length of 8 characters
        const minLength = /^.{8,}$/;
        // Check for at least one special character
        const specialChar = /[!@#$%^&*(),.?":{}|<>]/;
        // Check for at least one number
        const hasNumber = /\d/;

        if (!minLength.test(password)) {
            return 'Password must be at least 8 characters long.';
        } else if (!specialChar.test(password)) {
            return 'Password must include at least one special character.';
        } else if (!hasNumber.test(password)) {
            return 'Password must include at least one number.';
        } else {
            return 'Password is valid.';
        }
    };
    const handleProceed = () => {
        const validationResult = validatePassword(password);
        if (validationResult === 'Password is valid.') {
            navigation.navigate('signUpOtp');
        } else {
            setErrorMessage(validationResult);
        }
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            <View style={{flexDirection: 'row', position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 20,}}>Login</Text>
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
            <View style={{marginTop: 30, gap: 10,}}>
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={'Your password'}
                    value={password}
                    secureTextEntry={!isPasswordVisible}
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
                {errorMessage && <Text style={{ color: 'red' }}>{errorMessage}</Text>}
                <View style={{gap: 5}}>
                    <Text
                        style={{fontFamily: 'sf-semiBold', textDecorationLine: 'underline', textAlign: 'left', marginTop: 10,}}
                    >Password hint</Text>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                        <Icon size={18} source={'close'} color={"black"}/>
                        <Text style={{fontFamily: 'sf-light', textAlign: 'left',}}>8 minimum characters</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                        <Icon size={18} source={'close'} color={"black"}/>
                        <Text style={{fontFamily: 'sf-light', textAlign: 'left',}}>Include special character</Text>
                    </View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                        <Icon size={18} source={'close'} color={"black"}/>
                        <Text style={{fontFamily: 'sf-light', textAlign: 'left',}}>Include a number</Text>
                    </View>


                </View>

                <LongButton
                    textColor={"white"}
                    text={"Proceed"}
                    backgroundColor={Colors.skyblue}
                    onPress={handleProceed}
                />
                <View style={{flexDirection: 'row', gap: 10,marginTop: 10}}>
                    <Divider style={{height: 3, flexGrow: 1, backgroundColor: Colors.skyblue}}/>
                    <Divider style={{height: 3, flexGrow: 1, backgroundColor: Colors.skyblue}}/>
                    <Divider style={{height: 3, flexGrow: 1, backgroundColor: Colors.lightGray}}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUpPassword;
const styles = StyleSheet.create({})
