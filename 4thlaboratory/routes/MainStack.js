import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { View, Image, StyleSheet, SafeAreaView, ImageBackground, ScrollView } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Sidebar from './ContentDrawer';

import HomeStack from './HomeStack';
import AboutStack from './AboutStack';



const Drawer = createDrawerNavigator();

const MainNavigator = ({navigation}) => {
  return (
    <NavigationContainer>
      <Drawer.Navigator drawerContent={props=><Sidebar {...props}/>}>
        <Drawer.Screen color="#f5f5f5" name="Home" component={ HomeStack}
         options={{
          title: 'Home',
          drawerIcon: ({ focused, size }) => (
            <Ionicons name="ios-home" size={28} color={focused ? '##87cefa' : '#ccc'} />), }} />
        <Drawer.Screen name="About" component={ AboutStack} 
          options={{
            title: 'About',
            drawerIcon: ({ focused, size }) => (
              <Ionicons name="ios-book" size={28} color={focused ? '#87cefa' : '#ccc'} />), }} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
export default MainNavigator;
