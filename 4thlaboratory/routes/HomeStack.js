import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, TouchableOpacity, StyleSheet, SafeAreaView, ImageBackground, ScrollView } from 'react-native';


import Home from '../screens/Home';
import Profile from '../screens/Profile';

const HamburgerIcon = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }

  return (
    <View style={{ flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer} >
        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }} 
        style ={{ width: 30, height: 30, marginLeft: 10, marginRight: 10 }} />
      </TouchableOpacity>
    </View>

  );
}



const Stack = createStackNavigator();

const HomeStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="Home" 
        component={Home} 
        options={{
          title: 'Home',
          headerLeft: () => ( <HamburgerIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: '#a9a9a9',
          },
        }} />
        <Stack.Screen name="Profile" component={Profile} 
        options={{
          title: 'Profile',
          headerRight: () => ( <HamburgerIcon navigationProps={navigation} />),
          headerStyle: {
            backgroundColor: '#a9a9a9',
          }
        }}
        />
      </Stack.Navigator>

  );
}
export default HomeStack;
