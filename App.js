import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import Home from "./page/Home";
import Footer from "./components/Footer";
import Electronics from "./page/Electronics";
import FreshFruits from "./page/FreshFruits";
import ItemDetail01Screen from "./page/ItemDetail01Screen";
import Fashion from "./page/Fashion";
import Cart from "./page/Cart";
import { CartProvider } from "./context/CartContext";
import Payment from "./page/Payment";
import Beauty from "./page/Beauty";
import PaymentSuccess from "./page/PaymentSuccess";
import FeedbackScreen from "./page/Feedback"
import { Provider } from 'react-redux';
import { store } from './services/Store';

//import FilterScreen from "./page/FilterScreen";
const Stack = createNativeStackNavigator()

export default function App() {
  return (
      <Provider store={store}>
    <CartProvider>
      <View style={styles.container}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Electronics" component={Electronics} />
          <Stack.Screen name="FreshFruits" component={FreshFruits} />
          <Stack.Screen name="Fashion" component={Fashion} />
          <Stack.Screen name="Beauty" component={Beauty} />
          <Stack.Screen name="PaymentSuccess" component={PaymentSuccess} />
          <Stack.Screen name="FeedbackScreen" component={FeedbackScreen} />
          {/*<Stack.Screen name="FilterScreen" component={FilterScreen} />*/}
          <Stack.Screen name="ItemDetail01Screen" component={ItemDetail01Screen} />
          <Stack.Screen name="Cart" component={Cart} />
          <Stack.Screen name="Payment" component={Payment} />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </View>
    </CartProvider>
    </Provider>
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 10
  },
  content: { flex: 1 },
});
