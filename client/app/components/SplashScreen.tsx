import { View, Text, Image } from "react-native";
import React from "react";

const SplashScreen = () => {
  return (
    <View style = {{backgroundColor : "black", flex: 1, justifyContent: "center", alignItems : "center"}}>
      <Image
        style={{ height: 140, width: 140 }}
        source={{
          uri: "https://pixelz.cc/wp-content/uploads/2023/09/twitter-x-logo-uhd-4k-wallpaper.jpg",
        }}
      />
    </View>
  );
};

export default SplashScreen;
