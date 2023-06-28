import React from "react";
import {
  CardStyleInterpolators,
  createStackNavigator,
} from "@react-navigation/stack";
import { SettingsScreen } from "../../features/settings/screens/settings.screen";
import { FavouritesScreen } from "../../features/settings/screens/favourites.screen";

const SettingsStack = createStackNavigator();

const screenOptions = () => ({
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
});

export const SettingsNavigator = () => {
  return (
    <SettingsStack.Navigator screenOptions={screenOptions}>
      <SettingsStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <SettingsStack.Screen
        name="Favourites"
        component={FavouritesScreen}
        options={{ headerShown: true }}
      />
    </SettingsStack.Navigator>
  );
};
