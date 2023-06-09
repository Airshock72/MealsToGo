import {
  createStackNavigator,
  TransitionPresets,
} from "@react-navigation/stack";
import React from "react";
import { RestaurantsScreen } from "../../features/restaurants/screens/restaurants.screen";
import { RestaurantDetailScreen } from "../../features/restaurants/screens/restaurant-detail.screen";

const RestaurantStack = createStackNavigator();

export const RestaurantsNavigator = () => (
  <RestaurantStack.Navigator
    screenOptions={{
      ...TransitionPresets.ModalPresentationIOS,
      headerShown: false,
      gestureEnabled: true,
    }}
  >
    <RestaurantStack.Screen name="Restaurants" component={RestaurantsScreen} />
    <RestaurantStack.Screen
      name="RestaurantDetail"
      component={RestaurantDetailScreen}
    />
  </RestaurantStack.Navigator>
);
