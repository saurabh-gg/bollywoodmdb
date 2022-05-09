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

import ProfileScreen from '../screens/ProfileScreen';


const StackProfile = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false,
  });


function ProfileStack() {
  return (
    <StackProfile.Navigator initialRouteName="Profile">
      <StackProfile.Screen
        name="Profile"
        component={ProfileScreen}
        options={navOptionHandler}
      />
    </StackProfile.Navigator>
  );
}

export default ProfileStack;

