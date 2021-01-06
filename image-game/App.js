import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import Landing from "./screens/Landing";
// import CardList from "./screens/CardList";

export default function App() {
  return (
    <Landing />
    // <CardList />
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
