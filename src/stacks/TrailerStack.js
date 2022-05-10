import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import Trailers from '../screens/Trailers';
import VideoPlayer from '../screens/VideoPlayer';

const StackTrailer = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
  animationEnabled:false
  });


function TrailerStack() {
  return (
    <StackTrailer.Navigator initialRouteName="Trailers">
      <StackTrailer.Screen
        name="Trailers"
        component={Trailers}
        options={navOptionHandler}
      />
      <StackTrailer.Screen
        name="VideoPlayer"
        component={VideoPlayer}
        options={navOptionHandler}
      />
    </StackTrailer.Navigator>
  );
}

export default TrailerStack;
