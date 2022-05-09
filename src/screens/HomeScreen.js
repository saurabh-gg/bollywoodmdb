import * as React from 'react';
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  Button,
  ScrollView,
  StyleSheet,
  ImageBackground,
  SectionList,
} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {useTheme} from '@react-navigation/native';
import DropDown from '../DropDown/DropDown';
import CustomHeader from '../header/CustomHeader';

const SomeData = [
  {
    title: 'Bollywood',
    data: [
      {
        img: require('../assets/legend.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
      {
        img: require('../assets/polis.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
    ],
  },
  {
    title: 'Television',
    data: [
      {
        img: require('../assets/moneyheist.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
      {
        img: require('../assets/legend.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
    ],
  },
  {
    title: 'Web Series',
    data: [
      {
        img: require('../assets/antman.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
      {
        img: require('../assets/moviePoster.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
    ],
  },
  {
    title: 'Fashion',
    data: [
      {
        img: require('../assets/legend.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
      {
        img: require('../assets/forest.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
    ],
  },
  {
    title: 'South',
    data: [
      {
        img: require('../assets/polis.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
      {
        img: require('../assets/moviePoster.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
    ],
  },
  {
    title: 'International',
    data: [
      {
        img: require('../assets/moneyheist.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
      {
        img: require('../assets/antman.jpg'),
        description: 'gagahga gfajg ag angj ahguiabh guabhg babg a',
        oneLiner: 'fgaygfag fa',
      },
    ],
  },
];
let fruits = [
  {
    id: 1,
    name: 'Mango',
  },
  {id: 2, name: 'Banana'},
  {id: 3, name: 'Apple'},
  {id: 4, name: 'Apple'},
  {id: 5, name: 'Apple'},
];

const HorizontalScroll = () => {
  return (
    <>
      <ScrollView horizontal={true}>
        <View style={styles.HorizontalContainer}>
          <ImageBackground
            source={require('../assets/mahesh.jpg')}
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: 8,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderRadius: 17,
              }}>
              <View style={{backgroundColor: 'black', opacity: 0.6, margin: 5}}>
                <Text style={{color: 'white'}}>
                  abga gabnoa ngan angnagbab abgn abg aig agb aigb iab ganig ab
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
        <View style={styles.HorizontalContainer}>
          <ImageBackground
            source={require('../assets/shahrukh.jpg')}
            style={{
              width: '100%',
              height: '100%',
              overflow: 'hidden',
              borderRadius: 8,
            }}>
            <View
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                justifyContent: 'flex-end',
                alignItems: 'center',
                borderRadius: 17,
              }}>
              <View style={{backgroundColor: 'black', opacity: 0.6, margin: 5}}>
                <Text style={{color: 'white'}}>
                  abga gabnoa ngan angnagbab abgn abg aig agb aigb iab ganig ab
                </Text>
              </View>
            </View>
          </ImageBackground>
        </View>
      </ScrollView>
    </>
  );
};

const SectionDetail = ({item}) => {
  return (
    <>
      <View style={styles.itemImgContainer}>
        <View style={styles.Sectionimg}>
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
          <Text>{item.description}</Text>
          <Text style={{marginTop: 7}}>{item.oneLiner}</Text>
        </View>
      </View>
    </>
  );
};

const BottomComponent = () => {
  const {colors} = useTheme();
  const renderSectionDetails = ({item}) => {
    return <SectionDetail item={item}></SectionDetail>;
  };

  const sectionStoryhandler = () => {
    navigation.navigate('');
  };
  return (
    <>
      <SectionList
        sections={SomeData}
        renderItem={renderSectionDetails}
        renderSectionHeader={({section}) => (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginHorizontal: 10,
            }}>
            <Text style={[styles.sectionHeader, {color: colors.text}]}>
              {section.title}
            </Text>
            <Text onPress={sectionStoryhandler}>see all</Text>
          </View>
        )}></SectionList>
    </>
  );
};

const more = [
  {id: 2, name: 'Celebrities', Route: 'CelebListings'},
  {id: 1, name: 'AboutUs', Route: 'More'},
];
const videos = [
  {id: 1, name: 'Trailers', Route: 'TrailerStack'},
  {id: 2, name: 'Songs', Route: 'Songs'},
];
const movies = [
  {id: 1, name: 'Movies', Route: 'Movies'},
  {id: 2, name: 'WatchList', Route: 'WatchList'},
];
const reviews = [
  {id: 1, name: 'Reviews', Route: 'Reviews'},
  {id: 2, name: 'MyRatings', Route: 'MyRatings'},
];

const HeaderBtn = ({navigation}) => {
  const [selectedItem, SetSelectedItem] = React.useState(null);
  const onSelect = item => {
    navigation.navigate(`${item.Route}`);
    SetSelectedItem(item);
  };
  return (
    <View style={{marginHorizontal: 10}}>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <Text onPress={() => navigation.navigate('Home')}>Home</Text>
        </View>

        <View
          style={{
            marginHorizontal: 12,
            marginVertical: 5,
          }}>
          <Text onPress={() => navigation.navigate('News')}>News Adda</Text>
          {/* <Image
            source={require('../assets/downarrow.png')}
            style={{width: 20, height: 20, tintColor: '#696969'}}
          /> */}
        </View>
        {/* <View
          style={{
            marginHorizontal: 12,
            marginVertical: 5,
          }}>
          <Text onPress={() => navigation.navigate('WebStories')}>
            WebStories
          </Text>
          <Image
            source={require('../assets/downarrow.png')}
            style={{width: 20, height: 20, tintColor: '#696969'}}
          />
        </View> */}

        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <DropDown
            fruits={videos}
            onSelect={onSelect}
            // value={selectedItem}
            defaultTitle="Videos"
          />
        </View>
        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <DropDown
            fruits={movies}
            onSelect={onSelect}
            // value={selectedItem}
            defaultTitle="Movies"
          />
        </View>

        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <Text onPress={() => navigation.navigate('BoxOffice')}>
            Box Office
          </Text>
        </View>
        <View style={{marginHorizontal: 12, marginVertical: 5}}>
          <DropDown
            fruits={reviews}
            onSelect={onSelect}
            // value={selectedItem}
            defaultTitle="Reviews"
          />
        </View>

        <View
          style={{marginHorizontal: 12, marginVertical: 5, marginRight: 50}}>
          <DropDown
            fruits={more}
            onSelect={onSelect}
            value={selectedItem}
            defaultTitle="More"
          />
        </View>
        {/* <View style={{marginHorizontal:12, marginVertical:5 , flexDirection:'row',alignItems:'center', justifyContent:'center'}}>
          <Text onPress={() => navigation.navigate('More')}>More</Text>
          <Image source={require('../assets/downarrow.png')}
          style={{width:20, height:20, tintColor:'#696969'}}/>
        </View> */}
      </ScrollView>
    </View>
  );
};

const WebStories = ({navigation}) => {
  return (
    <View style={{marginHorizontal:12}}>
      <View style={{flexDirection:'row', alignItems:'center', justifyContent:'space-between', marginVertical:10}}>
        <Text style={{fontSize:16, fontWeight:'700', textTransform:'uppercase'}}>Web Stories</Text>
        <Text onPress={()=> navigation.navigate('WebStories')}>see all</Text>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{marginHorizontal:10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FullScreenStories')}
          style={{
            borderWidth: 1,
            borderColor: '#696969',
            borderRadius: 5,
            height: 220,
            width: 160,
          }}>
          <View style={{borderRadius: 4, width: '100%', height: 160}}>
            <Image
              source={require('../assets/tara.jpg')}
              style={{borderRadius: 4, width: '100%', height: '100%'}}
            />
          </View>
          <Text style={{padding: 5}}>
            lorem ipsum dolor sit amet, consetetur
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FullScreenStories')}
          style={{
            borderWidth: 1,
            borderColor: '#696969',
            borderRadius: 5,
            height: 220,
            width: 160,
          }}>
          <View style={{borderRadius: 4, width: '100%', height: 160}}>
            <Image
              source={require('../assets/dicaprio.jpg')}
              style={{borderRadius: 4, width: '100%', height: '100%'}}
            />
          </View>
          <Text style={{padding: 5}}>
            lorem ipsum dolor sit amet, consetetur
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FullScreenStories')}
          style={{
            borderWidth: 1,
            borderColor: '#696969',
            borderRadius: 5,
            height: 220,
            width: 160,
          }}>
          <View style={{borderRadius: 4, width: '100%', height: 160}}>
            <Image
              source={require('../assets/cilian.jpg')}
              style={{borderRadius: 4, width: '100%', height: '100%'}}
            />
          </View>
          <Text style={{padding: 5}}>
            lorem ipsum dolor sit amet, consetetur
          </Text>
        </TouchableOpacity>
      </View>
      <View style={{marginHorizontal:10}}>
        <TouchableOpacity
          onPress={() => navigation.navigate('FullScreenStories')}
          style={{
            borderWidth: 1,
            borderColor: '#696969',
            borderRadius: 5,
            height: 220,
            width: 160,
          }}>
          <View style={{borderRadius: 4, width: '100%', height: 160}}>
            <Image
              source={require('../assets/shahrukh.jpg')}
              style={{borderRadius: 4, width: '100%', height: '100%'}}
            />
          </View>
          <Text style={{padding: 5}}>
            lorem ipsum dolor sit amet, consetetur
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
    </View>
    
  );
};

function HomeScreen({navigation}) {
  const {colors} = useTheme();

  return (
    <SafeAreaView style={{flex: 1}}>
      <CustomHeader title="Home" isHome={true} navigation={navigation} />
      <ScrollView>
        <View style={{marginTop: 8}}>
          <HeaderBtn navigation={navigation} />
        </View>

        <View style={styles.HrLine}></View>
        <Text
          style={{
            fontWeight: '700',
            color: colors.text,
            fontSize: 17,
            textTransform: 'capitalize',
            marginLeft: 25,
            marginBottom: 15,
          }}>
          Trending
        </Text>

        <View style={{marginHorizontal: 10}}>
          <View style={styles.imgContainer}>
            <ImageBackground
              source={require('../assets/hero.jpg')}
              style={{
                width: '100%',
                height: '100%',
                overflow: 'hidden',
                borderRadius: 8,
              }}>
              <View
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  right: 0,
                  bottom: 0,
                  justifyContent: 'flex-end',
                  alignItems: 'center',
                }}
                imageStyle={{borderRadius: 18}}>
                <View
                  style={{backgroundColor: 'black', opacity: 0.6, margin: 5}}>
                  <Text style={{color: 'white'}}>
                    abga gabnoa ngan angnagbab abgn abg aig agb aigb iab ganig
                    ab
                  </Text>
                </View>
              </View>
            </ImageBackground>
          </View>
        </View>

        <View style={{marginHorizontal: 10, marginVertical: 12}}>
          <View style={styles.imgContainer2}>
            <Image
              source={require('../assets/reynolds.jpg')}
              style={{
                borderRadius: 16,
                alignSelf: 'center',
                height: '100%',
                width: '100%',
              }}
            />
          </View>
        </View>

        <HorizontalScroll />
        <View>
          <BottomComponent />
        </View>
        <View>
          <WebStories navigation={navigation} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  btnContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    marginTop: 5,
  },
  HrLine: {
    width: '90%',
    height: 1,
    backgroundColor: 'grey',
    marginHorizontal: 20,
    marginTop: 5,
    marginBottom: 10,
  },
  imgContainer: {
    height: 500,
    width: 370,
  },
  imgContainer2: {
    height: 200,
    width: 370,
  },
  HorizontalContainer: {
    height: 180,
    width: 300,
    marginHorizontal: 8,
    marginVertical: 12,
  },
  sectionHeader: {
    textTransform: 'uppercase',
    fontSize: 17,
    fontWeight: '900',
  },
  itemImgContainer: {
    flex: 1,
    flexDirection: 'row',
    margin: 10,
  },
  Sectionimg: {
    width: 140,
    height: 100,
  },
});

export default HomeScreen;

{
  /* <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text>Home!</Text>
        <TouchableOpacity
          style={{marginTop: 20}}
          onPress={() => navigation.navigate('HomeDetail')}>
          <Text>Go Home Detail</Text>
        </TouchableOpacity>
      </View> */
}
