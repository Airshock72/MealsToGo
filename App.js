import { StyleSheet, Text, View, SafeAreaView, StatusBar } from "react-native";

export default function App() {
  return (
    <>
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ backgroundColor: "green", padding: 16 }}>
          <Text>Search</Text>
        </View>
        <View style={{ backgroundColor: "blue", padding: 16, flex: 1 }}>
          <Text>List</Text>
        </View>
      </SafeAreaView>
      <StatusBar style="auto" />
    </>
  );
}

// const styles = StyleSheet.create({});
