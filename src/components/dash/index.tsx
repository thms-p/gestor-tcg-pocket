import { TouchableOpacity, Text, FlatList } from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

import { useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { useState } from "react";

import { Header } from "components/header";
import { Pokemon } from "components/pokemon";
import { FormAdd } from "components/form-add";

import { styles } from "./styles";

type Props = {
  title: string;
  storageKey: string;
};

export function Dash({ title, storageKey }: Props) {
  const [pokemonList, setPokemonList] = useState<string[]>([]);
  const [isFormVisible, setIsFormVisible] = useState(false);

  useEffect(() => {
    async function loadData() {
      try {
        const saved = await AsyncStorage.getItem(storageKey);
        if (saved) {
          setPokemonList(JSON.parse(saved));
        }
      } catch (e) {
        console.error("Erro ao carregar lista de Pokémons:", e);
      }
    }

    loadData();
  }, []);

  useEffect(() => {
    async function saveData() {
      try {
        await AsyncStorage.setItem(storageKey, JSON.stringify(pokemonList));
      } catch (e) {
        console.error("Erro ao salvar lista de Pokémons:", e);
      }
    }

    saveData();
  }, [pokemonList]);

  function handleAddPokemon(name: string) {
    setPokemonList((prev) => [...prev, name]);
  }

  function toggleForm() {
    setIsFormVisible(!isFormVisible);
  }

  function handleRemovePokemon(name: string) {
    setPokemonList((prev) => prev.filter((item) => item !== name));
  }

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.container} edges={["top", "bottom"]}>
        <Header title={title} />

        <FlatList
          data={pokemonList}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <Pokemon name={item} onRemove={() => handleRemovePokemon(item)} />
          )}
          contentContainerStyle={styles.listContent}
          showsVerticalScrollIndicator={false}
        />

        {!isFormVisible && (
          <TouchableOpacity
            style={styles.button}
            activeOpacity={0.5}
            onPress={toggleForm}
          >
            <Text style={styles.textButton}>+</Text>
          </TouchableOpacity>
        )}
        {isFormVisible && (
          <FormAdd
            onClose={() => setIsFormVisible(false)}
            onAddPokemon={handleAddPokemon}
          />
        )}
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
