import { Slot } from "expo-router";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";

export default function RootLayout() {
  // state 
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
     const timer = setTimeout(() => {
       setIsLoading(false)
     }, 3000)

     return () => clearTimeout(timer)
  }, [isLoading])

  if(isLoading){
    return <SplashScreen />
  }

  return <Slot />;
}