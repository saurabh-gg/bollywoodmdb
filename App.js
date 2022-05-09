import 'react-native-gesture-handler';
import * as React from 'react';
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

import MyDrawer from './src/drawer/DrawerComponent';

export default function App() {
  const scheme = useColorScheme();
  return (
    <NavigationContainer theme={ scheme === 'dark' ? DarkTheme : DefaultTheme}>
      <MyDrawer></MyDrawer>
    </NavigationContainer>
  );
}
