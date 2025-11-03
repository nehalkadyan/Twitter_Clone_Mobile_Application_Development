import React from "react";
import { Tabs } from "expo-router";
import AntDesign from '@expo/vector-icons/AntDesign';
import Feather from '@expo/vector-icons/Feather';
import Ionicons from '@expo/vector-icons/Ionicons';


const TabLayout = () => {
  return (
    <Tabs screenOptions={{headerShown : false}}>
      <Tabs.Screen name="home_tab" options={{ title: "Home", tabBarIcon : () => (
        <AntDesign name="home" size={24} color="black" />
      ) }} />
      <Tabs.Screen name="search_tab" options={{ title: "Search", tabBarIcon : () => (
        <Feather name="search" size={24} color="black" />
      ) }} />
      <Tabs.Screen name="notifications_tab" options={{ title: "Notifications", tabBarIcon: () => (
        <Ionicons name="notifications-outline" size={26} color="black" />
      ) }} />
      <Tabs.Screen name="messages_tab" options={{ title: "Messages", tabBarIcon : () => (
        <Feather name="message-circle" size={24} color="black" />
      ) }} />
    </Tabs>
  );
};

export default TabLayout;
