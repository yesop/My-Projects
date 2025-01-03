import React, {useState} from 'react';

import {Text, View, StyleSheet, TextInput, TouchableOpacity, ScrollView} from 'react-native';
import {Avatar, Icon} from "react-native-paper";
import {Colors} from "../../components/Colors";
import Ionicons from "react-native-vector-icons/Ionicons";
import {useSafeAreaInsets} from "react-native-safe-area-context";
import Feather from "react-native-vector-icons/Feather";
import PlayerCardLong from "../../components/Cards/PlayerCardLong";

const Assets = () => {
    const insets = useSafeAreaInsets()
    const [type, setType] = useState('positive');
    const [numberOfAssets, setNumberOfAssets] = useState(0);
    return (
        <View style={{backgroundColor: 'white',}}>
            <View style={{
                paddingTop: insets.top,
                backgroundColor: 'white',
                paddingHorizontal: 15,
                gap: 10,
                padding: 10,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between'
            }}>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                >
                    <Avatar.Icon
                        icon={"chevron-left"}
                        size={30}
                        style={{backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,}}
                    />
                </TouchableOpacity>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{position: 'relative',}}
                >
                    <Icon size={30} source={'bell-outline'} color={"gray"}/>
                    <Avatar.Text label={''} size={10} style={{
                        backgroundColor: Colors.skyblue,
                        position: 'absolute',
                        right: 0,
                        top: 5,
                    }}/>
                </TouchableOpacity>
            </View>
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{backgroundColor: Colors.background, paddingHorizontal: 15}}
                contentContainerStyle={{gap: 10}}
            >
                <View style={{padding: 10, borderRadius: 15, backgroundColor: 'white', marginTop: 10,}}>
                    <View style={{gap: 10,}}>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center',}}>
                            <Text style={{fontFamily: 'sf-regular', fontSize: 18,}}>Current Porfolio Value</Text>
                            <Text style={{fontFamily: 'sf-regular', fontSize: 18, color: type=== 'positive' ? Colors.checkGreen : Colors.red}}>
                                <Feather name={type=== 'positive' ? 'trending-up' : 'trending-down'} color={type=== 'positive' ? Colors.checkGreen : Colors.red}/> 8.95% - 284,328 F
                            </Text>
                        </View>
                        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5,}}>
                            <Text style={{fontFamily: 'sf-regular', fontSize: 17, color: 'gray',}}>Number of assets</Text>
                            <Text style={{fontFamily: 'sf-regular', fontSize: 17}}>{numberOfAssets}</Text>
                        </View>
                    </View>
                </View>


                <PlayerCardLong
                    playerName={"Cristiano Ronaldo"}
                    price={452.25}
                    type={"positive"}
                    fantasyPts={90}
                    percentage={10.6}
                    club={"AL-NASSR"}
                    position={"ST"}
                />
                <PlayerCardLong
                    playerName={"Cristiano Ronaldo"}
                    price={452.25}
                    type={"negative"}
                    fantasyPts={90}
                    percentage={10.6}
                    club={"AL-NASSR"}
                    position={"ST"}
                />
            </ScrollView>
        </View>
    );
};

export default Assets;
const styles = StyleSheet.create({})
