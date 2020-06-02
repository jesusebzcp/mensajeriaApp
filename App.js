import React, { useEffect, useState, Suspense } from "react";
import { View, ActivityIndicator } from "react-native";

import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import useCachedResources from "./hooks/useCachedResources";

import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./config/firebase";
import RootApp from "./Root";

export default function App(props) {
  const isLoadingComplete = useCachedResources();
  const [isReady, setisReady] = useState(false);

  //Soluciona el problema de fuentes de natibase y expo
  useEffect(() => {
    font();
  }, []);

  async function font() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
      ...Ionicons.font,
    });
    setisReady(true);
  }

  if ((!isLoadingComplete, !isReady)) {
    return <AppLoading />;
  } else {
    return (
      <FirebaseAppProvider firebaseConfig={firebaseConfig}>
        <Suspense
          fallback={
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
                flex: 1,
              }}
            >
              <ActivityIndicator />
            </View>
          }
        >
          <RootApp />
        </Suspense>
      </FirebaseAppProvider>
    );
  }
}
