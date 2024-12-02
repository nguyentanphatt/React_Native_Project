import React from 'react'
import { View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native'
import rating_5 from '../assets/image/Rating_5.png'
import add from '../assets/icon/add.png'
const FruitItem = ( {name, price, image, rating, category, navigation} ) => {
    return (
        <View style={styles.itemContainer}>
            <Image source={{uri: `${image}`}} style={styles.itemImage}/>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <TouchableOpacity onPress={()=>navigation.navigate('ItemDetail01Screen', [name, image, price, rating, category] )}>
                    <View style={{marginRight: 0}}>
                        <Text style={{fontWeight: 'bold', padding: 5}}>{name}</Text>
                        <Image source={rating_5}/>
                    </View>
                </TouchableOpacity>
                <View>
                    <Image source={add} style={{width: 30, height: 30}}/>
                    <Text style={{fontWeight: 'bold'}}>${price}</Text>
                </View>
            </View>

        </View>
    )
}

const RelevantFruitItem = ( {name, price, image, rating, navigation} ) => {
    return (
        <View style={styles.relevantItemContainer}>
            <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
                <View style={{flexDirection: 'row'}}>
                    <Image source={{uri: image}} style={styles.relevantItemImage}/>
                    <TouchableOpacity onPress={()=>navigation.navigate('ItemDetail01Screen', [name, image, price, rating] )}>
                        <View style={{marginRight: 0, padding: 10}}>
                            <Text style={{fontWeight: 'bold', padding: 1}}>{name}</Text>
                            <Image source={rating_5}/>
                        </View>
                    </TouchableOpacity>
                </View>
                    <View style={{justifyContent: "center"}}>
                    <Image source={add} style={{width: 30, height: 30}}/>
                    <Text style={{fontWeight: 'bold'}}>${price}</Text>
                </View>
            </View>

        </View>
    )
}

module.exports = {FruitItem, RelevantFruitItem};

const styles = StyleSheet.create({
    itemContainer: {
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        alignItems: 'center',
        padding: 20,
        marginBottom: 16,
        justifyContent: 'space-between'
    },
    relevantItemContainer: {
        display: 'flex',
        flexDirection: 'row',
        height: 65,
        flex: 1,
        alignItems: 'center',
        padding: 0,
        marginBottom: 16,
        justifyContent: 'space-between',
        borderWidth: 1,
        borderRadius: 5,
        marginVertical: 10,
        borderColor: '#c6c6c6'

    },
    relevantItemImage: {
        padding: 20,
        left: 5,
        flexDirection: 'column',
        maxWidth: '10%',
        maxHeight: 50,
        height: 50,
        marginBottom: 8,

    },
    itemImage: {
        flexDirection: 'column',
        maxWidth: '60%',
        maxHeight: 100,
        width: '100%',
        height: 100,
        marginBottom: 8,
    },
})