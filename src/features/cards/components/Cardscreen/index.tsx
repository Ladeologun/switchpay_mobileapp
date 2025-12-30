
import { Text } from "react-native";
import styles from "./styles";
import { SafeAreaView } from "react-native-safe-area-context";


const CardScreen:React.FC =  () => {
    
    return (
        <SafeAreaView style={[styles.wrapper, styles.loadingWrapper]}>
                <Text style={styles.TextStyle} >WIP: CARDS FEATURE</Text>
        </SafeAreaView>

    )
}

export default CardScreen;
