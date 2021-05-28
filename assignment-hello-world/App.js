//BSCS 3-1
//1ST ACTIVITY
//DAQUIZ, ERNANI
//ERSANDO, RAYMOND
//KASAYSAYAN, MARK ANGELO
//ORILLAZA, RAVEN

import React from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Image source={{ uri: 'https://media.istockphoto.com/photos/cardboard-with-words-hello-world-on-laptop-keyboard-picture-id576544696?k=6&m=576544696&s=612x612&w=0&h=6pl8weAZ3gINnqxe2hWiS6rlLTpZS-0mn6DIogFJp0M=' }} style={styles.logo} />
      <Text style={styles.instructions}>
      </Text>

      <TouchableOpacity
        onPress={() => alert('Hello World :)')}
        style={{ backgroundColor: '' }}>
        <Text style={{ fontSize: 20, color: 'black' }}> -> PRESS HERE </Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    width: 325,
    height: 200,
  },
});
