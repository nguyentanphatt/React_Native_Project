import React from 'react'
import { Text, View, Image, ScrollView, Dimensions, TouchableOpacity, StyleSheet } from 'react-native'
import Swiper from 'react-native-swiper'
import Category from '../components/Category'

import phone_category from '../assets/image/phone_category.png'
import sneaker_category from '../assets/image/sneaker_category.png'
import lipstick from '../assets/image/lipstick.png'
import fruit_category from '../assets/image/fruit_category.png'
import banner from '../assets/image/banner.png'

const Home = () => {

  const category = [
    {
      image: phone_category,
      title: 'Electronics'
    },
    {
      image: sneaker_category,
      title: 'Fashion'
    },
    {
      image: lipstick,
      title: 'Beauty'
    },
    {
      image: fruit_category,
      title: 'Fresh Fruit'
    },
  ]

  const itemsPerPage = 3
  const screenWidth = Dimensions.get('window').width;

  const pages = [];
  for (let i = 0; i < category.length; i += itemsPerPage) {
    pages.push(category.slice(i, i + itemsPerPage));
  }

  return (
    <ScrollView style={{backgroundColor: '#fff'}}>
      <View>
        <Swiper
          loop={false}
          showsPagination={false}
          showsButtons={false}
          autoplay={false}
          style={{height: 150}}
        >
        {pages.map((page, index)=>(
          <View key={index} style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20 }}>
          {page.map((item) => (
            <Category image={item.image} title={item.title}/>
          ))}
        </View>
        ))}
        </Swiper>
        <View style={styles.banner}>
          <View>
            <Text style={{fontSize: 22, fontWeight: '700', color: '#0F89D1'}}>Shoes</Text>
            <Text style={{fontSize: 18, color: 'gray', marginTop: 5}}>50% off</Text>
            <TouchableOpacity style={styles.buynow}>
              <Text style={{color: '#fff'}}>Buy now</Text>
            </TouchableOpacity>
          </View>
          <View>
            <Image source={banner} style={{width: 200, height: 100}}/>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

export default Home

const styles = StyleSheet.create({
  banner:{
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderRadius: 10,
    backgroundColor: '#f6ecf1',
    padding: 10
  },
  buynow:{
    height: 30,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000',
    borderRadius: 5,
    marginTop: 10
  }
})