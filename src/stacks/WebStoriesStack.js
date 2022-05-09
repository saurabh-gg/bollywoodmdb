import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import WebStories from '../screens/WebStories';
import StoriesFullScreen from '../screens/StoriesFullScreen';

const StackWeb = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false,
  });


function WebStoriesStack() {
  return (
    <StackWeb.Navigator initialRouteName="Profile">
      <StackWeb.Screen
        name="WebStories"
        component={WebStories}
        options={navOptionHandler}
      />
      <StackWeb.Screen
        name="FullScreenStories"
        component={StoriesFullScreen}
        options={navOptionHandler}
      />
    </StackWeb.Navigator>
  );
}

export default WebStoriesStack;

