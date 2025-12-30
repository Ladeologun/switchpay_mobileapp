import { COLOURS } from "@/constants/Colors"
import { FONTS } from "@/constants/Fonts"
import { BOX_SIZING } from "@/constants/Sizing"
import { StyleSheet } from "react-native"
 
export default StyleSheet.create({
   
    avatarWrapper:{
        width: 40,
        height: 40,
        borderRadius: 20,
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
    },
    accountDetailsContainer:{
        marginTop: 24,
        width: "100%",
        backgroundColor: "#276EF1",
        borderRadius: 12,
        paddingTop: 14,
        paddingHorizontal: 16,
        paddingVertical: 16,
        // height:170
    },
    scrollViewContent:{
        paddingBottom: 32,
        paddingHorizontal:16,
        backgroundColor: COLOURS.dark.background,
        flexGrow:1
        // flex:1
    },
    currencySection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#1E5DEB",
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12
    },
    currencyText: {
        fontSize: 14,
        letterSpacing: 0.7,
        color: COLOURS.light.white
    },
    withdrawCTA: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        gap: 3,
        paddingHorizontal: 18,
        paddingVertical: 6,
        borderRadius: 16,
        height: 32,
        backgroundColor: COLOURS.light.white,
    },
    withdrawText: {
        fontSize: 14,
        fontFamily: FONTS.POPPINS_REGULAR,
        color: COLOURS.light.accentDark
    },

    availableBalanceHeaderText: {
        fontFamily:FONTS.POPPINS_SEMI_BOLD,
        textTransform: "uppercase",
        color: COLOURS.light.white,
        letterSpacing: 1.5,
        fontSize: 11,
        marginTop: 24,
        lineHeight: 21,
        alignSelf: "flex-start"
    },
    hashIconstyle: {
        alignItems: "center",
        justifyContent: "center",
        paddingVertical: 17.3,
    },
     statementButton: {
        backgroundColor: "#1E5DEB",
        borderRadius: 25,
        paddingHorizontal: 8,
        paddingVertical: 4,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 8,
        alignSelf: "flex-start",
    },
    statementText: {
        color: COLOURS.light.white,
        fontFamily: FONTS.POPPINS_MEDIUM,
        fontSize: 12,
        marginRight: 8,
        lineHeight: 22
    },
    balanceCurrencySymbol: {
        fontSize: 22
    },
    balanceValue: {
        fontFamily: FONTS.POPPINS_SEMI_BOLD,
        fontSize: 32,
        color: COLOURS.light.white
    },
    balanceSection: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        alignSelf: "flex-start",
        // backgroundColor:"red"
    },
    cardValue: {
        // ...Typography.bodyLargeBold,
        fontSize: 32,
        marginTop: 7,
        color: COLOURS.light.white,
        // fontWeight: "bold"
    },
    eyeIcon: {
        backgroundColor: "#1E5DEB",
        height: 30,
        width: 30,
        borderRadius: 15,
        alignItems: "center",
        justifyContent: "center",
        marginLeft: 8
    },
    
 })
 