import { StatusBar } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";

export default function App() {
  return (
    <SafeAreaProvider>
      <RestaurantsScreen />
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
