import * as React from 'react';
import {
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,StyleSheet,FlatList
} from 'react-native';

import CustomHeader from '../header/CustomHeader';


const DATA = [
  {
    id: '1',
    img: require('../assets/bondposter2.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry sn',
    Month: 'Feb',
    Date: '14,2022',
  },
  {
    id: '2',
    img: require('../assets/dicaprio.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry ',
    Month: 'Feb',
    Date: '14,2022',
  },
  {
    id: '3',
    img: require('../assets/legend.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry ',
    Month: 'Feb',
    Date: '14,2022',
  },
  {
    id: '4',
    img: require('../assets/shahrukh.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry ',
    Month: 'feb',
    Date: '14,2022',
  },
  {
    id: '5',
    img: require('../assets/polis.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s',
    Month: 'Feb',
    Date: '14,2022',
  },
  {
    id: '6',
    img: require('../assets/forest.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month: 'Feb',
    Date: '14,2022',
  },
  {
    id: '7',
    img: require('../assets/moneyheist.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
    Month: 'Feb',
    Date: '14,2022',
  },
];

const NewsItem = ({item,navigation }) => (
  <TouchableOpacity style={styles.ReviewContainer}
  onPress={() => navigation.navigate('NewsDetail', item)}
  >
    <View style={styles.imgContainer}>
      <Image
        source={item.img}
        style={{
          alignSelf: 'center',
          borderRadius: 10,
          height: '100%',
          width: '100%',
        }}
      />
    </View>
    <View
      style={{
        flexShrink: 1,
        overflow: 'hidden',
        height: 100,
        width: 210,
        marginLeft: 2,
      }}>
      <Text style={{flex: 1, overflow: 'hidden'}}>{item.description}</Text>
      <Text style={{marginTop: 5}}>
        {item.Month} {item.Date} 1:20 IST
      </Text>
    </View>
  </TouchableOpacity>
);


function NewsScreen({navigation}) {
  const renderItem = ({item}) => (
    <NewsItem
      navigation = {navigation}
      item={item}
    ></NewsItem>
  );

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="News Adda" isHome={false} navigation={navigation} />
      <Text style={styles.headerText}>News Adda</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  headerText: {
    textTransform: 'uppercase',
    fontSize: 18,
    fontWeight: 'bold',
    marginHorizontal: 10,
    marginVertical: 2,
  },
  ReviewContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  imgContainer: {
    width: 150,
    height: 110,
    resizeMode: 'contain',
    marginRight: 5,
  },
});


export default NewsScreen;


{/* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>News!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('NewsDetail')}>
          <Text>Go News Detail</Text>
        </TouchableOpacity>
      </View> */}