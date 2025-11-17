import { View, Text } from "react-native";
import React from "react";
import { useSelector } from "react-redux";


const home_tab = () => {

  const {currentUser} = useSelector((state:any) => state.user)

  return (
    <View>
      <Text>home_tab</Text>


      <View>
        <Text>{currentUser?.username}</Text>
      </View>
    </View>
  );
};

export default home_tab;
