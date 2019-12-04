/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {ListItem} from 'react-native-elements'
import CardView from 'react-native-cardview'
import Todos from './Todos'
import AddTodo from './AddTodo'
const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

export default class TodoList extends Component {
  state={
    todos:[]
  }
  deleteTodo = (id)  =>{
    const todos = this.state.todos.filter(todo =>{
      return todo.id !== id
    })
    this.setState({todos})
  }
  AddTodo= (todo) => {
    todo.id = Math.random();
    let todos = [...this.state.todos,todo];
    this.setState({
      todos
    })
  }
  render() {
    return (

          // <ListItem >
          // 
          // </ListItem >

      // <CardView 
      // cardElevation={2}
      // cardMaxElevation={2}
      // fontSize={36}
      // cornerRadius={5}>
      //     </CardView>
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
     <Todos todos={this.state.todos}  deleteTodo={this.deleteTodo}  />
     <AddTodo addTodo={this.AddTodo}/> 
    </View>
      
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
    
  },
  subtitleView: {
    flexDirection: 'row',
    paddingLeft: 10,
    paddingTop: 5,
    backgroundColor: '#ffffff',

  },
  Heading: {
    fontSize: 40,
    textAlign: 'center',
    margin: 10,
    color:'blue'
  },
 todoList:{
    flex:0,
    backgroundColor:'powderblue',
    color:'black',
    textAlign: 'center',
    color:'blue',
    fontSize: 40,
 }
  
});
