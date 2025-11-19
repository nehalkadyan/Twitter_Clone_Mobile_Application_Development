import { View, Text } from "react-native";
import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import axios from "axios";


const home_tab = () => {

  const {currentUser} = useSelector((state:any) => state.user)
  // state for all tweets 

  const [allTweets, setAllTweets] = useState([])

  console.log("all tweets", allTweets)

  // fetch tweets 

  const fetchTweets = async() => {
    try{
      const response = await axios.get("http://localhost:5001/api/tweets/tweets");
      console.log(response.data)
      setAllTweets(response.data.tweets)
    }catch(err){
      console.log("err", err)
    }
  }

  useEffect(() => {
   fetchTweets()
  }, [])

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