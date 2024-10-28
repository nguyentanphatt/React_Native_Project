import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import user_icon from '../assets/icon/user_icon.png'
import left_arrow from '../assets/icon/left-arrow.png'
import cart from '../assets/icon/cart.png'
const Header = () => {
  return (
    <View style={styles.container}>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Image source={left_arrow} style={{width: 30, height: 30, marginRight: 10}}/>
            <Text style={{fontWeight: '700', fontSize: 18}}>All Deals</Text>
        </View>
        <View style={{display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
            <Image source={cart} style={{width: 30, height: 30, marginRight: 10}}/>
            <Image source={user_icon} style={{width: 40, height: 40, borderRadius: 20}}/>
        </View>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    } 
})