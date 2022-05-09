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
import {createStackNavigator} from '@react-navigation/stack';

import NewsScreen from '../screens/NewsScreen';
import NewsDetail from '../screens/NewsDetail';
import Tagz from '../screens/TagzScreen';
const StackNews = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false,
  });


function NewsStack() {
  return (
    <StackNews.Navigator initialRouteName="NewsScreen">
      <StackNews.Screen
        name="NewsScreen"
        component={NewsScreen}
        options={navOptionHandler}
      />
      <StackNews.Screen
        name="NewsDetail"
        component={NewsDetail}
        options={navOptionHandler}
      />
      <StackNews.Screen
        name="Tagz"
        component={Tagz}
        options={navOptionHandler}
      />
    </StackNews.Navigator>
  );
}

export default NewsStack;
