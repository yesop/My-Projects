import React, {useEffect, useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ActivityIndicator, useWindowDimensions, Image} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";
import {Avatar} from "react-native-paper";
import * as SecureStore from "expo-secure-store";
import {verifyUserToken} from "../../redux/api/API";
import Ionicons from "react-native-vector-icons/Ionicons";
import { LinearGradient } from 'expo-linear-gradient';
const AuthenticationScreen = ({navigation}) => {
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', position: 'relative'}}>
            <View style={{flex: 1, gap:30, paddingTop:100, backgroundColor:"white", justifyContent:'center'}}>
            <View style={{gap:12, backgroundColor:"blue",paddingHorizontal: "20%", backgroundColor:"white", alignItems:'center'}}>
                <View style={{}}>
                    <Image source={require("../../assets/images/rent.png")} resizeMode={"contain"} style={{width: 250, height: 250}}/>
                </View>
                <View>
                    <Image source={require("../../assets/images/Dots.png")} resizeMode={"contain"} style={{width: 40, height: 40}}/>
                </View>
                <View style={{justifyContent:'center', alignItems:"center", gap:20}}>
                    <Text style={{fontFamily:'sf-semiBold', fontSize:14}}>Ease your search</Text>
                    <Text style={{fontFamily:'sf-light', fontSize:17}}>
                        Go through our vast collection of available housing space you can move into personally or with family.
                    </Text>
                </View>
            </View>
            <View style={{}}>
                <View style={{alignItems:'center' }}>
                    <LinearGradient
                        colors={['#958AB8', '#3E297B']}
                        end={[0, 0]} // Start at bottom left
                        start={[1, 1]} // End at top right
                        style={{padding:17, borderRadius:50, width:250, alignItems:'center'}}
                            >
                        <TouchableOpacity onPress={() => navigation.navigate('onboardtwo')}>
                            <Text style={{fontFamily:'sf-semiBold', fontSize:18}}>
                                Proceed
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{alignItems:"center"}}>
                    <Image source={require("../../assets/images/skip.png")} resizeMode={"contain"} style={{width: 200, height: 200}}/>
                </View>
            </View>
            </View>
        </SafeAreaView>
    );
};

export default AuthenticationScreen;
const styles = StyleSheet.create({})
