import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React, { useEffect, useState } from "react";
import { Platform, StatusBar, StyleSheet, View } from "react-native";

import { AppLoading } from "expo";
import * as Font from "expo-font";
import { Ionicons } from "@expo/vector-icons";

import useCachedResources from "./hooks/useCachedResources";
import BottomTabNavigator from "./navigation/BottomTabNavigator";
import LinkingConfiguration from "./navigation/LinkingConfiguration";

import { FirebaseAppProvider } from "reactfire";
import firebaseConfig from "./config/firebase";
import Login from "./screens/Login";
import Registrar from "./screens/Registrar";
import TyC from "./screens/TyC";
import SwiperView from "./screens/Swiper";
import Inicio from "./screens/Inicio";

const Stack = createStackNavigator();

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
        <View style={styles.container}>
          {Platform.OS === "ios" && <StatusBar barStyle="dark-content" />}
          <NavigationContainer linking={LinkingConfiguration}>
            <Stack.Navigator>
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="SwiperView"
                component={SwiperView}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Inicio"
                component={Inicio}
              />
              <Stack.Screen
                options={{
                  headerShown: false,
                }}
                name="Login"
                component={Login}
              />

              <Stack.Screen
                options={{
                  title: "Registrate",
                }}
                name="Registrar"
                component={Registrar}
              />
              <Stack.Screen
                options={{
                  title: "Terminos y condiciones",
                }}
                name="TyC"
                component={TyC}
              />

              <Stack.Screen name="Root" component={BottomTabNavigator} />
            </Stack.Navigator>
          </NavigationContainer>
        </View>
      </FirebaseAppProvider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
});
