import React from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'
import star from '../assets/icon/star.png'
const Item = ( {image, name, rating, price} ) => {
  return (
    <View style={styles.container}>
        <Image source={image} style={{width: 100, height: 100}}/>
        <Text style={{fontWeight: '700'}}>{name}</Text>
        <View style={styles.info}>
            <View style={styles.info}>
                <Image source={star} style={{width: 15, height: 15}}/>
                <Text>{rating}</Text>
            </View>
            <Text style={{color: '#1ac1d8', fontWeight: '600'}}>${price}</Text>
        </View>
    </View>
  )
}

export default Item

const styles=StyleSheet.create({
    container:{
        backgroundColor: '#ededed',
        padding: 5
    },
    info:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})