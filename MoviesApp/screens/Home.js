import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {getPopularMovies, getUpcomingMovies} from '../services/services';
import {SliderBox} from 'react-native-image-slider-box';

const dimensions = Dimensions.get('screen');
const Home = () => {
  const [moviesImages, setMoviesImages] = useState('');
  const [error, setError] = useState(false);

  console.log(dimensions);

  useEffect(() => {
    getUpcomingMovies()
      .then(movies => {
        const moviesImagesArray = [];
        movies.forEach(movie => {
          moviesImagesArray.push(
            'https://image.tmdb.org/t/p/w500' + movie.poster_path,
          );
        });
        setMoviesImages(moviesImagesArray);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      });
    getPopularMovies()
      .then(movies => {})
      .catch(err => {
        console.log(err);
        setError(err);
      });
  }, []);
  return (
    <View style={styles.sliderContainer}>
      <SliderBox
        images={moviesImages}
        sliderBoxHeight={dimensions.height / 1.5}
        autoplay={true}
        circleLoop={true}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  sliderContainer: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

export default Home;
