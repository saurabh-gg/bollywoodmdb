import * as React from 'react';
import {View, Text, ImageBackground, Image, ScrollView, Alert} from 'react-native';

import {useTheme} from '@react-navigation/native';
import CustomHeader from '../header/CustomHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Trailers = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View>
      <CustomHeader
        title="Movie Trailers"
        isHome={false}
        navigation={navigation}
      />
      <ScrollView style={{marginHorizontal:10}} showsVerticalScrollIndicator={false}>
      <Text style={{
          textTransform:'uppercase',
          fontSize:16,
          fontWeight:'600',
          marginVertical:10,
      }}>Latest Movie Trailers 2022</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'vw2FOYjCz38'})}>
            <ImageBackground
              source={require('../assets/bondposter3.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              No Time To Die | 007 
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'WWfw3wdnaGM'})}>
            <ImageBackground
              source={require('../assets/legend.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
             South Movie Legend
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'Ruyl8_PT_y8'})}>
            <ImageBackground
              source={require('../assets/moviePoster.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Peaky Blinders
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'WHXxVmeGQUc'})}>
            <ImageBackground
              source={require('../assets/irishman.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Irishman Trailer
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'vw2FOYjCz38'})}>
            <ImageBackground
              source={require('../assets/bondposter3.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              No Time To Die | 007 
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'WWfw3wdnaGM'})}>
            <ImageBackground
              source={require('../assets/legend.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
             South Movie Legend
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'Ruyl8_PT_y8'})}>
            <ImageBackground
              source={require('../assets/moviePoster.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Peaky Blinders
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'WHXxVmeGQUc'})}>
            <ImageBackground
              source={require('../assets/irishman.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Irishman Trailer
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginBottom:60
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'vw2FOYjCz38'})}>
            <ImageBackground
              source={require('../assets/bondposter3.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              No Time To Die | 007 
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity onPress={navigation.navigate('VideoPlayer', {videoId:'WWfw3wdnaGM'})}>
            <ImageBackground
              source={require('../assets/legend.jpg')}
              style={{
                height: 100,
                width: 180,
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            </TouchableOpacity>
            <Text style={{color: colors.text, fontWeight: '600'}}>
             South Movie Legend
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Trailers;


