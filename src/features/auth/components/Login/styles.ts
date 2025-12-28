import { COLOURS } from "@/constants/Colors"
import { FONTS } from "@/constants/Fonts"
import { StyleSheet } from "react-native"
 
export default StyleSheet.create({
    header:{
        marginTop: 24,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 8,
        marginBottom:24
    },
    headerText: {
        fontFamily: FONTS.POPPINS_SEMI_BOLD,
        fontSize: 24,
        color: COLOURS.dark.white,
       
    },
    headerDescText:{
        fontFamily: FONTS.POPPINS_LIGHT,
        fontSize: 12,
        color: COLOURS.dark.textGrey,
        textAlign: 'center',
        lineHeight: 20
    },
    input:{
        height: 48,
        borderRadius: 8,
        backgroundColor: COLOURS.dark.accentDeepYellow,
        paddingHorizontal: 16,
        fontFamily: FONTS.POPPINS_REGULAR,
        fontSize: 14,
        color: COLOURS.dark.white,
        marginBottom:20
    },
    altInfoTextWrapper:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        gap:4,
        marginTop:20
    },
    infoText:{
        fontFamily:FONTS.POPPINS_REGULAR,
        fontSize:14,
        color:COLOURS.dark.textGrey
    },
    infoSignInText:{
        fontFamily:FONTS.POPPINS_SEMI_BOLD,
        fontSize:14,
        color:COLOURS.light.accentDeepYellow
    },
    bankIconWrapper:{
        justifyContent:'center',
        alignItems:'center',
        height:50,
        width:60,
        borderRadius:10,
        backgroundColor:COLOURS.dark.blue
    },
    bankIconContainer:{
        justifyContent:'center',
        alignItems:'center',
        marginTop:42,
    }
    
 })
 