import 'react-native-reanimated';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import * as React from 'react';
import { useColorScheme } from 'react-native';

import { COLOURS } from './constants/Colors';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { fontsMap } from './utils/fontsmap';

SplashScreen.preventAutoHideAsync();

export function App() {
  const colorScheme = useColorScheme();
  const [loaded] = useFonts(fontsMap);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

   if (loaded) {
        SplashScreen.hide();
    }

  const theme = 
    colorScheme === 'dark'
      ? {
          ...DarkTheme,
          colors: { ...DarkTheme.colors, primary: COLOURS[colorScheme ?? 'light'].tint },
        }
      : {
          ...DefaultTheme,
          colors: { ...DefaultTheme.colors, primary: COLOURS[colorScheme ?? 'light'].tint },
        };

  return (
    <SafeAreaProvider>
      <Navigation
        // theme={theme}
        // linking={{
        //   enabled: 'auto',
        //   prefixes: [
        //     // Change the scheme to match your app's scheme defined in app.json
        //     'helloworld://',
        //   ],
        // }}
        // onReady={() => {
        //   SplashScreen.hideAsync();
        // }}
      />
    </SafeAreaProvider>
  );
}
