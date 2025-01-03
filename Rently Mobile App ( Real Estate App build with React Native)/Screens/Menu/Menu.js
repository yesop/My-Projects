import React, {useState, useRef, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Platform, TextInput, Image, Dimensions} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Avatar, Icon} from "react-native-paper";
import {Colors} from "../../components/Colors";
import {useNavigation} from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeCard from '../../components/Cards/HomeCard';

const Menu = () => {
    const navigation = useNavigation()
    const insets = useSafeAreaInsets();
    const [activeTab, setActiveTab] = useState('all');
    const [showTabs, setShowTabs] = useState(true); // New state variable to control tabs visibility
    const [searchText, setSearchText] = useState('');

    const scrollViewRef = useRef(null);
    const { width: screenWidth } = Dimensions.get('window');

    // Scroll to the end after the component mounts
    useEffect(() => {
      scrollViewRef.current?.scrollToEnd({ animated: true });
    }, []);

    const images = [
        require("../../assets/images/spin.png"),
        require("../../assets/images/spin1.png"),
        require("../../assets/images/spin2.png"),
        
      ];

    return (
        <View style={{flex: 1, backgroundColor: 'white', }}>
            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                backgroundColor: "white",
                paddingTop: Platform.OS === 'ios' ? insets.top : 45,
                padding: 15,
                paddingHorizontal: 15,}}> 
                <View style={{flexDirection:'row', gap:10, }}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Ionicons name="menu" size={28} color="#3E297B"/>
                    </TouchableOpacity>
                </View>
                <View>
                    <Text style={{fontFamily:'sf-semiBold', color:'#3E297B', fontSize:18}}>
                        Menu
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12}}>
                </View>
            </View>
            <View style={{ width:"90%", alignSelf:"center", gap:23}}>
                <Text>
                    Profile information
                </Text>
                <Text>
                    My Rently history
                </Text>
                <View style={{flexDirection:"row",  alignItems:'center', gap:10}}>
                    <Text>
                        Get Help
                    </Text>
                    <TouchableOpacity>
                        <Ionicons name="link" size={28} color="#3E297B"/>
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    );
};

export default Menu;
const styles = StyleSheet.create({
    searchSection: {
        flexDirection: 'row',
        gap:5,
        padding: Platform.OS === 'ios' ? 10 : 7,
        alignItems: 'center',
        backgroundColor: "#F7F7F7",
        borderWidth: 1,
        borderColor: '#ddd',
        borderRadius: 10,
        paddingHorizontal: 10,
        width: '95%',
        alignSelf:'center'
    },
    input: {
        
        color: '#424242',
    },
})
