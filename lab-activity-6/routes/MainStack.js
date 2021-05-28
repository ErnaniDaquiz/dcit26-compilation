import React from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from '../screens/Home';
import Profile from '../screens/Profile';
import Members from '../screens/Members';
const Stack = createStackNavigator();
const MainStack = () => {
  return(
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name= "Home" component= {Home} />
        <Stack.Screen name= "Profile" component= {Profile} />
        <Stack.Screen name= "Members" component= {Members} />
        </Stack.Navigator>
      </NavigationContainer>

  );
}

export default MainStack;