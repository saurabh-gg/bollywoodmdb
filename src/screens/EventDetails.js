import * as React from 'react';

import {View, Text, ScrollView, Image, StyleSheet} from 'react-native';
import { useTheme } from '@react-navigation/native';
import CustomHeader from '../header/CustomHeader';

const EventDetail = ({navigation}) => {
    const {colors}= useTheme()
  return (
    <View>
      <CustomHeader
        navigation={navigation}
        title="Parties and Events"
        isHome={false}
      />
      <ScrollView style={{marginTop:15}}>
      <View style={{marginHorizontal: 12}}>
        <Text style={styles.headLine}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
          it over 2000 years old. Richard McClintock,
        </Text>
        <Text style={styles.content}>
          Contrary to popular belief, Lorem Ipsum is not simply random text. It
          has roots in a piece of classical Latin literature from 45 BC, making
        </Text>
        <Text style={{fontSize:10, color:colors.text , fontWeight:'300', marginTop:10}}>Updated on 3 March 2022 18:33:49 PM (GMT)</Text>
      </View>
      <View style={{marginHorizontal:12, alignItems:'center'}}>
          <View style={styles.imgContainer}>
              <Image source={require('../assets/partiesphoto.jpg')}
              style={styles.img}/>
          </View>
          <View style={styles.heroImgContainer}>
              <Image source={require('../assets/vidyut.jpg')}
              style={{width:'100%', height:'100%', borderRadius:5}}
              />
          </View>
          <View style={styles.imgContainer}>
              <Image source={require('../assets/partiesphoto.jpg')}
              style={styles.img}/>
          </View>
      </View>
      <View style={styles.bottomContainer}>
          <Text style={styles.btn}>Lorem ipsum</Text>
          <Text style={styles.btn}>Lorem ipsum</Text>
          <Text style={styles.btn}>Lorem ipsum</Text>
          <Text style={styles.btn}>Lorem ipsum</Text>
          <Text style={styles.btn}>Lorem ipsum</Text>
      </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
    headLine:{
        fontWeight:'900',
        fontSize:15,
    },
    content: {
        fontWeight:'400',
        marginVertical:5
    },
    imgContainer:{
        height:200,
        width:'100%',
        marginVertical:10,
    },
    img: {
        width:'100%',
        height:'100%',
        borderRadius:5
    },
    heroImgContainer:{
        height:600,
        width:'100%',
        marginHorizontal:12,
        marginVertical:10
    },bottomContainer:{
        marginHorizontal:12,
        marginTop:10,
        flex:1,
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'flex-start',
        flexWrap:'wrap',
        marginBottom:60
    },
    btn:{
        paddingVertical:8,
        paddingHorizontal:20,
        marginVertical:5,
        marginHorizontal:5,
        color:'red',
        borderRadius:25,
        borderWidth:1 ,
        borderColor:'red',
        fontSize:12
    }
    })

export default EventDetail;
