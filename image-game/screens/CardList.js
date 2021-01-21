import React from "react";
import { FlatList, StyleSheet, Text, View } from "react-native";
import colors from "../config/colors";

const CardList = () => {
  return (
    <View style={styles.container}>
      <FlatList
        data={[
          { key: "Top card" },
          { key: "second card, hidden" },
          { key: "third card, hidden" },
          { key: "fourth card, hidden" },
        ]}
        renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    paddingTop: 22,
    backgroundColor: colors.background,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
    color: colors.white,
  },
});
export default CardList;
