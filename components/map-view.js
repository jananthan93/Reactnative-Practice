import MapView, {PROVIDER_GOOGLE, Marker} from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import React, {Component} from 'react';
import {View, StyleSheet, TouchableOpacity,Dimensions, Text} from 'react-native';
import CurrentPoint from './current-point';
import Icon from 'react-native-ionicons';
const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    //  alignItems: 'flex-end',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
});
const screenWidth = Dimensions.get('window').width;
const screenHeight = Dimensions.get('window').height;
export default class ViewMap extends Component {
  state = {
    isCurrent: false,
    lastLat: 9.749997,
    lastLong: 80.083333,
    latitudeDelta:  0.5,
    longitudeDelta: 0.5, 
  };
  
  handleRender = (status) => {
    this.setState({
      isCurrent: !status,
    });
  };
  renderLocation = () => {
    console.log('lt : ' + this.state.latitudeDelta + ' lg : ' + this.state.longitudeDelta);

    return (
      <MapView
        provider={PROVIDER_GOOGLE} // remove if not using Google Maps
        ref= {map => this._map = map}
        style={styles.map}
        showsUserLocation={true}
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
  };
  onPressZoomIn() {
    let ltDelta= this.state.latitudeDelta / 2;
    let lgDelta = this.state.longitudeDelta / 2;
    this.setState({
      latitudeDelta:ltDelta,
      longitudeDelta:lgDelta
    })
    this._map.animateToRegion({
        latitude: this.state.lastLat,
          longitude: this.state.lastLong,
          latitudeDelta: this.state.latitudeDelta,
          longitudeDelta:this.state.longitudeDelta,
    }, 100);
    
  }
  
  onPressZoomOut() {
    let ltDelta= this.state.latitudeDelta * 2;
    let lgDelta = this.state.longitudeDelta * 2;
    this.setState({
      latitudeDelta:ltDelta,
      longitudeDelta:lgDelta
    })
    // let region = {
    //   latitude: this.state.lastLat,
    //   longitude: this.state.lastLong,
    //   ltDelta: this.state.latitudeDelta / 10,
    //   lgDelta: this.state.longitudeDelta / 10,
    // };
    // this.setState = {
    //   latitudeDelta: region.ltDelta,
    //   longitudeDelta: region.lgDelta,
    //   lastLat: region.latitude,
    //   lastLong: region.longitude,
    // };
    // this._map.animateToRegion(region, 100);
  }
  
  render() {
    console.log('lt : ' + this.state.latitudeDelta + ' lg : ' + this.state.longitudeDelta);
    // console.log('lt : ' + region.ltDelta + ' lg : ' + region.lgDelta);
    return (
      <View style={styles.container}>
        {!this.state.isCurrent ? (
          <>{this.renderLocation()}</>
        ) : (
          <CurrentPoint />
        )}
        <View style={{marginTop: 400}}>
          <TouchableOpacity onPress={() => this.handleRender(this.state.isCurrent)}>
            <Icon name="locate" size={48} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.zoomIn}
            onPress={() => {
              this.onPressZoomIn();
            }}>
            <Icon name="add-circle-outline" size={48} color="#444" />
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.zoomOut}
            onPress={() => {
              this.onPressZoomOut();
            }}>
            <Icon name="remove-circle-outline" size={48} color="#444" />
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
