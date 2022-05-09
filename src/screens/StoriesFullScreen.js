import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import { useTheme } from '@react-navigation/native';

const data = [
    {
        user_id: 1,
        user_image: 'https://pbs.twimg.com/profile_images/1222140802475773952/61OmyINj.jpg',
        user_name: "Ahmet Çağlar Durmuş",
        stories: [
            {
                story_id: 1,
                story_image: "https://image.freepik.com/free-vector/universe-mobile-wallpaper-with-planets_79603-600.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://image.freepik.com/free-vector/mobile-wallpaper-with-fluid-shapes_79603-601.jpg",
            }]
    },
    {
        user_id: 2,
        user_image: 'https://images.unsplash.com/photo-1511367461989-f85a21fda167?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZmlsZXxlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=1000&q=80',
        user_name: "Test User",
        stories: [
            {
                story_id: 1,
                story_image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjORKvjcbMRGYPR3QIs3MofoWkD4wHzRd_eg&usqp=CAU",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 1 swiped'),
            },
            {
                story_id: 2,
                story_image: "https://files.oyebesmartest.com/uploads/preview/vivo-u20-mobile-wallpaper-full-hd-(1)qm6qyz9v60.jpg",
                swipeText:'Custom swipe text for this story',
                onPress: () => console.log('story 2 swiped'),
            }]
    }];
import CustomHeader from '../header/CustomHeader';
const StoriesFullScreen = ({navigation}) => {
    const {colors} = useTheme()
  return (
    <View>
        <View style={{height:'100%', width:'100%'}}>
            <Image source={require('../assets/tara.jpg')} style={{height:'100%',width:'100%', resizeMode:'cover'}} />
            <View style={{position:'absolute', top:'2%', marginHorizontal:10, flexDirection:'row', marginHorizontal:5}}>
                <View style={{width:100,height:2, backgroundColor:'rgba(217, 217, 217, 0.8)', marginHorizontal:2}}></View>
                <View style={{width:100,height:2, backgroundColor:'rgba(217, 217, 217, 0.8)', marginHorizontal:2}}></View>
                <View style={{width:100,height:2, backgroundColor:'rgba(217, 217, 217, 0.8)', marginHorizontal:2}}></View>
                <View style={{width:100,height:2, backgroundColor:'rgba(217, 217, 217, 0.8)', marginHorizontal:2}}></View>
            </View>
            <Text style={{position:'absolute', top:'4%', left:'3%',color:'#696969' ,fontSize:15, fontWeight:'600', marginHorizontal:10, textAlign:'center'}}>BollywoodMDB</Text>
            <View style={{position:'absolute', top:'4%', right:'3%', color: colors.text ,fontSize:18, fontWeight:'600', marginHorizontal:10, flexDirection:'row', marginHorizontal:5}}>
            <Image source={require('../assets/volume.png')} style={{width:20, height:20, tintColor:'#bfbfbf', marginHorizontal:5}}/>
            <Image source={require('../assets/pause.png')} style={{width:20, height:20, tintColor:'#bfbfbf', marginHorizontal:5}}/>
            <Image source={require('../assets/more.png')} style={{width:20, height:20, tintColor:'#bfbfbf', marginHorizontal:5}}/>
            </View>
            <Text style={{position:'absolute', top:'80%', color: colors.text ,fontSize:18, fontWeight:'600', marginHorizontal:10}}>Lorem Ipsum</Text>
            <Text style={{position:'absolute', top:'85%', color: colors.text ,fontSize:15, fontWeight:'600', marginHorizontal:10, textAlign:'center'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum</Text>
        </View>

    </View>
  );
};

const styles = StyleSheet.create({});

export default StoriesFullScreen;
