import React, {useState} from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import { RadioButton } from 'react-native-paper';
import { useCart } from "../context/CartContext";
import visa from '../assets/icon/visa.png'
import paypal from '../assets/icon/paypal.png'
import maestro from '../assets/icon/maestro.png'
import payment from '../assets/icon/payment.png'
import left_arrow from "../assets/icon/left-arrow.png";
const Payment = ( {navigation} ) => {
    const { totalAmount, calculateTax, totalPlusTaxes } = useCart();
    const [checked, setChecked] = useState('visa');
    let totalMoney = totalAmount();
    let tax = calculateTax();
    let totalPlusTax = totalPlusTaxes();
  return (
    <View style={{
        flex: 1,
        padding: 10
    }}>
        <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={left_arrow} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "700", fontSize: 18, marginLeft: 100 }}>
          Payment
        </Text>
      </View>
        <View style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: 100
        }}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>TOTAL</Text>
            <Text style={{ fontWeight: "700", fontSize: 40 }}>
          ${totalAmount()}
        </Text>
        </View>
        <View style={{
            display: 'flex',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            padding: 10,
            borderColor: '#1598aa',
            borderRadius: 5,
            marginTop: 20
        }}>
            <Image source={visa} style={{width: 40, height: 40}}/>
            <Text style={{marginRight: 80}}>******2334</Text>
            <RadioButton 
                value="visa"
                status={ checked === 'visa' ? 'checked' : 'unchecked' }
                onPress={() => {
                    setChecked('visa');
                }}
            />
        </View>
        <View style={{
            display: 'flex',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            padding: 10,
            borderColor: '#1598aa',
            borderRadius: 5,
            marginTop: 20
        }}>
            <Image source={maestro} style={{width: 40, height: 40}}/>
            <Text style={{marginRight: 80}}>******3774</Text>
            <RadioButton 
                value="maestro"
                status={ checked === 'maestro' ? 'checked' : 'unchecked' }
                onPress={() => {
                    setChecked('maestro')
                }}
            />
        </View>
        <View style={{
            display: 'flex',
            flexDirection: "row",
            alignItems: 'center',
            justifyContent: 'space-between',
            borderWidth: 1,
            padding: 10,
            borderColor: '#1598aa',
            borderRadius: 5,
            marginTop: 20
        }}>
            <Image source={paypal} style={{width: 40, height: 40}}/>
            <Text style={{marginRight: 80}}>******aple@gmail.com</Text>
            <RadioButton 
                value="paypal"
                status={ checked === 'paypal' ? 'checked' : 'unchecked' }
                onPress={() => {
                    setChecked('paypal');
                }}
            />
        </View>
        <TouchableOpacity
        style={{
          width: "100%",
          height: 50,
          borderRadius: 10,
          backgroundColor: "#1ac1d8",
          alignItems: "center",
          justifyContent: "center",
          display:'flex',
          flexDirection: 'row',
          marginTop: 40                
        }}
        onPress={()=>navigation.navigate('PaymentSuccess', [totalMoney, checked, tax, totalPlusTax] )}
      >
        <Image source={payment} style={{width: 30, height: 30, marginRight: 10}}/>
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
          Pay now
        </Text>
      </TouchableOpacity>
      <View style={{
        alignItems: "center",
        justifyContent: "center",
        display:'flex',
        flexDirection: 'row',
        marginTop: 10
      }}>
        <Text style={{fontSize: 60, color: '#1ac1d8', marginRight: 10}}>+</Text>
        <Text style={{fontSize: 18, color: '#1ac1d8'}}>Add new card</Text>
      </View>
    </View>
  )
}

export default Payment