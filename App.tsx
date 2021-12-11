import React from 'react';
import { StatusBar } from 'react-native';
import { useFonts } from 'expo-font';
import AppLoading from 'expo-app-loading';
import { ThemeProvider } from 'styled-components';

import { Home } from './src/pages/Home';

import theme from './src/theme/theme';

export default function App(){
  
  let [fontsLoaded] = useFonts({
    sf_pro_display_bold: require("./assets/fonts/sf-pro-display-bold.ttf"),
    sf_pro_display_medium: require("./assets/fonts/sf-pro-display-medium.ttf"),
    sf_pro_display_regular: require("./assets/fonts/sf-pro-display-regular.ttf"),
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }

  return(
    <ThemeProvider theme={theme} >
      <StatusBar
        translucent
        barStyle="dark-content"
        backgroundColor="transparent"
      />
      <Home />
    </ThemeProvider>
  );
};