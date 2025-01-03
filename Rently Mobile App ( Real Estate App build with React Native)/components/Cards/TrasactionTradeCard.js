import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Colors} from "../Colors";

const TransactionTradeCard = ({name, price, type, date, time, numberOfCards}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white'}}>
            <View style={{gap: 3}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 18, textAlign: 'left',}}>{name}</Text>
                <Text style={{fontFamily: 'sf-regular', color: 'gray', textAlign: 'left',}}>{price}XAF</Text>
                <Text style={{fontFamily: 'sf-regular', color: Colors.skyblue, textAlign: 'left',}}>{numberOfCards} CARD(s)</Text>
            </View>
            <View style={{gap: 3}}>
                <Text style={{fontFamily: 'sf-semiBold',color: type === 'buy' ? Colors.checkGreen: Colors.red, fontSize: 18, textAlign: 'right'}}>{type === 'buy' ? 'BUY' : 'SELL'}</Text>
                <Text style={{fontFamily: 'sf-regular', color: 'gray', textAlign: 'right'}}>{date}</Text>
                <Text style={{fontFamily: 'sf-regular', color: 'gray', fontSize: 15, textAlign: 'right'}}>{time}</Text>
            </View>
        </View>
    );
};

export default TransactionTradeCard;
const styles = StyleSheet.create({})
