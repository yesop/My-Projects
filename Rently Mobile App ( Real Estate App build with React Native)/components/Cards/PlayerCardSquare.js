import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Avatar} from "react-native-paper";
import {Colors} from "../Colors";

const PlayerCardSquare = ({playerName, club, percentage, type, price}) => {
    return (
        <View style={{
            padding: 10,
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 10,
            backgroundColor: 'white',
            width: 200,
            aspectRatio: 1,
        }}>
            <Avatar.Image
                source={require('../../assets/images/Ronaldo-Profile.png')}
                size={80}
                style={{backgroundColor: Colors.lightBlue}}
            />
            <Text style={{fontFamily: 'sf-regular', fontSize: 18,}}>{playerName}</Text>
            <Text style={{fontFamily: 'sf-light', fontSize: 18, color: 'gray'}}>{club}</Text>
            <View style={{
                flexDirection: 'row',
                gap: 10,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 50,
                borderWidth: 3,
                paddingHorizontal: 5,
                paddingRight: 10,
                marginTop: 10,
                borderColor: type === 'positive' ? Colors.checkGreen : Colors.red
            }}>
                <Avatar.Icon
                    icon={type === 'positive' ? 'chevron-up' : "chevron-down"}
                    size={30} color={"white"}
                    style={{backgroundColor: type === 'positive' ? Colors.checkGreen : Colors.red}}
                />
                <View>
                    <Text style={{
                        fontFamily: 'sf-regular',
                        fontSize: 16,
                        color: type === 'positive' ? Colors.checkGreen : Colors.red
                    }}>{percentage}%</Text>
                    <Text style={{
                        fontFamily: 'sf-light',
                        fontSize: 14,
                        color: type === 'positive' ? Colors.checkGreen : Colors.red
                    }}>{price}F</Text>
                </View>
            </View>
        </View>
    );
};

export default PlayerCardSquare;
const styles = StyleSheet.create({})
