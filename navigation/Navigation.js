import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from "../screens/HomeScreen"
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { auth } from '../firebase';
import { onAuthStateChanged } from 'firebase/auth';
import { loadAuth } from '../redux/reducers/auth';
import DrawerContent from '../components/shared/DrawerContent';
import { createDrawerNavigator } from '@react-navigation/drawer';
import DepartmentScreen from '../screens/DepartmentScreen';
import AdminBlockScreen from '../screens/AdminBlockScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();


const Navigation = () => {

    const [loading, setLoading] = useState(false);

    const [userData, setUserData] = useState(false);

    const dispatch = useDispatch();


    useEffect(() => {
        const fetchData = async () => {
            try {
                setLoading(true);
                const unsubscribe = onAuthStateChanged(auth, async (user) => {
                    if (user) {
                        setUserData(true)
                        dispatch(
                            loadAuth({
                                uid: user.uid
                            })
                        )
                    } else {
                        setUserData(false)
                    }
                    setLoading(false)
                })
                return () => unsubscribe();
            } catch (error) {
                console.log("Auth State changed", error);
            }
        }

        fetchData();
    }, [])


    if (loading) {
        return null;
    }
    
    return (
        <NavigationContainer>
            <Stack.Navigator>
                {userData ?
                    <Stack.Screen name="Main" options={{ headerShown: false }}>
                        {() => (
                            <Drawer.Navigator
                                initialRouteName="Home"
                                drawerContent={(props) => <DrawerContent {...props}
                                    screenOptions={{ swipeEnabled: false }}
                                />
                                }
                            >
                                <Drawer.Screen name="Home" options={{ headerShown: false }} component={HomeScreen} />
                                <Drawer.Screen name='Department' options={{headerShown:false}} component={DepartmentScreen} />
                                <Drawer.Screen name='Admin' options={{headerShown:false}} component={AdminBlockScreen} />
                            </Drawer.Navigator>
                        )}
                    </Stack.Screen>

                    : (
                        <>
                            <Stack.Screen name="Login" options={{ headerShown: false }} component={LoginScreen} />
                        </>
                    )}
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default Navigation;