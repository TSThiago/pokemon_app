import { View, Text, Image } from "react-native"
import { styles } from "./styles";
import Infos from "./Infos/Infos";

const Pokemon = () => {
    return (
        <View style={styles.pokemonContainer}>
            <Image style={styles.image} source={require("../assets/charizard.png")} />
            <Text style={styles.pokemonName}>Charizard <Text style={styles.pokemonNumber}>Nº0006</Text></Text>
            <Infos/>
        </View>
    )
}

export default Pokemon;