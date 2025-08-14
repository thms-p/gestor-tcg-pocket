import {
  View,
  Text,
  ImageBackground,
  TouchableOpacity,
  TouchableOpacityProps,
} from "react-native";

import { styles } from "./styles";

type Props = TouchableOpacityProps & {
  title: string;
};

export function Pack({ title, ...rest }: Props) {
  return (
    <TouchableOpacity activeOpacity={0.5} {...rest}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("@/assets/images/pack.jpg")}
          resizeMode="cover"
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
      </View>
    </TouchableOpacity>
  );
}
