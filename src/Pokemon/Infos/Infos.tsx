import { View, Text } from 'react-native';
import { styles } from "./styles"

const Infos = () => {
    return (
        <View style={styles.infosContainer}>
            <Text style={styles.description}>It is said that Charizard’s fire burns hotter if it has experienced harsh battles.</Text>
            <View style={styles.datas}>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Height</Text>
                    <Text>1.7 m</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Weight</Text>
                    <Text>90.5 kg m</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Category</Text>
                    <Text>Flame</Text>
                </View>
                <View style={styles.data}>
                    <Text style={styles.dataTitle}>Abilities</Text>
                    <Text>Blaze</Text>
                </View>
            </View>
        </View>
    );
};

export default Infos;
