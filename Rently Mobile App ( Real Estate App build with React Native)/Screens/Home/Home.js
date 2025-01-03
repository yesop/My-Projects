import React, {useState, useRef, useEffect} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, ScrollView, Platform, TextInput, Image, Dimensions} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {Avatar, Icon, Switch} from "react-native-paper";
import {Colors} from "../../components/Colors";
import {useNavigation} from "@react-navigation/native";
import SimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import Ionicons from "react-native-vector-icons/Ionicons";
import HomeCard from '../../components/Cards/HomeCard';

const Home = () => {
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
                        HomeSeek
                    </Text>
                </View>
                <View style={{flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 12}}>
                    <TouchableOpacity onPress={() => navigation.navigate('')}>
                        <Ionicons name="chatbubble-ellipses-outline" size={28} color="#3E297B"/>
                    </TouchableOpacity>
                </View>
            </View>
            <ScrollView>
            <View style={{gap:18}}>
                <View style={styles.searchSection}>
                        <Ionicons name={'search-sharp'} size={24} color={'gray'}/>
                        <TextInput
                            style={{marginRight: 10, flexGrow: 1}}
                            placeholder="Find a room, apartment or studio..."
                            onChangeText={setSearchText}
                            value={searchText}
                            underlineColorAndroid="transparent"
                            onFocus={() => setShowTabs(false)} // Hide tabs when search input is focused
                            onBlur={() => setTimeout(() => setShowTabs(true), 200)} // Show tabs after delay when input loses focus
                        />
                </View>
                
                
                <View style={{ alignItems: 'center',  }}>
                <ScrollView
                    ref={scrollViewRef}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingHorizontal: 10 , gap:5}}

                >
                    {images.map((imageSource, index) => (
                    <View key={index} style={{ width: screenWidth - 120, height: 170, marginHorizontal: 5 }}>
                        <Image
                        source={imageSource}
                        resizeMode={"contain"}
                        style={{ width: '100%', height: '100%' }}
                        />
                    </View>
                    ))}
                </ScrollView>
                </View>
            </View>
            <View style={{width:"100%", alignSelf:'center', marginTop:-40}}>
                <View style={{flexDirection:'row', gap:8, width:"95%",justifyContent:"space-between", alignSelf:'center'}}>
                    <View>
                        <Image
                            source={require("../../assets/images/Frame14.png")}
                            resizeMode={"contain"}
                            style={{ width: 180, height: 150 }}
                            />
                    </View>
                    <View>
                        <Image
                            source={require("../../assets/images/Frame18.png")}
                            resizeMode={"contain"}
                            style={{ width: 180, height: 150}}
                            />
                    </View>
                </View>
                <View style={{flexDirection:'row', gap:8, marginTop: -90, width:"95%",justifyContent:"space-between", alignSelf:'center'}}>
                    <View>
                        <Image
                            source={require("../../assets/images/Frame16.png")}
                            resizeMode={"contain"}
                            style={{ width: 180, height: 150 }}
                            />
                    </View>
                    <View>
                        <Image
                            source={require("../../assets/images/Frame17.png")}
                            resizeMode={"contain"}
                            style={{ width: 180, height: 150}}
                            />
                    </View>
                </View> 
            </View>
                <View style={{margin:10,flexDirection:'row',alignItems:'center',flexWrap:'wrap',justifyContent:'space-between',gap:5, marginTop:-5}}>
                    <HomeCard/>
                    <HomeCard/>
                </View>
            </ScrollView>
        </View>
    );
};

export default Home;
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
