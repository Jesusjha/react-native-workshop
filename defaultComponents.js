import React from "react";

import {
  Text,
  View,
  Button,
  TouchableOpacity,
  TextInput,
  FlatList,
} from "react-native";

export const DefaultComponents = ({ navigation }) => {

    
  const dismissAllScreens = () => {
    navigation.popToTop();
  };

  return (
    <View
      style={{
        flex: 1,
      }}
    >
      <View>
        <Text>Button and Touchable Opacity</Text>
        <Button
          title="Press me"
          onPress={() => console.log("button pressed")}
        />

        <TouchableOpacity
          style={{
            backgroundColor: "lightgreen",
            padding: 10,
            fontSize: 20,
          }}
        >
          <Text
            style={{
              textAlign: "center",
            }}
          >
            Press me
          </Text>
        </TouchableOpacity>
      </View>

      <View>
        <Text>Inputs</Text>
        <TextInput
          style={{
            borderColor: "black",
            borderWidth: 2,
            backgroundColor: "lightgrey",
          }}
          placeholder="Enter your name"
        />
      </View>

      <FlatList
        data={[1, 2, 3, 4, 5, 6]}
        renderItem={(item) => {
          return (
            <Text
              style={{
                fontSize: 32,
                textAlign: "center",
              }}
            >
              {item.item}
            </Text>
          );
        }}
        style={{
          backgroundColor: "lightgrey",
          width: 200,
          alignSelf: "center",
        }}
      />
      <View
        style={{
          position: "absolute",
          bottom: 0,
          width: "100%",
        }}
      >
        <Button title="Dismiss all screens" onPress={dismissAllScreens} />
      </View>
    </View>
  );
};
