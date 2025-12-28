import { StyleSheet } from "react-native";
import { BOX_SIZING } from "@/constants/Sizing";
import { COLOURS } from "@/constants/Colors";

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.dark.background
    },
    mainContainer: {
        flex: 1,
        // backgroundColor:"red"
    },
    mainContainerContent: {
        paddingHorizontal: BOX_SIZING.PADDING_HORIZONTAL,
        // flexGrow: 1
    }
});

export default styles;
