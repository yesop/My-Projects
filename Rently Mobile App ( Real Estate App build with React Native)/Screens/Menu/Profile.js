import React, {useState, useRef, useEffect} from 'react';

import {Text, View, StyleSheet, TouchableOpacity, Modal, Animated} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Avatar, Divider, Icon, TextInput} from "react-native-paper";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Colors} from "../../components/Colors";


const Profile = () => {
    const navigation = useNavigation();
    const [username, setUsername] = useState('senorhuncho');
    const [email, setEmail] = useState('JohnDoe@gmail.com');
    const handleProceed = () => {
        navigation.navigate('changePassOtp')
    }
    const handleVerification = () => {
        navigation.navigate('verification')
    }
    const insets = useSafeAreaInsets();
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
        <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: 'white',
                paddingTop: insets.top,
                padding: 15,
                paddingHorizontal: 15,
            }}>
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
            <View style={{display: 'flex', padding: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row', borderBottomColor: '#A1A5AC',}}>
                <View>
                    <Text style={{color: '#000000', fontFamily: 'sf-semiBold', fontSize: 16, fontStyle: 'normal', fontWeight: 500, }}>Account Name</Text>
                    <Text style={{color: '#A1A5AC', fontFamily: 'sf-semiBold', fontSize: 12, fontStyle: 'normal', fontWeight: 400, textTransform: 'capitalize', lineHeight: 22}}> Fomenky Jason Ewane</Text>
                </View>
            </View>
            <Divider/>
            <View style={{display: 'flex', padding: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',}}>
                <View>
                    <Text style={{color: '#000000', fontFamily: 'sf-semiBold', fontSize: 16, fontStyle: 'normal', fontWeight: 500}}>Email</Text>
                    <Text style={{color: '#A1A5AC', fontFamily: 'sf-semiBold', fontSize: 12, fontStyle: 'normal', fontWeight: 400, lineHeight: 22, textTransform: 'capitalize'}}> Fomenky Jason Ewane</Text>
                </View>
            </View>
            <Divider/>
            <View style={{display: 'flex', padding: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',}}>
                <View>
                    <Text style={{color: '#000000', fontFamily: 'sf-semiBold', fontSize: 16, fontStyle: 'normal', fontWeight: 500, lineHeight: 22 }}>Password</Text>
                    <Text style={{color: '#A1A5AC', fontFamily: 'sf-semiBold', fontSize: 12, fontStyle: 'normal', fontWeight: 400, lineHeight: 22, textTransform: 'capitalize'}}> Fomenky Jason Ewane</Text>
                </View>
                <TouchableOpacity onPress={handleProceed}>
                    <Text style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, color: '#17A3FD', fontFamily: 'sf-semiBold'}}>Change</Text>
                </TouchableOpacity>
            </View>
            <Divider/>
            <View style={{display: 'flex', padding: 16, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',}}>
                <View>
                    <Text style={{color: '#000000', fontFamily: 'sf-semiBold', fontSize: 16, fontStyle: 'normal', fontWeight: 500, lineHeight: 22 }}>Account Verification</Text>
                    <Text style={{color: '#A1A5AC', fontFamily: 'sf-semiBold', fontSize: 12, fontStyle: 'normal', fontWeight: 400, lineHeight: 22, textTransform: 'capitalize', }}> not verified</Text>
                </View>
                <TouchableOpacity onPress={handleVerification}>
                    <Text style={{display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: 8, color: '#17A3FD', fontFamily: 'sf-semiBold'}}>Verify my account</Text>
                </TouchableOpacity>
            </View>
            <Divider/>
        </SafeAreaView>
    );
};


export default Profile;
// define your styles
const styles = StyleSheet.create({});



