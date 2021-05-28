//Ersando, Raymond
//Orillaza, Raven Klisser
//Kasaysayan, Mark Angelo
//Daquiz, Ernani

import React, {useState} from 'react';
import { View, Text, Button, StyleSheet, TextInput, Alert} from 'react-native';

export default function App(){
  const [enteredName, setEnteredName]= useState('');
  const[peanutName, setPeanutName]= useState([]);
  const nameInputHandler = (enteredText) =>{
    setEnteredName(enteredText);

  };
  const addNameHandler = () => {

    if(enteredName == ''){
      alert('Textbox must be filled');

    }
    else{
      setPeanutName([...peanutName, enteredName]);
      setEnteredName(''); 
    }
    
    
  }

  return (
    <View style= {styles.screen}>
      <View style= {styles.inputPeanut}>
        <TextInput
        title= "addText"
         placeholder= "Enter item" style= {styles.input} onChangeText={nameInputHandler}
         value={enteredName} />
        <Button title="ADD" onPress={addNameHandler}/>

      </View>
      <View>
        {peanutName.map((item) => <View style ={styles.listItem}><Text key={item}> {item}</Text></View>)}

      </View>
    </View>



  );
}
 
const styles= StyleSheet.create({

  screen:{
    flex: 1,
    padding: 24,
    backgroundColor: '#ecf0f1'

  },

  inputPeanut: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    
  },
  input: {
     width: '80%',
     padding: 10,
     borderWidth: 3.5,
     borderColor: 'green'
  },
  listItem:{
    padding: 10,
    marginVertical: 5.5,
    backgroundColor: 'gray',
    borderColor: 'black',
    borderWidth: 2
  }

});
