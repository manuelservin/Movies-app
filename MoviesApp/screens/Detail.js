import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  Image,
  ScrollView,
  ActivityIndicator,
  Dimensions,
  Text,
  View,
  Modal,
} from 'react-native';
import VideoPlayer from 'react-native-video-controls';
import {getMovieDetail} from '../services/services';
import Error from '../components/Error';
import StarRating from 'react-native-star-rating';
import dateFormat from 'dateformat';
import Play from '../components/Play';
import Video from '../components/Video';

const height = Dimensions.get('screen').height;

const Detail = ({route, navigation}) => {
  const {movieId} = route.params;
  const [movie, setMovie] = useState();
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);
  const [modalVisible, setModalVisible] = useState(false);
  const prefix = 'https://image.tmdb.org/t/p/w500';
  const videoShown = () => {
    setModalVisible(!modalVisible);
  };

  useEffect(() => {
    getMovieDetail(movieId)
      .then(movie => {
        setMovie(movie);
        setLoaded(true);
      })
      .catch(err => setError(err));
  }, []);

  return (
    <>
      {loaded && !error && (
        <>
          <ScrollView>
            <Image
              resizeMode="cover"
              style={styles.image}
              source={
                movie.poster_path
                  ? {uri: prefix + movie.poster_path}
                  : placeholderImage
              }
            />
            <View style={styles.container}>
              <View style={styles.playButton}>
                <Play handlePress={() => setModalVisible(!modalVisible)} />
              </View>
              <Text style={styles.title}>{movie.title}</Text>
              {movie.genres && (
                <View style={styles.genresContainer}>
                  {movie.genres.map(genre => (
                    <Text style={styles.genres} key={genre.id}>
                      {genre.name}
                    </Text>
                  ))}
                </View>
              )}
              <Text>{}</Text>
              <StarRating
                disabled={true}
                fullStarColor="gold"
                starSize={30}
                maxStars={5}
                rating={movie.vote_average / 2}
              />
              <Text style={styles.overview}>{movie.overview}</Text>
              <Text style={styles.release}>
                Release date: {dateFormat(movie.release_date, 'mmmm dS, yyyy')}
              </Text>
            </View>
          </ScrollView>
          <Modal
            supportedOrientations={['portrait', 'landscape']}
            animationType="slide"
            visible={modalVisible}>
            <Video handleClose={videoShown} />
          </Modal>
        </>
      )}
      {!loaded && <ActivityIndicator size="large" />}
      {error && <Error />}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  image: {
    height: height / 2.5,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 10,
    marginBottom: 10,
  },
  genresContainer: {
    marginTop: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  genres: {
    marginRight: 10,
    fontWeight: 'bold',
  },
  overview: {
    padding: 15,
  },
  releases: {
    fontWeight: 'bold',
  },
  playButton: {
    position: 'absolute',
    top: -40,
    right: 30,
  },
});

export default Detail;
