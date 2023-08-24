import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import Pokemon from './Pokemon/Pokemon';
import background from "../src/assets/background.png"

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={background} resizeMode='cover' style={styles.background}>
        <Pokemon />
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
