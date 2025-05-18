import { useState } from 'react';
import { StyleSheet, FlatList, View, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import Header from './components/header';
import TodoItem from './components/todoitem';
import AddTodo from './components/addTodo';

export default function App() {
  const [todos, setTodos] = useState([
    { id: 1, title: 'Buy groceries' },
    { id: 2, title: 'Walk the dog' },
    { id: 3, title: 'Finish project report' },
    { id: 4, title: 'Call Mom' },
    { id: 5, title: 'Read a book' },
    { id: 6, title: 'Workout' },
    { id: 7, title: 'Clean the house' },
    { id: 8, title: 'Pay bills' },
    { id: 9, title: 'Check emails' },
    { id: 10, title: 'Talk to Neema' }
  ]);


  const pressHandler = (id) =>{
    setTodos((prevTodos)=>{
      return prevTodos.filter( todo => todo.id !== id)
    })
  }

  const submitHandler = (text) => {

    if(text.trim() === ""){
      Alert.alert('OOPS',"Cannot add empty task",[
        {text: 'OK'}
      ])
    } else{
      setTodos((prevTodos) =>{
      return[
        {title: text, id: Math.random().toString()},
        ...prevTodos
      ];
    });
    }
    
  };


  return (
    <TouchableWithoutFeedback onPress={ ()=>{
      Keyboard.dismiss();
    }}>
      <View style={styles.container}>
        <Header/>
        <View style={styles.content}> 
          <AddTodo submitHandler={submitHandler}/>

          <View style={styles.list}>
            <FlatList
            data={todos}
            renderItem={({item})=>(
              <TodoItem item={item} pressHandler={pressHandler}/>
            )}/>
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:'#fff'
  },
  content:{
    padding:40,
  },
  list:{
    marginTop:30
  }
  
});
