import React from 'react';
import {IconOutline} from '@ant-design/icons-react-native';
import {TextInput, StyleSheet, View, TouchableOpacity} from 'react-native';

interface IAddTodoInputProps {
  value: string;
  onChangeText: (test: string) => void;
  onSubmit: () => void;
}
const AddTodoInput = React.memo(
  ({value = '', onChangeText, onSubmit}: IAddTodoInputProps) => {
    return (
      <View style={styles.container}>
        <View style={styles.inputTextContainer}>
          <TextInput
            style={styles.input}
            placeholder="Add TODO"
            value={value}
            onChangeText={onChangeText}
            multiline={true}
          />
        </View>
        <TouchableOpacity style={styles.submitButton} onPress={onSubmit}>
          <IconOutline name="plus" size={24} color="midnightblue" />
        </TouchableOpacity>
      </View>
    );
  },
);

export default AddTodoInput;

const styles = StyleSheet.create({
  input: {
    fontSize: 20,
    backgroundColor: 'whitesmoke',
    flex: 1,
    marginRight: 20,
    padding: 10,
    marginBottom: 20,
    borderRadius: 10,
  },
  container: {
    flexDirection: 'row',
  },
  inputTextContainer: {
    flexDirection: 'row',
    borderRadius: 10,
    flex: 1,
  },
  submitButton: {
    width: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
    marginBottom: 20,
    borderRadius: 50,
  },
});
