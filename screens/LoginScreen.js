import React, { useState } from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ActivityIndicator, TouchableWithoutFeedback, Keyboard, StatusBar, Image } from 'react-native'
import Animated, { FadeInUp, FadeInDown, } from 'react-native-reanimated';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from "../firebase"
import { useNavigation } from '@react-navigation/native';



const LoginScreen = () => {

    const [formValues, setFormValues] = useState({
        email: '',
        password: '',
    });

    const navigation = useNavigation();


    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);

    const handleChange = (name, value) => {
        setFormValues({ ...formValues, [name]: value });
    };

    const handleSubmit = async () => {
        setLoading(true);
        try {
            const response = await signInWithEmailAndPassword(auth, formValues.email, formValues.password);
            if (response.user) {
                navigation.navigate("Home");
            }
        } catch (error) {
            console.log(error.message);
            setError(true);
        } finally {
            setLoading(false);
        }
    }

    return (
        <>
            <StatusBar color="light" />
            <TouchableWithoutFeedback
                onPress={() => Keyboard.dismiss()}
            >
                <KeyboardAvoidingView
                    className="flex-1 bg-white"
                    behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
                >
                    <View className="flex-1  justify-end mb-[12%] items-center">
                        <Image
                            source={require('../assets/images/skcet.png')}
                            style={{ width: 160, height: 160 }}
                        />
                    </View>
                    <View
                        className={`flex-[0.8]  px-4 pt-10 space-y-3 border   border-[#dadde0] `}
                        style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                    >
                        <View className="flex items-center mx-5  space-y-4">
                            <View
                                className={`border p-[5%] ${error ? "border-red-500" : "border-gray-500"} rounded-2xl w-full mb-1`}>
                                <TextInput
                                    placeholder="Email Address"
                                    value={formValues.email}
                                    name="email"
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => handleChange('email', text)}
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    keyboardType="email-address"
                                    className="text-gray-700"
                                    autoCapitalize='none'
                                />
                            </View>

                            <View
                                className={`border p-4 ${error ? "border-red-500" : "border-gray-500"} relative  rounded-2xl w-full mb-1`}>
                                <TextInput
                                    placeholder="Password"
                                    value={formValues.password}
                                    placeholderTextColor={'gray'}
                                    onChangeText={(text) => handleChange('password', text)}
                                    name="password"
                                    secureTextEntry
                                    style={{ fontFamily: 'poppins-semibold' }}
                                    className="text-gray-700"
                                />
                            </View>

                            <View
                                className="w-full"
                            >
                                <TouchableOpacity
                                    onPress={handleSubmit} className={`w-full bg-blue-800  p-[4%] rounded-xl mb-3`}
                                >
                                    {loading ?
                                        <ActivityIndicator color="white" /> :
                                        <Text className="font-medium text-white  text-center" style={{ fontFamily: 'poppins-semibold' }}>Sign In</Text>
                                    }
                                </TouchableOpacity>
                            </View>
                        </View>
                    </View>
                </KeyboardAvoidingView>
            </TouchableWithoutFeedback>
        </>
    )
}

export default LoginScreen