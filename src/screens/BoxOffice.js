import * as React from 'react';

import {View, Text, ScrollView, Image, StyleSheet, TouchableOpacity} from 'react-native';
import CustomHeader from '../header/CustomHeader';

const BoxOffice = ({navigation}) => {
  return (
    <View>
      <CustomHeader isHome={false} navigation={navigation} title="Box Office" />
      <View style={{marginHorizontal: 12}}>
        <ScrollView style={{marginVertical: 10}}>
          <Text style={{textTransform: 'uppercase', fontSize: 15}}>
            Bollywood Box Office collection report 2022-2021 report &amp;
            verdict India
          </Text>
          <Text style={{marginVertical: 10}}>
            Updated on: 3 March, 2022 18:13:49 PM(GMT)
          </Text>

          <TouchableOpacity style={{marginVertical: 5}} 
          onPress={()=>navigation.navigate('ReviewDetails')}
          >
            <View style={styles.cardContainer}>
              <View style={{height: 120, width: 100}}>
                <Image
                  source={require('../assets/moviePoster.jpg')}
                  style={{width: '100%', height: '100%', borderRadius: 5}}
                />
              </View>
              <View style={{flex: 1, paddingHorizontal: 18}}>
                <Text style={styles.cardheadline}>BHOOT</Text>
                <Text style={styles.cardText}>OPENING: 17.6CR</Text>
                <Text style={styles.cardText}>WEEKEND:57.9CR</Text>
                <Text style={styles.cardText}>FIRST WEEK:97.6CR</Text>
                <Text style={styles.cardText}>TOTAL COLLECTION:137.6 CR</Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Text style={styles.RatingBtn}>Super Hit</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginVertical: 5}} 
          onPress={()=>navigation.navigate('ReviewDetails')}>
            <View style={styles.cardContainer}>
              <View style={{height: 120, width: 100}}>
                <Image
                  source={require('../assets/irishman.jpg')}
                  style={{width: '100%', height: '100%', borderRadius: 5}}
                />
              </View>
              <View style={{flex: 1, paddingHorizontal: 18}}>
                <Text style={styles.cardheadline}>BHOOT</Text>
                <Text style={styles.cardText}>OPENING: 17.6CR</Text>
                <Text style={styles.cardText}>WEEKEND:57.9CR</Text>
                <Text style={styles.cardText}>FIRST WEEK:97.6CR</Text>
                <Text style={styles.cardText}>TOTAL COLLECTION:137.6 CR</Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Text style={styles.RatingBtn}>Super Hit</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginVertical: 5}} 
          onPress={()=>navigation.navigate('ReviewDetails')}>
            <View style={styles.cardContainer}>
              <View style={{height: 120, width: 100}}>
                <Image
                  source={require('../assets/dumble.jpg')}
                  style={{width: '100%', height: '100%', borderRadius: 5}}
                />
              </View>
              <View style={{flex: 1, paddingHorizontal: 18}}>
                <Text style={styles.cardheadline}>BHOOT</Text>
                <Text style={styles.cardText}>OPENING: 17.6CR</Text>
                <Text style={styles.cardText}>WEEKEND:57.9CR</Text>
                <Text style={styles.cardText}>FIRST WEEK:97.6CR</Text>
                <Text style={styles.cardText}>TOTAL COLLECTION:137.6 CR</Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Text style={styles.RatingBtn}>Super Hit</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginVertical: 5}}
          onPress={()=>navigation.navigate('ReviewDetails')}>
            <View style={styles.cardContainer}>
              <View style={{height: 120, width: 100}}>
                <Image
                  source={require('../assets/moneyheist.jpg')}
                  style={{width: '100%', height: '100%', borderRadius: 5}}
                />
              </View>
              <View style={{flex: 1, paddingHorizontal: 18}}>
                <Text style={styles.cardheadline}>BHOOT</Text>
                <Text style={styles.cardText}>OPENING: 17.6CR</Text>
                <Text style={styles.cardText}>WEEKEND:57.9CR</Text>
                <Text style={styles.cardText}>FIRST WEEK:97.6CR</Text>
                <Text style={styles.cardText}>TOTAL COLLECTION:137.6 CR</Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Text style={styles.RatingBtn}>Super Hit</Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity style={{marginVertical: 5}}
          onPress={()=>navigation.navigate('ReviewDetails')}>
            <View style={styles.cardContainer}>
              <View style={{height: 120, width: 100}}>
                <Image
                  source={require('../assets/forest.jpg')}
                  style={{width: '100%', height: '100%', borderRadius: 5}}
                />
              </View>
              <View style={{flex: 1, paddingHorizontal: 18}}>
                <Text style={styles.cardheadline}>BHOOT</Text>
                <Text style={styles.cardText}>OPENING: 17.6CR</Text>
                <Text style={styles.cardText}>WEEKEND:57.9CR</Text>
                <Text style={styles.cardText}>FIRST WEEK:97.6CR</Text>
                <Text style={styles.cardText}>TOTAL COLLECTION:137.6 CR</Text>
              </View>
              <View style={{paddingHorizontal: 10}}>
                <Text style={styles.RatingBtn}>Super Hit</Text>
              </View>
            </View>
          </TouchableOpacity>

          {/* disclamer */}

          <View
            style={{
              marginVertical: 5,
              borderColor: '#282828',
              borderWidth: 1,
              padding: 6,
            }}>
            <Text style={styles.HeadlingText}>Disclamer</Text>
            <Text style={styles.cardText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              borderColor: '#282828',
              borderWidth: 1,
              padding: 6,
            }}>
            <Text style={styles.HeadlingText}>
              Our box-office verdict parameters
            </Text>
            <Text style={styles.cardText}>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </Text>
          </View>
          <View
            style={{
              marginVertical: 5,
              marginBottom: 100,
              borderColor: '#282828',
              borderWidth: 1,
              padding: 6,
            }}>
            <Text style={styles.HeadlingText}>parameters</Text>
            <View style={{flexDirection: 'row', marginVertical: 3}}>
              <Text style={styles.textDark}>Super Hit:</Text>
              <Text
                style={{fontWeight: '400', color: '#505050',width:'80%' }}>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 3}}>
              <Text style={styles.textDark}>Hit:</Text>
              <Text
                style={{fontWeight: '400', color: '#505050',width:'80%' }}>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 3}}>
              <Text style={styles.textDark}>Average:</Text>
              <Text
                style={{fontWeight: '400', color: '#505050',width:'80%' }}>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </Text>
            </View>
            <View style={{flexDirection: 'row', marginVertical: 3}}>
              <Text style={styles.textDark}>Flop:</Text>
              <Text
                style={{fontWeight: '400', color: '#505050',width:'80%' }}>
                Contrary to popular belief, Lorem Ipsum is not simply random text.
              </Text>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#282828',
    elevation: 10,
    borderRadius:5
  },
  cardheadline: {
    fontSize: 18,
    fontWeight: '500',
    textTransform: 'capitalize',
  },
  cardText: {
    fontSize: 12,
    fontWeight: '600',
    textTransform: 'capitalize',
  },
  RatingBtn: {
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: 'green',
  },
  HeadlingText: {
    textTransform: 'uppercase',
    fontWeight: '700',
    fontSize: 14,
    marginVertical: 5,
  },
  textDark: {
    fontWeight: '600',
    marginHorizontal: 5,
  },
});

export default BoxOffice;
