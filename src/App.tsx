import { ImageBackground, StyleSheet, Text, View, SafeAreaView } from 'react-native';
import background from "../src/assets/background.png"
import Pokemon from './Pokemon/Pokemon';

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground source={background} resizeMode='cover' style={styles.background}>
        <Pokemon />
      </ImageBackground>

    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30
  },
  background: {
    height: "100%",
    width: "100%",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});
