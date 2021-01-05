import React from "react";
import { ImageBackground, StyleSheet, View, Image, Text } from "react-native";
// image-game-bkg vector art by lavarmsg
import colors from "../config/colors";

function Landing(props) {
  return (
    <ImageBackground
      style={styles.background}
      source={require("../assets/image-game-bkg.png")}
    >
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
    height: 40,
    backgroundColor: colors.primary,
  },
  roomCodeEntry: {
    width: "100%",
    height: 40,
    backgroundColor: colors.mint,
  },
});

export default Landing;
