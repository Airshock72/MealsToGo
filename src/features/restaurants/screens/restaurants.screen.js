import React from "react";
import { StyleSheet, View } from "react-native";
import { Searchbar } from "react-native-paper";
import SafeAreaView from "react-native-safe-area-view";
import { RestaurantInfoCard } from "../components/restaurant-info-card.component";

export const RestaurantsScreen = () => (
  <SafeAreaView style={styles.container}>
    <View style={styles.search}>
      <Searchbar />
    </View>
    <View style={styles.list}>
      <RestaurantInfoCard />
    </View>
  </SafeAreaView>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {
    padding: 16,
  },
  list: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});
