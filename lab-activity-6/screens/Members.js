import React from "react";
import{View,Text, StyleSheet,Button} from "react-native";

const Members= ({navigation}) => {
  

  return(
    <View style= {styles.container}>
    
      <Text style ={{color: 'white', fontSize: 20, fontWeight: 'bold'
            
            }}> Raven Klisser Orillaza </Text>
            <Text style ={{color: 'white', fontSize: 20, fontWeight: 'bold'
            
            }}> Mark Angelo Kasaysayan </Text>
            <Text style ={{color: 'white', fontSize: 20, fontWeight: 'bold'
            
            }}> Raymond Ersando </Text>
            <Text style ={{color: 'white', fontSize: 20, fontWeight: 'bold'
            
            }}> Ernani Daquiz </Text>
            <Text> {'\n'} </Text>
             <Text style ={{color: 'white', fontSize: 20, fontWeight: 'bold'
            
            }}> BSCS 3-1 </Text>

            <Text> {'\n\n'} </Text>
            
            <Button color="#696969" title= "Back" onPress={()=>navigation.goBack()}/>
      
      </View>
  );
}



export default Members;

const styles = StyleSheet.create (
    {
        container:
        {
            flex: 1,
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'black'
        },

    }
)
