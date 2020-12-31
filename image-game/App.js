import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
// import Instructions from "./screens/Instructions";

export default function App() {
  return (
    <View style={styles.container}>
      <Text>The Image Game</Text>
      <StatusBar style="auto" />
      {/* <Instructions /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
