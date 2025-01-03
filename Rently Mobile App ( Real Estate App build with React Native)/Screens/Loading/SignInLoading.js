import React, { useEffect, useRef } from 'react';
import { SafeAreaView } from "react-native-safe-area-context";
import LottieView from 'lottie-react-native';
import { StyleSheet } from "react-native";

const SignInLoading = ({ navigation }) => {
    const animation = useRef(null);
    const handleLogin = async () => {
        try {
            // Simulate a login attempt or any asynchronous operation
            // For demonstration, we'll just wait for 6 seconds
            await new Promise(resolve => setTimeout(resolve, 1000)); // Wait for 6 seconds

            // After waiting, you can perform actions like navigation or updating state
            // For example, navigate to another screen after successful "login"
            navigation.navigate('login'); // Replace 'HomeScreen' with your actual destination route name
        } catch (error) {
            console.error(error);
            // Handle the error case as needed, perhaps by showing an error message or retrying
        }
    };

    useEffect(() => {
        handleLogin();
    }, []); // Empty dependency array means this effect runs once on mount

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white', justifyContent: 'center', alignItems: 'center' }}>

            <LottieView
                autoPlay
                ref={animation}
                style={{ width: 150, height: 150, backgroundColor: "white" }}
                source={require('../../assets/ani.json')}
            />
        </SafeAreaView>
    );
};

export default SignInLoading;

// Stylesheet remains unchanged
const styles = StyleSheet.create({});