import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";

const home_tab = () => {
  const { currentUser } = useSelector((state: any) => state.user);
  // state for all tweets

  const [allTweets, setAllTweets] = useState([]);

  console.log("all tweets", allTweets);

  // tabs

  const [currentTab, setCurrentTab] = useState("For you");

  // fetch tweets

  const fetchTweets = async () => {
    try {
      const response = await axios.get(
        "http://localhost:5001/api/tweets/tweets"
      );
      console.log(response.data);
      setAllTweets(response.data.tweets);
    } catch (err) {
      console.log("err", err);
    }
  };

  useEffect(() => {
    fetchTweets();
  }, []);

  return (
    <View style={{ backgroundColor: "black", flex: 1 }}>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 14,
        }}
      >
        <View>
          {/* current user's email */}
          <Text style={{ color: "white" }}>Current User </Text>
        </View>

        <View>
          <Image
            style={{ height: 40, width: 40 }}
            source={{
              uri: "https://pixelz.cc/wp-content/uploads/2023/09/twitter-x-logo-uhd-4k-wallpaper.jpg",
            }}
          />
        </View>
      </View>

      {/* <View>
        <Text>{currentUser?.username}</Text>
      </View> */}

      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
          padding: 15,
        }}
      >
        <View>
          <Text
            onPress={() => setCurrentTab("For you")}
            style={{ color: currentTab === "For you" ? "white" : "gray", fontSize: 18 }}
          >
            For you
          </Text>
        </View>

        <View>
          <Text
            onPress={() => setCurrentTab("My Tweets")}
            style={{ color: currentTab === "My Tweets" ? "white" : "gray", fontSize: 18 }}
          >
            My Tweets
          </Text>
        </View>
      </View>
    </View>
  );
};

export default home_tab;
