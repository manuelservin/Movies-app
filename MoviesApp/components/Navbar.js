import React from 'react';
import {
  View,
  TouchableOpacity,
  Image,
  StyleSheet,
  SafeAreaView,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import PropTypes from 'prop-types';
import Colors from '../Theme/Colors';

const propTypes = {
  main: PropTypes.bool,
};
const defaultProps = {
  main: false,
};
const Navbar = ({navigation, main}) => {
  return (
    <SafeAreaView>
      {main ? (
        <View style={styles.mainNab}>
          <Image
            style={styles.logo}
            source={require('../assets/images/movies.png')}
          />
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('search');
            }}>
            <Icon name={'search-outline'} size={30} color={Colors.white} />
          </TouchableOpacity>
        </View>
      ) : (
        <View>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Icon name={'chevron-back'} size={40} color={Colors.white} />
          </TouchableOpacity>
        </View>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  mainNab: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 10,
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
  },
});

Navbar.propTypes = propTypes;
Navbar.defaultProps = defaultProps;

export default Navbar;
