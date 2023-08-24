import { ImageBackground, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    pokemonContainer: {
        alignItems: "center",
        width: 300,
        height: 570,
        backgroundColor: "#30a7d7",
        borderRadius: 5
    },
    image: {
        width: 270,
        height: 270,
        marginTop: 15,
        borderRadius: 5,
        resizeMode: "contain",
        backgroundColor: "#f2f2f2"
    },
    pokemonName: {
        fontSize: 24,
        marginTop: 10
    },
    pokemonNumber: {
        color: "#616161"
    }

});
