import React, { Component } from "react";
import {
  Platform,
  ScrollView,
  Text,
  View,
  Dimensions,
  Image,
  StyleSheet,
  TextInput,
  TouchableHighlight,
  Alert
} from "react-native";

import styles from "./styles";
const deviceWidth = Dimensions.get("window").width;
const deviceHeight = Dimensions.get("window").height;


export default class Login extends Component {
  static navigationOptions = {
    header:null
    }
      state = {
      usernameInputTxt: "",
      passwordInputTxt: ""
    };
  

    _checkLogin() {
      const { usernameInputTxt, passwordInputTxt } = this.state
      if (usernameInputTxt == "admin" && passwordInputTxt == "admin") {
          this.props.navigation.navigate('todo')
      } else {
          Alert.alert('Error', 'Username/Password mismatch', [{
              text: 'Okay'
          }])
      }
  }
  
  _submit() {
    if (this.state.usernameInputTxt === "") {
      Alert.alert("Failed", "Username is required"), [{ text: "Okay" }];
      return;
    }
    if (this.state.passwordInputTxt === "") {
      Alert.alert("Failed", "Password is required"), [{ text: "Okay" }];
      return;
    }
    
  }
  render() {
    return (
      <View style={styles.container}>
        <ScrollView>
          <View
            style={{
              height: deviceHeight,
              width: deviceWidth,
              alignItems: "center",
              justifyContent: "center"
            }}
          >
            <View style={styles.imageContainer}>
              <Image
                resizeMode="contain"
                source={require("./images/react.png")}
                style={styles.image}
              />
            </View>
            <View style={styles.formContainer}>
              <TextInput
                style={styles.textInputStyle}
                placeholder="User Name"
                returnKeyType={"next"}
                autoCapitalize="none"
                autoCorrect={false}
                onSubmitEditing={event => {
                  this.refs.passwordTextInputRef.focus();
                }}
                onChangeText={username =>
                  this.setState({ usernameInputTxt: username })
                }
                value={this.state.usernameInputTxt}
              />
              <View style={styles.textInputBottomLine} />
              <TextInput
                ref="passwordTextInputRef"
                style={[styles.textInputStyle, { marginTop: 10 }]}
                placeholder="Password"
                returnKeyType="go"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                onChangeText={passwordInputTxt =>
                  this.setState({ passwordInputTxt })
                }
                value={this.state.passwordInputTxt}
                onSubmitEditing={event => {
                  this._submit();
                }}
              />
              <View style={styles.textInputBottomLine} />
              <TouchableHighlight
                style={styles.button}
                underlayColor="transparent"
                onPress={() => this._checkLogin()}
              >
                <Text style={styles.buttonText}>Login</Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonSignup}
                underlayColor={"transparent"}
                onPress={() => {
                  Alert.alert("Info", "Forgot password clicked"),
                    [{ text: "Okay" }];
                }}
              >
                <Text style={[styles.buttonTextSignup, { color: "#6D6E70" }]}>
                  Forgot Password?
                </Text>
              </TouchableHighlight>

              <TouchableHighlight
                style={styles.buttonSignup}
                underlayColor={"transparent"}
                onPress={() => {
                  Alert.alert("Info", "Don't have account clicked"),
                    [{ text: "Okay" }];
                }}
              >
                <Text style={[styles.buttonTextSignup, { color: "#6D6E70" }]}>
                  Don't have account? Click here
                </Text>
              </TouchableHighlight>
            </View>
          </View>
        </ScrollView>
      </View>
    );
  }
}