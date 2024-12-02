import React from 'react'
import {Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
import star from '../assets/icon/star.png'
const Item = ( {image, name, rating, price, category, navigation} ) => {
  return (
      <TouchableOpacity onPress={()=>navigation.navigate('ItemDetail01Screen', [name, image, price, rating, category] )}>
    <View style={styles.container}>
        <Image source={{uri: image}} style={{width: 100, height: 100}}/>
        <Text style={{fontWeight: '700', overflow: 'hidden'}}>{name}</Text>
        <View style={styles.info}>
            <View style={styles.info}>
                <Image source={star} style={{width: 15, height: 15}}/>
                <Text>{rating}</Text>
            </View>
            <Text style={{color: '#1ac1d8', fontWeight: '600'}}>${price}</Text>
        </View>
    </View>
      </TouchableOpacity>
  )
}

export default Item

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#ededed',
        padding: 5,
        width: 120
    },
    info:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})