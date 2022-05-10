import * as React from 'react';
import {View, Text, ImageBackground, Image, ScrollView, } from 'react-native';

import {useTheme} from '@react-navigation/native';
import CustomHeader from '../header/CustomHeader';
import { TouchableOpacity } from 'react-native-gesture-handler';

const data = [
  {id:1 , movieName:'irishman' ,img: require('../assets/irishman.jpg'), videoId: 'WHXxVmeGQUc'},
  {id:2 , movieName:'Antman' ,img: require('../assets/antman.jpg'), videoId: 'pWdKf3MneyI'},
  {id:3 , movieName:'Peaky Blinders' ,img: require('../assets/moviePoster.jpg'), videoId: '2nsT9uQPIrk'},
  {id:4 , movieName:'dumbledore' ,img: require('../assets/dumble.jpg'), videoId: 'Y9dr2zw-TXQ'},
  {id:5 , movieName:'forest' ,img: require('../assets/forest.jpg'), videoId: '6hW8hUcXR-A'},
  {id:6 , movieName:'polis' ,img: require('../assets/polis.jpg'), videoId: 'WHXxVmeGQUc'},
  {id:7 , movieName:'forest' ,img: require('../assets/legend.jpg'), videoId: 'WHXxVmeGQUc'},
  {id:8 , movieName:'irishman' ,img: require('../assets/irishman.jpg'), videoId: 'WHXxVmeGQUc'},
  {id:9 , movieName:'irishman' ,img: require('../assets/irishman.jpg'), videoId: 'WHXxVmeGQUc'},
  {id:10 , movieName:'irishman' ,img: require('../assets/irishman.jpg'), videoId: 'WHXxVmeGQUc'},
]


const Trailers = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View>
      <CustomHeader
        title="Movie Trailers"
        isHome={false}
        navigation={navigation}
      />
      <ScrollView style={{marginHorizontal:10}} showsVerticalScrollIndicator={false}>
      <Text style={{
          textTransform:'uppercase',
          fontSize:16,
          fontWeight:'600',
          marginVertical:10,
      }}>Latest Movie Trailers 2022</Text>

      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'flex-start', flexWrap:'wrap', marginBottom:60}}>
      {
        data.map(element =>{
          return(
            <TouchableOpacity key={element.id} style={{margin:10}}
            onPress ={()=>navigation.navigate('VideoPlayer',{ videoId:`${element.videoId}`})}
            >
              <ImageBackground
              source={element.img}
              style={{
                height: 100,
                width: 160,
                overflow: 'hidden',
                borderRadius: 5,
              }}>
              <View
                style={{
                  backgroundColor: 'black',
                  opacity: 0.5,
                  height: '100%',
                  width: '100%',
                  flex: 1,
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                <Text
                  style={{height: 30}}>
                  <Image
                    source={require('../assets/banner-Subtract.png')}
                    style={{height: 25, width: 25}}
                  />
                </Text>
              </View>
            </ImageBackground>
            <Text style={{textTransform:'capitalize'}}>{element.movieName}</Text>
            </TouchableOpacity>
          )
        })
      }
      </View>

      </ScrollView>
    </View>
  );
};

export default Trailers;


