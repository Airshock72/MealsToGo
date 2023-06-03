import { StyleSheet, Text, View, StatusBar } from "react-native";
import React from "react";
import { Searchbar } from "react-native-paper";
import SafeAreaView, { SafeAreaProvider } from "react-native-safe-area-view";

export default function App() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <View style={styles.search}>
          <Searchbar />
        </View>
        <View style={styles.list}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  search: {},
  list: {
    backgroundColor: "blue",
    padding: 16,
    flex: 1,
  },
});
