import { View, Text, Image } from "react-native"
import { styles } from "./styles";

const Pokemon = () => {
    return (
        <View style={styles.pokemonContainer}>
            <Image style={styles.image} source={require("../assets/charizard.png")} />
            <Text style={styles.pokemonName}>Charizard <Text style={styles.pokemonNumber}>Nº0006</Text></Text>
        </View>
    )
}

export default Pokemon;