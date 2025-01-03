import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from "../Colors";
import Icon from 'react-native-vector-icons/Feather';
import Feather from "react-native-vector-icons/Feather";

const SwapCard = ({icon, mainText, subText, onCardPress}) => {
    return (
        <View style={{display: 'flex', padding: 15, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row',}}>
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 15}}>
                <View style={{backgroundColor: Colors.lightBlue, borderRadius:15, padding: 5}}>
                    <Icon name={icon} size={25} color='#17A3FD'/>
                </View>
                <View style={{flexDirection: 'column'}}>
                    <Text style={{color: '#000000', fontFamily: 'sf-semiBold', fontSize: 16, fontStyle: 'normal', fontWeight: 500, lineHeight: 22 }}>{mainText}</Text>
                    <Text style={{color: '#A1A5AC', fontFamily: 'sf-semiBold', fontSize: 12, fontStyle: 'normal', fontWeight: 400, lineHeight: 22,}}>{subText}</Text>
                </View>
            </View>
            <TouchableOpacity onPress={onCardPress}>
                <Feather name={"chevron-right"} size={24} color={"green"}/>
            </TouchableOpacity>
        </View>
    );
};
export default SwapCard;
const styles = StyleSheet.create({})
