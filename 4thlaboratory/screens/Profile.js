import React from "react";
import {View, Text, StyleSheet, Button, ImageBackground, Image, ScrollView} from "react-native";


const Profile  =({navigation}) =>{
  return (
    <ScrollView>
    <View style={styles.container}>
        <View style={styles.imgOne}>
           <Image style={{ width: 250, height: 400, marginVertical: 15, marginTop: 20}} source={{ uri: 'https://i.pinimg.com/564x/8f/bb/8e/8fbb8ee7bae32c29eadf40569ab258a0.jpg'}}/>
           <Text style={styles.titleStyle}>Name: </Text>
           <Text style={styles.infoStyle}> Rachel Karen Green (Jennifer Aniston) </Text>
           <Text style={styles.titleStyle}> Nickname: </Text>
           <Text style={styles.infoStyle}> Rach </Text>
           <Text style={styles.titleStyle}> Birthday: </Text>
           <Text style={styles.infoStyle}> May 5, 1969 </Text>
           <Text style={styles.titleStyle}> Occupation: </Text>
           <Text style={styles.infoStyle}> Executive at Ralph Lauren </Text>
           <Text style={styles.titleStyle}> Education: </Text>
           <Text style={styles.infoStyle}> Lincoln High School  </Text>
           <Text style={styles.titleStyle}> Relatives: </Text>
           <Text style={styles.infoStyle}> Emma Geller-Greene (daughter) </Text>
           <Text style={styles.infoStyle}> Leonard Greene (father) </Text>
           <Text style={styles.infoStyle}> Sandra Greene (mother) </Text>
           <Text style={styles.titleStyle}> Relationships: </Text>
           <Text style={styles.infoStyle}> Ross Geller (father of her daughter) </Text>
           <Text style={styles.infoStyle}> Paolo (ex-boyfriend) </Text>
            <Button color="#696969" title= "More About Rachel Green" onPress={()=>navigation.navigate('About')}/>
       </View>
    </View>  
    </ScrollView>
  );
}
export default Profile;

const styles= StyleSheet.create({
  container:{flex:1,
  alignItems:'center' ,
  justifyContent:'center',
 
  },
 
  imgOne: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  infoStyle: {
    fontSize: 16,
    paddingBottom: 15
  }
}
);
