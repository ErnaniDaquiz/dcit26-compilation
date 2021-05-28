import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from '@react-navigation/drawer';
import { DrawerActions } from '@react-navigation/native';
import {
  View,
  Container,
  Content,
  Header,
  Right,
  Button,
  ListItem,
  Icon,
  Left,
  Thumbnail,
  Body,
  H3,
  Text,
  Image,
  TouchableOpacity,
  Footer
} from 'native-base';



function Sidebar({progress,...props}) {
  return (
    <Container style={{backgroundColor: '#a9a9a9'}} >
      <Header style={{backgroundColor: '#a9a9a9'}} />
      <Content>
        <ListItem thumbnail>
          <Body> 
            <H3>MENU</H3>
          </Body>
        </ListItem>
        <DrawerContentScrollView {...props}>
          <DrawerItemList {...props}/>
        </DrawerContentScrollView>
      </Content>
    </Container>
    
  );
}

export default Sidebar;


