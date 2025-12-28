import { COLOURS } from "@/constants/Colors"
import { FONTS } from "@/constants/Fonts"
import { BOX_SIZING } from "@/constants/Sizing"
import { fontsMap } from "@/utils/fontsmap"
import { act } from "react"
import { StyleSheet } from "react-native"
 
export default StyleSheet.create({
    inputContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        height: 45,
        borderRadius: 8,
        backgroundColor: "#1F2A33",
        paddingHorizontal: 16,
       
    },
    labelText:{
        fontFamily: FONTS.POPPINS_LIGHT,
        fontSize: 10,
        textTransform: 'uppercase',
        letterSpacing:1.1,
        color: COLOURS.dark.textGrey,
        marginBottom: 10
    },
    textInputStyle:{
        fontFamily: FONTS.POPPINS_MEDIUM,
        fontSize: 12,
        color: COLOURS.dark.white,
        letterSpacing:1.1,
        flex:1,
        height:40
    },
    wrapper: {
        // backgroundColor: COLOURS.dark.background,
        flex:1,
        marginBottom:24
    },
    errorText:{
        fontFamily: FONTS.POPPINS_REGULAR,
        fontSize: 10,
        color: COLOURS.dark.red,
        marginTop:6
    }   // backgroundColor:"#1E2730"
    
 })
 