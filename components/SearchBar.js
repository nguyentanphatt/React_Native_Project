import React, { useState } from 'react';
import { Text, View, Image, StyleSheet, TextInput, FlatList, TouchableOpacity } from 'react-native';
import search from '../assets/icon/search.png';
import sort from '../assets/icon/sort.png';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

const SearchBar = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const navigation = useNavigation();
    const products = useSelector((state) => state.electronics.electronics);
    const handleSearch = () => {
        const filteredResults = products.filter((product) =>
            product.name.toLowerCase().includes(query.toLowerCase())
        );
        navigation.navigate('SearchScreen', { results: filteredResults });
    };

    const handleItemPress = (item) => {
        navigation.navigate('ItemDetail01Screen', [item.name, item.image, item.price, item.rating, item.category]);
    };

    return (
        <View style={styles.container}>
            <View style={styles.searchContainer}>
                <View style={styles.inputField}>
                    <Image source={search} style={{ width: 20, height: 20 }} />
                    <TextInput
                        placeholder='Search for product'
                        style={{ outline: 'none', marginLeft: 10, flex: 1 }}
                        value={query}
                        onChangeText={setQuery}
                        onSubmitEditing={handleSearch}
                    />
                </View>
                <View style={styles.sortButton}>
                    <Image source={sort} style={{ width: 30, height: 30 }} />
                </View>
            </View>
            {results.length > 0 && (
                <FlatList
                    data={results}
                    keyExtractor={(item) => item.id.toString()}
                    renderItem={({ item }) => (
                        <TouchableOpacity onPress={() => handleItemPress(item)}>
                            <Text style={styles.resultItem}>{item.name}</Text>
                        </TouchableOpacity>
                    )}
                />
            )}
        </View>
    );
};

export default SearchBar;

const styles = StyleSheet.create({
    container: {
        marginTop: 30,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
    searchContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '90%',
        justifyContent: 'space-between',
        gap: 10,
    },
    inputField: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#e9e9e9',
        padding: 5,
        flex: 1,
        borderRadius: 10,
    },
    sortButton: {
        width: 40,
        height: 40,
        borderRadius: 10,
        backgroundColor: '#e9e9e9',
        alignItems: 'center',
        justifyContent: 'center',
    },
    resultItem: {
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
