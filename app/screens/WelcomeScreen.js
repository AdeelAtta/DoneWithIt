import React from "react";
import { StyleSheet, ImageBackground, View,Text,Image } from "react-native";

function WelcomeScreen(props) {
  return (
    <ImageBackground
      style={styles.background}
      background='contain'
      source={require(`../assets/background.jpg`)}
    >
        <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require(`../assets/logo-red.png`)} />
        <Text style={styles.tag}>Sell what you don't Need</Text>
        </View>
      <View style={[styles.loginButton,styles.centerElements]}>
        <Text style={styles.text}>Login</Text>
      </View>
      <View style={[styles.registerButton,styles.centerElements]}>
        <Text  style={styles.text}>Register</Text>
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: `flex-end`,
    alignItems:`center`
  },
  centerElements:{
    justifyContent:`center`,
    alignItems:`center`,
  },
  loginButton: {
    width: `100%`,
    height: 70,
    backgroundColor: `#fc5c65`,
  },
  registerButton: {
    width: `100%`,
    height: 70,
    backgroundColor: `#4ecdc4`,
  },
  text:{
    color:`#fff`,
    fontSize:18,
    fontWeight:`600`
  },
  logoContainer:{
    position:`absolute`,
    top:50,
    alignItems:`center`
  },
  logo:{
    width:100,
    height:100,
  },
  tag:{
    color:`tomato`,
    fontSize:16,
    fontWeight:`400`,
    marginTop:10
  }
});

export default WelcomeScreen;
