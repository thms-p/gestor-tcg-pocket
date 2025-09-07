import {
  View,
  TouchableOpacity,
  TouchableOpacityProps,
  ImageBackground,
  Text,
} from "react-native";

import { useState, useEffect } from "react";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  name: string;
  onRemove: () => void;
};

export function Pokemon({ name, onRemove }: Props) {
  let [img, setImg] = useState<string | null>();

  async function cardPokemon(name: string) {
    let trimmedName = name.trim().toLowerCase();
    const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${trimmedName}`);
    const data = await res.json();
    setImg(data.sprites.front_default);
  }

  useEffect(() => {
    cardPokemon(name);
  }, [name]);

  return (
    <TouchableOpacity onPress={onRemove}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={{ uri: img }}
          resizeMode="cover"
        />
        <Text style={styles.title}>{name.toUpperCase()}</Text>
      </View>
    </TouchableOpacity>
  );
}
