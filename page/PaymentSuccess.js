import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import paypal from "../assets/icon/paypal.png";

const PaymentSuccess = ({ route, navigation }) => {
    let payments = {
        visa: {
            name: 'Visa',
            card: '******2334',
        },
        maestro: {
            name: 'Maestro',
            card: '******3774',
        },
        paypal: {
            name: 'PayPal',
            card: '******aple@gmail.com',
        },
    }
    const [totalMoney, paymentMethods, tax, totalPlusTax] = route.params;
    console.log(route.params)
    return (
        <View style={styles.container}>
            {/* Success Icon */}
            <View style={styles.checkmarkContainer}>
                <Icon name="checkmark" size={50} color="white" />
            </View>

            {/* Success Message */}
            <Text style={styles.title}>Order placed successfully!</Text>
            <Text style={styles.subtitle}>
                Commodo eu ut sunt qui minim{'\n'}
                fugiat elit nisi enim
            </Text>

            {/* Order Summary */}
            <View style={styles.summaryContainer}>
                <View style={styles.row}>
                    <Text style={styles.label}>Subtotal</Text>
                    <Text style={styles.value}>{totalMoney}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Tax (10%)</Text>
                    <Text style={styles.value}>{tax}</Text>
                </View>
                <View style={styles.row}>
                    <Text style={styles.label}>Fees</Text>
                    <Text style={styles.value}>$0</Text>
                </View>

                {/* Card Info */}
                <View style={styles.cardRow}>
                    <Text style={styles.label}>{payments[paymentMethods].name}</Text>
                    <View style={styles.cardInfo}>
                        <Icon name="card" size={20} color="#000" />
                        <Text style={styles.cardNumber}>{payments[paymentMethods].card}</Text>
                    </View>
                </View>

                {/* Total */}
                <View style={[styles.row, styles.totalRow]}>
                    <Text style={styles.label}>Total</Text>
                    <View style={styles.totalContainer}>
                        <Text style={styles.successText}>Success</Text>
                        <Text style={styles.totalValue}>{totalPlusTax}</Text>
                    </View>
                </View>
            </View>

            {/* Rating */}
            <View style={styles.ratingContainer}>
                <Text style={styles.ratingText}>How was your experience?</Text>
                <View style={styles.starsContainer}>
                    {[1, 2, 3, 4, 5].map((star) => (
                        <Icon key={star} name="star" size={30} color="#FFD700" />
                    ))}
                </View>
            </View>

            {/* Back Button */}
            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}
            >
                <Icon name="home" size={20} color="white" />
                <Text style={styles.buttonText}>Back to Home</Text>
            </TouchableOpacity>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 20,
        alignItems: 'center',
    },
    checkmarkContainer: {
        width: 80,
        height: 80,
        borderRadius: 40,
        backgroundColor: '#4CAF50',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#00BCD4',
        marginBottom: 10,
        textAlign: 'center',
    },
    subtitle: {
        fontSize: 16,
        color: '#666',
        textAlign: 'center',
        marginBottom: 30,
    },
    summaryContainer: {
        width: '100%',
        backgroundColor: '#f8f8f8',
        padding: 20,
        borderRadius: 10,
        marginBottom: 20,
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
    },
    cardRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 10,
        borderTopWidth: 1,
        borderBottomWidth: 1,
        borderColor: '#eee',
    },
    cardInfo: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    cardNumber: {
        marginLeft: 10,
    },
    label: {
        fontSize: 16,
        color: '#666',
    },
    value: {
        fontSize: 16,
        fontWeight: '500',
    },
    totalRow: {
        marginTop: 10,
    },
    totalContainer: {
        alignItems: 'flex-end',
    },
    successText: {
        color: '#4CAF50',
        fontSize: 14,
    },
    totalValue: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    ratingContainer: {
        alignItems: 'center',
        marginVertical: 20,
    },
    ratingText: {
        fontSize: 16,
        marginBottom: 10,
    },
    starsContainer: {
        flexDirection: 'row',
    },
    button: {
        backgroundColor: '#00BCD4',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 8,
        width: '100%',
        position: 'absolute',
        bottom: 20,
        left: 20,
        right: 20,
    },
    buttonText: {
        color: 'white',
        fontSize: 16,
        fontWeight: '500',
        marginLeft: 10,
    },
});

export default PaymentSuccess;
