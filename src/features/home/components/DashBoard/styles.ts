import { COLOURS } from "@/constants/Colors";
import { FONTS } from "@/constants/Fonts";
import { BOX_SIZING } from "@/constants/Sizing";
import { fontsMap } from "@/utils/fontsmap";
import { act } from "react";
import { StyleSheet } from "react-native";

export default StyleSheet.create({
  wrapper: {
    // backgroundColor: COLOURS.dark.background,
    flex: 1,
    backgroundColor: COLOURS.light.greyBlue,
  },
  loadingWrapper: {
    justifyContent: "center",
    alignItems: "center",
  },
  header: {
    paddingHorizontal: BOX_SIZING.PADDING_HORIZONTAL,
    paddingVertical: BOX_SIZING.PADDING_VERTICAL,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: COLOURS.light.greyBlue,
  },
  pressableContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2A3440",
    justifyContent: "center",
    alignItems: "center",
  },
  subWrapper: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 16,
  },
  avatarWrapper: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "grey",
    justifyContent: "center",
    alignItems: "center",
  },
  accountDetailsContainer: {
    marginTop: 24,
    // paddingHorizontal: BOX_SIZING.PADDING_HORIZONTAL,

    width: "100%",
    backgroundColor: "#276EF1",
    borderRadius: 12,
    paddingTop: 14,
    paddingHorizontal: 16,
    paddingVertical: 16,
    // height:170
  },
  scrollViewContent: {
    paddingBottom: 32,
    paddingHorizontal: 16,
    backgroundColor: COLOURS.dark.background,
    flexGrow: 1,
    // flex:1
  },
  currencySection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1E5DEB",
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  currencyText: {
    fontSize: 14,
    letterSpacing: 0.7,
    color: COLOURS.light.white,
    // fontFamily: Fonts.CalibreMedium,
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
    color: COLOURS.light.accentDark,
  },

  availableBalanceHeaderText: {
    // ...Typography.bodyExtraSmallMedium,
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    textTransform: "uppercase",
    color: COLOURS.light.white,
    letterSpacing: 1.5,
    fontSize: 11,
    marginTop: 24,
    lineHeight: 21,
    alignSelf: "flex-start",
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
    lineHeight: 22,
  },
  balanceCurrencySymbol: {
    fontSize: 22,
  },
  balanceValue: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: 32,
    color: COLOURS.light.white,
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
    marginLeft: 8,
  },
  recentActivityHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: 32,
    marginBottom: 16,
  },
  activityHeaderText: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: 16,
    color: COLOURS.light.white,
  },
  seeAllButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 4,
  },
  seeAllText: {
    fontFamily: FONTS.POPPINS_MEDIUM,
    fontSize: 14,
    // color: COLOURS.light.white
    color: COLOURS.light.accentDeepYellow,
  },
  activityItemContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 12,
    paddingHorizontal: 12,
    // borderBottomWidth: 1,
    // borderBottomColor: "#2A3440",
    backgroundColor: "#1F2A36",
    borderRadius: 8,
    gap: 12,
    marginBottom: 12,
  },
  activityItemDetails: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  activityIconContainer: {
    width: 40,
    height: 40,
    borderRadius: 20,
    backgroundColor: "#2A3440",
    justifyContent: "center",
    alignItems: "center",
  },
  activityItemDetailsWrapper: {
    flex: 1,
  },
  activityItemText: {
    fontFamily: FONTS.POPPINS_SEMI_BOLD,
    fontSize: 11,
    lineHeight: 22,
    color: COLOURS.light.white,
  },
  activityItemTextStyle: {
    fontFamily: FONTS.POPPINS_EXTRA_LIGHT,
    fontSize: 11,
    lineHeight: 22,
    color: COLOURS.light.white,
  },
});
