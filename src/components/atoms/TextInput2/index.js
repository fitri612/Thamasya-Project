import React from 'react';
import {StyleSheet, Text, View, TextInput as TextInputRN} from 'react-native';

const TextInput2 = ({label, placeholder, ...restProps}) => {
  return (
    <View>
      <Text style={styles.label}>{label}</Text>
      <TextInputRN
        style={styles.input}
        placeholder={placeholder}
        {...restProps}
      />
    </View>
  );
};

export default TextInput2;

const styles = StyleSheet.create({
  label: {
    fontSize: 14,
    fontFamily: 'Raleway-Regular',
    color: '#7D8797',
    marginBottom: 15,
  },
  input: {
    borderWidth: 0.5,
    borderColor: '#DEDEDE',
    borderRadius: 10,
    padding: 15,
  },
});
