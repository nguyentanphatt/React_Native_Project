import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Electronics from "./page/Electronics";
import ItemDetail01Screen from "./page/ItemDetail01Screen";
import Cart from "./page/Cart";
import { CartProvider } from "./context/CartContext";
import Payment from "./page/Payment";
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <CartProvider>
      <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Electronics" component={Electronics} />
          <Stack.Screen name="ItemDetail01Screen" component={ItemDetail01Screen} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </View>
    </CartProvider>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 10
  },
  content: { flex: 1 },
});
