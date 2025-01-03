import React, {useEffect, useState} from 'react';

import {Text, View, StyleSheet, TouchableOpacity, TextInput, Image} from 'react-native';
import {SafeAreaView, useSafeAreaInsets} from "react-native-safe-area-context";
import {useNavigation, useRoute} from "@react-navigation/native";
import {Avatar, Divider, Icon} from "react-native-paper";
import {Colors} from "../../components/Colors";
import LongButton from "../../components/Buttons/LongButton";
import { SelectCountry } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';
import * as ImagePicker from 'expo-image-picker';


const Verification = () => {
    const navigation = useNavigation()
    // const {email} = router.params
    const [name, setName] = useState('');
    const [idnumber, setIdNumber] = useState('');
    const [country, setCountry] = useState('');
    const [doc, setDoc] = useState('');

    const insets = useSafeAreaInsets();

    const handleChangePass = () => {
        navigation.navigate('changePassword');
    }

    const [value, setValue] = useState(null);
    const local_data = [
        {
          value: '1',
          lable: 'Cameroon',
          image: {
            uri: 'https://i.pinimg.com/736x/86/1d/8c/861d8caa9a4c1fc243dd2a0f8d3f9630.jpg',
          },
        },
        {
          value: '2',
          lable: 'Nigeria',
          image: {
            uri: 'https://cdn11.bigcommerce.com/s-uzwsfxiexj/images/stencil/1280x1280/products/294/771/un_flags_nigeria__39105.1610995466.png?c=1',
          },
        }
      ];

      const doc_data = [
        {
          value: '1',
          lable: 'ID Card',
        },
        {
          value: '2',
          lable: 'Driving License',
        }
      ];
    

      const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
      };

    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15, paddingTop: insets.top,}}>
            <View style={{flexDirection: 'row', position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 20,}}>Account Verification</Text>
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
            <View style={{marginTop: 30, gap: 20,}}>
                <Text style={{fontFamily: 'sf-light', textAlign: 'center', color: '#898A8D'}}>Fill in the required information as on your indentification document</Text>
                <TextInput
                    style={{ padding: 22,borderColor: Colors.lightGray, borderWidth: 1, paddingLeft: 10, borderRadius: 10,}}
                    placeholder='Enter your name'
                    onChangeText={setName}
                    value={name}
                />
                <TextInput
                    style={{padding: 22,borderColor: Colors.lightGray, borderWidth: 1, paddingLeft: 10, borderRadius: 10,}}
                    placeholder='Identification number'
                    onChangeText={setIdNumber}
                    value={idnumber}
                />
                <View >
                <SelectCountry
                    style={styles.dropdown}
                    selectedTextStyle={styles.selectedTextStyle}
                    placeholderStyle={styles.placeholderStyle}
                    imageStyle={styles.imageStyle}
                    
                    iconStyle={styles.iconStyle}
                    maxHeight={200}
                    value={country}
                    data={local_data}
                    valueField="value"
                    labelField="lable"
                    imageField="image"
                    placeholder="Select country"
                    searchPlaceholder="Search..."
                    onChange={e => {
                    setCountry(e.value);
                    }}
                />
                </View>

                <View >
                <SelectCountry
                    style={styles.dropdown}
                    selectedTextStyle={styles.selectedTextStyle}
                    placeholderStyle={styles.placeholderStyle}
                    iconStyle={styles.iconStyle}
                    maxHeight={200}
                    value={doc}
                    data={doc_data}
                    valueField="value"
                    labelField="lable"
                    placeholder="Select Document"
                    onChange={e => {
                    setDoc(e.value);
                    }}
                />
                </View>
                
                <View style={styles.lastBox}>
                <TouchableOpacity onPress={pickImage}>
                    <View style={{justifyContent:'center',alignItems:'center',padding:3,borderRadius:25,}}>
                        <Image style={{ width: 60, height: 60}} source={require('../../assets/images/upload.png')} /> 
                    </View>
                </TouchableOpacity>
                </View>
                <LongButton
                    textColor={"white"}
                    text={"Submit"}
                    backgroundColor={Colors.skyblue}
                    onPress={handleChangePass}
                />
            </View>
        </SafeAreaView>
    );
};

export default Verification;
const styles = StyleSheet.create({
    dropdown: {
      padding: 18,
      borderWidth: 1,
      borderRadius: 10,
      borderColor: Colors.Gray
    },
    imageStyle: {
        padding: 18,
        borderRadius: 6
    },
    lastBox:{
        padding:33,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#EBEBEB',
        marginTop:20,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
      },
    placeholderStyle: {
      fontSize: 16,
      color: '#8A8A8E',
      fontFamily: 'sf-light',
      fontWeight: 400,
      fontStyle: 'normal',
      lineHeight: 22,

    },
    selectedTextStyle: {
      fontSize: 14,
      marginLeft: 8,
      color: '#898A8D',
      fontStyle: 'normal',
      fontWeight: 510,
      lineHeight: 22,
      fontFamily: 'sf-light'
      
    },
    iconStyle: {
      width: 20,
      padding: 12,
    },
  });