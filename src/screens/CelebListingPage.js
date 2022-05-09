import React from 'react';
import {View, Text, Image} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';

import CustomHeader from '../header/CustomHeader';
const CelebListings = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        isHome={false}
        title="Celebrity Listing"
        navigation={navigation}
      />
      
      <ScrollView style={{marginHorizontal: 10}} showsVerticalScrollIndicator={false}>
      <Text style={{textTransform:'uppercase', fontSize:18, fontWeight:'600',margin:10}}>Celebrities</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/cilian2.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8,}}
              />
            </View>
            <Text style={{textAlign:'center' , marginVertical:4}}>Celebrity name</Text>
          </View>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/daniel_crieg.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8, }}
              />
            </View>
            <Text style={{textAlign:'center', marginVertical:4}}>Celebrity name</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/dicaprio.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8,}}
              />
            </View>
            <Text style={{textAlign:'center' , marginVertical:4}}>Celebrity name</Text>
          </View>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/HarveySpecter.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8, }}
              />
            </View>
            <Text style={{textAlign:'center', marginVertical:4}}>Celebrity name</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <View>
            <View style={{width: 160, height: 200}}>
              <Image
                source={require('../assets/shahrukh.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8,}}
              />
            </View>
            <Text style={{textAlign:'center' , marginVertical:4}}>Celebrity name</Text>
          </View>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/mahesh.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8, }}
              />
            </View>
            <Text style={{textAlign:'center', marginVertical:4}}>Celebrity name</Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
            marginBottom:80
          }}>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/celeb.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8,}}
              />
            </View>
            <Text style={{textAlign:'center' , marginVertical:4}}>Celebrity name</Text>
          </View>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/cilian.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8, }}
              />
            </View>
            <Text style={{textAlign:'center', marginVertical:4}}>Celebrity name</Text>
          </View>
        </View>
        
      </ScrollView>
    </View>
  );
};

export default CelebListings;
