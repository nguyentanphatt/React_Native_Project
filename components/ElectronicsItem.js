import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import rating_5 from '../assets/image/Rating_5.png'
import add from '../assets/icon/add.png'
const ElectronicsItem = ( {name, price, image, rating, navigation} ) => {
  return (
    <View style={styles.container}>
    <Image source={{uri: image}} width={70} height={70}/>
      <TouchableOpacity onPress={()=>navigation.navigate('ItemDetail01Screen', [name, image, price, rating] )}>
        <View style={{marginRight: 100}}>
          <Text>{name}</Text>
          <Image source={rating_5}/>
        </View>
      </TouchableOpacity>
      <View>
        <Image source={add} style={{width: 30, height: 30}}/>
        <Text>${price}</Text>
      </View>
    </View>
  )
}

export default ElectronicsItem

const styles = StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: 10,
      borderWidth: 1,
      borderRadius: 10,
      marginVertical: 10,
      borderColor: '#c6c6c6'
    }
  })