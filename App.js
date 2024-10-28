import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { View, StyleSheet } from "react-native";
import Home from "./page/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <View style={styles.container}>
      <Header />
      <SearchBar />
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown: false}}>
          <Stack.Screen name="Home" component={Home} />
        </Stack.Navigator>
      </NavigationContainer>
      <Footer />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: { 
    flex: 1,
    padding: 10
  },
  content: { flex: 1 },
});
