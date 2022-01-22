import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Navbar from './Navbar';
import Home from '../screens/Home';
import Detail from '../screens/Detail';
import Search from '../screens/Search';
const Stack = createNativeStackNavigator();

const MainNavigation = () => {
  return (
    <Stack.Navigator headerMode={'screen'} initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTransparent: true,
          headerShadowVisible: false,
          position: 'absolute',
          headerStyle: {
            backgroundColor: 'transparent',
          },
          header: ({navigation}) => (
            <Navbar navigation={navigation} main={true} />
          ),
        }}
      />
      <Stack.Screen
        name="Detail"
        component={Detail}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar navigation={navigation} main={false} />
          ),
        }}
      />
      <Stack.Screen
        name="search"
        component={Search}
        options={{
          headerTransparent: true,
          header: ({navigation}) => (
            <Navbar navigation={navigation} main={false} />
          ),
        }}
      />
    </Stack.Navigator>
  );
};

export default MainNavigation;
