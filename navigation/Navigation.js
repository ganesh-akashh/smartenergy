import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from "../screens/HomeScreen"
import WelcomeScreen from '../screens/WelcomeScreen';
import { useState } from 'react';
import SplashScreenn from '../screens/SplashScreenn';

const Stack = createNativeStackNavigator();



const Navigation = () => {

    const [loading, setLoading] = useState(false);
    const [userData,setUserData]=useState(false);


    if(loading){
        return(
            <SplashScreenn />
        )
    }

    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Welcome">
                <Stack.Screen name='Welcome' options={{ headerShown: false }} component={WelcomeScreen} />
                <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
                <Stack.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Navigation