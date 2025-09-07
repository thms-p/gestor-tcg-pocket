import { View, TextInput, Text, TouchableOpacity, Alert } from "react-native";
import { useState } from "react";

import { styles } from "./styles";

type Props = {
  onClose: () => void;
  onAddPokemon: (name: string) => void;
};

export function FormAdd({ onClose, onAddPokemon }: Props) {
  const [pokemonName, setPokemonName] = useState("");

  async function handleAdd() {
    const trimmedName = pokemonName.trim().toLowerCase();
    if (trimmedName.length === 0) return;

    try {
      const response = await fetch(
        `https://pokeapi.co/api/v2/pokemon/${trimmedName}`
      );
      if (!response.ok) {
        Alert.alert("Erro", "Esse Pokémon não existe.");
        return;
      }
      onAddPokemon(trimmedName);
      setPokemonName("");
      onClose();
    } catch (error) {
      Alert.alert("Erro", "Falha ao validar Pokémon.");
    }
  }
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="Nome do Pokemon..."
        placeholderTextColor="#b8b8b8ff"
        value={pokemonName}
        onChangeText={setPokemonName}
      ></TextInput>
      <View style={styles.containerButton}>
        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={handleAdd}
        >
          <Text style={styles.title}>ADICIONAR</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          activeOpacity={0.5}
          onPress={onClose}
        >
          <Text style={styles.title}>CANCELAR</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
