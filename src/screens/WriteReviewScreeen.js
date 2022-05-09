import * as React from 'react';

import {
  View,
  Text,
  TextInput,
  StyleSheet,
  Button,
  FlatList,
} from 'react-native';

import { useTheme } from '@react-navigation/native';
import CustomHeader from '../header/CustomHeader';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {
    id: 1,
    name: 'Praveen Kulkarni',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
  {
    id: 2,
    name: 'Praveen Kulkarni',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
  {
    id: 3,
    name: 'Praveen Kulkarni',
    review: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
  {
    id: 4,
    name: 'Praveen Kulkarni',
    review:
      'Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum has been the industrys standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries',
  },
];

const ReviewItem = ({review, name}) => {
  
  return (
  <View
    style={{
      borderWidth: 1,
      borderColor: 'grey',
      height: 180,
      width: '95%',
      marginHorizontal: 10,
      marginVertical: 5,
      padding: 10,
    }}>
    <Text style={{fontSize: 17, fontWeight: '600', marginVertical: 5}}>
      {name} {'     '} {'10 Hours ago'}
    </Text>
    <Text style={{paddingHorizontal:5}}>{review}</Text>
  </View>
);}

const WriteReview = ({navigation}) => {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [review, setReview] = React.useState('');


  const {colors }= useTheme();
  const handleSubmit = () => {
    const item = new Object();

    item.name = name;
    item.review = review;

    data.push(item);
  };

  const renderItem = ({item}) => (
    <ReviewItem name={item.name} review={item.review}></ReviewItem>
  );
  return (
    <View>
      <CustomHeader
        title="Write Review"
        isHome={false}
        navigation={navigation}
      />
      <KeyboardAwareScrollView
        style={{width: '98%', marginHorizontal: 4}}
        extraHeight={180}
        enableOnAndroid={true}>
        <View style={{marginHorizontal: 10, marginVertical: 10}}>
          <Text style={{color: colors.text, fontSize: 15, fontWeight: '600'}}>
            Write a Review
          </Text>
          <Text style={{fontSize: 16, fontWeight: '500', marginVertical: 8}}>
            Your review is awaiting moderation.
          </Text>
          <Text>Please enter mandatory fields.</Text>
        </View>
        <View>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                marginHorizontal: 10,
                color: colors.text,
                fontSize: 15,
                fontWeight: '600',
              }}>
              Full Name
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={val => setName(val)}
              value={name}
              placeholder="Enter Name"></TextInput>
          </View>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                marginHorizontal: 10,
                color: colors.text,
                fontSize: 15,
                fontWeight: '600',
              }}>
              Email address
            </Text>
            <TextInput
              style={styles.input}
              onChangeText={val => setEmail(val)}
              value={email}
              placeholder="Enter Email "></TextInput>
          </View>
          <View style={{marginVertical: 10}}>
            <Text
              style={{
                marginHorizontal: 10,
                color: colors.text,
                fontSize: 15,
                fontWeight: '600',
              }}>
              Review
            </Text>
            <View style={styles.textAreaContainer}>
              <TextInput
                style={styles.textArea}
                underlineColorAndroid="transparent"
                placeholder="Write your review here..."
                placeholderTextColor="grey"
                numberOfLines={6}
                multiline={true}
                onChangeText={val => setReview(val)}
                value={review}
              />
            </View>
          </View>

          <TouchableOpacity style={{width: '95%', marginHorizontal: 10, marginBottom:25}}>
            <Text style={styles.Submitbtn }>Submit Review</Text>
          </TouchableOpacity>

          <Text style={{margin:10, fontSize:18, fontWeight:'600',color:colors.text}}>User Reviews</Text>
          <View style={{marginBottom: 60}}>
            <FlatList
              data={data}
              renderItem={renderItem}
              keyExtractor={item => item.id}></FlatList>
          </View>

          {/* <TouchableOpacity
            style={{
              marginVertical: 10,
              alignItems: 'center',
              justifyContent: 'center',
            }}>
                
            <Text style={styles.Submitbtn}>Submit Review</Text>
          </TouchableOpacity> */}
        </View>
      </KeyboardAwareScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor:'#282828'
  },
  textAreaContainer: {
    borderWidth: 1,
    margin: 12,
    padding: 10,
    borderColor:'#282828',
  },
  textArea: {
    height: 120,
    justifyContent: 'flex-start',
    textAlignVertical: 'top',
  },
  Submitbtn: {
    backgroundColor: 'red',
    width: '99%',
    padding: 12,
    textAlign: 'center',
    borderRadius: 5,
    color: 'white',
    fontSize: 16,
    fontWeight: '400',
  },
});

export default WriteReview;
