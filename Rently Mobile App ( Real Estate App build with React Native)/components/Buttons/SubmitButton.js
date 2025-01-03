import React from 'react';

import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

const SubmitButton = ({text, onPress, backgroundColor, textColor}) => {
    return (
        <TouchableOpacity
            style={{backgroundColor: backgroundColor, width: '100%', borderRadius: 10, justifyContent: 'center', alignItems: 'center', padding: 15}}
            onPress={onPress}
        >
            <Text style={{fontFamily: 'sf-regular', color: textColor}}>{text}</Text>
        </TouchableOpacity>
    );
};

export default SubmitButton;
const styles = StyleSheet.create({})