import React, { useEffect, useState } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export const HomeScreen = ({ navigation }) => {
  const [count, setCount] = useState(0);

  const [isCounting, setIsCounting] = useState(false);

  // create a counter functions
  const counter = () => {
    setIsCounting(true);
  };

  // create a reset function
  const reset = () => {
    setCount(0);
  };

  // create a useEffect function which increments the counter every 1 second
  useEffect(() => {
    if (isCounting) {
      const interval = setInterval(() => {
        setCount(count + 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [isCounting, count]);

  // create a pause function
  const pause = () => {
    setIsCounting(false);
  };

  // go to the tictactoe screen
  const goToTicTacToe = () => {
    navigation.navigate("TicTacToe");
  };
  return (
    <View style={styles.container}>
      <View
        backgroundColor={"lightgreen"}
        style={{
          flexDirection: "row",
        }}
      >
        <Text>Hello World </Text>
        <Text>My name is Haroon</Text>
      </View>
      <View>
        <Text style={{ fontSize: 30, fontWeight: "bold" }}>{count}</Text>
      </View>
      <View
        style={{
          height: 150,
          justifyContent: "space-between",
        }}
      >
        <Button title="Start Timer" onPress={counter} />
        <Button title="Stop Timer" onPress={pause} />
        <Button title="Reset Timer" onPress={reset} />
      </View>

      <View style={styles.footer}>
        <Button title="Go to TicTacToe Screen" onPress={goToTicTacToe} />
      </View>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  timer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    width: "100%",
    marginBottom: 10,
  },
});
