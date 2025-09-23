import { View, Text, TextInput, Image, Pressable } from "react-native";
import React from "react";

const signup = () => {
  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View style={{ alignItems: "center", marginTop: 20 }}>
        <Image
          style={{ height: 80, width: 80 }}
          source={{
            uri: "https://pixelz.cc/wp-content/uploads/2023/09/twitter-x-logo-uhd-4k-wallpaper.jpg",
          }}
        />
      </View>

      <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
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
              margin: 15,
            }}
          >
            Sign Up!
          </Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              style={{
                padding: 15,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                outline: "none",
                fontSize: 18,
                color: "gray",
              }}
              placeholder="Username"
            />

            <TextInput
              style={{
                padding: 15,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                outline: "none",
                fontSize: 18,
                color: "gray",
                marginVertical: 15,
              }}
              placeholder="Email"
            />

            <TextInput
              style={{
                padding: 15,
                borderWidth: 1,
                borderColor: "black",
                borderRadius: 10,
                outline: "none",
                fontSize: 18,
                color: "gray",
              }}
              placeholder="Password"
            />

            <Pressable
              style={{
                backgroundColor: "black",
                margin: 14,
                borderRadius: 10,
                width: "50%",
              }}
            >
              <Text
                style={{ color: "white", padding: 10, textAlign: "center" }}
              >
                Sign up
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
};

export default signup;
