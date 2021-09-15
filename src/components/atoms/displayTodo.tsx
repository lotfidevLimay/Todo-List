import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {IconOutline} from '@ant-design/icons-react-native';

const hitslop = {top: 20, bottom: 20};

interface IDisplayTodoProps {
  text: string;
  onPressDelete: (id: IDisplayTodoProps['id']) => void;
  onPressEdit: (id: IDisplayTodoProps['id']) => void;
  id?: string | number;
}
const DisplayTodo = React.memo(
  ({text, onPressDelete, id, onPressEdit}: IDisplayTodoProps) => {
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.textContainer}
          hitSlop={hitslop}
          onPress={() => onPressEdit(id)}>
          <Text numberOfLines={1} style={styles.text}>
            {text}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.icons}
          onPress={() => onPressDelete(id)}>
          <IconOutline name="delete" size={20} color="midnightblue" />
        </TouchableOpacity>
      </View>
    );
  },
);

export default DisplayTodo;

const styles = StyleSheet.create({
  container: {
    borderRadius: 10,
    backgroundColor: 'whitesmoke',
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  text: {
    fontSize: 20,
  },
  textContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  icons: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 35,
    height: 35,
    borderRadius: 100,
    borderColor: 'midnightblue',
    borderWidth: 1,
  },
});
