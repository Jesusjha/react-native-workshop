import React, { useCallback, useEffect, useState, useMemo } from "react";

import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, Button, SafeAreaView } from "react-native";

export const FlexboxScreen = ({ navigation }) => {
  //   const isScattered = useMemo(() => {
  //     return Math.random() > 0.5;
  //   }, []);

  //   const checkIsScattered = useCallback((number) => {
  //     return Math.random() > number;
  //   }, []);

  //   useEffect(() => {
  //     console.log("isScattered", checkIsScattered(10));
  //   }, []);

  const goToDefaultComponents = () => {
    navigation.navigate("DefaultComponents");
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "space-evenly",
      }}
    >
      <View
        style={{
          flex: 1,
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: "column",
          justifyContent: "space-evenly",
        }}
      >
        <View
          style={{ width: 50, height: 50, backgroundColor: "powderblue" }}
        />
        <View style={{ width: 50, height: 50, backgroundColor: "skyblue" }} />
        <View style={{ width: 50, height: 50, backgroundColor: "steelblue" }} />
      </View>
      <Button
        title="Go to Default Components"
        onPress={goToDefaultComponents}
      />
      <StatusBar style="auto" />
    </View>
  );
};
