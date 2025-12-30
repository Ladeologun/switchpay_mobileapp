import { Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styles from "./styles";


const ExploreScreen:React.FC =  () => {
    
    return (
        <SafeAreaView style={[styles.wrapper, styles.loadingWrapper]}>
            <Text style={styles.TextStyle} >WIP: EXPLORE FEATURE</Text>
        </SafeAreaView>

    )
}

export default ExploreScreen;
