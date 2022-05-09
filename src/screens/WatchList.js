import React from 'react';
import {View, Text, Image, ScrollView} from 'react-native';

import CustomHeader from '../header/CustomHeader';
const WatchList = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        isHome={false}
        title="WatchList"
        navigation={navigation}
      />

      <ScrollView
        style={{marginHorizontal: 10}}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: 18,
            fontWeight: '600',
            margin: 10,
          }}>
          WatchList(8)
        </Text>
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
                source={require('../assets/irishman.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 4}}>
              Movie Name
            </Text>
          </View>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/bondposter1.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 4}}>
              Movie Name
            </Text>
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
                source={require('../assets/antman.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 4}}>
              Movie Name
            </Text>
          </View>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/moviePoster.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 4}}>
              Movie Name
            </Text>
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
                source={require('../assets/forest.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 4}}>
              Movie Name
            </Text>
          </View>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/legend.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 4}}>
              Movie Name
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
            marginBottom: 80,
          }}>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/polis.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 4}}>
              Movie Name
            </Text>
          </View>
          <View>
            <View style={{width: 160, height: 210}}>
              <Image
                source={require('../assets/moneyheist.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <Text style={{textAlign: 'center', marginVertical: 4}}>
              Movie Name
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default WatchList;
