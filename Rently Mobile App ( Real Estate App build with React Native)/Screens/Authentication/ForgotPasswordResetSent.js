import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar} from "react-native-paper";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";
import {useNavigation, useRoute} from "@react-navigation/native";

const ForgotPasswordResetSent = () => {
    const router = useRoute()
    const navigation = useNavigation()
    const email = 'aelvis726@gmail.com'
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            <Text style={{fontFamily: 'sf-semiBold', fontSize: 20, textAlign: 'center'}}>Password reset</Text>
            <View style={{marginTop: 30, flex: 1, justifyContent: 'space-between'}}>
                <View style={{backgroundColor: Colors.lightGray, padding: 25, borderRadius: 10, alignItems:'center' }}>
                    <Text style={{fontFamily: 'sf-light',}}>A password rest link has been sent to your
                        email, <Text style={{fontFamily: 'sf-semiBold',}}>{email}</Text>. Please check your inbox or spam box</Text>
                </View>

                <LongButton backgroundColor="#9D93BC" textColor={"white"} text={"Go to login"}
                            onPress={() => navigation.navigate('login')}/>
            </View>

        </SafeAreaView>
    );
};

export default ForgotPasswordResetSent;
const styles = StyleSheet.create({})
