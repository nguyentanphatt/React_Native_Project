import React from 'react'
import { Text, View, Image, StyleSheet, TouchableOpacity} from 'react-native'
const Category = ( {image, title, navigation} ) => {

    const backgroundColors = {
        'Electronics': 'purple',
        'Fashion': 'blue',
        'Beauty': 'orange',
        'Fresh Fruits': 'red',
    }

    const handleNavigation = () => {
        if (title === 'Electronics') {
            navigation.navigate('Electronics', [ title ]);
        } else if (title === 'Fashion') {
           navigation.navigate('Fashion', [title]);
        } else if (title === 'Beauty') {
           navigation.navigate('Beauty', [title]);
        } else if (title === 'Fresh Fruits') {
          navigation.navigate('FreshFruits', [title]);
        }
    };

    const backgroundColor = backgroundColors[title]
  return (
    <View style={styles.container}>
         <TouchableOpacity onPress={handleNavigation}>
            <View style={[styles.categoryImage, {backgroundColor}]}>
                <Image source={image} style={{width: 60, height: 60}}/>
            </View>
            <Text style={{fontWeight: '700'}}>{title}</Text>
        </TouchableOpacity>
    </View>
  )
}

export default Category

const styles = StyleSheet.create({
    container:{
        alignItems: 'center',
        justifyContent: 'center'
    },
    categoryImage:{
        width: 80,
        height:80,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 40
    }
})