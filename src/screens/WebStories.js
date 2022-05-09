import {StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import React from 'react';
import CustomHeader from '../header/CustomHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';

const WebStories = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        isHome={false}
        title="Web Stories"
        navigation={navigation}
      />
      <ScrollView
        style={{marginHorizontal: 5}}
        showsVerticalScrollIndicator={false}>
        <Text style={{margin: 12, fontSize:16, fontWeight:'600'}}>WebStories</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <TouchableOpacity
           onPress={()=>navigation.navigate('FullScreenStories')}
            style={{
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius: 5,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../assets/tara.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>
            <Text style={{padding: 5}}>
              lorem ipsum dolor sit amet, consetetur
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('FullScreenStories')}
            style={{
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius: 5,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../assets/reynolds.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>
            <Text style={{padding: 5}}>
              lorem ipsum dolor sit amet, consetetur
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <TouchableOpacity
           onPress={()=>navigation.navigate('FullScreenStories')}
            style={{
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius: 5,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../assets/dicaprio.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>
            <Text style={{padding: 5}}>
              lorem ipsum dolor sit amet, consetetur
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('FullScreenStories')}
            style={{
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius: 5,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../assets/HarveySpecter.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>
            <Text style={{padding: 5}}>
              lorem ipsum dolor sit amet, consetetur
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
          }}>
          <TouchableOpacity
           onPress={()=>navigation.navigate('FullScreenStories')}
            style={{
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius: 5,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../assets/mahesh.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>
            <Text style={{padding: 5}}>
              lorem ipsum dolor sit amet, consetetur
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('FullScreenStories')}
            style={{
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius: 5,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../assets/shahrukh.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>
            <Text style={{padding: 5}}>
              lorem ipsum dolor sit amet, consetetur
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical: 10,
            marginBottom: 100,
          }}>
          <TouchableOpacity
          onPress={()=>navigation.navigate('FullScreenStories')}
            style={{
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius: 5,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../assets/shahrukh.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>
            <Text style={{padding: 5}}>
              lorem ipsum dolor sit amet, consetetur
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
           onPress={()=>navigation.navigate('FullScreenStories')}
            style={{
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius: 5,
              height: 220,
              width: 160,
            }}>
            <View style={{borderRadius: 4, width: '100%', height: 160}}>
              <Image
                source={require('../assets/celeb.jpg')}
                style={{borderRadius: 4, width: '100%', height: '100%'}}
              />
            </View>
            <Text style={{padding: 5}}>
              lorem ipsum dolor sit amet, consetetur
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default WebStories;
