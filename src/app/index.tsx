import { StyleSheet } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

import { Header } from "@/components/header";
import { Pack } from "@/components/pack";

export default function Index() {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <Header title="pacotes tcg pocket" />
        <Pack title="PACOTE 01" onPress={() => router.navigate("/dash01")} />
        <Pack title="PACOTE 02" onPress={() => router.navigate("/dash02")} />
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#f0f0f0ff",
    flex: 1,
    gap: 25,
    alignItems: "center",
  },
});
