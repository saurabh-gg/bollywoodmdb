import * as React from 'react';
import {createStackNavigator} from '@react-navigation/stack';


import BoxOffice from '../screens/BoxOffice';
import ReviewDetails from '../screens/ReviewDetails';
const StackBoxOffice = createStackNavigator();

const navOptionHandler = () => ({
    headerShown: false,
  });


function BoxOfficeStack() {
  return (
    <StackBoxOffice.Navigator initialRouteName="BoxOffice">
      <StackBoxOffice.Screen
        name="BoxOffice"
        component={BoxOffice}
        options={navOptionHandler}
      />
      <StackBoxOffice.Screen
        name="ReviewDetails"
        component={ReviewDetails}
        options={navOptionHandler}
      />

    </StackBoxOffice.Navigator>
  );
}

export default BoxOfficeStack;
