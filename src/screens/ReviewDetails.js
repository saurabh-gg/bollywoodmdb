import * as React from 'react';
import {View, Text, ScrollView, Image, StyleSheet, ImageBackground, Alert} from 'react-native';


import CustomHeader from '../header/CustomHeader';

const ReviewDetails = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        isHome={false}
        title="Movie Review Details"
        navigation={navigation}
      />
      <ScrollView style={{marginHorizontal: 12, marginVertical: 10}}>
        <View>
          <Text style={styles.headlineText}>
            Lorem Ipsum छपाई और अक्षर योजन उद्योग का एक साधारण डमी पाठ है. Lorem
            Ipsum सन १५०० के बाद से अभी तक इस उद्योग का मानक डमी पाठ मन गया.
          </Text>
          <Text style={styles.contentText}>
            यह एक लंबा स्थापित तथ्य है कि जब एक पाठक एक पृष्ठ के खाखे को देखेगा
            तो पठनीय सामग्री से विचलित हो जाएगा. Lorem Ipsum का उपयोग करने का
            मुद्दा यह है कि इसमें एक और अधिक या कम अक्षरों का सामान्य वितरण किया
            गया है
          </Text>
        </View>
        <View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/mirza.jpg')}
              style={{height: '100%', width: '100%', borderRadius: 5}}></Image>
          </View>
          <View style={styles.HorizontalContainer}>
            <View style={styles.leftIconContainer}>
              <View style={styles.iconContainer}>
                <Image
                  source={require('../assets/facebook.png')}
                  style={{width: 23, height: 23, marginHorizontal: 7}}
                />
                <Image
                  source={require('../assets/twitter.png')}
                  style={{width: 23, height: 23, marginHorizontal: 7}}
                />
              </View>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Image
                source={require('../assets/star.png')}
                style={{
                  width: 20,
                  height: 20,
                  tintColor: '#800000',
                  marginHorizontal: 6,
                }}
              />
              <Text>4.5/5</Text>
            </View>
          </View>
        </View>

        <View style={styles.creditContainer}>
          <View>
            <Text style={styles.textDark}>Movie Credits:</Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}>Banner:</Text>
            <Text style={{fontWeight: '500', color: '#505050', lineHeight:25,}}>
              Red Chillies Entertainmen, Drishyam Films
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}>Director:</Text>
            <Text style={{fontWeight: '500', color: '#505050', lineHeight:25,}}>
              Shanker Raman
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}>Cast:</Text>
            <Text style={{fontWeight: '500', color: '#505050', lineHeight:25,}}>
              Bobby Deol, Vikrant Massey, Sanya Malhotra, etc.
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}>Platform:</Text>
            <Text style={{fontWeight: '500', color: '#505050'}}>
              Red Chillies Entertainmen, Drishyam Films
            </Text>
          </View>
          <View style={{flexDirection: 'row', marginVertical: 3}}>
            <Text style={styles.textDark}>Runtime:</Text>
            <Text style={{fontWeight: '500', color: '#505050', lineHeight:25,}}>
              100 Minutes
            </Text>
          </View>
        </View>

        <View>
          <View style={styles.contentContainer}>
            <Text style={styles.textDark}>
              Love Hostel Movie Review Rating: 4/5
            </Text>
            <Text style={styles.data}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.textDark}>
              STORY:
            </Text>
            <Text style={styles.data}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections
            </Text>
          </View>
          <View style={styles.contentContainer}>
            <Text style={styles.textDark}>
              HIGHS:
            </Text>
            <Text style={styles.data}>
              Contrary to popular belief, Lorem Ipsum is not simply random text.
              It has roots in a piece of classical Latin literature from 45 BC,
              making it over 2000 years old. Richard McClintock, a Latin
              professor at Hampden-Sydney College in Virginia, looked up one of
              the more obscure Latin words, consectetur, from a Lorem Ipsum
              passage, and going through the cites of the word in classical
              literature, discovered the undoubtable source. Lorem Ipsum comes
              from sections
            </Text>
          </View>
        </View>

        <View style={styles.tagsContainer}>
            <Text style={styles.tags}>Lorem ipsum</Text>
            <Text style={styles.tags}>Lorem ipsum</Text>
            <Text style={styles.tags}>Lorem ipsum</Text>
            <Text style={styles.tags}>Lorem ipsum</Text>
            <Text style={styles.tags}>Lorem ipsum</Text>
        </View>
        <Text style={{marginVertical:10, textAlign:'center'}}>Keep visiting BollywoodMDB.com for more exciting updates!</Text>
        <View style={{marginBottom:60}}>
            <Text style={{marginVertical:10, fontSize:15, fontWeight:'500'}}>Watch Movie Trailer:</Text>
            <View>
            <ImageBackground
            source={require('../assets/suits.jpg')}
            style={{
              height: 200,
              width: '100%',
              overflow: 'hidden',
              borderRadius: 8,
            }}>
            <View
              style={{
                backgroundColor: 'black',
                opacity: 0.6,
                height: '100%',
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                onPress={() => Alert.alert('Video player Clicked')}
                style={{height: 30}}>
                <Image
                  source={require('../assets/banner-Subtract.png')}
                  style={{height: 25, width: 25}}
                />
              </Text>
            </View>
          </ImageBackground>
            </View>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headlineText: {
    marginVertical: 5,
    fontWeight: '600',
    fontSize: 17,
  },
  contentText: {
    marginVertical: 5,
    fontWeight: '400',
    fontSize: 13,
  },
  imgContainer: {
    height: 200,
    width: '100%',
    marginVertical: 12,
  },
  HorizontalContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  iconContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  leftIconContainer: {
    flex: 2,
  },
  creditContainer: {
    marginVertical: 10,
  },
  textDark: {
    fontWeight: '800',
    lineHeight:25,
    marginHorizontal: 5,
  },
  data:{
      marginHorizontal:6,
      fontSize:16,
      lineHeight:25,
  },
  contentContainer:{
    marginVertical:10,
  },
  tagsContainer:{
      flexDirection:'row',
      flexWrap:'wrap',
      alignItems:'center',
      justifyContent:'flex-start'
  },tags:{
      paddingVertical:5,
      paddingHorizontal:14,
      borderWidth:1,
      borderRadius:25,
      borderColor:'red',
      color:'red',
      marginVertical:5,
      marginHorizontal:5
  }
});

export default ReviewDetails;
