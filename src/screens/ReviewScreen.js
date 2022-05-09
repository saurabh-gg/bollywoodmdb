import React from 'react';
import {
  View,
  Text,
  Image,
  ScrollView,
  StyleSheet,
  SafeAreaView,
  FlatList
} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

import CustomHeader from '../header/CustomHeader';

const DATA = [
  {
    id:'1',
    img: require('../assets/moneyheist.jpg'),
    description:'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month:'Feb' ,
    Date:'14,2022'
  }, 
  {
    id:'2',
    img: require('../assets/legend.jpg'),
    description:'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month:'Feb' ,
    Date:'14,2022'
  } ,
  {
    id:'3',
    img: require('../assets/polis.jpg'),
    description:'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month:'Feb' ,
    Date:'14,2022'
  } ,
  {
    id:'4',
    img: require('../assets/forest.jpg'),
    description:'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month:'feb' ,
    Date:'14,2022'
  } ,
  {
    id:'5',
    img: require('../assets/irishman.jpg'),
    description:'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month:'Feb' ,
    Date:'14,2022'
  } ,
  {
    id:'6',
    img: require('../assets/moviePoster.jpg'),
    description:'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month:'Feb' ,
    Date:'14,2022'
  } ,
  {
    id:'7',
    img: require('../assets/dumble.jpg'),
    description:'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month:'Feb' ,
    Date:'14,2022'
  } ,
]

const ReviewItem = ({description ,Month , Date, uri, navigation})=>(
  <TouchableOpacity style={styles.ReviewContainer}
  onPress={()=> navigation.navigate('ReviewDetails')}
  >
     <View style={styles.imgContainer}>
              <Image
                source={uri}
                style={{
                  alignSelf: 'center',
                  borderRadius: 10,
                  height: '100%',
                  width: '100%',
                }}
              />
    </View>
    <View style={{flexShrink:1, overflow:'hidden' ,height: 100, width: 210 ,marginLeft: 2}}>
    <Text style={{flex:1, overflow:'hidden'}}>{description}</Text>
    <Text style={{marginTop:5}}>{Month} {Date} 1:20 IST</Text>
    </View>
   
  </TouchableOpacity>
)
const ReviewScreen =({navigation})=>{
    

    const renderItem=({item})=>(
        <ReviewItem
         description={item.description} 
          Month={item.Month}
          Date={item.Date}
          uri={item.img}
          navigation={navigation}
        ></ReviewItem>
      )
    
      return (
        <SafeAreaView style={{marginBottom:100}}>
            <CustomHeader navigation={navigation} ishome={false} title='Movie Reviews'/>
            <Text style={styles.headerText}>Bollywood movie reviews</Text>
            <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item=>item.id}
            ></FlatList>
        </SafeAreaView>
      );
}
const styles = StyleSheet.create({
    headerText: {
      textTransform: 'uppercase',
      fontSize: 18,
      fontWeight: 'bold',
      marginHorizontal: 10,
      marginVertical: 2,
    },
    ReviewContainer: {
      flex: 1,
      flexDirection: 'row',
      margin:10,
    },
    imgContainer: {
      width: 150,
      height: 110,
      resizeMode: 'contain',
      marginRight:5,
    },
  });
  

export default ReviewScreen;