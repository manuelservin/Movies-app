import React from 'react';
import {TouchableOpacity, StyleSheet, Image, Text} from 'react-native';
import PropTypes from 'prop-types';

const placeholderImage = require('../assets/images/poster-placeholder.png');

const propTypes = {
  item: PropTypes.object,
};
const Card = ({navigation, item}) => {
  const prefix = 'https://image.tmdb.org/t/p/w500';
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={() => navigation.navigate('Detail', {movieId: item.id})}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          item.poster_path ? {uri: prefix + item.poster_path} : placeholderImage
        }
      />
      {!item.poster_path && <Text style={styles.movieName}>{item.title}</Text>}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 5,
    position: 'relative',
    alignItems: 'center',
    height: 200,
    marginBottom: 8,
  },
  image: {
    height: 200,
    width: 120,
    borderRadius: 20,
  },
  movieName: {
    position: 'absolute',
    width: 100,
    top: 10,
    textAlign: 'center',
  },
});

Card.propTypes = propTypes;

export default Card;
