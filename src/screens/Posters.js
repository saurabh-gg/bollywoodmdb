import * as React from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';

import CustomHeader from '../header/CustomHeader';
const Posters = ({navigation}) => {
  return (
    <View>
      <CustomHeader title="Posters" navigation={navigation} />
      
        <ScrollView>
        <Text style={{margin: 15}}>Posters</Text>
          <View style={{marginHorizontal:12, marginVertical:10, flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <View style={{height: 220, width: 160 ,marginHorizontal:5}}>
              <Image
                source={require('../assets/bondposter1.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <View style={{height: 220, width: 160 ,marginHorizontal:5}}>
              <Image
                source={require('../assets/bondposter2.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
          </View>
          <View style={{marginHorizontal:12, marginVertical:10, flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <View style={{height: 220, width: 160 ,marginHorizontal:5}}>
              <Image
                source={require('../assets/bondposter3.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <View style={{height: 220, width: 160 ,marginHorizontal:5}}>
              <Image
                source={require('../assets/bondposter4.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
          </View>
          <View style={{marginHorizontal:12, marginVertical:10, flex:1 ,flexDirection:'row', alignItems:'center', justifyContent:'space-evenly'}}>
            <View style={{height: 220, width: 160 ,marginHorizontal:5}}>
              <Image
                source={require('../assets/bondposter1.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
            <View style={{height: 220, width: 160 ,marginHorizontal:5}}>
              <Image
                source={require('../assets/bondposter2.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 5}}
              />
            </View>
          </View>
          <View style={{marginBottom:60}}></View>
        </ScrollView>
    </View>
  );
};

export default Posters;
