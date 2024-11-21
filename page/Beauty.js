import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList
} from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import banner_beauty from "../assets/image/banner_beauty.png";
import lipstick from "../assets/image/lipstick.png";
import cleanser from "../assets/image/cleanser.png";
import brush from "../assets/image/brush.png";
import makeup from "../assets/image/makeup.png";
import hat from "../assets/image/hat.png";
import sneaker from "../assets/image/sneaker_1.png";
import FruitItem from "../components/FruitItem";


const Beauty = ({ route, navigation }) => {
  const [title] = route.params;
  const [seeAll, setSeeAll] = useState(false);

  const itemData = [
    { id: 1, name: "Lipstick", price: 15, image: lipstick, rating: '4.5' },
    { id: 2, name: "Face Cleanser", price: 13, image: cleanser, rating: '4.5' },
    { id: 3, name: "Makeup Brush", price: 28, image: brush, rating: '4.5' },
    { id: 4, name: "Makeup Cream", price: 10, image: makeup, rating: '4.5' },
  ];

  const relevantData = [
    { id: 5, name: "Sneaker", price: 35, image: sneaker, rating: '4.5' },
    { id: 6, name: "Len Hat", price: 12, image: hat, rating: '4.5' }
  ];

  return (
      <View style={{ backgroundColor: '#fff', flex: 1}}>
        <Header title={title} navigation={navigation} />
        <SearchBar />
        {/*Banner part*/}
        <Image source={banner_beauty} style={{width: '100%', height: 150, borderRadius: 10, marginBottom: 16, marginTop: 20}}/>
        <View style={styles.dotsList}>
          <View style={styles.dotsSpecial}></View>
          <View style={styles.dots}></View>
          <View style={styles.dots}></View>
          <View style={styles.dots}></View>
        </View>
        <View style={{height: 200}}>
        <FlatList
            data={itemData}
            renderItem={({item}) =>
                <FruitItem.FruitItem
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    navigation={navigation}
                />

            }
            numColumns={2}
            keyExtractor={itemData.id}
        />
        </View>
        <View>
          <View style={styles.category}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Relevant products</Text>
            <TouchableOpacity>
            <Text style={{ color: "gray" }}>See all ></Text>
            </TouchableOpacity>
          </View>
        </View>
        <FlatList
            data={relevantData}
            renderItem={({ item }) =>
                <FruitItem.RelevantFruitItem
                    name={item.name}
                    price={item.price}
                    image={item.image}
                    rating={item.rating}
                    navigation={navigation}
                />

            }
            keyExtractor={itemData.id}
        />
      </View>
  );
};

export default Beauty;


const styles = StyleSheet.create({
  category: {
    fontSize: 18,
    padding: 15,
    fontWeight: 'bold',
    flexDirection: 'row',
    justifyContent: "space-between"
  },
  banner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 20,
  },
  categoryDetails: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 10,
  },
  smartContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#CDA7F2",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  ipadContainer: {
    width: 100,
    height: 100,
    backgroundColor: "lightblue",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  macContainer: {
    width: 100,
    height: 100,
    backgroundColor: "#ffdb99",
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  selection: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    width: 110,
    height: 30,
    borderRadius: 20
  },
  selected:{
    backgroundColor: '#e7f3fa',
  },
  text:{
    color: 'gray',
  },
  textSelected:{
    color: '#0F89D1',
    fontWeight: '600'
  },
  seeAllButton:{
    alignItems: 'center',
    justifyContent: 'center',
    height: 50,
    borderRadius: 10,
    backgroundColor: 'lightgray',
    marginBottom: 10
  },
  dotsList:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 150
  },
  dots:{
    width: 10,
    height: 10,
    borderRadius: 20,
    backgroundColor: 'lightgray'
  },
  dotsSpecial:{
    width: 30,
    height: 10,
    borderRadius: 20,
    backgroundColor: '#1ac1d8',
    marginTop: 5,
    marginBottom: 5
  }
});
