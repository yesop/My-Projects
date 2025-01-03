import React, { useCallback, useRef } from 'react';
import { Text, View, StyleSheet, Platform, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "../Screens/Home/Home";
import { Colors } from "./Colors";
import { Icon } from "react-native-paper";
import Menu from "../Screens/Menu/Menu";
import Setting from "../Screens/Portfolio/Setting";
import Listings from "../Screens/Explore/Listings";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesign from "react-native-vector-icons/AntDesign";
import { BottomSheetBackdrop, BottomSheetModal } from "@gorhom/bottom-sheet";
import { useNavigation } from "@react-navigation/native";

const Tab = createBottomTabNavigator();

const BottomTabNavigator = () => {
    const navigation = useNavigation();
    const TabArr = [
        { showLabel: true, route: 'Home', label: 'Home', icon: "home", component: Home },
        { showLabel: true, route: 'Listings', label: 'Listings', icon: "list-sharp", component: Listings },
        { showLabel: false, route: 'Swap', label: '', icon: "swap", component: Listings }, // Note: This will now render Listings
        { showLabel: true, route: 'Menu', label: 'Menu', icon: "grid-outline", component: Menu },
        { showLabel: true, route: 'Settings', label: 'Settings', icon: "settings-outline", component: Setting },
    ];

    const renderBackdrop = useCallback(
        (props) => <BottomSheetBackdrop appearsOnIndex={0} disappearsOnIndex={-1} {...props} />,
        []
    );
    const bottomModal = useRef(null);

    const showModal = () => {
        bottomModal.current?.present();
    };
    const closeModal = () => {
        bottomModal.current?.dismiss();
    };

    return (
        <Tab.Navigator
            initialRouteName={"Home"}
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: 'white',
                    width: "100%",
                    height: Platform.OS === 'ios' ? 100 : 70,
                    justifyContent: "center",
                    alignItems: 'center',
                },
                tabBarActiveTintColor: '#3E297B',
                tabBarInactiveTintColor: 'gray',
                tabBarLabelPosition: 'below-icon',
            }}
        >
            {TabArr.map((item, index) => (
                <Tab.Screen
                    key={index}
                    name={item.route}
                    component={item.component}
                    options={({ route }) => ({
                        headerLeft: () => null,
                        tabBarIcon: ({ color }) => (
                            item.icon === "swap" ?
                                <View>
                                    <TouchableOpacity style={[styles.avatarContainer]}>
                                        <AntDesign name="tags" size={25} color={"white"} />
                                    </TouchableOpacity>
                                    <BottomSheetModal
                                        ref={bottomModal}
                                        index={0}
                                        snapPoints={['45%',]}
                                        backdropComponent={renderBackdrop}
                                    >
                                    <Text>ffffffffff</Text>
                                    </BottomSheetModal>
                                </View>
                                :
                                <Ionicons name={item.icon} size={25} color={color} />
                        ),
                        tabBarLabel: item.label,
                        tabBarShowLabel: item.showLabel,
                    })}
                />
            ))}
        </Tab.Navigator>
    );
};

export default BottomTabNavigator;

const styles = StyleSheet.create({
    avatarContainer: {
        width: 50, // Adjust size as needed
        height: 50, // Adjust size as needed
        borderRadius: 25, // Make it circular
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#3E297B", // Background color of the avatar
    },
});
