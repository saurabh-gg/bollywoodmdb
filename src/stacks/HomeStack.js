import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import HomeScreen from '../screens/HomeScreen';
import HomeScreenDetail from '../screens/HomeScreenDetail';
import LoginScreen from '../screens/LoginScreen';
import BoxOfficeStack from './BoxOfficeStack';
import AboutUs from '../screens/AboutUs';
import TrailerStack from './TrailerStack';
import Songs from '../screens/Songs';
import CelebListings from '../screens/CelebListingPage';
import WatchList from '../screens/WatchList';
import MyRatings from '../screens/MyRatings';
import WebStoriesStack from './WebStoriesStack';
const StackHome = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false,
  });


function HomeStack() {
  return (
    <StackHome.Navigator initialRouteName="Home">
      <StackHome.Screen
        name="Home"
        component={HomeScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="HomeDetail"
        component={HomeScreenDetail}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="BoxOffice"
        component={BoxOfficeStack}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="LoginScreen"
        component={LoginScreen}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="More"
        component={AboutUs}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="TrailerStack"
        component={TrailerStack}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="Songs"
        component={Songs}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="CelebListings"
        component={CelebListings}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="WatchList"
        component={WatchList}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="MyRatings"
        component={MyRatings}
        options={navOptionHandler}
      />
      <StackHome.Screen
        name="WebStories"
        component={WebStoriesStack}
        options={navOptionHandler}
      />
    </StackHome.Navigator>
  );
}

export default HomeStack;
