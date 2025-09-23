import { View, Text, TextInput, Image } from "react-native";
import React from "react";

const signup = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ alignItems: "center", margin: 20 }}>
        <Image
          style={{ height: 80, width: 80 }}
          source={{
            uri: "https://pixelz.cc/wp-content/uploads/2023/09/twitter-x-logo-uhd-4k-wallpaper.jpg",
          }}
        />
      </View>

      <View style={{ alignItems: "center" }}>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            minHeight: 300,
            borderRadius: 10,
          }}
        >
          <Text
            style={{
              textAlign: "center",
              fontSize: 20,
              fontWeight: 700,
              fontStyle: "italic",
            }}
          >
            Sign Up!
          </Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={{ padding: 15, borderWidth: 1, borderColor: "red" }}
              placeholder="Username"
            />

            <TextInput placeholder="Email" />

            <TextInput placeholder="Password" />
          </View>
        </View>
      </View>
    </View>
  );
};

export default signup;
