import React, {useState} from 'react';

import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Divider, Icon} from "react-native-paper";
import {Colors} from "../../components/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import TransactionTradeCard from "../../components/Cards/TrasactionTradeCard";
import AntDesign from "react-native-vector-icons/AntDesign";
import TrasactionFundingCard from "../../components/Cards/TrasactionFundingCard";
import {useNavigation} from "@react-navigation/native";

const Transactions = () => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    const [activeTab, setActiveTab] = useState('trades');
    return (
        <View style={{backgroundColor: 'white', flex: 1,}}>
            <View style={{
                flexDirection: 'row',
                position: 'relative',
                justifyContent: 'center',
                alignItems: 'center',
                paddingTop: insets.top,
                backgroundColor: 'white',
                padding: 20,
            }}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 20,}}>Transactions</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{position: 'absolute', left: 15,bottom: 20}}
                >
                    <Avatar.Icon
                        icon={"chevron-left"}
                        size={30}
                        style={{backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,}}
                    />
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', gap:10, paddingHorizontal: 15, backgroundColor: Colors.background, paddingVertical: 10}}>
                <TouchableOpacity
                    style={[styles.tabItemContainer, {backgroundColor: activeTab === 'trades' ? 'white' : "transparent",}]}
                    onPress={() => setActiveTab('trades')}
                >
                    <View style={{transform: [{ rotate: '90deg' }]}}>
                        <AntDesign name={'swap'} color={activeTab === 'trades' ? 'black' : 'gray'} size={25}/>
                    </View>
                    <Text style={{fontFamily: 'sf-semiBold', fontSize: 20, color: activeTab === 'trades' ? 'black' : 'gray'}}>Trades</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={[styles.tabItemContainer, {backgroundColor: activeTab === 'funding' ? 'white' : "transparent",}]}
                    onPress={() => setActiveTab('funding')}
                >
                    <Ionicons name={'wallet-outline'} color={activeTab === 'funding' ? 'black' : 'gray'} size={25}/>
                    <Text style={{fontFamily: 'sf-semiBold', fontSize: 20, color: activeTab === 'funding' ? 'black' : 'gray'}}>Funding</Text>
                </TouchableOpacity>
            </View>
            <View style={{backgroundColor: '#F7F7F7', padding: 15, flex: 1}}>
                {activeTab === 'trades' ? (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{gap: 10, paddingHorizontal: 15,}}
                        style={{padding: 10, backgroundColor: 'white', borderRadius: 10,}}
                    >
                        <TransactionTradeCard
                            name={"Samuel Et'oo"}
                            type={"buy"}
                            price={1150}
                            date={"01.02.2023"}
                            time={"13.20"} numberOfCards={10}
                        />
                        <Divider/>

                    </ScrollView>
                ) : (
                    <ScrollView
                        showsVerticalScrollIndicator={false}
                        contentContainerStyle={{gap: 10, paddingHorizontal: 15,}}
                        style={{padding: 10, backgroundColor: 'white', borderRadius: 10,}}
                    >
                        <TrasactionFundingCard
                            method={"MTN Mobile Money"}
                            type={"deposit"}
                            amount={1150}
                            date={"01.02.2023"}
                            time={"13.20"}
                            status={'pending'}
                        />
                        <Divider/>
                        <TrasactionFundingCard
                            method={"MTN Mobile Money"}
                            type={"withdraw"}
                            amount={1150}
                            date={"01.02.2023"}
                            time={"13.20"}
                            status={'success'}
                        />
                        <Divider/>
                    </ScrollView>
                )}
            </View>

        </View>
    );
};

export default Transactions;
const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 15,
    },
    tabItemContainer: {
        flex: 1,
        gap: 10,
        flexDirection: 'row',
        borderRadius: 50,
        borderColor: 'gray',
        borderWidth: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center'
    }
})
