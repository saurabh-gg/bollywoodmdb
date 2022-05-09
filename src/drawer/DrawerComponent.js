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
} from 'react-native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import ReviewScreen from '../screens/ReviewScreen';
import TabNavigator from '../tabComponent/tabComponent';

import NewsStack from '../stacks/NewsStack';
import MovieStack from '../stacks/MovieStack';
import ReviewzStack from '../stacks/ReviewzStack'
import CustomDrawerContent from './CustomDrawerContent';
import ProfileScreen from '../screens/ProfileScreen';
import BoxOfficeStack from '../stacks/BoxOfficeStack';
const navOptionHandler = () => ({
  headerShown: false,
});

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator
      initialRouteName="MenuDrawer"
      screenOptions={navOptionHandler}
      drawerContent={props => CustomDrawerContent(props)}>
      <Drawer.Screen name="MenuTab" component={TabNavigator}/>
      <Drawer.Screen name="News" component={NewsStack} />
      <Drawer.Screen name="Movies" component={MovieStack} />
      <Drawer.Screen name="Profile" component={ProfileScreen} />
      <Drawer.Screen name="Reviews" component={ReviewzStack} />
    </Drawer.Navigator>
  );
};

export default MyDrawer;
