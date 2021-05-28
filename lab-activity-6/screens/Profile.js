import React from "react";
import{View,Text,ScrollView, StyleSheet} from "react-native";

const Profile = ({route}) => {
  const data = route.params;

  return(
    <View style= {styles.container}>
    <ScrollView>
      <Text style ={{color: 'white', fontSize: 14, fontWeight: 'bold'
            
            }}> {JSON.stringify(data, null, 2)} </Text>
      </ScrollView> 
      </View>
  );
}



export default Profile;

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
