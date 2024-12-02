import React from 'react'
import {Text, View, Image, StyleSheet, TextInput, Touchable, TouchableOpacity} from 'react-native'
import home_blue from '../assets/icon/home_blue.png'
import search from '../assets/icon/search.png'
import heart from '../assets/icon/heart.png'
import inbox from '../assets/icon/inbox.png'
import account from '../assets/icon/account.png'
const Footer = () => {
  return (
    <View style={styles.container}>
        <View style={styles.item}>
            <TouchableOpacity>
                <Image source={home_blue} style={{width: 30, height: 30}}/>
                <Text style={{color: '#1ac1d8'}}>Home</Text>
            </TouchableOpacity>
        </View>
        <View style={styles.item}>
            <Image source={search} style={{width: 30, height: 30}}/>
            <Text>Search</Text>
        </View>
        <View style={styles.item}>
            <Image source={heart} style={{width: 30, height: 30}}/>
            <Text style={styles.favorite}>99+</Text>
            <Text>Favorites</Text>
        </View>
        <View style={styles.item}>
            <Image source={inbox} style={{width: 30, height: 30}}/>
            <Text>Inbox</Text>
        </View>
        <View style={styles.item}>
            <Image source={account} style={{width: 30, height: 30}}/>
            <Text>Account</Text>
        </View>
    </View>
  )
}

export default Footer

const styles = StyleSheet.create({
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderTopColor: 'lightgray',
        borderTopWidth: 1
    },
    item:{
        alignItems: 'center',
        marginTop: 10
    },
    favorite: {
        position: 'absolute',
        fontSize: 10,
        width: 30,
        left: 28,
        borderRadius: 20,
        paddingHorizontal: 5,
        backgroundColor: 'red',
        color: '#fff'
    }
})