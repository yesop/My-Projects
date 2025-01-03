import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';
import Ionicons from "react-native-vector-icons/Ionicons";


const windowWidth = Dimensions.get('window').width;

const HomeCard = () => {
    return (
        <View style={[styles.cardContainer, styles.shadow]}>
            <View style={styles.heartIconContainer}>
                <Text style={styles.heartIcon}>❤️</Text>
            </View>
            <Image
                source={require("../../assets/images/house.jpeg")}
                style={styles.image}
            />
            <View style={{alignItems:'center', paddingTop:20}}>
                <Text style={{fontFamily:'sf-semiBold'}}>Modern room in Molyko, Buea...</Text>
            </View>
            <View style={styles.textContainer}>
                <View style={{flexDirection:"row", justifyContent:'space-between', alignItems:'center', gap:5}}>
                    <Ionicons name="navigate" size={20} color="#3787E4"/>
                    <Text style={styles.name}>Buea</Text>
                </View>
                <Text style={styles.distance}>10km</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    cardContainer: {
        borderRadius: 10,
        marginTop:-25,
        overflow: 'hidden',
        borderWidth: 1,
        borderColor: '#ddd',
        width: 190,
        marginBottom:30
    },
    shadow: {
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.15,
        shadowRadius: 3.84,
        elevation: 8, // For Android
    },
    heartIconContainer: {
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: 'transparent',
        zIndex: 1,
        
    },
    IconContainer: {
        position: 'absolute',
        top: 10,
        left: 10,
        backgroundColor: 'transparent',
        zIndex: 1,
        flexDirection:'row',
        justifyContent:'space-between'
    },
    heartIcon: {
        fontSize: 24,
        color: '#f00',
    },
    image: {
        width: '100%',
        height: 200,
    },
    textContainer: {
        padding: 15,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        
    },
    name: {
        fontSize: 14,
        fontWeight: 'bold',
        color:'#878787'
        
    },
    distance: {
        fontSize: 11,
        fontWeight: 'bold',
        fontFamily:'sf-regular',
        color:'#9D93BC'
        
    },
    price: {
        fontSize: 16,
        color: '#4CAF50',
        marginBottom: 5,
    },
});

export default HomeCard;