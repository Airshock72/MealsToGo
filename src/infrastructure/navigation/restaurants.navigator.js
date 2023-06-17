import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { Text } from "react-native";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantStack.Navigator
    headerMode="none"
    screenOptions={{ ...TransitionPresets.ModalPresentationIOS }}
  >
    <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
    <RestaurantStack.Screen
      name="RestaurantDetail"
      component={() => <Text>Restaurant Detail</Text>}
    />
  </RestaurantStack.Navigator>
);
