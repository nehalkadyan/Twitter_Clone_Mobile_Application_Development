import { View, Text, TextInput, Image, Pressable } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage"

import React, { useState } from "react";

import axios from "axios";
import { useRouter } from "expo-router";

const signin = () => {
  // router
  const router = useRouter()
  // states

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  // function for signup

  const handleSignIn = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/signin", {
        email,
        password,
      });

      console.log("Response from backend :", response.data);

      // token 

      const token = response.data.token;

      // save the token in async storage if token is received
      if(token){
      await AsyncStorage.setItem("access_token", token);
      }

      router.replace("/tabs/home_tab")

    } catch (err) {
      console.log(err);
    }
  };

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
            Sign In!
          </Text>
          <View style={{ alignItems: "center" }}>
            
            <TextInput
              onChangeText={setEmail}
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
              onChangeText={setPassword}
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
              onPress={handleSignIn}
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
                Sign In
              </Text>
            </Pressable>

            <View style = {{flexDirection : "row", gap: 10, padding: 15}}>
               <Text>Don't have an account ?</Text>

               <Pressable onPress={() => router.push("/auth/screens/signup")}>
                  <Text style = {{color : "blue"}}>Sign Up</Text>
               </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default signin;