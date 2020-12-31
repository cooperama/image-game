import React from "react";
import {
  StyleSheet,
  View,
  Text,
  Button,
  Alert,
  TouchableOpacity,
} from "react-native";

export default function Instructions() {
  const startGame = () => {
    //
    Alert.alert("boop!");
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>How To Get Trashed:</Text>
      <View style={styles.instructionsContainer}>
        <Text style={styles.instructions}>
          1. The least drunk person reads the first card, then go in a circle or
          whatever.
        </Text>
        <Text style={styles.instructions}>
          2. Tap to vote for the player who best fits the description on the
          card.
        </Text>
        <Text style={styles.instructions}>
          3. Whoever has the most votes must drink the amount of the card.
        </Text>
      </View>
      <TouchableOpacity onPress={startGame} style={styles.button}>
        <Text>Cool, let's do this</Text>
      </TouchableOpacity>
      {/* <Button
        title="Cool, let's do this"
        onPress={startGame}
        style={styles.button}
      /> */}
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
  instructionsContainer: {
    // backgroundColor: "blue",
    padding: 40,
  },
  instructions: {
    // backgroundColor: "green",
    padding: 20,
  },
  button: {
    // backgroundColor: "yellow",
    borderColor: "#aaa",
    borderWidth: 1,
    padding: 10,
  },
});
