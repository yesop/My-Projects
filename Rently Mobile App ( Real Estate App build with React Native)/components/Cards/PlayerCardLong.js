import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Colors} from "../Colors";
import {Avatar} from "react-native-paper";
import Icon from 'react-native-vector-icons/Feather';

const PlayerCardLong = ({playerName, club, fantasyPts, percentage, price, type, position}) => {
    return (
        <View style={{
            flexDirection: 'row',
            padding: 10,
            justifyContent: 'space-between',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'white',
        }}
        >
            <View style={{flexDirection: 'row', alignItems: 'center', gap: 10,}}>
                <Avatar.Image
                    source={require('../../assets/images/Ronaldo-Profile.png')}
                    size={50}
                    style={{backgroundColor: Colors.lightBlue}}
                />
                <View>
                    <View style={{flexDirection: 'row', alignItems: 'center', gap: 5}}>
                        <Text style={{fontFamily: 'sf-regular', fontSize: 18,}}>{playerName}</Text>
                        <View style={{backgroundColor: Colors.skyblue, paddingHorizontal: 5, borderRadius: 5}}>
                            <Text style={{ color: 'white', fontFamily: 'sf-semiBold', fontSize: 14, }}>{position}</Text>
                        </View>

                    </View>
                    <Text style={{fontFamily: 'sf-regular', fontSize: 14, color: 'blue'}}>PROJECTED FANTASY
                        PTS: {fantasyPts}</Text>
                    <Text style={{fontFamily: 'sf-light', fontSize: 18, color: 'gray'}}>{club}</Text>
                </View>
            </View>
            <View style={{gap: 4}}>
                <View style={{flexDirection: 'row', alignItems: 'center', gap: 2, justifyContent: 'flex-end'}}>
                    <Icon
                        name={type === 'positive' ? 'trending-up' : 'trending-down'}
                        color={type === 'positive' ? Colors.checkGreen : Colors.red}/>
                    <Text style={{
                        color: type === 'positive' ? Colors.checkGreen : Colors.red,
                        textAlign: 'right',
                        fontSize: 17
                    }}>{percentage}%</Text>
                </View>
                <Text style={{
                    color: type === 'positive' ? Colors.checkGreen : Colors.red,
                    textAlign: 'right',
                    fontSize: 15
                }}>{price}F</Text>
            </View>

        </View>
    );
};

export default PlayerCardLong;
const styles = StyleSheet.create({})
