import React, {useState, useCallback, useRef} from 'react';
import {
  View,
  Text,
  ScrollView,
  Image,
  StyleSheet,
  FlatList,
  SafeAreaView,
  Alert,
  ImageBackground,
  TouchableOpacity,
  Button,
} from 'react-native';
import {useTheme} from '@react-navigation/native';
import CustomHeader from '../header/CustomHeader';
import Video from 'react-native-video';
import YoutubePlayer from 'react-native-youtube-iframe';

const CastAndCrewList = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 15,
        }}>
        <Text style={{textTransform: 'uppercase', fontWeight: '900'}}>
          Cast and crew
        </Text>
        <Text>see all</Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={{marginHorizontal: 5, margin: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('StarCastDetails')}>
            <Image
              source={require('../assets/reynolds.jpg')}
              imageStyle={{borderRadius: 6}}
              style={{
                height: 120,
                width: 100,
                resizeMode: 'cover',
                borderRadius: 3,
              }}></Image>
            <Text>celebrity name</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 6, margin: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('StarCastDetails')}>
            <Image
              source={require('../assets/celeb.jpg')}
              style={{
                height: 120,
                width: 100,
                resizeMode: 'cover',
                borderRadius: 3,
              }}></Image>
            <Text>Celebrity name</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 6, margin: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('StarCastDetails')}>
            <Image
              source={require('../assets/cilian.jpg')}
              style={{
                height: 120,
                width: 100,
                resizeMode: 'cover',
                borderRadius: 3,
              }}></Image>
            <Text>Celebrity name</Text>
          </TouchableOpacity>
        </View>
        <View style={{marginHorizontal: 6, margin: 10}}>
          <TouchableOpacity
            onPress={() => navigation.navigate('StarCastDetails')}>
            <Image
              source={require('../assets/dicaprio.jpg')}
              style={{
                height: 120,
                width: 100,
                resizeMode: 'cover',
                borderRadius: 3,
              }}></Image>
            <Text>Celebrity name</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </>
  );
};

const DATA = [
  {
    id: '1',
    img: require('../assets/dicaprio.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '2',
    img: require('../assets/reynolds.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '3',
    img: require('../assets/shahrukh.jpg'),
    description:
      'Lorem Ipsum is simply dummy text of the printing and typesettin industry. Lorem Ipsum has been the industry s standard dummytext ever since the 1500s',
  },
  {
    id: '4',
    img: require('../assets/mahesh.jpg'),
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

const Trailer = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <View style={{marginTop: 15}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 8,
        }}>
        <Text style={{color: colors.text, fontWeight: '700'}}>
          Latest Trailer
        </Text>
        <Text onPress={() => navigation.navigate('Trailers')}>See all</Text>
      </View>

      <ScrollView horizontal={true}>
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
          <Text style={{color: colors.text, fontWeight: '600'}}>
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
          <Text style={{color: colors.text, fontWeight: '600'}}>
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
          <Text style={{color: colors.text, fontWeight: '600'}}>
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
          <Text style={{color: colors.text, fontWeight: '600'}}>
            Some fuoia aagibao{' '}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const Posters = ({navigation}) => {
  return (
    <View style={{marginTop: 15}}>
      <View
        style={{
          marginHorizontal: 10,
          marginVertical: 10,
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <Text>Posters</Text>
        <Text onPress={() => navigation.navigate('Posters')}>see all</Text>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 10,
          justifyContent: 'space-evenly',
        }}>
        <View style={{height: 250, width: 180}}>
          <Image
            source={require('../assets/moviePoster.jpg')}
            style={styles.poster}></Image>
        </View>
        {/* delete here */}
        <View style={{height: 250, width: 180}}>
          <Image
            source={require('../assets/antman.jpg')}
            style={styles.poster}></Image>
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          marginHorizontal: 10,
          marginVertical: 10,
          justifyContent: 'space-evenly',
        }}>
        <View style={{height: 250, width: 180}}>
          <Image
            source={require('../assets/irishman.jpg')}
            style={styles.poster}></Image>
        </View>
        {/* delete here */}
        <View style={{height: 250, width: 180}}>
          <Image
            source={require('../assets/dumble.jpg')}
            style={styles.poster}></Image>
        </View>
      </View>
    </View>
  );
};

const Stills = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginTop: 15,
        }}>
        <Text>Images/stills</Text>
        <Text onPress={() => navigation.navigate('ImageAndStills')}>
          see all{' '}
        </Text>
      </View>
      <ScrollView horizontal={true}>
        <View style={{margin: 6}}>
          <Image
            source={require('../assets/dicaprio.jpg')}
            style={{width: 200, height: 100, borderRadius: 6}}></Image>
        </View>
        <View style={{margin: 6}}>
          <Image
            source={require('../assets/reynolds.jpg')}
            style={{width: 200, height: 100, borderRadius: 6}}></Image>
        </View>
        <View style={{margin: 6}}>
          <Image
            source={require('../assets/mahesh.jpg')}
            style={{width: 200, height: 100, borderRadius: 6}}></Image>
        </View>
        <View style={{margin: 6}}>
          <Image
            source={require('../assets/shahrukh.jpg')}
            style={{width: 200, height: 100, borderRadius: 6}}></Image>
        </View>
      </ScrollView>
    </>
  );
};

const PlotReviewSection = () => {
  return (
    <View style={{marginTop: 15}}>
      <View style={styles.textSepartor}>
        <Text style={styles.reviewHeader}>Plot and Review</Text>
        <Text>
          ualga ujngluan gan ghabk nabg uabgk ayg abg abg yuabg ab bagbabg abg
          abg abyhgo abg aog abo gabg abgla
        </Text>
      </View>

      <View style={styles.textSepartor}>
        <Text style={styles.reviewHeader}>Peaky Bllinders Movie Review</Text>
        <Text style={styles.reviewHeader}>BollywoodMDB</Text>
      </View>
      <View style={styles.textSepartor}>
        <Text>
          fuiao uifauo ianfua fuanbf ab fbab fa fabfoui baiuofb uiabof uiabho
          ufiabufi baiobf a bfab uiabfib aioafao
        </Text>
      </View>
      <View style={styles.textSepartor}>
        <Text style={styles.textSepartor}>
          One Line Review: ifh ahf hauhf aufh ahfu iahfhui
        </Text>
        <Text style={styles.textSepartor}>
          Positive Points: fha fahf ah olaf ahf la faf ouain fa
        </Text>
        <Text style={styles.textSepartor}>
          Negative Points: fha fahf ah olaf ahf la faf ouain fa
        </Text>
      </View>
      <View style={styles.textSepartor}>
        <Text>
          <Text style={styles.reviewHeader}>Plot:</Text> fai ofaio jfoiaj fioaj
          ifoaio fapjf anf aon fouianio nfaoin foiano nfaoinf ioan fanf abw
          fuiab fuabu fbauibf uauf aub ufbau fbaub fab fbab fuab bfaub fuaf baf
          abf abo fnao bfanf ab foia
        </Text>
      </View>
    </View>
  );
};

const News = () => {
  const renderItem = ({item}) => (
    <DataItem description={item.description} uri={item.img}></DataItem>
  );

  return (
    <SafeAreaView style={{marginTop: 20}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Text style={styles.headerText}>News</Text>
        <Text>see all</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

const PartiesAndEvents = ({navigation}) => {
  const renderItem = ({item}) => (
    <DataItem description={item.description} uri={item.img}></DataItem>
  );

  return (
    <SafeAreaView style={{marginTop: 20}}>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
        }}>
        <Text style={styles.headerText}>Parties and Events</Text>
        <Text onPress={() => navigation.navigate('Events')}>see all</Text>
      </View>

      <FlatList
        data={DATA}
        renderItem={renderItem}
        keyExtractor={item => item.id}></FlatList>
    </SafeAreaView>
  );
};

function MovieScreenDetail({navigation, route}) {
  const {colors} = useTheme();
  const {videoId, poster} = route.params;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  const togglePlaying = useCallback(() => {
    setPlaying(prev => !prev);
  }, []);
  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Movie Detail" navigation={navigation} />
      <ScrollView>
        <View style={styles.container}>
          <View style={styles.header}>
            <YoutubePlayer
              height='100%'
              play={playing}
              videoId={videoId}
              onChangeState={onStateChange}
            />
          </View>
          <View style={styles.rectangle}>
            <Image
              style={{width: '100%', height: '100%', borderRadius: 6}}
              source={poster}></Image>
          </View>
          <View style={styles.circle}>
            <Image
              source={require('../assets/heart.png')}
              style={{tintColor: 'white', width: 16, height: 16}}
            />
          </View>
          <View style={{marginLeft: 150, marginRight: 5, width: 200}}>
            <Text style={{textAlign: 'center'}}>Movie| Adventure | Comedy</Text>
            <View
              style={{
                flex: 1,
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-evenly',
                marginTop: 2,
              }}>
              <View style={{margin: 4}}>
                <Image
                  source={require('../assets/star.png')}
                  style={{tintColor: 'gold', width: 20, height: 20}}
                />
                <Text style={{fontSize: 12}}>Critic's Rating</Text>
                <Text style={{fontSize: 12}}>4.2 / 5</Text>
              </View>
              <View style={{margin: 4}}>
                <Image
                  source={require('../assets/star.png')}
                  style={{tintColor: 'gold', width: 20, height: 20}}
                />
                <Text style={{fontSize: 12}}>Critic's Rating</Text>
                <Text style={{fontSize: 12}}>4.4 / 5</Text>
              </View>
              <TouchableOpacity
                style={{margin: 4}}
                onPress={() => navigation.navigate('WriteReview')}>
                <Image
                  source={require('../assets/notes.png')}
                  style={{tintColor: 'red', width: 20, height: 20}}
                />
                <Text style={{fontSize: 12, color: '#CC2939'}}>Rate This</Text>
              </TouchableOpacity>
            </View>
            <View style={{marginVertical: 20}}>
              <Text>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry
              </Text>
            </View>
          </View>
        </View>

        <View>
          <View style={{marginTop: 20, marginHorizontal: 12}}>
            <Text
              style={{marginBottom: 8}}
              onPress={() => navigation.navigate('ProductionDetails')}>
              Banner : SomeBanner
            </Text>
          </View>
          <CastAndCrewList navigation={navigation} />
        </View>
        <RelatedTopics />
        <Trailer navigation={navigation} />
        <Posters navigation={navigation} />
        <Stills navigation={navigation} />
        <PlotReviewSection />
        <View>
          <News />
        </View>
        <View>
          <PartiesAndEvents navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginBottom: 5,
  },
  header: {
    width: '100%',
    height: 220,
    position: 'relative',
    top: 0,
    left: 0,
    backgroundColor: 'gray',
  },
  rectangle: {
    height: 180,
    width: 120,
    position: 'absolute',
    top: 230,
    left: 10,
    elevation: 10,
  },
  circle: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
    position: 'absolute',
    top: 220,
    right: 10,
    borderRadius: 50,
    backgroundColor: 'grey',
    elevation: 10,
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
    resizeMode: 'contain',
    marginRight: 5,
  },
  playBtn: {
    height: 25,
    width: 25,
  },
  poster: {
    height: '100%',
    width: '100%',
    borderRadius: 8,
    resizeMode: 'cover',
  },
  textSepartor: {
    marginVertical: 10,
    marginHorizontal: 10,
  },
  reviewHeader: {
    fontWeight: '800',
  },
});

export default MovieScreenDetail;

{
  /* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <TouchableOpacity style={{marginTop: 20}}
        onPress={() => navigation.navigate('Posters')}
        >
          <Text>MovieDetails</Text>
        </TouchableOpacity>
      </View> */
}
