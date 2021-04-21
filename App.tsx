import React from 'react';
import {
  Jost_400Regular,
  Jost_600SemiBold, useFonts
} from '@expo-google-fonts/jost';
import { StatusBar } from 'react-native';
import { Welcome } from './src/pages/Welcome';
import AppLoading from 'expo-app-loading';
import { UserIdentification } from './src/pages/UserIdentification';
import { Confimation } from './src/pages/Confirmation';

export default function App() {
  const [ fontsLoaded ] = useFonts({
    Jost_400Regular,
    Jost_600SemiBold
  });

  if (!fontsLoaded)
    return <AppLoading />

  return (
    <>
      <StatusBar barStyle='dark-content' backgroundColor='transparent'
      />
      {/* <Welcome /> */}
      {/* <UserIdentification /> */}
      <Confimation />
    </>
  )
}
