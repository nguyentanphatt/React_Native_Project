import React, { useState } from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ImageBackground,
  FlatList
} from "react-native";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import smart from "../assets/image/smart.png";
import ipad from "../assets/image/ipad.png";
import macbook_2 from "../assets/image/macbook_2.png";
import phone_1 from "../assets/image/1.png";
import phone_2 from "../assets/image/2.png";
import phone_3 from "../assets/image/3.png";
import phone_4 from "../assets/image/4.png";
import banner_elec from "../assets/image/banner_elec.png";
import ElectronicsItem from "../components/ElectronicsItem";
const Electronics = ({ route, navigation }) => {
  const [title] = route.params;
  const [category, setCategory] = useState("Smart Phone");
  const [special, setSpecial] = useState()
  const [seeAll, setSeeAll] = useState(false)

  const itemData = [
    {
      id: 1,
      name: "SmartPhone",
      price: 899,
      image: phone_1,
      category: "Smart Phone",
      special: "Best Sales",
      rating: '4.5'
    },
    {
      id: 2,
      name: "SmartPhone",
      price: 799,
      image: phone_2,
      category: "Smart Phone",
      special: "Best Matched",
      rating: '4.5'
    },
    {
      id: 3,
      name: "SmartPhone",
      price: 999,
      image: phone_3,
      category: "Smart Phone",
      special: "Popular",
      rating: '4.5'
    },
    {
      id: 4,
      name: "SmartPhone",
      price: 599,
      image: phone_4,
      category: "Ipad",
      special: "Best Sales",
      rating: '4.5'
    },
    {
      id: 5,
      name: "SmartPhone",
      price: 699,
      image: phone_1,
      category: "Ipad",
      special: "Best Matched",
      rating: '4.5'
    },
    {
      id: 6,
      name: "SmartPhone",
      price: 529,
      image: phone_2,
      category: "Ipad",
      special: "Popular",
      rating: '4.5'
    },
    {
      id: 7,
      name: "SmartPhone",
      price: 500,
      image: phone_3,
      category: "Mac",
      special: "Best Sales",
      rating: '4.5'
    },
    {
      id: 8,
      name: "SmartPhone",
      price: 909,
      image: phone_4,
      category: "Mac",
      special: "Best Matched",
      rating: '4.5'
    },
    {
      id: 9,
      name: "SmartPhone",
      price: 859,
      image: phone_1,
      category: "Mac",
      special: "Popular",
      rating: '4.5'
    },
  ]

  const filterData = seeAll ? itemData : 
    itemData.filter(item => (item.category === category && (!special || item.special === special)))

  return (
    <View style={{backgroundColor: '#fff', flex:1}}>
      <Header title={title} navigation={navigation} />
      <SearchBar />
        <View>
          <View style={styles.category}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Categories</Text>
            <Text style={{ color: "gray" }}>See all</Text>
          </View>
        </View>
        <View style={styles.categoryDetails}>
          <TouchableOpacity
            style={styles.smartContainer}
            onPress={() => {
                setCategory("Smart Phone")
                setSeeAll(false)
            }}
          >
            <Image source={smart} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.ipadContainer}
            onPress={() => {
                setCategory("Ipad")
                setSeeAll(false)
            }}
          >
            <Image source={ipad} />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.macContainer}
            onPress={() => {
                setCategory("Mac")
                setSeeAll(false)
            }}
          >
            <Image source={macbook_2} />
          </TouchableOpacity>
        </View>
        <View style={styles.categoryDetails}>
          <TouchableOpacity
            style={[
              styles.selection,
              special === "Best Sales" && styles.selected,
            ]}
            onPress={() => {
                setSpecial(special === "Best Sales" ? null : "Best Sales")
                setSeeAll(false)
            }}
          >
            <Text style={[
                styles.text,
                special === "Best Sales" && styles.textSelected,   
            ]}>
              Best Sales
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
                styles.selection,
                special === "Best Matched" && styles.selected,
            ]}
            onPress={() => {
                setSpecial(special === "Best Matched" ? null : "Best Matched")
                setSeeAll(false)
            }}
          >
            <Text style={[
                styles.text,
                special === "Best Matched" && styles.textSelected,    
            ]}>
              Best Matched
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[
                styles.selection,
                special === "Popular" && styles.selected,
            ]}
            onPress={() => {
                setSpecial(special === "Popular" ? null : "Popular")
                setSeeAll(false)
            }}
          >
            <Text style={[
                styles.text,
                special === "Popular" && styles.textSelected,  
            ]}>Popular</Text>
          </TouchableOpacity>
        </View>
        <FlatList 
            data={filterData}
            renderItem={({item}) => 
            <ElectronicsItem 
              name={item.name} 
              price={item.price} 
              image={item.image}
              rating={item.rating}
              navigation={navigation}
              />

            }
            keyExtractor={itemData.id}
        />
        <View>
            <TouchableOpacity onPress={()=> setSeeAll(true)} style={styles.seeAllButton}>
                <Text style={{color: 'gray'}}>See All</Text>
            </TouchableOpacity>    
        </View>
        
        <Image source={banner_elec} style={{width: 500, height: 150, borderRadius: 10}}/>     
        <View style={styles.dotsList}>
            <View style={styles.dotsSpecial}></View>
            <View style={styles.dots}></View>
            <View style={styles.dots}></View>
            <View style={styles.dots}></View>
        </View>
    </View>
  );
};

export default Electronics;

const styles = StyleSheet.create({
  category: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
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
