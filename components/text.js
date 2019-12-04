import React, { Component } from 'react';
import {Text,StyleSheet} from 'react-native';
import * as theme from './theme';

export default class Typography extends Component {
    render() {
        const {
            style,
            h1,
            h2,
            h3,
            body,
            title,
            caption,
            info,
            small,
            right,
            bold,
            semibold,
            light,
            color,
            //color shortcuts
            accent,
            secondary,
            primary,
            tertiary,
            black,
            white,
            gray,
            gray2,
            children, 
            ...props
        } = this.props;
        const textStyles=[
            styles.text,
            style,
            // fontsizes
            h1 && styles.h1,  
            h2 && styles.h2, 
            h3 && styles.h3, 
            body && styles.body, 
            title && styles.title, 
            caption && styles.caption, 
            info && styles.info, 
            small && styles.small,
            //styling
            right && styles.right,
            bold && styles.bold,
            semibold && styles.semibold,
            light  && styles.light,
            color && styles[color],//pre defined styles color for background color
            color && styles[color] && {color}, //custom backgroundColor
            // color shortcuts
            accent && styles.accent,
            secondary && styles.secondary,
            primary && styles.primary,
            tertiary && styles.tertiary,
            black && styles.black,
            white && styles.white,
            gray && styles.gray,
            gray2 && styles.gray2,
        ]
        return (
            <Text style={textStyles}{...props}>
                {children}
            </Text>
        )
    }
}
const styles = StyleSheet.create({
  text:{
    //   fontFamily:Montserrat-Regular
    fontSize:theme.sizes.font,
    color:theme.colors.black
  },
  //positions
  center:{textAlign:'center'},
  right:{textAlign:'left'},
  //variations
  bold:{
      fontWeight:'bold',
    //   fontFamily:Montserrat-bold
    },
  semibold:{
    fontWeight:'500',
  //   fontFamily:Montserrat-SemiBold
  },
  light:{
    fontWeight:'200',
  //   fontFamily:Montserrat-Light
  },

  
  //fonts
  h1:theme.fonts.h1,
  h2:theme.fonts.h2,
  h3:theme.fonts.h3,
  body:theme.fonts.body,
  title:theme.fonts.title,
  caption:theme.fonts.caption,
  info:theme.fonts.info,
  small:theme.fonts.small,

  //colors
  accent:{color:theme.colors.accent},
  secondary:{ color:theme.colors.secondary},
  primary:{color:theme.colors.primary},
  tertiary:{color:theme.colors.tertiary},
  black:{color:theme.colors.black},
  white:{color:theme.colors.white},
  gray:{color:theme.colors.gray},
  gray2:{color:theme.colors.gray2},
});
