import { COLOURS } from "@/constants/Colors";
import { FONTS } from "@/constants/Fonts";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  TextStyle: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    color: COLOURS.light.accentDeepYellow,
    fontSize: 11,
    lineHeight: 22,
  },
  wrapper: {
    flex: 1,
    backgroundColor: COLOURS.light.greyBlue,
  },
  loadingWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
});
