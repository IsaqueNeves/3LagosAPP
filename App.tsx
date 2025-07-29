

import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Login from './scr/pages/login';
import Menu from './scr/pages/menu';
import Routes from './scr/routes/index.routes';


const Stack = createNativeStackNavigator();

 export default function App() {
  return (
    <NavigationContainer>
      <Routes />
    </NavigationContainer>
    

  );
}


