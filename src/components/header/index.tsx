import { Text, View } from "react-native";

import { styles } from "./styles";

type Props = {
  title: string;
};

export function Header({ title }: Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title.toUpperCase()}</Text>
    </View>
  );
}
