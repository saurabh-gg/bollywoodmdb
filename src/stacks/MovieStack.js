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

import MovieScreen from '../screens/MovieScreen';
import MovieScreenDetail from '../screens/MovieDetails';
import Posters from '../screens/Posters';
import StarCastDetails from '../screens/StarCastDetails';
import Events from '../screens/EventScreen';
import WriteReview from '../screens/WriteReviewScreeen';
import EventDetail from '../screens/EventDetails';
import ProductionDetails from '../screens/ProductionDetails';
import ImageAndStills from '../screens/ImageStills';
import Trailers from '../screens/Trailers';
const StackMovie = createStackNavigator();

const navOptionHandler = () => ({
  headerShown: false,
});

function MovieStack() {
  return (
    <StackMovie.Navigator initialRouteName="MovieScreen">
      <StackMovie.Screen
        name="MovieScreen"
        component={MovieScreen}
        options={navOptionHandler}
      />
      <StackMovie.Screen
        name="MovieDetail"
        component={MovieScreenDetail}
        options={navOptionHandler}
      />
      <StackMovie.Screen
        name="Posters"
        component={Posters}
        options={navOptionHandler}
      />
      <StackMovie.Screen
        name="StarCastDetails"
        component={StarCastDetails}
        options={navOptionHandler}
      />
      <StackMovie.Screen
        name="ProductionDetails"
        component={ProductionDetails}
        options={navOptionHandler}
      />
      <StackMovie.Screen
        name="Events"
        component={Events}
        options={navOptionHandler}
      />
      <StackMovie.Screen
        name="EventDetail"
        component={EventDetail}
        options={navOptionHandler}
      />
      <StackMovie.Screen
        name="WriteReview"
        component={WriteReview}
        options={navOptionHandler}
      />
      <StackMovie.Screen
        name="ImageAndStills"
        component={ImageAndStills}
        options={navOptionHandler}
      />
    </StackMovie.Navigator>
  );
}

export default MovieStack;
