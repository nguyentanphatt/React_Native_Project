import React from 'react'
import { Text, View, Image, StyleSheet} from 'react-native'
const Category = ( {image, title} ) => {

    const backgroundColors = {
        'Electronics': 'purple',
        'Fashion': 'blue',
        'Beauty': 'orange',
        'Fresh Fruit': 'red',
    }

    const backgroundColor = backgroundColors[title]
  return (
    <View style={styles.container}>
        <View style={[styles.categoryImage, {backgroundColor}]}>
            <Image source={image} style={{width: 60, height: 60}}/>
        </View>
        <Text style={{fontWeight: '700'}}>{title}</Text>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        alignItems: 'center'
    },
    categoryImage:{
        width: 80,
        height:80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    }
})