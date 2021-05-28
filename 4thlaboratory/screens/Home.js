import React from "react";
import {View, Image, Text, StyleSheet, Button, SafeAreaView, TouchableOpacity, ImageBackground, ScrollView} from "react-native";


const Home  =({navigation}) =>{
  return (
    <ScrollView >
      <View style={styles.container}>
       
          <View style={styles.imgOne}>
           <Image style={{ width: 400, height: 500, marginVertical: 15, marginTop: 20}} source={{ uri: 'https://i.pinimg.com/564x/b6/13/dd/b613dd8c0448ea39fba01ab5d2a3868a.jpg'}}/>
           <Text style={{justifyContent: 'center', fontSize: 15, padding: 5, textAlign: 'center'}}>
            Rachel Karen Green is a fictional character, one of the six main characters who appeared in the American sitcom Friends. </Text>
           <Text style={{justifyContent: 'center', fontSize: 15, padding: 5, textAlign: 'center'}}>
           Portrayed by Jennifer Aniston, the character was created by David Crane and Marta Kauffman, and appeared in all of the show's 236 episodes during its decade-long run, from its premiere on September 22, 1994 to its finale on May 6, 2004.
           </Text>
            <Button color="#696969" title= "Rachel's Profile" onPress={()=>navigation.navigate('Profile')}/>
         </View>
       
      </View>  
    </ScrollView>
  );
}

export default Home;

const styles= StyleSheet.create({
  container:{flex:1,
  alignItems:'center', 
  justifyContent:'center',
  
  },

  imgOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
   
  },
  
}
);
                                                                                       