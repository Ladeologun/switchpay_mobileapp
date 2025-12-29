import 'react-native-reanimated';
import { DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useFonts } from 'expo-font';
import * as SplashScreen from 'expo-splash-screen';
import FlashMessage from "react-native-flash-message";
import * as React from 'react';
// import { useColorScheme } from 'react-native';

// import { COLOURS } from './constants/Colors';
import Navigation from './navigation';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { fontsMap } from './utils/fontsmap';
import { Provider } from 'react-redux';
import { persistor, store } from './store';
import { PersistGate } from 'redux-persist/integration/react';

SplashScreen.preventAutoHideAsync();

const queryClient = new QueryClient();

export function App() {
  // const colorScheme = useColorScheme();
  const [loaded] = useFonts(fontsMap);

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

   if (loaded) {
        SplashScreen.hide();
    }

  // const theme = 
  //   colorScheme === 'dark'
  //     ? {
  //         ...DarkTheme,
  //         colors: { ...DarkTheme.colors, primary: COLOURS[colorScheme ?? 'light'].tint },
  //       }
  //     : {
  //         ...DefaultTheme,
  //         colors: { ...DefaultTheme.colors, primary: COLOURS[colorScheme ?? 'light'].tint },
  //       };

  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <QueryClientProvider client={queryClient}>
          <PersistGate loading={null} persistor={persistor}> 
            <Navigation/>
          </PersistGate>
          <FlashMessage position="top" />
        </QueryClientProvider>
      </Provider>
    </SafeAreaProvider>
  );
}
