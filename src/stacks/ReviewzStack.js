import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';

import ReviewScreen from '../screens/ReviewScreen'
import ReviewDetails from '../screens/ReviewDetails';

const StackReviewz = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false,
  });


function ReviewzStack() {
  return (
    <StackReviewz.Navigator initialRouteName="Reviews">
      <StackReviewz.Screen
        name="ReviewScreen"
        component={ReviewScreen}
        options={navOptionHandler}
      />
      <StackReviewz.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={navOptionHandler}
      />
    </StackReviewz.Navigator>
  );
}

export default ReviewzStack;
