import * as React from 'react';
import {View, Text, ImageBackground, Image, ScrollView, Alert} from 'react-native';

import {useTheme} from '@react-navigation/native';
import CustomHeader from '../header/CustomHeader';

const Songs = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View>
      <CustomHeader
        title="Movie Trailers"
        isHome={false}
        navigation={navigation}
      />

      <ScrollView
        style={{marginHorizontal: 10}}
        showsVerticalScrollIndicator={false}>
        <Text
          style={{
            textTransform: 'uppercase',
            fontSize: 16,
            fontWeight: '600',
            marginVertical: 10,
          }}>
          Latest Movie Songs 2022
        </Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/song1.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/song2.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
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
            <ImageBackground
              source={require('../assets/song3.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/song5.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/song1.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
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
            <ImageBackground
              source={require('../assets/song2.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/mirza.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginBottom:15
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/song1.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <Text
            style={{
              textTransform: 'uppercase',
              fontSize: 16,
              fontWeight: '600',
              marginVertical: 10,
            }}>
            Bollywood Songs 2021-2022{' '}
          </Text>
          <Text>see all </Text>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/song5.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/song2.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/shahrukh.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
        </View>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginBottom: 60,
          }}>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/song1.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
          <View style={{marginHorizontal: 5, margin: 10}}>
            <ImageBackground
              source={require('../assets/mahesh.jpg')}
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
                  onPress={() => Alert.alert('Video player Clicked')}
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{color: colors.text, fontWeight: '600'}}>
              Some fuoia aagibao{' '}
            </Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Songs;
