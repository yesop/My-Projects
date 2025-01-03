import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar} from "react-native-paper";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";
import {useNavigation} from "@react-navigation/native";

const SignUpOtpVerified = () => {
    const navigation = useNavigation()
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            <Text style={{fontFamily: 'sf-semiBold', fontSize: 20, textAlign: 'center'}}>Verification</Text>
            <View style={{marginTop: 30, flex: 1, justifyContent: 'space-between'}}>
                <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 3}}>
                    <Text style={{fontFamily: 'sf-light',}}>Your email has been verified</Text>
                    <Avatar.Icon icon={'check-bold'} style={{backgroundColor: Colors.checkGreen, }} size={20}/>
                </View>
                <LongButton backgroundColor={Colors.skyblue} textColor={"white"} text={"Go to login"} onPress={() => navigation.navigate('login')}/>
            </View>

        </SafeAreaView>
    );
};

export default SignUpOtpVerified;
const styles = StyleSheet.create({})
