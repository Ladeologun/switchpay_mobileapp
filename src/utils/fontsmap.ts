import PoppinsBlack from '@/assets/fonts/Poppins-Black.ttf';
import PoppinsBold from '@/assets/fonts/Poppins-Bold.ttf';
import PoppinsExtraBold from '@/assets/fonts/Poppins-ExtraBold.ttf';
import PoppinsExtraLight from '@/assets/fonts/Poppins-ExtraLight.ttf';
import PoppinsLight from '@/assets/fonts/Poppins-Light.ttf';
import PoppinsMedium from '@/assets/fonts/Poppins-Medium.ttf';
import PoppinsRegular from '@/assets/fonts/Poppins-Regular.ttf';
import PoppinsSemiBold from '@/assets/fonts/Poppins-SemiBold.ttf';
import PoppinsThin from '@/assets/fonts/Poppins-Thin.ttf';
import { FONTS } from '@/constants/Fonts';

export const fontsMap: Record<string, number> = {
  [FONTS.POPPINS_BLACK]: PoppinsBlack,
  [FONTS.POPPINS_BOLD]: PoppinsBold,
  [FONTS.POPPINS_EXTRA_BOLD]: PoppinsExtraBold,
  [FONTS.POPPINS_EXTRA_LIGHT]: PoppinsExtraLight,
  [FONTS.POPPINS_LIGHT]: PoppinsLight,
  [FONTS.POPPINS_MEDIUM]: PoppinsMedium,
  [FONTS.POPPINS_REGULAR]: PoppinsRegular,
  [FONTS.POPPINS_SEMI_BOLD]: PoppinsSemiBold,
  [FONTS.POPPINS_THIN]: PoppinsThin,
};