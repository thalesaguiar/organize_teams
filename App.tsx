import { ThemeProvider } from 'styled-components';
import { StatusBar } from 'react-native';
import { useFonts, Roboto_400Regular,Roboto_700Bold } from '@expo-google-fonts/roboto';
import { Loading } from '@components/loading';
import theme from './src/theme'

import { NewGroup } from "@screens/NewGroup";
import { Header } from '@components/header';
import { Players } from '@screens/Players';
import { Groups } from '@screens/Groups';

import  { Routes } from './src/routes';

export default function App() {
  const [fontsLoaded] = useFonts({ Roboto_400Regular, Roboto_700Bold });
  return (
    <ThemeProvider theme={theme}>
      <StatusBar
        barStyle='light-content'
        backgroundColor='transparent'
        translucent
      />
      {fontsLoaded ? <Routes /> : <Loading />}
    </ThemeProvider>
  );
}
