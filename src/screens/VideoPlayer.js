import React, {useState, useCallback, useRef} from 'react';
import {Button, Text, View, Alert} from 'react-native';
import YoutubePlayer from 'react-native-youtube-iframe';
import CustomHeader from '../header/CustomHeader';
export default function VideoPlayer({navigation, route}) {
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

  const {videoId} = route.params;
  return (
    <View>
      <CustomHeader title="Trailer" isHome={false} navigation={navigation} />
      <YoutubePlayer
        webViewStyle={{opacity: 0.99}}
        height={300}
        play={playing}
        videoId={videoId}
        onChangeState={onStateChange}
      />
      <Text
        onPress={togglePlaying}
        style={{
          borderRadius: 25,
          borderWidth: 1,
          borderColor: 'red',
          paddingHorizontal: 10,
          paddingVertical: 5,
          marginHorizontal: 50,
          textAlign: 'center',
          color: 'maroon',
        }}>
        {playing ? 'Pause' : 'Play'}
      </Text>
    </View>
  );
}
