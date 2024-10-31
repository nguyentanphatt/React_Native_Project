import React from 'react'
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
import Header from '../components/Header'
import star from '../assets/icon/star.png'
import express from '../assets/icon/truck.png'
import arrow from '../assets/icon/return.png'
import medal from '../assets/icon/medal.png'
import star_blue from '../assets/icon/star_outline.png'
import half_star from '../assets/icon/half_star.png'
import user_1 from '../assets/icon/user_1.png'
import user_2 from '../assets/icon/user_2.png'
const ItemDetail01Screen = ( {route, navigation} ) => {
  const [name, image, price, rating] = route.params;
  return (
    <View style={{backgroundColor: '#fff', flex: 1}}>
      <Header title={name}/>
      <ScrollView>
        <View style={{borderBottomWidth: 1, borderColor: 'lightgray', marginTop: 10}}>
        <Image source={image} style={{width: 300, height: 100, marginLeft: 50, marginTop: 10, borderRadius: 10}}/>
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
          <Text style={{color: 'gray'}}>Quis occaecat magna elit magna do nisi ipsum amet excepteur tempor nisi exercitation qui...</Text>

          <View style={{marginTop: 30}}>
            <View style={styles.detail}>
              <Image source={express} style={{width: 20, height: 20, marginRight: 20}}/>
              <Text style={{color: 'gray', marginRight: 110}}>Express</Text>
              <Image source={arrow} style={{width: 25, height: 25, marginRight: 20}}/>
              <Text style={{color: 'gray'}}>30-day free return</Text>
            </View>
            <View style={styles.detail}>
              <Image source={star_blue} style={{width: 20, height: 20, marginRight: 20}}/>
              <Text style={{color: 'gray', marginRight: 85}}>Good review</Text>
              <Image source={medal} style={{width: 20, height: 20, marginRight: 20}}/>
              <Text style={{color: 'gray'}}>Authorized shop</Text>
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
              <Text style={{fontSize: 16, color: 'gray', marginTop: 10}}>(99 reviews)</Text>
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
                <Text>Jevon Raynor</Text>
                <Text style={{color: 'gray'}}>Deserunt minim incididunt cillum</Text>
              </View>
              <Text style={{color: 'gray'}}>A day ago</Text>
            </View>
            <View style={styles.reviewUser}>
              <Image source={user_2} style={{width: 40, height: 40}}/>
              <View style={{marginRight: 40}}>
                <Text>Jason D.</Text>
                <Text style={{color: 'gray'}}>Magna pariatur sit et ullamco paria</Text>
              </View>
              <Text style={{color: 'gray'}}>3 day ago</Text>
            </View>
          </View>
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
  }
})