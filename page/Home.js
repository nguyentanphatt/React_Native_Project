import React, {useEffect} from "react";
import {
  Text,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  ImageBackground, RefreshControl,
} from "react-native";
import Swiper from "react-native-swiper";
import Category from "../components/Category";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import phone_category from "../assets/image/phone_category.png";
import sneaker_category from "../assets/image/sneaker_category.png";
import lipstick from "../assets/image/lipstick.png";
import fruit_category from "../assets/image/fruit_category.png";
import banner from "../assets/image/banner.png";
import bags from "../assets/image/bags.jpg";
import macbook from "../assets/image/macbook.jpg";
import sneaker_1 from "../assets/image/sneaker_1.png";
import tablet_1 from "../assets/image/tablet_1.png";
import pear from "../assets/image/pear.png";
import Item from "../components/Item";
import {useDispatch, useSelector} from "react-redux";
import {fetchElectronics, fetchRandom} from "../services/slices/ElectronicsSlice";
const Home = ({ navigation }) => {
  const category = [
    {
      image: phone_category,
      title: "Electronics",
    },
    {
      image: sneaker_category,
      title: "Fashion",
    },
    {
      image: lipstick,
      title: "Beauty",
    },
    {
      image: fruit_category,
      title: "Fresh Fruits",
    },
  ];
  const [refreshing, setRefreshing] = React.useState(false);

  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    navigation.navigate('Cart')
    setTimeout(() => {

      navigation.navigate('Home')
      product = [];
      setRefreshing(false);
    }, 200);
  }, []);
  const dispatch = useDispatch();
  let product = useSelector((state) => state.electronics.electronics)
  useEffect(()=>{
    dispatch(fetchRandom())
  },[dispatch])
  const itemsPerPage = 3;

  const pagesForCategory = [];
  for (let i = 0; i < category.length; i += itemsPerPage) {
    pagesForCategory.push(category.slice(i, i + itemsPerPage));
  }

  const pagesForProduct = [];
  for (let i = 0; i < product.length; i += itemsPerPage) {
    pagesForProduct.push(product.slice(i, i + itemsPerPage));
  }


  return (
    <View>
      <Header title="All Deals" navigation={navigation} />
      <SearchBar />
      <ScrollView style={{ backgroundColor: "#fff" }} refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
        <View>
          <Swiper
            loop={false}
            showsPagination={false}
            showsButtons={false}
            autoplay={false}
            style={{ height: 150 }}
          >
            {pagesForCategory.map((page, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingVertical: 20,
                }}
              >
                {page.map((item) => (
                  <Category
                    image={item.image}
                    title={item.title}
                    navigation={navigation}
                  />
                ))}
              </View>
            ))}
          </Swiper>
          <View style={styles.banner}>
            <View>
              <Text
                style={{ fontSize: 22, fontWeight: "700", color: "#0F89D1" }}
              >
                Shoes
              </Text>
              <Text style={{ fontSize: 18, color: "gray", marginTop: 5 }}>
                50% off
              </Text>
              <TouchableOpacity style={styles.buynow}>
                <Text style={{ color: "#fff" }}>Buy now</Text>
              </TouchableOpacity>
            </View>
            <View>
              <Image source={banner} style={{ width: 200, height: 100 }} />
            </View>
          </View>
          <View style={styles.sales}>
            <View>
              <ImageBackground
                source={bags}
                style={{ width: 180, height: 150 }}
              />
              <Text
                style={{
                  position: "absolute",
                  top: 20,
                  width: 40,
                  paddingHorizontal: 5,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: "#ff4c4c",
                  color: "#fff",
                }}
              >
                30%
              </Text>
            </View>
            <View>
              <ImageBackground
                source={macbook}
                style={{ width: 180, height: 150 }}
              />
              <Text
                style={{
                  position: "absolute",
                  top: 20,
                  width: 40,
                  paddingHorizontal: 5,
                  borderTopRightRadius: 10,
                  borderBottomRightRadius: 10,
                  backgroundColor: "#ffb732",
                  color: "#fff",
                }}
              >
                30%
              </Text>
            </View>
          </View>
          <View style={styles.recommend}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>
              Recommended for you
            </Text>
            <Text style={{ color: "gray" }}>View all</Text>
          </View>
          <Swiper
            loop={false}
            showsPagination={false}
            showsButtons={false}
            autoplay={false}
            style={{ height: 200 }}
          >
            {pagesForProduct.map((page, index) => (
              <View
                key={index}
                style={{
                  flexDirection: "row",
                  justifyContent: "space-around",
                  paddingVertical: 20,
                }}
              >
                {page.map((item) => (
                  <Item
                    image={item.image}
                    name={item.name}
                    rating={item.rating}
                    price={item.price}
                    category={item.category}
                    navigation={navigation}
                  />
                ))}
              </View>
            ))}
          </Swiper>
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  banner: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    borderRadius: 10,
    backgroundColor: "#f6ecf1",
    padding: 10,
  },
  buynow: {
    height: 30,
    width: 90,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#000",
    borderRadius: 5,
    marginTop: 10,
  },
  sales: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  recommend: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
});
