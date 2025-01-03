import React from 'react';

import {Text, View, StyleSheet} from 'react-native';
import {Colors} from "../Colors";

const TransactionFundingCard = ({method, amount, type, date, time, status}) => {
    return (
        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'white'}}>
            <View style={{gap: 3}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 18, textAlign: 'left',}}>{method}</Text>
                <Text style={{fontFamily: 'sf-regular', color: 'gray', textAlign: 'left',}}>{amount} XAF</Text>
            </View>
            <View style={{gap: 3}}>
                <Text style={{
                    fontFamily: 'sf-semiBold',
                    color: type === 'deposit' ? Colors.checkGreen : Colors.red,
                    fontSize: 18,
                    textAlign: 'right'
                }}>{type === 'deposit' ? 'DEPOSIT' : 'WITHDRAWAL'}</Text>
                <Text style={{fontFamily: 'sf-regular', color: 'gray', textAlign: 'right'}}>{time} | {date}</Text>
                <Text style={{
                    fontFamily: 'sf-regular',
                    color: status === 'pending' ? 'black' : status === 'success' ? Colors.checkGreen : Colors.red,
                    fontSize: 15,
                    textAlign: 'right'
                }}>{status === 'pending' ? 'Pending' : status === 'success' ? 'Success' : 'Failed'}</Text>
            </View>
        </View>
    );
};

export default TransactionFundingCard;
const styles = StyleSheet.create({})
