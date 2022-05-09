import * as React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import CustomHeader from '../header/CustomHeader';
import {useTheme} from '@react-navigation/native';
const ProfileScreen = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View>
      <CustomHeader navigation={navigation} title="Profile" />
      <ScrollView>
        <View>
          <Text
            style={{
              marginLeft: 10,
              fontWeight: '700',
              textTransform: 'capitalize',
              lineHeight: 25,
              fontSize: 18,
            }}>
            Profile
          </Text>
          <View
            style={{
              flex: 1,
              alignItems: 'center',
              justifyContent: 'center',
              marginTop: 50,
            }}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/celeb.jpg')}
                style={{
                  height: '100%',
                  width: '100%',
                  resizeMode: 'contain',
                  borderRadius: 50,
                }}
              />
              <Text
                style={{
                  textAlign: 'center',
                  color: 'black',
                  textTransform: 'capitalize',
                  fontSize: 15,
                  fontWeight: '700',
                  marginTop: 5,
                }}>
                Name
              </Text>
              <View></View>
            </View>
          </View>
        </View>

        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 40,
          }}>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius:4,
              padding: 10,
              margin: 5,
            }}>
            <Text style={{fontSize: 18}}>10</Text>
            <Text>Watched</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius:4,
              padding: 10,
              margin: 5,
            }}>
            <Text style={{fontSize: 18}}>10</Text>
            <Text>Watching</Text>
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              borderWidth: 1,
              borderColor: '#282828',
              borderRadius:4,
              padding: 10,
              margin: 5,
            }}>
            <Text style={{fontSize: 18}}>10</Text>
            <Text>Wishlist</Text>
          </View>
        </View>

        <View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Image
              source={require('../assets/dumble.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/antman.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/irishman.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/moviePoster.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Image
              source={require('../assets/moneyheist.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/polis.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/legend.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/forest.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
            }}>
            <Image
              source={require('../assets/moviePoster.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/legend.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/irishman.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
            <Image
              source={require('../assets/moneyheist.jpg')}
              style={{
                height: 80,
                width: 80,
                borderRadius: 4,
                marginVertical: 8,
              }}></Image>
          </View>
        </View>
        <View style={{marginVertical: 20, marginBottom: 100}}>
          <TouchableOpacity
            style={{
              width: '90%',
              backgroundColor: 'red',
              marginHorizontal: 15,
              padding: 10,
              borderRadius: 2,
            }}>
            <Text style={{textAlign: 'center', color: 'white', fontSize: 18}}>
              Log Out
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  imgContainer: {
    borderRadius: 50,
    height: 100,
    width: 100,
  },
});
export default ProfileScreen;
