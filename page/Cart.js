import React from 'react'
import {
    Text,
    View,
    Image,
    ScrollView,
    StyleSheet,
    TouchableOpacity,
} from "react-native";
import left_arrow from '../assets/icon/left-arrow.png'
  
const Cart = ( {route, navigation} ) => {
    const [name, image, price] = route.params;
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
        <ScrollView>
            <View style={{marginTop: 20, display: 'flex', flexDirection: 'row'}}>
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                    <Image source={left_arrow} style={{width: 30, height: 30}}/>
                </TouchableOpacity>
                <Text style={{fontWeight: '700', fontSize: 18, marginLeft: 100}}>Checkout</Text>
            </View>
            <View>
                
            </View>
        </ScrollView>
        
    </View>
  )
}

export default Cart