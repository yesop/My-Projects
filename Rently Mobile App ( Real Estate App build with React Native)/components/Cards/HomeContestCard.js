import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {Colors} from "../Colors";
import { LinearGradient } from 'expo-linear-gradient';

const HomeContestCard = () => {
    return (
        <LinearGradient
            colors={['#9800A5', '#863C8C', '#5D0097', '#4A0084']}
            end={[0, 0]} // Start at bottom left
            start={[1, 1]} // End at top right
            style={{
                backgroundColor: 'blue',
                borderRadius: 15,
                padding: 10,
                flexDirection: 'row',
                position: 'relative',
                width: '100%',
                justifyContent: 'center'
            }}
        >
            <View style={{flex: 1, paddingTop: 40, paddingLeft: 10}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 18, color: 'white'}}>Ready to play against friends
                    online and</Text>
                <Text style={{color: Colors.brown, fontFamily: 'sf-semiBold', fontSize: 35}}>WIN BIG!!?</Text>
            </View>
            <TouchableOpacity style={{
                width: '90%',
                borderRadius: 100,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 20,
                backgroundColor: Colors.brown,
                padding: 10,
                marginHorizontal: 'auto',
                zIndex: 10,
                alignSelf: 'center',
            }}>
                <Text style={{fontFamily: 'sf-regular', fontSize: 18, textAlign: 'center', color: 'white'}}>Enter
                    contest</Text>
            </TouchableOpacity>
            <View style={{flex: 1}}>
                <Image source={require("../../assets/images/ronaldohalfcopy.png")} resizeMode={"contain"}
                       style={{width: 150, height: 200, bottom: -10, right: -10}}/>
            </View>

        </LinearGradient>
    );
};

export default HomeContestCard;
const styles = StyleSheet.create({})
