import React, {useState, useRef, useEffect} from 'react';

import {Text, View, StyleSheet, TouchableOpacity, Modal, Animated} from 'react-native';
import {SafeAreaView} from "react-native-safe-area-context";
import {Avatar, Divider, Icon, TextInput} from "react-native-paper";
import {useNavigation, useRoute} from "@react-navigation/native";
import Textarea from 'react-native-textarea';
import {Colors} from "../../components/Colors";
import { SvgUri } from 'react-native-svg';

const MakeRequest = () => {
    const router = useRoute();
    const [isExpanded, setExpanded] = useState(false);
    const navigation = useNavigation();
    const [isVisible, setIsVisible] = useState(false);
    const animation = useRef(new Animated.Value(0)).current;
    const opacity = useRef(new Animated.Value(0)).current;
    const handleProceed = () => {
        navigation.navigate('')
    }
    useEffect(() => {
        Animated.spring(animation, {
          toValue: isExpanded ? 1 : 0,
          useNativeDriver: false,
        }).start();
      }, [isExpanded]);
  
      useEffect(() => {
          Animated.timing(opacity, {
            toValue: isVisible ? 1 : 0,
            duration: 300,
            useNativeDriver: true,
          }).start();
        }, [isVisible]);
    
        const closeModal = () => {
          setIsVisible(false);
        };
      const rotateArrow = animation.interpolate({
        inputRange: [0, 1],
        outputRange: ['0deg', '180deg'],
      });
    return (
        <SafeAreaView style={{flex: 1, backgroundColor: 'white', paddingHorizontal: 15}}>
            <View style={{flexDirection: 'row', position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 20,}}>Make Request</Text>
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
                <TouchableOpacity
                    //onPress={() => navigation.goBack()}
                    style={{position: 'absolute', right: 0}}
                >
                <Icon size={30} source={'bell-outline'} color={"gray"}/>
                </TouchableOpacity>
            </View>
            <View style={{flexDirection: 'row', position: 'relative', justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 14, lineHeight: 100, fontWeight: 400, fontStyle: 'normal', fontFamily: 'sf-regular', color: '#898A8D'}}>Give us feedback on our features or make a request</Text>
            </View>
            <View style={{flex: 1, alignItems: 'center', gap: 18}}>
                <Textarea style={{display: 'flex', height: 190, padding: 16, flexDirection: 'column', alignItems: 'flex-start', gap: 8, alignSelf: 'stretch', borderRadius: 8, border: 2, backgroundColor: 'white', borderColor: 'gray', borderWidth: 1}}></Textarea>
                <Text style={{fontFamily: 'sf-semiBold', fontSize: 14, lineHeight: 100, fontWeight: 400, fontStyle: 'normal', fontFamily: 'sf-regular', color: '#898A8D'}}>If your issue requires a response, please send us a Support Ticket</Text>
                <TouchableOpacity style={styles.button} onPress={()=>setIsVisible(true)}>
                <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
                <Modal
                transparent
                animationType="slide"
                visible={isVisible}
                onRequestClose={() => closeModal()}
                >
                <View style={styles.modalContainer}>
                    <Animated.View style={[styles.popup, { opacity }]}>
                    <Text style={styles.popupText}>Feature Request Submitted</Text>
                    <Text style={styles.popupText2}>Thank you for your thoughtful suggestion</Text>
                    <TouchableOpacity style={styles.button} onPress={closeModal}>
                      <Text style={styles.buttonText}>Continue</Text>
                    </TouchableOpacity>
                    </Animated.View>
                </View>
                </Modal>
                
            </View>
            
        </SafeAreaView>
    );
};


export default MakeRequest;
// define your styles
const styles = StyleSheet.create({
    container: {
        flex:1,
        //backgroundColor:Colors.background,
        paddingHorizontal:15,
        paddingTop:10,
    },
    containerd: {
        marginTop: 20,
        // marginHorizontal: 10,
      },
      header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 10,
        // backgroundColor: '#fff',
        borderRadius: 5,
        borderWidth:1,
        borderColor:'#505050'
      },
      headerText: {
        fontSize: 16,
        fontWeight: 'bold',
      },
      dropdownContent: {
        marginTop: 10,
        padding: 10,
        backgroundColor: '#e0e0e0',
        borderRadius: 5,
      },
      inputBox:{
        padding:10,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#505050',
        marginTop:20
      },
      lastBox:{
        padding:10,
        borderRadius: 10,
        borderWidth:1,
        borderColor:'#505050',
        marginTop:20,
        flexDirection:'row',
        // justifyContent:'space-between',
        gap:10,
        alignItems:'center',
      },
      button:{
        display: 'flex',
        backgroundColor:'#17A3FD',
        justifyContent:'center',
        alignItems:'center',
        height:48,
        borderRadius:10,
        position:'absolute',
        bottom:350,
        width:'100%',
        alignSelf:'center'
      },
      buttonText:{
        color:'#FFF',
        fontWeight:'500',
        fontSize:15
      },
      modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
      },
      popup: {
        backgroundColor: 'white',
        padding: 20,
        borderRadius: 10,
        alignItems: 'center',
        flex:1,
        width:'100%',
        justifyContent:'center'
      },
      popupText: {
        // fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
        color:'#022651',
        fontSize:20
      },
      popupText2:{
        fontWeight:'400',
        fontSize:14,
        color:'#4B4B4B',
        textAlign:'center'
      },
      closeButton: {
        backgroundColor: '#007BFF',
        padding: 10,
        borderRadius: 5,
      },
      closeButtonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
      },
});



