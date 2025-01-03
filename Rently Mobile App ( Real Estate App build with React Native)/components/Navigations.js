import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "../Screens/Authentication/LoginScreen";
import AuthenticationScreen from '../Screens/Authentication/AuthenticationScreen';
import Last from '../Screens/Authentication/Last';
import Two from '../Screens/Authentication/Two';
import SignInLoading from '../Screens/Loading/SignInLoading';
import SignUp from '../Screens/Authentication/SignUp';
import ForgorttenPassword from '../Screens/Authentication/ForgottenPassword';
import ForgotPasswordResetSent from '../Screens/Authentication/ForgotPasswordResetSent';
import BottomTabNavigator from "./BottomTabNavigator";

const Stack = createStackNavigator();

// create a component
const Navigations = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator
                screenOptions={({})=>({
                    headerShown: false,
                })}
            >
                <Stack.Screen name="authentication" component={AuthenticationScreen} />
                <Stack.Screen name="login" component={LoginScreen}/>
                <Stack.Screen name="signUp" component={SignUp}/>
                <Stack.Screen name="onboardtwo" component={Two}/>
                <Stack.Screen name="last" component={Last}/>
                <Stack.Screen name="signloading" component={SignInLoading}/>
                <Stack.Screen name="forgotpassword" component={ForgorttenPassword}/>
                <Stack.Screen name="forgotpasswordsent" component={ForgotPasswordResetSent}/>
                <Stack.Screen name="bottomTab" component={BottomTabNavigator} options={{ headerShown: false, gestureEnabled: false }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
};

//make this component available to the app
export default Navigations;
