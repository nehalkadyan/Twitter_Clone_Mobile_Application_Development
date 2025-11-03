import { Redirect } from "expo-router";
import { useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"
import { ActivityIndicator, View } from "react-native";

export default function Index() {
  // state

  const [isUserAuthenticated, setisUserAuthenticated] = useState(true);

  console.log("isUserAuthenticated : ",isUserAuthenticated)

  const checkToken = async() => {
    const token = await AsyncStorage.getItem("access_token");
    console.log(token)
    if(token){
      setisUserAuthenticated(true)
    }else{
      setisUserAuthenticated(false)
    }
  }



  useEffect(() => {
    checkToken()
  }, [])

  //   // Activity Indicator
  //   if (isUserAuthenticated === false) {
  //   // Still checking token
  //   return (
  //     <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
  //       <ActivityIndicator size="large" color="black" />
  //     </View>
  //   );
  // }

  return isUserAuthenticated ? (
     <Redirect href="/tabs/home_tab" />
    ): (
      <Redirect href="/auth/screens/signup" />
    ) 
}