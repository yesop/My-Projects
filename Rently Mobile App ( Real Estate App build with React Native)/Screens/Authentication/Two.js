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

const Two = ({navigation}) => {
    
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', position: 'relative'}}>
            <View style={{flex: 1, gap:30, paddingTop:100, backgroundColor:"white", justifyContent:'center'}}>
            <View style={{gap:12, backgroundColor:"blue",paddingHorizontal: "20%", backgroundColor:"white", alignItems:'center'}}>
                <View style={{}}>
                    <Image source={require("../../assets/images/rent.png")} resizeMode={"contain"} style={{width: 250, height: 250}}/>
                </View>
                <View>
                    <Image source={require("../../assets/images/2.png")} resizeMode={"contain"} style={{width: 40, height: 40}}/>
                </View>
                <View style={{justifyContent:'center', alignItems:"center", gap:20}}>
                    <Text style={{fontFamily:'sf-semiBold', fontSize:14}}>House hunt on the go</Text>
                    <Text style={{fontFamily:'sf-light', fontSize:17}}>
                        With the possibility to visit and inspect any residence you love with an accompanied guide
                    </Text>
                </View>
            </View>
            <View style={{gap:15}}>
                <View style={{alignItems:'center' }}>
                    <LinearGradient
                        colors={['#958AB8', '#3E297B']}
                        end={[0, 0]} // Start at bottom left
                        start={[1, 1]} // End at top right
                        style={{padding:17, borderRadius:50, width:250, alignItems:'center'}}
                            >
                        <TouchableOpacity onPress={() => navigation.navigate('last')}>
                            <Text style={{fontFamily:'sf-semiBold', fontSize:18}}>
                                Proceed
                            </Text>
                        </TouchableOpacity>
                    </LinearGradient>
                </View>
                <View style={{alignItems:"center", flexDirection:'row', justifyContent:'space-between', width:'80%', alignSelf:'center'}}>
                    <TouchableOpacity onPress={() => navigation.navigate('authentication')}>
                        <Image source={require("../../assets/images/back.png")} resizeMode={"contain"} style={{width: 50, height: 50}}/>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Image source={require("../../assets/images/ski.png")} resizeMode={"contain"} style={{width: 50, height: 50}}/>
                    </TouchableOpacity>
                </View>
            </View>
            </View>
        </SafeAreaView>
    );
};

export default Two;
const styles = StyleSheet.create({})
