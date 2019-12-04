import React , {Component} from 'react'
import {View,TextInput,Text,StyleSheet} from 'react-native'

export default class AddTodos extends Component{
    state ={
        content:''
    }
    render(){
        return(
            <View >
                <TextInput
                placeholder="Enter New Todo"
                style={styles.textInputStyle}
                onChangeText={(content) => 
                    this.setState({content})}
                onSubmitEditing={(e) => {
                    e.preventDefault();
                    this.props.addTodo(this.state);
                    this.setState({
                        content:''
                    })
                  }}
                value={this.state.content}
                />

                <View style={styles.textInputBottomLine}/>
                
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      
    },
    textInputBottomLine: {
        height: 1,
        backgroundColor:  '#E6E7E9',
      },
      textInputStyle: {
        height: 40,
        fontSize: 16,
        paddingLeft:5,
        color: 'black',
      }
    })