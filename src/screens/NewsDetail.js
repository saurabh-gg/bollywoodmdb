import * as React from 'react';
import {View, Text ,StyleSheet, ScrollView, Image, SafeAreaView, FlatList, TouchableOpacity} from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../header/CustomHeader';

const DATA = [
  {
    id: '1',
    img: require('../assets/bondposter2.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '2',
    img: require('../assets/forest.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '3',
    img: require('../assets/cilian.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '4',
    img: require('../assets/dicaprio.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '5',
    img: require('../assets/moneyheist.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
];
const DataItem = ({description, uri}) => (
  <View style={styles.ReviewContainer}>
    <View style={styles.imgContainer}>
      <Image
        source={uri}
        style={{
          alignSelf: 'center',
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
  </View>
);
const RelatedTopics = () => {
  const renderItem = ({item}) => (
    <DataItem description={item.description} uri={item.img}></DataItem>
  );

  return (
    <SafeAreaView style={{marginTop: 20}}>
      <Text style={styles.headerText}>Related Topics</Text>
      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

const NewsDetail = ({navigation, route}) => {
  const {colors} = useTheme()
  const {id ,img}= route.params
  return (
    <View>
      <CustomHeader navigation={navigation} title="News Details" />
      <ScrollView>
      <View style={{marginHorizontal: 12}}>
        <Text style={styles.headlineText}>
          Lorem af an faunf anf al nagli nalgn ang agk aungk agu ag nagi abgn
          aiubg abg uabhg uabg iabgababa yiuabg abg yabgau gaybg iybg yabubg
          yaubg
        </Text>
        <Text style={{marginVertical: 10}}>
          Lorem af an faunf anf al nagli nalgn ang agk aungk agu ag nagi abgn
          aiubg abg uabhg uabg iabgababa yiuabg abg yabgau gaybg iybg yabubg
          yaubg
        </Text>
        <View style={{height: 200, width: '98%'}}>
          <Image
            source={img}
            style={{width: '100%', height: '100%', borderRadius: 6, }}></Image>
            <Text style={{marginVertical:5, color:'maroon', position:'absolute', left:20}}>{`id : ${id}`}</Text>
        </View>

        <View
          style={{
            marginVertical: 10,
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <View>
            <Text style={{fontWeight: '800'}}>By Bollywood</Text>
            <Text style={{fontSize: 12, fontWeight: '500'}}>
              Updated on 2 May 2021
            </Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              alignItems: 'center',
            }}>
            <Image source={require('../assets/facebook.png')}
            style={{height:22, width:22 ,marginHorizontal:5}}></Image>
            <Image source={require('../assets/twitter.png')}
            style={{height:22, width:22 ,marginHorizontal:5}}></Image>
          </View>
        </View>
        <Text style={{fontSize: 17, color: colors.text, lineHeight: 25}}>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </Text>
      </View>
      <View
        style={{
          marginHorizontal: 12,
          marginVertical: 10,
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          flexWrap: 'wrap',
        }}>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Tagz')}
          style={{
            margin: 5,
            borderWidth: 1.5,
            borderColor: 'red',
            borderRadius: 25,
            padding: 5,
            width: 115,
            height: 35,
          }}>
          <Text style={{color: 'red', textAlign: 'center'}}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Tagz')}
          style={{
            margin: 5,
            borderWidth: 1.5,
            borderColor: 'red',
            borderRadius: 25,
            padding: 5,
            width: 125,
            height: 35,
          }}>
          <Text style={{color: 'red', textAlign: 'center'}}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Tagz')}
          style={{
            margin: 5,
            borderWidth: 1.5,
            borderColor: 'red',
            borderRadius: 25,
            padding: 5,
            width: 125,
            height: 35,
          }}>
          <Text style={{color: 'red', textAlign: 'center'}}>Lorem ipsum</Text>
        </TouchableOpacity>
        <TouchableOpacity
        onPress={()=> navigation.navigate('Tagz')}
          style={{
            margin: 5,
            borderWidth: 1.5,
            borderColor: 'red',
            borderRadius: 25,
            padding: 5,
            width: 125,
            height: 35,
          }}>
          <Text style={{color: 'red', textAlign: 'center'}}>Lorem ipsum</Text>
        </TouchableOpacity>
      </View>
      <View style={{marginBottom:60}}>
            <RelatedTopics></RelatedTopics>
        </View>
    </ScrollView>
    </View>
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

export default NewsDetail;
