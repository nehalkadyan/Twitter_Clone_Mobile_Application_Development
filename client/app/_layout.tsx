import { Slot } from "expo-router";
import { useState, useEffect } from "react";
import SplashScreen from "./components/SplashScreen";
import { Provider } from "react-redux";
import store from "./redux/store";

export default function RootLayout() {
  // state
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [isLoading]);

  if (isLoading) {
    return <SplashScreen />;
  }
  return (
    <Provider store={store}>
        <Slot />
    </Provider>
    
  );
}
