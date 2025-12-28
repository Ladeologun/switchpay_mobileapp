import { StyleSheet } from "react-native";
import { COLOURS } from "@/constants/Colors";
import { FONTS } from "@/constants/Fonts";

const styles =  StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: COLOURS.dark.blue,
        justifyContent: 'center',
        alignItems: 'center',
        height: 48,
        borderRadius: 8,
        marginTop:25
    },
    button: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 10,
    },
    buttonTitle: {
        color: COLOURS.dark.white,
        fontFamily: FONTS.POPPINS_BOLD,
        fontSize: 14,
    },
    disabledStyle: {
        backgroundColor: "#2E3440",
        opacity:0.2
    }
  
});

export default styles;
