import * as React from 'react';
import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import CustomHeader from '../header/CustomHeader';

const ImageAndStills = ({navigation}) => {
  return (
    <View>
      <CustomHeader
        navigation={navigation}
        title="Images and Stills"
        isHome={false}
      />
      <ScrollView style={styles.container}>
        <Text
          style={{
            marginVertical: 10,
            textTransform: 'uppercase',
            fontWeight:'700',
            fontSize:16
          }}>
          New Bollwood movies stills
        </Text>
        <View style={styles.flexContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/HarveySpecter.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/cilian.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
        </View>
        {/* /delete here  */}
        <View style={styles.flexContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/daniel_crieg.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/suits.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
        </View>
        {/* /delete here  */}
        <View style={styles.flexContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/reynolds.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/shahrukh.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
        </View>
        {/* /delete here  */}
        <View style={styles.flexContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/dicaprio.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/mahesh.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
        </View>
        {/* /delete here  */}
        <View style={styles.flexContainer}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/shahrukh.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/download.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
        </View>
        {/* /delete here  */}
        <View style={[styles.flexContainer, {marginBottom:90}]}>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/reynolds.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
          <View style={styles.imgContainer}>
            <Image
              source={require('../assets/dicaprio.jpg')}
              style={{width: '100%', height: '100%', borderRadius: 5}}
            />
            <Text>Some Text Here</Text>
          </View>
        </View>
        {/* /delete here  */}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 12,
  },
  imgContainer: {
    height: 120,
    width: 180,
  },
  flexContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    marginVertical: 12,
  },
});
export default ImageAndStills;
