import React, {useEffect, useState} from 'react';
import {
  View,
  SafeAreaView,
  KeyboardAvoidingView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Keyboard,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updateTodo} from '../../store/actions';
import {IconOutline} from '@ant-design/icons-react-native';

const EditScreen = ({route, navigation}) => {
  const dispatch = useDispatch();
  const todo = useSelector(state =>
    state.todos.find(t => t.id === route.params.id),
  );
  const [localTodo, setLocalTodo] = useState('');
  const pressSave = () => {
    Keyboard.dismiss();
    dispatch(updateTodo(localTodo, todo.id));
  };

  useEffect(() => {
    if (!todo) {
      navigation.navigate('Todos');
    } else {
      setLocalTodo(todo.text);
    }
  }, [todo]);

  return (
    <KeyboardAvoidingView
      style={styles.mainView}
      behavior={'padding'}
      keyboardVerticalOffset={85}>
      <View style={styles.container}>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add TODO"
            value={localTodo}
            onChangeText={setLocalTodo}
            multiline={true}
          />
        </View>
        <SafeAreaView style={{alignItems: 'flex-end', marginRight: 20}}>
          <TouchableOpacity style={styles.iconContainer} onPress={pressSave}>
            <IconOutline name="save" size={24} color="midnightblue" />
          </TouchableOpacity>
        </SafeAreaView>
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
  iconContainer: {
    width: 50,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    borderRadius: 100,
  },
  input: {
    fontSize: 20,
    backgroundColor: 'whitesmoke',
    flex: 1,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  inputContainer: {
    flex: 1,
  },
});

export default EditScreen;
