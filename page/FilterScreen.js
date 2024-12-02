import React, { useState } from 'react';
import { View, Text, StyleSheet, Switch, TextInput, TouchableOpacity } from 'react-native';
import Slider from '@react-native-community/slider';
import Icon from 'react-native-vector-icons/Ionicons';

const FilterScreen = () => {
    const [instantDelivery, setInstantDelivery] = useState(false);
    const [expressDelivery, setExpressDelivery] = useState(false);
    const [standardDelivery, setStandardDelivery] = useState(false);
    const [minPrice, setMinPrice] = useState('10');
    const [maxPrice, setMaxPrice] = useState('1000');

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.headerText}>Filter</Text>
                <TouchableOpacity>
                    <Text style={styles.closeButton}>X</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Shipping options</Text>
                <View style={styles.option}>
                    <Switch value={instantDelivery} onValueChange={setInstantDelivery} />
                    <Text style={styles.optionText}>Instant (2 hours delivery)</Text>
                </View>
                <View style={styles.option}>
                    <Switch value={expressDelivery} onValueChange={setExpressDelivery} />
                    <Text style={styles.optionText}>Express (2 days delivery)</Text>
                </View>
                <View style={styles.option}>
                    <Switch value={standardDelivery} onValueChange={setStandardDelivery} />
                    <Text style={styles.optionText}>Standard (7-10 days delivery)</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Price range</Text>
                <View style={styles.priceInputs}>
                    <TextInput
                        style={styles.priceInput}
                        value={minPrice}
                        onChangeText={setMinPrice}
                        keyboardType="numeric"
                    />
                    <TextInput
                        style={styles.priceInput}
                        value={maxPrice}
                        onChangeText={setMaxPrice}
                        keyboardType="numeric"
                    />
                </View>
                <Slider
                    style={styles.slider}
                    minimumValue={10}
                    maximumValue={1000}
                    minimumTrackTintColor="#00BFFF"
                    maximumTrackTintColor="#000000"
                />
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Average review</Text>
                <View style={styles.stars}>
                    {[1, 2, 3, 4].map((star) => (
                        <Icon key={star} name="star" size={24} color="#FFD700" />
                    ))}
                    <Icon name="star-outline" size={24} color="#FFD700" />
                    <Text style={styles.ratingText}> & Up</Text>
                </View>
            </View>

            <View style={styles.section}>
                <Text style={styles.sectionTitle}>Others</Text>
                <View style={styles.otherOptions}>
                    <TouchableOpacity style={styles.otherOption}>
                        <Icon name="refresh" size={24} color="#00BFFF" />
                        <Text style={styles.otherOptionText}>30-day Free Return</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherOption}>
                        <Icon name="shield-checkmark" size={24} color="#808080" />
                        <Text style={styles.otherOptionText}>Buyer Protection</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherOption}>
                        <Icon name="pricetag" size={24} color="#808080" />
                        <Text style={styles.otherOptionText}>Best Deal</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.otherOption}>
                        <Icon name="location" size={24} color="#808080" />
                        <Text style={styles.otherOptionText}>Ship to store</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    closeButton: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    section: {
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 18,
        fontWeight: 'bold',
        marginBottom: 10,
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10,
    },
    optionText: {
        marginLeft: 10,
    },
    priceInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
    },
    priceInput: {
        borderWidth: 1,
        borderColor: '#ccc',
        padding: 5,
        width: '45%',
    },
    slider: {
        width: '100%',
        height: 40,
    },
    stars: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    ratingText: {
        marginLeft: 5,
    },
    otherOptions: {
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
    },
    otherOption: {
        width: '48%',
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        alignItems: 'center',
        marginBottom: 10,
    },
    otherOptionText: {
        marginTop: 5,
        textAlign: 'center',
    },
});

export default FilterScreen;
