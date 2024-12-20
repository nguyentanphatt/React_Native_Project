import React, {useEffect, useState} from 'react'
import {
  Text,
  View,
  Image,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Animated
} from "react-native";
import Swiper from "react-native-swiper";
import Header from '../components/Header'
import star from '../assets/icon/star.png'
import express from '../assets/icon/truck.png'
import arrow from '../assets/icon/return.png'
import medal from '../assets/icon/medal.png'
import star_blue from '../assets/icon/star_outline.png'
import half_star from '../assets/icon/half_star.png'
import user_1 from '../assets/icon/user_1.png'
import user_2 from '../assets/icon/user_2.png'
import phone_1 from "../assets/image/1.png";
import phone_2 from "../assets/image/2.png";
import phone_3 from "../assets/image/3.png";
import phone_4 from "../assets/image/4.png";
import Item from '../components/Item';
import white_bell from '../assets/icon/white_bell.png'
import cart_blue from '../assets/icon/cart_blue.png'
import { useCart } from '../context/CartContext';
import {useDispatch, useSelector} from "react-redux";
import {fetchFashion} from "../services/slices/FashionSlice";
import {fetchFruits} from "../services/slices/FruitsSlice";
import {fetchBeauty} from "../services/slices/BeautySlice";
import {fetchElectronics} from "../services/slices/ElectronicsSlice";
import {addCart} from "../services/slices/CartSlice";
const ItemDetail01Screen = ( {route, navigation} ) => {

    const [isEnabled, setIsEnabled] = useState(false);
    const [animation] = useState(new Animated.Value(0));

    const toggleSwitch = () => {
        const toValue = isEnabled ? 0 : 1;
        Animated.spring(animation, {
            toValue,
            useNativeDriver: false,
        }).start();
        setIsEnabled(!isEnabled);
    };

    const translateX = animation.interpolate({
        inputRange: [0, 1],
        outputRange: [3, 22] // Adjust these values based on your container width
    });

    const [name, image, price, rating, category] = route.params;
  const { addToCart } = useCart()
  const dispatch = useDispatch()
  let itemData = [];
  let states = "fruits";
  switch(category) {
    case "Fruits":
      states = "fruits";
      break;
    case "Beauty":
      states = "beauty";
      break;
    case "Fashion":
      states = "fashion"
      break;
    default:
      states= "electronics"
      break;
  }
  itemData = useSelector((state) => state[`${states}`][`${states}`])
  useEffect(()=>{
    dispatch(fetchFruits())
    dispatch(fetchFashion())
    dispatch(fetchBeauty())
    dispatch(fetchElectronics())

  },[dispatch])
  const itemsPerPage = 3;

  const relevanProduct = [];
  for (let i = 0; i < 6; i += itemsPerPage) {
    relevanProduct.push(itemData.slice(i, i + itemsPerPage));
  }

  const handleAddToCart = () => {
    const item = {
      name, image, price, rating
    }
    addToCart(item)
    dispatch(addCart(item))
    navigation.navigate('Cart')
  }
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header title={name} navigation={navigation}/>
      <ScrollView>
        <View style={{borderBottomWidth: 1, borderColor: 'lightgray', marginTop: 10}}>
        <Image source={{uri: image}} style={{width: 300, height: 100, marginLeft: 50, marginTop: 10, borderRadius: 10}}/>
        <View style={styles.dotsList}>
          <View style={styles.dotsSpecial}></View>
          <View style={styles.dots}></View>
          <View style={styles.dots}></View>
          <View style={styles.dots}></View>
        </View>
        <View style={styles.info}>
          <Text style={{fontWeight: '700'}}>${price}</Text>
          <Text style={{color: 'gray'}}><Image source={star} style={{width: 20, height: 20}}/><Text style={{fontWeight: '700', color: '#000'}}>{rating}</Text>(99 reviews)</Text>
        </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: 'lightgray', marginTop: 10}}>
          <Text style={{fontSize: 16, fontWeight: '700'}}>Description</Text>
          <Text style={{color: 'gray'}}>The Samsung Galaxy S24 is a flagship smartphone featuring a 6.2-inch 120Hz display, Snapdragon 8 Gen 3 processor, versatile triple-camera system, and advanced AI capabilities, offering premium performance in a sleek package.</Text>

          <View style={{marginTop: 30}}>
            <View style={styles.detail}>
              <Image source={express} style={{width: 20, height: 20, marginRight: 20}}/>
              <Text style={{color: 'gray', marginRight: 110}}>Express Shipping</Text>
              <Image source={arrow} style={{width: 25, height: 25, marginRight: 20}}/>
              <Text style={{color: 'gray'}}>30-day free return</Text>
            </View>
            <View style={styles.detail}>
              <Image source={star_blue} style={{width: 20, height: 20, marginRight: 20}}/>
              <Text style={{color: 'gray', marginRight: 85}}>Good reviews</Text>
              <Image source={medal} style={{width: 20, height: 20, marginRight: 20}}/>
              <Text style={{color: 'gray'}}>Authorized Store</Text>
            </View>
          </View>
        </View>
        <View style={{borderBottomWidth: 1, borderColor: 'lightgray', marginTop: 10}}>
          <View style={styles.review}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Reviews</Text>
            <Text style={{ color: "gray" }}>See all</Text>
          </View>
          <View style={styles.reviewsTable}>
            <View style={styles.reviewLeft}>
              <Text style={{fontSize: 20, fontWeight: '700'}}>{rating}/5</Text>
              <Text style={{fontSize: 16, color: 'gray', marginTop: 10}}>(48 reviews)</Text>
              <View style={styles.starList}>
                <Image source={star} style={{width: 20, height: 20}}/>
                <Image source={star} style={{width: 20, height: 20}}/>
                <Image source={star} style={{width: 20, height: 20}}/>
                <Image source={star} style={{width: 20, height: 20}}/>
                <Image source={half_star} style={{width: 20, height: 20}}/>
              </View>
            </View>
            <View style={styles.reviewRight}>
              <View style={styles.ratingContainer}>
                <View style={styles.barContainer}>
                  <View style={[styles.filledBar, { flex: 5 }]} />
                  <View style={[styles.unfilledBar, { flex: 0 }]} />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text>5</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <View style={styles.barContainer}>
                  <View style={[styles.filledBar, { flex: 4 }]} />
                  <View style={[styles.unfilledBar, { flex: 1 }]} />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text>4</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <View style={styles.barContainer}>
                  <View style={[styles.filledBar, { flex: 3 }]} />
                  <View style={[styles.unfilledBar, { flex: 2 }]} />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text>3</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <View style={styles.barContainer}>
                  <View style={[styles.filledBar, { flex: 2 }]} />
                  <View style={[styles.unfilledBar, { flex: 3 }]} />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text>2</Text>
                </View>
              </View>
              <View style={styles.ratingContainer}>
                <View style={styles.barContainer}>
                  <View style={[styles.filledBar, { flex: 1 }]} />
                  <View style={[styles.unfilledBar, { flex: 4 }]} />
                </View>
                <View style={styles.ratingLabelContainer}>
                  <Text >1</Text>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.userReviewsContainer}>
            <View style={styles.reviewUser}>
              <Image source={user_1} style={{width: 40, height: 40}}/>
              <View style={{marginRight: 40}}>
                <Text>TechWhiz93</Text>
                <Text style={{color: 'gray'}}>Perfect phone! Stunning display, amazing AI features, and the camera quality is outstanding. Battery life is fantastic!</Text>
              </View>
              <Text style={{color: 'gray'}}>A day ago</Text>
            </View>
            <View style={styles.reviewUser}>
              <Image source={user_2} style={{width: 40, height: 40}}/>
              <View style={{marginRight: 40}}>
                <Text>SarahJ_Mobile</Text>
                <Text style={{color: 'gray'}}>Best upgrade ever! Lightning-fast performance, gorgeous screen, and the AI tools are super helpful. Love everything about it!</Text>
              </View>
              <Text style={{color: 'gray'}}>3 day ago</Text>
            </View>
          </View>
        </View>
        <View style={styles.review}>
            <Text style={{ fontWeight: "700", fontSize: 16 }}>Relevant products</Text>
            <Text style={{ color: "gray" }}>See all</Text>
        </View>
        <View>
        <Swiper
            loop={false}
            showsPagination={false}
            showsButtons={false}
            autoplay={false}
            style={{ height: 180 }}
          >
            {relevanProduct.map((page, index) => (
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
          <View style={styles.notification}>
            <View style={styles.notiBackground}>
              <Image source={white_bell} style={{width:30, height: 30}}/>
            </View>
            <Text style={{color: 'gray'}}>Notify me of promotions</Text>
              <TouchableOpacity onPress={toggleSwitch}>
                  <View style={[
                      styles.btnContainer,
                      { backgroundColor: isEnabled ? '#1ac1d8' : 'lightgray' }
                  ]}>
                      <Animated.View
                          style={[
                              styles.btnCircle,
                              { transform: [{ translateX }] }
                          ]}
                      />
                  </View>
              </TouchableOpacity>
          </View>
        </View>
        <View style={styles.buy}>
            <View style={styles.cartContainer}>
              <TouchableOpacity onPress={() => {
                  navigation.navigate('Cart')
              }}>
                <Image source={cart_blue} style={{width: 20, height: 20}}/>
              </TouchableOpacity>
            </View>
            <TouchableOpacity style={styles.buyBtn} onPress={handleAddToCart}>
              <Text style={{fontSize: 18, fontWeight: '700', color: '#fff'}}>Buy Now</Text>
            </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  )
}

export default ItemDetail01Screen

const styles = StyleSheet.create({
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
  },
  info:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  detail:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
  },
  review: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 10,
  },
  reviewsTable:{
    width: '100%',
    height: 200,
    marginTop: 30,
    padding: 20,
    backgroundColor: '#f6f6f6',
    borderRadius: 10,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  reviewLeft:{

  },
  starList:{
    display: 'flex',
    flexDirection: 'row',
    alignItems:'center',
    justifyContent: 'space-between',
    width: 110,
    marginTop: 10
  },
  reviewRight: {
    flexDirection: 'column',
    padding: 16,
    backgroundColor: '#F5F5F5',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    width: 150
  },
  ratingLabelContainer: {
    width: 24,
    marginLeft: 8,
  },
  barContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 10,
    borderRadius: 5,
    overflow: 'hidden',
  },
  filledBar: {
    backgroundColor: '#FFD700',
  },
  unfilledBar: {
    backgroundColor: '#D3D3D3',
  },
  userReviewsContainer:{
    marginTop: 20
  },
  reviewUser:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10
  },
  notification: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 100,
    borderWidth: 1,
    marginTop: 20,
    borderRadius: 10,
    borderColor: 'lightgray',
    padding: 10,
    marginBottom: 20
  },
  notiBackground:{
    height: 40,
    width: 40,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1ac1d8',
    borderRadius: 10
  },
    btnContainer: {
        width: 50,
        height: 30,
        borderRadius: 20,
        justifyContent: 'center',
    },
    btnCircle: {
        width: 25,
        height: 25,
        borderRadius: 25,
        backgroundColor: 'white',
    },
  buy:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20
  },
  cartContainer:{
    width: 40,
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: '#1ac1d8',
    borderWidth: 1
  },
  buyBtn:{
    width: '85%',
    height: 40,
    borderRadius: 10,
    backgroundColor: '#1ac1d8',
    alignItems: 'center',
    justifyContent: 'center'
  }
})