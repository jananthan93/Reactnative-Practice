import {StyleSheet} from 'react-native'
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
    },
    imageContainer: {
      alignItems: 'center',
    },
    image: {
      width: 300,
      height: 120,
      marginTop: 30,
    },
    formContainer: {
      marginTop: 30,
      paddingHorizontal: 30,
    },
    textInputStyle: {
      height: 40,
      fontSize: 16,
      paddingLeft:5,
      color: 'black',
    },
    textInputBottomLine: {
      height: 1,
      backgroundColor:  '#E6E7E9',
    },
    button: {
      height: 40,
      width: 300,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 60,
      borderRadius: 5,
      borderWidth: 2,
      borderColor: '#057DC1',
    },
    buttonText: {
      fontSize: 17,
      color: '#057DC1',
      fontWeight: 'bold',
    },
    buttonSignup: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
    },
    buttonTextSignup: {
      fontSize: 12,
    },
    viewTextRights: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 75,
    },
    textRights: {
      fontSize: 10,
      color: '#A3BF3A',
    },
  });

export default styles;