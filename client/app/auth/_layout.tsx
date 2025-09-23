import { Stack } from "expo-router";
import React from "react";

const AuthLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      {/* signin */}
      <Stack.Screen name="/screens/signin" />
      <Stack.Screen name="/screens/signup" />
    </Stack>
  );
};

export default AuthLayout;
