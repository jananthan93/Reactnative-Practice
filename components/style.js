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
      height: 320,
      marginTop: 30,
    },
    formContainer: {
      marginTop: 10,
      paddingHorizontal: 0,
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
      width: 100,
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 30,
      borderRadius: 10,
      borderWidth: 2,
      borderColor: '#F72B2B',
    },
    buttonText: {
      fontSize: 17,
      color: '#F72B2B',
      fontWeight: 'bold',
    },
    buttonSignup: {
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 10,
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