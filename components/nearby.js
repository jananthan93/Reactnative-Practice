import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity,Dimensions, Text} from 'react-native';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //  alignItems: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
export default class NearBy extends Component {
  state = {
    isCurrent: false,
    lastLat: 9.749997,
    lastLong: 80.083333,
    latitudeDelta:  0.5,
    longitudeDelta: 0.5, 
  };
  
  render() {
    return (
        <MapView
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          ref= {map => this._map = map}
          style={styles.map}
          showsUserLocation={false}
          zoomEnabled={true}
          zoomControlEnabled={true}
          region={{
            latitude: this.state.lastLat,
            longitude: this.state.lastLong,
            latitudeDelta: this.state.latitudeDelta,
            longitudeDelta:this.state.longitudeDelta,
          }}>
          </MapView>
      );
  }
}
