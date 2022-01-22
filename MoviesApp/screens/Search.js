import React, {useState} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Card from '../components/Card';
import Error from '../components/Error';
import {SearchMovieTv} from '../services/services';

const Search = ({navigation}) => {
  const [text, onChangeText] = useState();
  const [searchResults, setSearchResults] = useState();
  const [error, setError] = useState(false);

  const handleSubmit = query => {
    console.log(query);
    Promise.all([SearchMovieTv(query, 'movie'), SearchMovieTv(query, 'tv')])

      .then(([movies, tv]) => {
        const data = [...movies, ...tv];
        setSearchResults(data);333
      })
      .catch(() => {
        setError(true);
      });
  };
  return (
    <>
      <SafeAreaView>
        <View style={styles.container}>
          <View style={styles.form}>
            <TextInput
              style={styles.input}
              onChangeText={onChangeText}
              value={text}
              placeholder={'Search Movies or TV Shows'}
            />
          </View>
          <TouchableOpacity onPress={() => handleSubmit(text)}>
            <Icon name={'search-outline'} size={30} color={'#000'} />
          </TouchableOpacity>
        </View>
        <View style={styles.searchValues}>
          {searchResults && searchResults.length > 0 && (
            <FlatList
              numColumns={3}
              data={searchResults}
              renderItem={({item}) => (
                <Card navigation={navigation} item={item} />
              )}
              keyExtractor={item => item.id}
            />
          )}
          {searchResults && searchResults.length === 0 && (
            <View style={[styles.empty, {paddingTop: 20}]}>
              <Text> No results matching </Text>
              <Text> Try different keywords </Text>
            </View>
          )}
          {!searchResults && (
            <View style={styles.empty}>
              <Text>Type something to start searching</Text>
            </View>
          )}
          {error && <Error />}
        </View>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  input: {
    borderRadius: 15,
    borderWidth: 0.5,
    height: 50,
    padding: 8,
  },
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  form: {
    flexBasis: 'auto',
    flexGrow: 1,
    paddingRight: 8,
  },
  searchValues: {
    padding: 5,
  },
});
export default Search;
