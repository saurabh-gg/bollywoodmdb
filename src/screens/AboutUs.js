import * as React from 'react';
import {View, Text,StyleSheet} from 'react-native';

import CustomHeader from '../header/CustomHeader';
const AboutUs = ({navigation}) => {
  return (
    <View>
      <CustomHeader isHome={false} title="About Us" navigation={navigation} />
      <View style={{marginHorizontal: 12}}>
        <Text style={[styles.headText, {marginTop: 10}]}>About</Text>
        <Text style={styles.contentText}>
          BollywoodMDB.com is one of the leading entertainment websites in
          India, which covers premium Bollywood news, in-depth celebrity
          interviews, movie events, and breaking entertainment news from the
          world of Hindi cinema. Apart from writing extensively about Hindi
          movies, the website also covers interesting stories from television
          and various regional film industries across the country. Frequently
          referenced by many top media outlets, the website has a dedicated team
          of entertainment writers and journalists who glean information from
          various industry sources and piece them together into lucid and
          entertaining stories for our readers who read us far beyond
          geographical boundaries.Frequently referenced by many top media
          outlets, the website has a dedicated team of entertainment writers and
          journalists who glean information from various industry sources and
          piece them together into lucid and entertaining stories for our
          readers who read us far beyond geographical boundaries.
        </Text>
        <Text style={[styles.headText, {marginTop: 5}]}>History</Text>
        <Text style={styles.contentText }>
          BollywoodMDB first came into existence in 2007 as FridayRelease.com.
          However, in order to make it more industry-specific, the website was
          rebranded as BollywoodMDB in the year of 2013. Since then, there has
          been no looking back for BollywoodMDB and it has grown rapidly over
          the years to become the go-to destination for breaking news in the
          entertainment industry.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
    headText:{
        fontSize:18,
        fontWeight:'700',
        textTransform:'capitalize',
        marginVertical:5,
    },
    contentText:{
        marginVertical:5,
        lineHeight:19
    }
})
export default AboutUs;
