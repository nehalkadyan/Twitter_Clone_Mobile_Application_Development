import { useRouter } from "expo-router";
import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage"

export default function Index() {
  // state

  // const [isUserAuthenticated, setisUserAuthenticated] = useState(true);

  // console.log("isUserAuthenticated : ",isUserAuthenticated);

  const router = useRouter()

  const checkToken = async() => {
    const token = await AsyncStorage.getItem("access_token");
    console.log(token)
    if(token){
      router.replace("/tabs/home_tab")
    }else{
      router.replace("/auth/screens/signup")
    }
  }

  useEffect(() => {
    checkToken()
  }, [])

  // return isUserAuthenticated ? (
  //    <Redirect href="/tabs/home_tab" />
  //   ): (
  //     <Redirect href="/auth/screens/signup" />
  //   ) 
}