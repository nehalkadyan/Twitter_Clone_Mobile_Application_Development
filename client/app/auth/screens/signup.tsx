import { View, Text, TextInput, Image, Pressable } from "react-native";
import React, { useState } from "react";
import axios from "axios";
import { useRouter } from "expo-router";

const signup = () => {
  // router
  const router = useRouter()

  // states

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  console.log("Username", username, "Email", email, "password", password);

  // function for signup

  const handleSignUp = async () => {
    try {
      const response = await axios.post("http://localhost:5001/api/signup", {
        username,
        email,
        password,
      });

      console.log("Response from backend :", response.data);

      if(response.data.user){
        return router.replace("/auth/screens/signin")
      }
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
            Sign Up!
          </Text>
          <View style={{ alignItems: "center" }}>
            <TextInput
              onChangeText={setUsername}
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
              onPress={handleSignUp}
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

            <View style = {{flexDirection : "row", gap: 10, padding: 15}}>
               <Text>Don't have an account?</Text>

               <Pressable onPress={() => router.push("/auth/screens/signin")}>
                  <Text style = {{color : "blue"}}>Sign In</Text>
               </Pressable>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default signup;
