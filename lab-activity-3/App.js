//Raven Klisser Orillaza
//Raymond Ersando
//Mark Angelo Kasaysayan
//Ernani Daquiz
import React, { useState } from 'react';
import { View, Button, StyleSheet, Text, Image } from 'react-native';

import Second from './components/Second';
export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <View style={styles.screen}>
      <Image
        style={styles.netflix}
        source={{
          uri:
            'https://cdn.vox-cdn.com/thumbor/AwKSiDyDnwy_qoVdLPyoRPUPo00=/39x0:3111x2048/1400x1400/filters:focal(39x0:3111x2048):format(png)/cdn.vox-cdn.com/uploads/chorus_image/image/49901753/netflixlogo.0.0.png',
        }}
      />
      <Text style={styles.paragraph}>
        NETFLIX {'\n\n'}
        <Text style={styles.lacasa}>La Casa de Papel {'\n'}</Text>
      </Text>
      <Button
        title="Enter"
        color="maroon"
        onPress={() => setIsModalOpen(true)}
      />
      <Second visible={isModalOpen} onClose={() => setIsModalOpen(false)} />
      <Text> {'\n'} </Text>

      <Image
        style={styles.mask}
        source={{
          uri:
            'https://cdnb.artstation.com/p/assets/images/images/026/082/919/large/sudip-bhatt-main-hd.jpg?1587825764',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    padding: 100,
    backgroundColor: 'black',
  },
  netflix: {
    marginLeft: 30,
    marginTop: -20,
    width: 100,
    height: 150,
    marginVertical: 20,
  },

  paragraph: {
    margin: -5,
    marginTop: -10,
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'maroon',
  },
  lacasa: {
    paddingHorizontal: -50,
    marginVertical: 50,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
  },
  mask: {
    marginVertical: -10,
    marginHorizontal: -102,
    width: 360,
    height: 175,
  },
});
