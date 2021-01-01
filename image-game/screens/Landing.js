import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
import colors from "../config/colors";

function Landing(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/three-whiskeys.jpg")}
    >
      <View style={styles.logoContainer}>
        <Image style={styles.logo} source={require("../assets/tig-logo.png")} />
      </View>
      <View style={styles.usernameEntry}></View>
      <View style={styles.roomCodeEntry}></View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    height: "100%",
  },
  usernameEntry: {
    width: "100%",
    height: 70,
    backgroundColor: colors.primary,
  },
  roomCodeEntry: {
    width: "100%",
    height: 70,
    backgroundColor: colors.gray,
  },
  logo: {
    bottom: 300,
    resizeMode: contain,
  },
});

export default Landing;
