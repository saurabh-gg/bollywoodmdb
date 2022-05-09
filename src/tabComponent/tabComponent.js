import * as React from 'react';
import {Text, View, SafeAreaView, Image, TouchableOpacity, Button, ScrollView} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';


import HomeStack from '../stacks/HomeStack';
import MovieStack from '../stacks/MovieStack'
import ProfileStack from '../stacks/ProfileStack'
import NewsStack from '../stacks/NewsStack';
const Tab = createBottomTabNavigator();


function TabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarActiveTintColor: 'white',
        tabBarInactiveTintColor: '#303030',
        tabBarStyle: {backgroundColor: 'red', minHeight: 55},
        headerShown: false,
      }}
    
      >
      <Tab.Screen name="HomeStack" component={HomeStack} 
          options={{
            tabBarLabel:'Home',
            tabBarIcon: ({ color, size }) => (
              <Image
                      source={require('../assets/home.png')}
                      style={{ width: 26, height: 26, tintColor: color }}
                  />
          )
          }}
      />
      <Tab.Screen name="NewsStack" component={NewsStack} 
       options={{
        tabBarLabel:'News Adda',
        tabBarIcon: ({ color, size }) => (
          <Image
                  source={require('../assets/newspaper.png')}
                  style={{ width: 26, height: 26, tintColor: color }}
              />
      )
      }}
      />
      <Tab.Screen name="MovieStack" component={MovieStack} 
       options={{
        tabBarStyle:{display:'none'},
        tabBarLabel:'Movies',
        tabBarIcon: ({ color, size }) => (
          <Image
                  source={require('../assets/Movies.png')}
                  style={{ width: 26, height: 26, tintColor: color }}
              />
      )
      }} />
      <Tab.Screen name="ProfileStack" component={ProfileStack} 
       options={{
        tabBarLabel:'Profile',
        tabBarIcon: ({ color, size }) => (
          <Image
                  source={require('../assets/user.png')}
                  style={{ width: 26, height: 26, tintColor: color }}
              />
      )
      }}/>
    </Tab.Navigator>
  );
}

export default TabNavigator;


// screenOptions={({route}) => ({
//   tabBarIcon: ({focused, color, size}) => {
//     let iconName;

//     if (route.name === 'Home') {
//       iconName = focused
//         ? require('../assets/home_2.png')
//         : require('../assets/home.png');
//     } else if (route.name === 'Settings') {
//       iconName = focused
//         ? require('../assets/setting.png')
//         : require('../assets/setting_2.png');
//     }

//     // You can return any component that you like here!
//     return (
//       <Image
//         source={iconName}
//         style={{width: 20, height: 20, resizeMode: 'contain'}}
//       />
//     );
//   },
//   tabBarActiveTintColor: 'red',
//   tabBarInactiveTintColor: 'black',
//   headerShown: false,
// })}



