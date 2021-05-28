import React from "react";
import {View, Text, StyleSheet, Button, ImageBackground, Image,ScrollView} from "react-native";

const About  =({navigation}) =>{
  return (
    <ScrollView>
     <View style={styles.container}>
          <View style={styles.imgOne}>
           <Text style={styles.titleStyle}> BACKGROUND </Text>
           <Text style={styles.infoStyle}> Early Life </Text>
           <Image style={{  height: 250, marginVertical: 0}} source={{ uri: 'https://i.pinimg.com/564x/fa/60/4f/fa604f0e0ff2d1316b53ef53fd3ef047.jpg'}}/>
           <Text style={styles.infoStyleOne}>           Rachel Karen Greene was born to Leonard and Sandra Greene, who gave her and her two sisters Jill and Amy a rather spoiled upbringing, resulting in them not being able to be independent from their parents financially at first. Rachel originally had a big nose but she later got a nose job. She met Monica Geller for the first time when they were both six years old. They quickly became best friends, remaining exactly like that from then, and the friendship flourished by attending the same high school. Rachel also soon met Monica's older brother, Ross, who developed a crush on her which he decided to keep to himself, although years later Rachel admitted she knew about his crush. Ross knew she would have rejected him and she did, as shown in the Pilot when Rachel thought her was just 'Monica's geeky older brother'.  </Text>
            <Text style={styles.infoStyleOne}>         She was also involved with a popular fellow high school student named Chip, who arrived late to take her out to the high school prom. When it appeared that Chip was never going to arrive, Ross, after being encouraged by his parents Jack and Judy, decided to ask her out himself. Later he missed his chance when Chip arrived before he could ask her. She soon learned how unpleasant, careless and unfaithful at his core Chip was when he ditched her at the prom to have sex with another girl named Amy Welsh, leaving Rachel embarrassed and alone without a date. </Text>
            <Image style={{  height: 400, marginVertical: 15, marginTop: 2}} source={{uri: 'https://static.wikia.nocookie.net/friends/images/c/c6/Rachel-Season-1.png/revision/latest/scale-to-width-down/180?cb=20180127171641'}}/>
            <Text style={styles.infoStyleOne}>          In 1994, Rachel jilted Barry at the altar and climbed out of the restroom window before running into Central Perk in a rain-soaked wedding dress. She just discovered she is more turned on by a gravy boat than by Barry. Her search for Monica, who she hasn't spoken to in several years, ends as she sees her and tells her what happened. Monica introduces Rachel to the rest of the group: Chandler, Joey, Phoebe and also reunites her with Ross. He eventually decides to suggest that he may someday ask her out on a date, a proposition she does not object to. Rachel confronts her father over the phone about her fleeing from the wedding and announces that she's moving in with Monica. She is excited about this new phase in life until she is forced to get a job because her father has cut her off financially. She becomes a waitress at Central Perk.  </Text>
           <Button color="#696969" title= "Back" onPress={()=>navigation.goBack()}/>
          </View>
      
    </View>  
    </ScrollView>
  );
}
export default About;

const styles= StyleSheet.create({
  container:{flex:1,
  alignItems:'center' ,
  justifyContent:'center',
  },
  bgStyle: {
   flex: 1,
   resizeMode: "cover",
   justifyContent: "center",
   width: 330
  },
  imgOne: {
    flex: 1,
    justifyContent: 'center',
    padding: 2
  },

  titleStyle: {
    fontSize: 20,
    fontWeight: 'bold',
    justifyConten: 'center',
    textAlign: 'center'
  },
  infoStyle: {
    fontSize: 20,
    paddingBottom: 15,
    textAlign: 'center'
  },
  infoStyleOne: {
    fontSize: 17,
    textAlign: 'justify',
    margin: 10
  }
}
);
