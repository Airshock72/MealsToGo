import { StatusBar } from "react-native";
import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-view";
import { RestaurantsScreen } from "./src/features/restaurants/screens/restaurants.screen";
import { ThemeProvider } from "styled-components";
import { theme } from "./src/infrastructure/theme";

export default function App() {
  return (
    <SafeAreaProvider>
      <ThemeProvider theme={theme}>
        <RestaurantsScreen />
      </ThemeProvider>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}
