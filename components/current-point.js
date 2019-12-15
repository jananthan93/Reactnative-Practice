import React, { Component } from 'react'
import MapView, { PROVIDER_GOOGLE, Marker } from 'react-native-maps'; // remove PROVIDER_GOOGLE import if not using Google Maps
import {request,PERMISSIONS,RESULTS} from 'react-native-permissions';
    //import react in our code. 
    import {View, Text,  StyleSheet, Image } from 'react-native';
    //import all the components we are going to use.
    import Geolocation from '@react-native-community/geolocation';
     
     
    export default class CurrentPoint extends Component {
      state = {
        currentLongitude: 80.029975,//Initial Longitude
        currentLatitude:  9.69332,//Initial Latitude
     }
     
     componentDidMount = () => {
      //Checking for the permission just after component loaded
      this.requestLocationPermission();
     }

     requestLocationPermission = async () =>{
      try {
        const granted = await request(
          PERMISSIONS.ANDROID.ACCESS_FINE_LOCATION,{
            'title': 'Location Access Required',
            'message': 'This App needs to Access your location'
          })
          console.log('Android' +granted)
        if (granted === "granted") {
          //To Check, If Permission is granted
          this.callLocation();
        } else {
          alert("Permission Denied");
        }
      } catch (err) {
        alert("err",err);
        console.warn(err)
      }
    }
     callLocation(){
      //alert("callLocation Called");
        Geolocation.getCurrentPosition(
          // Will give you the current location
           (position) => {
              const currentLongitude = parseFloat(JSON.stringify(position.coords.longitude));
              //getting the Longitude from the location json
              const currentLatitude = parseFloat(JSON.stringify(position.coords.latitude));
              // getting the Latitude from the location json
              this.setState({ currentLongitude:currentLongitude });
              //Setting state Longitude to re re-render the Longitude Text
              this.setState({ currentLatitude:currentLatitude });
              // Setting state Latitude to re re-render the Longitude Text
           },
           (error) => alert(error.message),
           { enableHighAccuracy: true, timeout: 20000, maximumAge: 1000 }
        );
        this.watchID = Geolocation.watchPosition((position) => {
          //Will give you the location on location change
            console.log(position);
            const currentLongitude = parseFloat(JSON.stringify(position.coords.longitude)*1);
            //getting the Longitude from the location json
            const currentLatitude = parseFloat(JSON.stringify(position.coords.latitude)*1);
            //getting the Latitude from the location json
           this.setState({ currentLongitude:currentLongitude });
           //Setting state Longitude to re re-render the Longitude Text
           this.setState({ currentLatitude:currentLatitude });
           //Setting state Latitude to re re-render the Longitude Text
        });
     }
     componentWillUnmount = () => {
        Geolocation.clearWatch(this.watchID);
     }
     render() {
       const coordinate ={latitude: this.state.currentLatitude,
        longitude: this.state.currentLongitude}
        //  this.props.handlePosition({latitude:this.state.currentLatitude,longitude: this.state.currentLongitude},true)
        return (
           <>
          <MapView
          ref= {map => this._map = map}
          provider={PROVIDER_GOOGLE} // remove if not using Google Maps
          style={styles.map}
          showsUserLocation={true}
            zoomEnabled={true}
            zoomControlEnabled={true}
            initialRegion={{
              latitude: this.state.currentLatitude,
              longitude: this.state.currentLongitude,
              latitudeDelta:  0.0922,
              longitudeDelta:  0.0421,
            }}>
          {/* <Marker coordinate={coordinate}></Marker> */}
        </MapView>
           </>
        )
     }
    }
    const styles = StyleSheet.create({
        container: {
          ...StyleSheet.absoluteFillObject,
          height: 400,
          width: 400,
          justifyContent: 'flex-end',
          alignItems: 'center',
        },
        map: {
          ...StyleSheet.absoluteFillObject,
        },
       });

