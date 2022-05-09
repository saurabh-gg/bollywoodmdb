import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
} from 'react-native';

function CustomHeader({title, isHome, navigation}) {
  return (
    // {
    //   flexDirection: 'row',
    //   height: 50,
    //   backgroundColor: 'red',
    // isHome? {backgroundColor:'red'}: {backgroundColor:null}
    // }

    <View style={{flexDirection: 'row', height: 50, backgroundColor: 'red'}}>
      <View style={{flexDirection: 'row', height: 50, marginHorizontal: 10}}>
        {isHome ? (
          <TouchableOpacity onPress={() => navigation.openDrawer()}>
            <Image
              style={{
                width: 25,
                height: 25,
                marginLeft: 5,
                marginTop: 10,
                tintColor: 'white',
              }}
              source={require('../assets/menu.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        ) : (
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}
            onPress={() => navigation.goBack()}>
            <Image
              style={{
                width: 20,
                height: 20,
                marginHorizontal: 5,
                tintColor: 'white',
              }}
              source={require('../assets/back.png')}
              resizeMode="contain"
            />
          </TouchableOpacity>
        )}
      </View>

      <View
        style={{
          flex: 1.5,
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
          marginRight: 10,
        }}>
        <Text
          style={
            isHome
              ? {
                  flex: 1,
                  textAlign: 'center',
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '600',
                }
              : {
                  flex: 1,
                  textAlign: 'left',
                  marginLeft: 10,
                  color: 'white',
                  fontSize: 16,
                  fontWeight: '600',
                }
          }>
          {title}
        </Text>

        {isHome ? (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginLeft: 10,
            }}>
            <TouchableOpacity
              onPress={() => navigation.navigate('LoginScreen')}>
              <Image
                source={require('../assets/user_3.png')}
                style={{width: 25, height: 25, tintColor: 'white'}}
              />
            </TouchableOpacity>

            <Image
              source={require('../assets/notification.png')}
              style={{width: 25, height: 25, tintColor: 'white'}}
            />
            <Image
              source={require('../assets/search.png')}
              style={{width: 25, height: 25, tintColor: 'white'}}
            />
          </View>
        ) : null}
      </View>
    </View>
  );
}

export default CustomHeader;
