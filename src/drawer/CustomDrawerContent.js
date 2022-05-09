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
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';


function CustomDrawerContent(props) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ScrollView style={{marginLeft: 15}}>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('MenuTab')}>
          <Text>Home</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('News')}>
          <Text> <Image source={require('../assets/reading.png')}
            style={{width:20, height:20,marginHorizontal:2, tintColor:'grey', backgroundColor:'white'}}
          />News Adda {`>`} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Movies')}>
          <Text><Image source={require('../assets/reel.png')}
            style={{width:20, height:20,marginHorizontal:5 , tintColor:'grey', backgroundColor:'white'}}
          /> Movies {`>`} </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Movies')}>
          <Text style={{lineHeight:30}}><Image source={require('../assets/magicbox.png')}
            style={{width:25, height:25,marginHorizontal:5 , tintColor:'darkgrey',}}
          /> New Releases </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Profile')}>
          <Text><Image source={require('../assets/user_2.png')}
            style={{width:18, height:18,marginHorizontal:5 , tintColor:'grey', backgroundColor:'white'}}
          /> Acount </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Reviews')}>
          <Text><Image source={require('../assets/rating.png')}
            style={{width:15, height:15,marginHorizontal:5, overlayColor:'grey', }}
          />
            Reviews </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => props.navigation.navigate('Profile')}>
          <Text><Image source={require('../assets/logout.png')}
            style={{width:15, height:15,marginHorizontal:5, backgroundColor:'white', tintColor:'grey'}}
          />
            LogOut </Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
}

export default CustomDrawerContent;
