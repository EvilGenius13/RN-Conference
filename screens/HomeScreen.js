import React from "react";
import {Text, View, TouchableOpacity, Image, StyleSheet} from "react-native";
import Icon from '../assets/react.png'

const HomeScreen = ( props ) => {
  console.log(props)  
  return (
      <View style={styles.container}>
        <Image style={styles.image} source={Icon} />
        <Text style={styles.appName}>EGCONF</Text>
        <Text style={styles.description}>
          The best React Native conference, powered by Evil Villains
        </Text>
  
        <TouchableOpacity
         style={styles.button}
         onPress={() => {
          props.navigation.navigate("Schedule")
         }}
         >
          <Text style={styles.buttonText}>See schedule</Text>
        </TouchableOpacity>
      </View>
    );
  };
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      alignItems: "center",
      justifyContent: "center",
      paddingHorizontal: 24
    },
    image: {
      width: 70,
      height: 70,
      borderRadius: 140/2,
      marginBottom: 8,
      borderColor: "black",
      borderWidth: 1,
    },
    appName: {
      fontSize: 60,
      fontWeight: "700",
      color: "#222f3e"
    },
    description: {
      paddingHorizontal: 48,
      textAlign: "center",
      marginBottom: 48,
      color: "#576574"
    },
    button: {
      backgroundColor: "#5f27cd",
      paddingHorizontal: 16,
      paddingVertical: 8,
      borderRadius: 4
    },
    buttonText: {
      color: "white"
    }
  });

export default HomeScreen;