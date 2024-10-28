import React from 'react'
import { Text, View, Image, StyleSheet, TextInput } from 'react-native'
import search from '../assets/icon/search.png'
import sort from '../assets/icon/sort.png'
const SearchBar = () => {
  return (
    <View style={styles.container}>
        <View style={styles.inputField}>
            <Image source={search} style={{width: 20, height: 20}}/>
            <TextInput placeholder='Search for product' style={{outline: 'none', marginLeft: 10}}/>
        </View>
        <View style={styles.sortButton}> 
            <Image source={sort} style={{width: 30, height: 30}}/>
        </View>
    </View>
  )
}

export default SearchBar

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    inputField:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        padding: 5, 
        width:  '80%',
        borderRadius: 10
    },
    sortButton:{
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#e9e9e9',
        alignItems: 'center',
        justifyContent: 'center'
    },
})