import * as React from 'react';

import {View, Text, SafeAreaView, Image, StyleSheet, FlatList, TouchableOpacity} from 'react-native';
import CustomHeader from '../header/CustomHeader';
const DATA = [
  {
    id: '1',
    img: require('../assets/mahesh.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry sn',
  },
  {
    id: '2',
    img: require('../assets/dicaprio.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry ',
  },
  {
    id: '3',
    img: require('../assets/reynolds.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry ',
  },
  {
    id: '4',
    img: require('../assets/shahrukh.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry ',
  },
  {
    id: '5',
    img: require('../assets/mahesh.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s',
  },
  {
    id: '6',
    img: require('../assets/shahrukh.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '7',
    img: require('../assets/reynolds.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
];

const ArticleItem = ({description, uri}) => (
  <TouchableOpacity
    style={styles.ReviewContainer}>
    <View style={styles.imgContainer}>
      <Image
        source={uri}
        style={{
          alignSelf: 'center',
          borderRadius: 2,
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
      <Text style={{flex: 1, overflow: 'hidden'}}>{description}</Text>
    </View>
  </TouchableOpacity>
);


const Tagz = ({navigation}) => {
  const renderItem = ({item}) => (
    <ArticleItem
      description={item.description}
      uri={item.img}></ArticleItem>
  );
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Tags" isHome={false} navigation={navigation} />
      <Text style={styles.headerText}>Prabhas Article </Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
    headlineText: {
        fontSize: 16,
        fontWeight: '700',
        marginVertical: 10,
      },
  
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
      resizeMode: 'cover',
      marginRight: 5,
    },
  
  });

export default Tagz;
