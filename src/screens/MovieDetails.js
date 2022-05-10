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

const cast = [
  {id: 1, name: 'somename', img: require('../assets/celeb.jpg')},
  {id: 2, name: 'ryan reynolds', img: require('../assets/reynolds.jpg')},
  {id: 3, name: 'Leonardo dicaprio', img: require('../assets/dicaprio.jpg')},
  {id: 4, name: 'tara sutaria', img: require('../assets/tara.jpg')},
  {id: 5, name: 'cilian murphy', img: require('../assets/cilian.jpg')},
];

const CastList = ({navigation}) => {
  return (
    <>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          marginHorizontal:12
        }}>
        <Text>Cast and Crew</Text>
        <Text>see all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        {cast.map(element => {
          return (
            <TouchableOpacity key={element.id}
              onPress={() => navigation.navigate('StarCastDetails')}
              >
              <Image
                source={element.img}
                style={{height: 130, width: 100, marginHorizontal: 5, borderRadius:4}}
              />
              <View style={{flexWrap:'wrap', width:90}}>
              <Text style={{width:'100%', marginHorizontal:5}}>{element.name}</Text>
              </View>
              
            </TouchableOpacity>
          );
        })}
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
const MovieDetailScreen = ({navigation, route}) => {
  const {videoId, poster} = route.params;
  const [playing, setPlaying] = useState(false);

  const onStateChange = useCallback(state => {
    if (state === 'ended') {
      setPlaying(false);
      Alert.alert('video has finished playing!');
    }
  }, []);

  return (
    <View>
      <CustomHeader
        isHome={false}
        title="Movie Details"
        navigation={navigation}
      />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.videoContainer}>
          <YoutubePlayer
            webViewStyle={{opacity: 0.99}}
            height={300}
            play={playing}
            videoId={videoId}
            onChangeState={onStateChange}
          />
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginVertical: 10,
            marginHorizontal: 10,
          }}>
          <View style={styles.posterContainer}>
            <Image
              source={poster}
              style={{width: '100%', height: '100%', borderRadius: 5}}></Image>
          </View>
          <View style={{alignItems: 'center'}}>
            <Text style={{textAlign: 'center'}}>
              Movie | Adventure | Comedy
            </Text>
            <View style={{flexDirection: 'row', marginVertical: 5}}>
              <View style={{alignItems: 'center', marginHorizontal: 4}}>
                <Image
                  source={require('../assets/star.png')}
                  style={styles.ratingIcons}></Image>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  Critic's ratings
                </Text>
                <Text style={{fontSize: 13}}>4.4/ 5.0</Text>
              </View>
              <View style={{alignItems: 'center', marginHorizontal: 4}}>
                <Image
                  source={require('../assets/star.png')}
                  style={styles.ratingIcons}></Image>
                <Text style={{fontSize: 12, fontWeight: '600'}}>
                  User ratings
                </Text>
                <Text style={{fontSize: 13}}>4.4/ 5.0</Text>
              </View>
              <TouchableOpacity
                style={{alignItems: 'center', marginHorizontal: 4}}
                onPress={() => navigation.navigate('WriteReview')}>
                <Image
                  source={require('../assets/notes.png')}
                  style={{tintColor: 'maroon', width: 22, height: 22}}></Image>
                <Text style={{fontSize: 12, lineHeight: 25, fontWeight: '600'}}>
                  Rate This
                </Text>
              </TouchableOpacity>
            </View>
              <Text style={{marginTop:10}}>Add to Your Favorites</Text>
              <View style={styles.circle}>
                <Image source={require('../assets/heart.png')} 
                style={{height:18, width:18, tintColor:'white'}}/>
              </View>
          </View>
        </View>
        <View>
          <Text style={{marginHorizontal: 15}}>
            In the 1950s, truck driver Frank Sheeran gets involved with Russell
            Bufalino and his Pennsylvania crime family. As Sheeran climbs the
            ranks to become a top hit man, he also goes to work for Jimmy Hoffa
            a powerful Teamster tied to organized crime.
          </Text>
          <Text
              onPress={() => {
                navigation.navigate('ProductionDetails');
              }}
              style={{marginVertical: 10, marginHorizontal:15}}>
              Banner: SomeBanner
            </Text>
        </View>

        <View>
          <CastList navigation={navigation} />
        </View>

        <RelatedTopics />
        <Trailer navigation={navigation} />
        <Posters navigation={navigation} />
        <Stills navigation={navigation} />
        <PlotReviewSection />
        <View>
          <News />
        </View>
        <View style={{marginBottom: 60}}>
          <PartiesAndEvents navigation={navigation} />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  videoContainer: {
    width: '100%',
    height: 240,
    backgroundColor: 'black',
  },
  posterContainer: {
    height: 170,
    width: 125,
    marginRight: 5,
  },
  ratingIcons: {
    width: 18,
    height: 18,
    tintColor: 'orange',
  },
  circle: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 32,
    width: 32,
    borderRadius: 50,
    backgroundColor: 'grey',
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

export default MovieDetailScreen;
