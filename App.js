import React,{Component} from 'react'
import {View,StyleSheet,Text} from 'react-native'
import ViewMap from './components/map-view';
import CurrentPoint from './components/current-point';
import NearBy from './components/nearby';
// import PlayAudio from './components/audio';
// import SoundView from './components/sound/main-audio';
const styles = StyleSheet.create({
 container: {
   ...StyleSheet.absoluteFillObject,
   flex:1,
   justifyContent: 'flex-end',
   alignItems: 'center',
 },
 
});

export default class App extends Component {
  render(){
    return(
    <View style={styles.container}>
      {/* <ViewMap/> */}
      {/* <CurrentPoint/> */}
      {/* <PlayAudio/> */}
      {/* <SoundView/> */}
      <NearBy/>
   </View>
    )
  }
}