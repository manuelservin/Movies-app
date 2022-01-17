import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PropTypes from 'prop-types';

const propTypes = {
  errorText1: PropTypes.string,
  errorText2: PropTypes.string,
};

const defaultValues = {
  errorText1: 'Oops! Something went wrong.',
  errorText2: 'Make sure you are online and restart the App',
};
const Error = ({errorText1, errorText2}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.error}>{errorText1}</Text>
      <Text style={styles.error}>{errorText2}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  error: {
    fontWeight: 'bold',
  },
});

Error.propTypes = propTypes;
Error.defaultValues = defaultValues;

export default Error;
