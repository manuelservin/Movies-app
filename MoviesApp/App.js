import React, {useEffect, useState} from 'react';
import {Text, View} from 'react-native';
import {getPopularMovies} from './services/services';

const App = () => {
  const [movies, setMovies] = useState('');
  const [error, setError] = useState(false);

  useEffect(() => {
    getPopularMovies()
      .then(movies => {
        setMovies(movies);
      })
      .catch(err => {
        console.log(err);
        setError(err);
      });
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      {error && <Text style={{color: 'red'}}>error</Text>}
      <Text>{movies && movies.map(m => m.original_title)}</Text>
    </View>
  );
};
export default App;
