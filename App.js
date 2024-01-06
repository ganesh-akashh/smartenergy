import React, { useCallback, useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useFonts } from 'expo-font';
import LoginScreen from './screens/LoginScreen';
import * as SplashScreen from 'expo-splash-screen';

SplashScreen.preventAutoHideAsync();

const Stack = createNativeStackNavigator();

const App = () => {

 const [fontsLoaded] = useFonts({
    'poppins-regular': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-light': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-medium': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-semibold': require('./assets/fonts/Poppins-SemiBold.ttf'),
  });

  const [appIsReady, setAppIsReady] = useState(false);

  const loadAssetsAsync = async () => {
    await SplashScreen.hideAsync();
  };

  useEffect(() => {
    if (fontsLoaded) {
      loadAssetsAsync().then(() => setAppIsReady(true));
    }
  }, [fontsLoaded]);

  if (!appIsReady) {
    return null;
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
