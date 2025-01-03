import React, {useEffect, useState} from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Avatar, Divider, Icon, TextInput} from "react-native-paper";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";
import Animated, {useAnimatedStyle, useSharedValue, withSequence, withTiming} from "react-native-reanimated";

const SignUpOtp = () => {
    const router = useRoute()
    const navigation = useNavigation()
    // const {email} = router.params
    const [otp, setOtp] = useState('');
    const rotation = useSharedValue(0);
    const [timeLeft, setTimeLeft] = useState(180); // 2 minutes and 53 seconds in seconds
    const [isCountdownActive, setIsCountdownActive] = useState(true);

    useEffect(() => {
        let timer;
        if (isCountdownActive) {
            timer = setInterval(() => {
                setTimeLeft((prevTimeLeft) => {
                    if (prevTimeLeft <= 1) {
                        clearInterval(timer);
                        setIsCountdownActive(false);
                        return 0;
                    } else {
                        return prevTimeLeft - 1;
                    }
                });
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [isCountdownActive, timeLeft]);
    const formatTime = (seconds) => {
        const minutes = Math.floor(seconds / 60);
        const remainingSeconds = seconds % 60;
        return `${minutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
    };
    // Animated style for rotation
    const animatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotate: `${rotation.value}deg` }],
        };
    });

    // Function to trigger rotation
    const rotateIcon = () => {
        // Reset rotation to 0 before starting the new animation
        rotation.value = withSequence(
            withTiming(0, { duration: 0 }),
            withTiming(360, { duration: 1000 })
        );
    };
    const resetTimer = () => {
        setTimeLeft(180); // Reset to initial value
        setIsCountdownActive(true); // Restart the countdown
    };
    const handleValidate = () => {
        navigation.navigate('signUpOtpVerified');
    }
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            <View style={{flexDirection: 'row', position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 20,}}>Verification</Text>
                <TouchableOpacity
                    onPress={() => navigation.goBack()}
                    style={{position: 'absolute', left: 0}}
                >
                    <Avatar.Icon
                        icon={"chevron-left"}
                        size={25}
                        style={{backgroundColor: 'white', borderColor: 'gray', borderWidth: 1,}}
                    />
                </TouchableOpacity>
            </View>
            <View style={{marginTop: 30, gap: 15,}}>
                <Text style={{fontFamily: 'sf-light', textAlign: 'left',}}>You are to receive a 6 digit OTP code to your email check you spam or mail box</Text>
                <TextInput
                    mode={'outlined'}
                    textColor={"black"}
                    label={'Enter OTP'}
                    value={otp}
                    secureTextEntry={true}
                    onChangeText={setOtp}
                    style={{backgroundColor: 'white'}}
                    theme={{
                        colors: {
                            primary: Colors.skyblue,
                        },
                    }}
                />
                <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
                    <Text style={{fontFamily: 'sf-light', textAlign: 'left',}}>
                        {isCountdownActive ? `Resend OTP in ${formatTime(timeLeft)} mins` : 'Can resend OTP now'}
                    </Text>
                    <TouchableOpacity
                        style={{flexDirection: 'row', gap: 2, alignItems: 'center', justifyContent: 'center'}}
                        onPress={() => {
                            rotateIcon();
                            resetTimer(); // Reset the timer on button press
                        }}
                        disabled={isCountdownActive}
                    >
                        <Text style={{fontFamily: 'sf-light', textAlign: 'left', color: isCountdownActive ? 'gray' : Colors.skyblue}}>Send Code</Text>
                        <Animated.View style={animatedStyle}>
                            <Icon size={18} source={"cached"} color={isCountdownActive ? 'gray' : Colors.skyblue}/>
                        </Animated.View>
                    </TouchableOpacity>
                </View>

                <LongButton
                    textColor={"white"}
                    text={"Proceed"}
                    backgroundColor={Colors.skyblue}
                    onPress={handleValidate}
                />
                <View style={{flexDirection: 'row', gap: 10,marginTop: 10}}>
                    <Divider style={{height: 3, flexGrow: 1, backgroundColor: Colors.skyblue}}/>
                    <Divider style={{height: 3, flexGrow: 1, backgroundColor: Colors.skyblue}}/>
                    <Divider style={{height: 3, flexGrow: 1, backgroundColor: Colors.skyblue}}/>
                </View>
            </View>
        </SafeAreaView>
    );
};

export default SignUpOtp;
const styles = StyleSheet.create({})
