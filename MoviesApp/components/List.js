import React from 'react';
import {FlatList, Text, View, StyleSheet} from 'react-native';
import Card from './Card';
import PropTypes from 'prop-types';

const propTypes = {
  title: PropTypes.object,
  content: PropTypes.array,
};
const List = ({navigation, title, content}) => {
  return (
    <View style={styles.list}>
      <View>
        <Text style={styles.text}>{title}</Text>
      </View>
      <View>
        <FlatList
          data={content}
          renderItem={({item}) => <Card navigation={navigation} item={item} />}
          horizontal={true}></FlatList>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginTop: 25,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    paddingBottom: 20,
  },
});

List.propTypes = propTypes;
export default List;
