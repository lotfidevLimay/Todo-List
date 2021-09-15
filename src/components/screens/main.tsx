import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {
  View,
  KeyboardAvoidingView,
  ScrollView,
  StyleSheet,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {
  addTodo,
  getLocalTodosAction,
  removeTodo,
  updateInput,
} from '../../store/actions';

import AddInput from '../atoms/addTodo';
import DisplayTodo from '../atoms/displayTodo';

const selector = state => ({
  addInputText: state.addInputText,
  todos: state.todos,
});
const MainScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const {addInputText, todos} = useSelector(selector);
  const onInputChange = text => dispatch(updateInput(text));
  const deleteTodo = id => dispatch(removeTodo(id));
  const onPressAddTodo = () => {
    Keyboard.dismiss();
    dispatch(addTodo(addInputText));
  };
  const redirectToEditScreen = id => navigation.navigate('Edit/View', {id});

  useEffect(() => {
    dispatch(getLocalTodosAction());
  }, []);

  useEffect(() => {
    AsyncStorage.setItem('@todos', JSON.stringify(todos));
  }, [todos]);

  return (
    <KeyboardAvoidingView
      style={styles.mainView}
      behavior={'padding'}
      keyboardVerticalOffset={70}>
      <View style={styles.container}>
        <ScrollView>
          {todos.map(todo => (
            <DisplayTodo
              key={todo.id}
              id={todo.id}
              text={todo.text}
              onPressDelete={deleteTodo}
              onPressEdit={redirectToEditScreen}
            />
          ))}
        </ScrollView>
        <View style={styles.inputContainer}>
          <AddInput
            value={addInputText}
            onChangeText={onInputChange}
            onSubmit={onPressAddTodo}
          />
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  mainView: {
    flexGrow: 1,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgb(255, 190, 176)',
    padding: 10,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  },
  inputContainer: {
    marginTop: 10,
  },
});

export default MainScreen;
