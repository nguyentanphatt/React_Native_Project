import React, {useEffect} from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from "react-native";
import left_arrow from "../assets/icon/left-arrow.png";
import { useCart } from "../context/CartContext";
import { TextInput } from "react-native-paper";
import {useDispatch, useSelector} from "react-redux";
import {fetchCart, removeCartItem} from "../services/slices/CartSlice";
let status =0;
const Cart = ({ navigation }) => {
    const { cartItems, setCartItems, totalAmount, removeFromCart, countProducts } = useCart();
    const dispatch = useDispatch()
    let cart = useSelector((state) => state.cart.cart)

    useEffect(()=>{
        dispatch(fetchCart())
        status = 0;

    },[dispatch])
    useEffect(()=>{
        status++
            if(status < 5){
                setCartItems(cart)
            }
    } )
    function removeCart(item) {

        dispatch(removeCartItem(item))
        removeFromCart(item)
    }
  return (
    <View style={{ backgroundColor: "#fff", flex: 1 }}>
      <View style={{ marginTop: 20, display: "flex", flexDirection: "row" }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image source={left_arrow} style={{ width: 30, height: 30 }} />
        </TouchableOpacity>
        <Text style={{ fontWeight: "700", fontSize: 18, marginLeft: 100 }}>
          Checkout
        </Text>
      </View>
      <View
        style={{
          height: 500,
          marginTop: 20,
        }}
      >
        <FlatList
          data={cartItems}
          renderItem={({ item }) => (
            <View
              style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                borderBottomWidth: 1,
                marginBottom: 10,
              }}
            >
              <Image source={{uri: item.image}} style={{ width: 100, height: 70 }} />
              <View style={{ marginRight: 50 }}>
                <Text style={{ fontWeight: "700" }}>{item.name}</Text>
                <Text style={{ fontSize: 14, color: "gray" }}>
                  Consequat ex eu
                </Text>
                <Text style={{ fontWeight: "600" }}>${item.price}</Text>
              </View>
              <View>
                <TouchableOpacity onPress={() => removeCart(item.name)}>
                  <Text>Delete</Text>
                </TouchableOpacity>
                <Text>x{item.quantity}</Text>
              </View>
            </View>
          )}
        />
      </View>
      <View>
        <Text style={{ marginBottom: 10, fontSize: 16 }}>Voucher</Text>
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <TextInput
            placeholder="Enter voucher code"
            style={{ width: "80%", height: 40 }}
          />
          <TouchableOpacity
            style={{
              height: 40,
              width: 60,
              alignItems: "center",
              justifyContent: "center",
              borderRadius: 3,
              marginLeft: 10,
              backgroundColor: "#f2e5f2",
            }}
          >
            <Text style={{ color: "#b266b2" }}>Apply</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "space-between",
          marginTop: 20,
          marginBottom: 20,
        }}
      >
        <Text style={{ fontWeight: "700", fontSize: 16 }}>TOTAL</Text>
        <Text style={{ fontWeight: "700", fontSize: 16 }}>
          ${totalAmount()}
        </Text>
      </View>
      <TouchableOpacity
        onPress={() => {
            if(countProducts() !== 0){
                status = 0;
                navigation.navigate('Payment', cartItems)
        } else {
                alert('Please add some products to checkout!');
            }
        }}
        style={{
          width: "100%",
          height: 40,
          borderRadius: 10,
          backgroundColor: "#1ac1d8",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={{ fontSize: 18, fontWeight: "700", color: "#fff" }}>
          Next
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Cart;
