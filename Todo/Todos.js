import React, {Component} from 'react';
import { View, Text,StyleSheet} from 'react-native';

const Todos = ({todos, deleteTodo}) =>{
    const todoList = todos.length ? (
        todos.map(todo => { 
            return(
                <View  key={todo.id}>
                    <Text onPress={()=>{deleteTodo(todo.id)}}>{todo.content}</Text>
                </View>
            )
        })
    ) : (
         <Text>You have no todo's left </Text>
    )
     return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
             {todoList}</View>
        );
    
}

export default  Todos;
const styles = StyleSheet.create({
   
   todoList:{
      flex:0,
      backgroundColor:'powderblue',
      color:'black',
      textAlign: 'center',
      color:'blue',
      fontSize: 40,
   }
    
  });