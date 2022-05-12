import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  useColorScheme
} from 'react-native';
import {NavigationContainer, DarkTheme, DefaultTheme} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import SplashScreen from 'react-native-splash-screen'
import MyDrawer from './src/drawer/DrawerComponent';

export default function App() {
  const scheme = useColorScheme();

  useEffect(() => {
    SplashScreen.hide();
  }, [])
  

  return (
    <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MyDrawer></MyDrawer>
    </NavigationContainer>
  );
}
