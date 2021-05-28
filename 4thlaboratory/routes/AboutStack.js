import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { View, Image, TouchableOpacity, StyleSheet } from 'react-native';

import About from '../screens/About';

const HamburgerIcon = (props) => {
  const toggleDrawer = () => {
    props.navigationProps.toggleDrawer();
  }

  return (
    <View style={{ flexDirection: 'row'}}>
      <TouchableOpacity onPress={toggleDrawer} >
        <Image source={{ uri: 'https://reactnativecode.com/wp-content/uploads/2018/04/hamburger_icon.png' }} 
        style ={{ width: 30, height: 30, marginLeft: 10 }} />
      </TouchableOpacity>
    </View>

  );
}

const Stack = createStackNavigator();

const AboutStack = ({navigation}) => {
  return (
      <Stack.Navigator>
        <Stack.Screen name="About" 
        component={About} 
        options={{
          title: 'About',
          headerLeft: () => ( <HamburgerIcon navigationProps=   {navigation} />),
          headerStyle: {
            backgroundColor: '#a9a9a9',
          }
        }}/>
      </Stack.Navigator>
  );
}
export default AboutStack;
