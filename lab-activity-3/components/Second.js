//Raven Klisser Orillaza
//Raymond Ersando
//Mark Angelo Kasaysayan
//Ernani Daquiz

import React from 'react';
import {View, Text, ScrollView, Image, Button, Modal, StyleSheet} from 'react-native';

const Second = props => {
  return (
    
    <View style={styles.container}>
    
    
    <Modal visible ={props.visible} animationType="fade"> 

        
        <ScrollView>
        <Text style= {styles.header}> MONEY HEIST</Text>
        <Text style ={styles.stripes}>
        </Text>
        
         
        
    <Image style= {styles.img} source= {{uri: 'https://filmdaily.co/wp-content/uploads/2020/04/money-heist-theory-lede.jpg'}} />
    <Text style ={styles.border}> </Text>
    <Text style={styles.paragraph}>
       {'\n'}The international Netflix phenomenon, Money Heist (also known as La Casa De Papel), is officially returning for a fifth and final season on Netflix later in 2021. Here’s the latest and everything we know so far about Money Heist season 5, including the path to renewal, its potential release date, production updates, and why we won’t be getting a season 6. {'\n\n'}

Money Heist currently holds the current record of being the most-watched non-English title on Netflix. Once again, for the fourth season, the series smashed all of the previous records it set. The fourth part of Money Heist managed to rack up an incredible 65 million views. {'\n\n'}

Before we move onto what we know about season 5, you should check out the accompanying documentary released on April 3rd, 2020, called Money Heist: The Phenomenon. It documents the meteoric rise of the series with guests including Ted Sarandos as well as much of the cast and the creators. It gave us some stunning insights including the fact the show was almost axed.{'\n\n'}

Part four of Money Heist was released on Netflix globally on April 3rd, 2020, and consisted of eight episodes.{'\n\n'}
In a statement posted to Netflix’s “See What’s Next” account (now labeled Netflix Queue), Alexa Pina said the following regarding the renewal: {'\n\n'}

“We’ve spent almost a year thinking about how to break up the band. How to put the Professor on the ropess. How to get into situations that are irreversible for many characters. The result is the fifth part of La Casa de Papel. The war reaches its most extreme and savage levels, but it is also the most epic and exciting season.” {'\n\n'}

Up until the official renewal in August 2020, Alex Pina and his team of writers and directors have repeatedly said several times that there are plans for a fifth part. {'\n\n'}

In May 2020 shortly after the release of White Lines, Pina spoke to Deadline, and yet again, all but confirmed the future of the series. The article states: {'\n\n'}

“Season 5 is coming, but Pina could not confirm any further series because “Netflix will put a bomb in my house.”” {'\n'}

    </Text>
    <Text style ={styles.stripes2}> </Text>
    <Text style ={styles.characters}> C H A R A C T E R S
     </Text>
     <Text style ={styles.stripes3}> </Text>
     
     <Image style={styles.prof} source = {{uri: 'https://static.displate.com/280x392/displate/2020-04-16/793a68f83364966e7946b90d35fe6eda_5bf5a94b20a262d403e12a53f6f4389f.jpg'}}
     />
     <Image style={styles.palermo} source= {{uri: 'https://static.displate.com/280x392/displate/2020-04-16/cbb3148ea33130fbab8864972f3e62c8_9f9c36ee5ba54400a1a720065193b6a0.jpg'}} />
     <Image style={styles.bogota} source= {{uri: 'https://i.pinimg.com/originals/10/4e/0b/104e0bf7277dfacb5e5dae4a9f1dbd66.jpg'}} />
     <Image style= {styles.rio} source = {{uri: 'https://i.pinimg.com/originals/9b/52/05/9b5205c133c204dfa23654a8c2f1618f.jpg'}} />
      <Image style= {styles.denver} source = {{uri: 'https://static.displate.com/857x1200/displate/2020-04-16/6e700908d034592601bf5e1b142a1fca_9c162d3a429ff46096dce5c3450ea7e3.jpg'}} />
      <Image style= {styles.nairobi} source= {{uri: 'https://static.displate.com/857x1200/displate/2020-04-16/321bc1fa9ca4809f8303079b3f890c30_63b10c770db26f275820dde34eb3c21a.jpg'}} />
      <Image style= {styles.tokyo} source= {{uri: 'https://static.displate.com/857x1200/displate/2020-04-16/e445ea2f45a298bcfa6a6551f8c4148b_a97b6117bfa23dee368252c55d7fc728.jpg'}} />
    <Text style= {styles.lastna} > </Text>

    <View style={styles.button}>
    <Button title= "Close" color= 'maroon' onPress={props.onClose} />
    </View>
    
    
    </ScrollView>
        </Modal> 
    
    
    </View>
    
    
  );
};
export default Second;

const styles= StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'black',
    
    
  },
  paragraph: {
    color: 'white',
    textAlign: 'justify',
    backgroundColor: 'black',
    marginTop: 10,
    
  },
  
  img:{
    width:360,
    height:200,
    marginHorizontal: 0,
    marginVertical: 15,
    marginBottom: 15
  },

  button:{
    flex: 1,
    alignSelf: 'center',
    borderRadius: 10,
    backgroundColor: 'maroon',
    width: 100
  },

  header:{
    
    textAlign: 'center',
    backgroundColor: 'maroon',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white'
    
  },
  stripes: {
    marginTop: 15,
    backgroundColor: 'maroon',

  },

  border: {
    backgroundColor: 'maroon',
    marginBottom: 5,

  },

  stripes2: {
    marginTop: 15,
    backgroundColor: 'black',
    marginBottom: 10,
    
  },
  characters:{

    backgroundColor: 'maroon',
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10

  },

  stripes3: {
    backgroundColor: 'black',
  },
  prof:{
    marginVertical: 0,
    marginHorizontal: 0,
    width: 180,
    height: 250,
    
  },
  palermo:{
    marginVertical: 0,
    marginHorizontal: 180,
    width: 180,
    height: 250,
  },
  bogota: {
    marginVertical: 0,
    marginHorizontal: 0,
    width: 180,
    height: 250,
  },
  rio: {
    marginVertical: 0,
    marginHorizontal: 180,
    width: 180,
    height: 250
  },
  denver: {
    marginVertical: 0,
    marginHorizontal: 0,
    width: 180,
    height: 250,
},
  nairobi: {
    marginVertical: 0,
    marginHorizontal: 180,
    width: 180,
    height: 250
  },
   tokyo: {
    marginVertical: 0,
    marginHorizontal: 0,
    width: 180,
    height: 250,
},

  lastna: {
    backgroundColor: 'black'
  }
  
});