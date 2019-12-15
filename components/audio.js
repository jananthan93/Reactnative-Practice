import React from 'react';
import { StyleSheet, TouchableOpacity, View, Image } from 'react-native'
import Icon from 'react-native-ionicons';
export default class PlayAudio extends React.Component {
    state = {
      isPlaying: false,
      playbackInstance: null,
      currentIndex: 0,
      volume: 1.0,
      isBuffering: false
    }
    render() {
      return (
        <View style={styles.container}>
  <Image
    style={styles.albumCover}
    source={{
      uri: 'http://www.archive.org/download/LibrivoxCdCoverArt8/hamlet_1104.jpg'
    }}
  />
  <View style={styles.controls}>
    <TouchableOpacity style={styles.control} onPress={() => alert('')}>
      <Icon name="ios-skip-backward" size={48} color="#444" />
    </TouchableOpacity>
    <TouchableOpacity style={styles.control} onPress={() => alert('')}>
      {this.state.isPlaying ? (
        <Icon name="ios-pause" size={48} color="#444" />
      ) : (
        <Icon name="ios-play-circle" size={48} color="#444" />
      )}
    </TouchableOpacity>
    <TouchableOpacity style={styles.control} onPress={() => alert('')}>
      <Icon name="ios-skip-forward" size={48} color="#444" />
      
    </TouchableOpacity>
  </View>
</View>
      )
    }
  }
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center'
    },
    albumCover: {
      width: 250,
      height: 250
    },
    controls: {
      flexDirection: 'row'
    },
    control: {
      margin: 20
    }
  })