import React, { useState, useEffect} from "react";
import{ ActivityIndicator, ImageBackground, Button, View, Text, StyleSheet, TouchableOpacity, Image, } from 'react-native';

const Home= ({navigation}) => {
  const [data, setData] = useState([]);
  const [isLoading, setLoading] = useState(true);

  

  function fetchRandomData(){
    
    setLoading(true);
    
    
    fetch('https://randomuser.me/api/')
    .then((response) => response.json())
    .then((json) => {
      setData(json.results[0]);
      console.log(json.results[0]);
    })
    .catch((error) => console.log(error))
    .finally(() => setLoading(false));

  }
  
  const onPressData = () => {
   fetchRandomData();

 
  }
   useEffect(() => { 
    fetchRandomData(); 
}, []);

return(
    <View style={styles.container}>
    <ImageBackground source={require('../assets/black.jpg')}
  style={styles.backgroundContainer}>
  
      
        <View style={styles.container}>
        { isLoading ? <ActivityIndicator size="large" color= "maroon"/> : (
          <View>
            <TouchableOpacity onPress={() => navigation.navigate('Profile', data)}>
                
                <Image style= {styles.img} source={{uri: data.picture.large}} />
           
            </TouchableOpacity>  
            </View>
        )}
        
        { isLoading ? true : (
                <Text style={styles.randomz}>{data.name.first} {data.name.last}</Text>
        )}

        { isLoading ? true: (
            <Button title ="Random User" color= "maroon" onPress={() => {onPressData();}  } />
        )}
        <Text> {'\n'} </Text>
        <Button title= "Group Members" color= "maroon" onPress={()=>navigation.navigate('Members')}/>
        </View>
        </ImageBackground>
        </View>

  
  ); 
}


export default Home;

const styles= StyleSheet.create (

  {
   container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0

    
  },
   img:{
    width:300,
    height: 250,
    marginHorizontal:100,
    marginVertical: 15,
    marginBottom: 100,
    resizeMode: 'cover'
    
  },
  randomz:{

    padding: 5,
    color: 'white',
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: -100

  },
  backgroundContainer:{

    flexDirection: 'column',
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    backgroundColor: '#889DAD',
    justifyContent: 'flex-start',
    position: 'absolute'
  },
  


  }
)
   

