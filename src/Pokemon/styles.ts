import { ImageBackground, StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    pokemonContainer: {
        alignItems:"center",
        width: 300,
        height: 300,
        backgroundColor: "#fff"
    },
    image: {
        width: 250,
        height: 250,
        marginTop: 10,
        resizeMode: "contain",
        backgroundColor: "#f2f2f2"
    },
    pokemonName: {
        fontSize:24
    },
    pokemonNumber: {
        color: "#616161"
    }
    
})
