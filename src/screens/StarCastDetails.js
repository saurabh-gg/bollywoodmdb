import * as React from 'react';
import {View, Text, Image, StyleSheet, ImageBackground} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {FlatList, ScrollView, TouchableOpacity} from 'react-native-gesture-handler';
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
const DataItem = ({description, uri, navigation}) => (
    <TouchableOpacity onPress={()=>navigation.navigate('News')}>
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
  </TouchableOpacity>
);
const RelatedTopics = ({navigation}) => {
  const renderItem = ({item}) => (
    <DataItem description={item.description} uri={item.img} navigation={navigation}></DataItem>
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

const Photos = () => {
  return (
    <View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={{marginHorizontal: 5 , textTransform:'uppercase', fontSize:16, fontWeight:'700'}}>Photos</Text>
        <Text style={{marginHorizontal: 5}}>see all</Text>
      </View>
      <View style={{marginVertical: 10}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical:5,
          }}>
          <View style={{height: 250, width: 180}}>
            <Image
              source={require('../assets/cilian.jpg')}
              style={{height: '100%', width: '100%', borderRadius: 8}}
            />
          </View>
          <View style={{height: 250, width: 180}}>
            <Image
              source={require('../assets/moviePoster.jpg')}
              style={{height: '100%', width: '100%', borderRadius: 8}}
            />
          </View>
        </View>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            marginVertical:5,
          }}>
          <View style={{height: 250, width: 180}}>
            <Image
              source={require('../assets/cilian2.jpg')}
              style={{height: '100%', width: '100%', borderRadius: 8,}}
            />
          </View>
          <View style={{height: 250, width: 180}}>
            <Image
              source={require('../assets/cilian.jpg')}
              style={{height: '100%', width: '100%', borderRadius: 8}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};
const Filmography = () => {
    return (
      <View style={{marginBottom:50}}>
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}>
          <Text style={{marginHorizontal: 5 ,fontSize:18, fontWeight:'800'}}>Filmography</Text>
          <Text style={{marginHorizontal: 5}}>see all</Text>
        </View>
        <View style={{marginVertical: 10}}>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginVertical:5,
            }}>
            <View style={{height: 250, width: 180}}>
              <Image
                source={require('../assets/cilian.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8}}
              />
            </View>
            <View style={{height: 250, width: 180}}>
              <Image
                source={require('../assets/moviePoster.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8}}
              />
            </View>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-evenly',
              marginVertical:5,
            }}>
            <View style={{height: 250, width: 180}}>
              <Image
                source={require('../assets/cilian2.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8,}}
              />
            </View>
            <View style={{height: 250, width: 180}}>
              <Image
                source={require('../assets/cilian.jpg')}
                style={{height: '100%', width: '100%', borderRadius: 8}}
              />
            </View>
          </View>
        </View>
      </View>
    );
  };
  
const Videos =()=>{
    return(
        <View>
            <View style={{ marginHorizontal: 5 ,flex:1 ,flexDirection:'row', justifyContent:'space-between', alignItems:'center'}}>
                <Text style={{ fontSize:17, fontWeight:'700'}}>Videos</Text>
                <Text>see all</Text>
            </View>

            <ScrollView horizontal={true}>
        <View style={{marginHorizontal: 5, margin: 10}}>
          <ImageBackground
            source={require('../assets/reynolds.jpg')}
            style={{
              height: 100,
              width: 180,
              overflow: 'hidden',
              borderRadius: 8,
            }}>
            <View
              style={{
                backgroundColor: 'black',
                opacity: 0.6,
                height: '100%',
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                onPress={() => Alert.alert('Video player Clicked')}
                style={{height: 30}}>
                <Image
                  source={require('../assets/banner-Subtract.png')}
                  style={{height: 25, width: 25}}
                />
              </Text>
            </View>
          </ImageBackground>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Some fuoia aagibao{' '}
          </Text>
        </View>
        <View style={{marginHorizontal: 5, margin: 10}}>
          <ImageBackground
            source={require('../assets/cilian.jpg')}
            style={{
              height: 100,
              width: 180,
              overflow: 'hidden',
              borderRadius: 8,
            }}>
            <View
              style={{
                backgroundColor: 'black',
                opacity: 0.6,
                height: '100%',
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                onPress={() => Alert.alert('Video player Clicked')}
                style={{height: 30}}>
                <Image
                  source={require('../assets/banner-Subtract.png')}
                  style={{height: 25, width: 25}}
                />
              </Text>
            </View>
          </ImageBackground>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Some fuoia aagibao{' '}
          </Text>
        </View>
        <View style={{marginHorizontal: 5, margin: 10}}>
          <ImageBackground
            source={require('../assets/shahrukh.jpg')}
            style={{
              height: 100,
              width: 180,
              overflow: 'hidden',
              borderRadius: 8,
            }}>
            <View
              style={{
                backgroundColor: 'black',
                opacity: 0.6,
                height: '100%',
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                onPress={() => Alert.alert('Video player Clicked')}
                style={{height: 30}}>
                <Image
                  source={require('../assets/banner-Subtract.png')}
                  style={{height: 25, width: 25}}
                />
              </Text>
            </View>
          </ImageBackground>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Some fuoia aagibao{' '}
          </Text>
        </View>
        <View style={{marginHorizontal: 5, margin: 10}}>
          <ImageBackground
            source={require('../assets/reynolds.jpg')}
            style={{
              height: 100,
              width: 180,
              overflow: 'hidden',
              borderRadius: 8,
            }}>
            <View
              style={{
                backgroundColor: 'black',
                opacity: 0.6,
                height: '100%',
                width: '100%',
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Text
                onPress={() => Alert.alert('Video player Clicked')}
                style={{height: 30}}>
                <Image
                  source={require('../assets/banner-Subtract.png')}
                  style={{height: 25, width: 25}}
                />
              </Text>
            </View>
          </ImageBackground>
          <Text style={{color: 'black', fontWeight: '600'}}>
            Some fuoia aagibao{' '}
          </Text>
        </View>
      </ScrollView>
        </View>
    )
}


const StarCastDetails = ({navigation}) => {
  return (
    <SafeAreaView>
      <CustomHeader title="StarCast" navigation={navigation}></CustomHeader>
      <ScrollView style={styles.container}>
        <View style={{flexDirection: 'row', marginVertical: 15}}>
          <View style={{height: 180, width: 130, marginHorizontal: 5}}>
            <Image
              source={require('../assets/cilian.jpg')}
              style={{height: '100%', width: '100%', borderRadius: 6}}
            />
          </View>
          <View style={{width: 240}}>
            <Text style={{fontWeight: '800'}}>Rocking Star Cilian</Text>
            <Text style={{fontSize: 12, marginVertical: 7}}>
              Born- 8 January 1986, Karnataka, India
            </Text>
            <Text
              style={{
                fontSize: 13,
                marginVertical: 7,
                flex: 1,
                flexWrap: 'wrap',
              }}>
              Cilian Kumar Gowda, Thomas Michael Shelby OBE DCM MM MP is a
              fictional character and the main protagonist in the British period
              crime drama Peaky Blinders. He is played by Irish actor Cillian
              Murphy
            </Text>
          </View>
        </View>
        <View>
          <RelatedTopics navigation={navigation}></RelatedTopics>
        </View>
        <View style={{marginVertical:10}}>
          <Photos />
        </View>
        <View style={{marginVertical:12}}>
        <Videos/>
        </View>
        
        <Filmography/>
      </ScrollView>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
    height: '100%',
    width: '96%',
  },
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
export default StarCastDetails;
