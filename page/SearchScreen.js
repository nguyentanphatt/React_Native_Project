// file: page/SearchScreen.js
import React from 'react';
import { View, FlatList, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Item from '../components/Item';
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";

const SearchScreen = ({ route }) => {
    const { results } = route.params;
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Header title="Search Results" navigation={navigation} />
            <SearchBar />
            <FlatList
                data={results}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                renderItem={({ item }) => (
                    <Item
                        image={item.image}
                        name={item.name}
                        rating={item.rating}
                        price={item.price}
                        category={item.category}
                        navigation={navigation}
                    />
                )}
            />
        </View>
    );
};

export default SearchScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
});