import React from 'react';
import { View, Text, KeyboardAvoidingView, TouchableOpacity, TextInput, ActivityIndicator, TouchableWithoutFeedback, Image, Keyboard } from 'react-native'
import Animated, { FadeInUp, FadeInDown, } from 'react-native-reanimated';

const LoginScreen = () => {
    return (
        <TouchableWithoutFeedback
            onPress={() => Keyboard.dismiss()}
        >
            <KeyboardAvoidingView
                className="flex-1 bg-white"
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View className="flex-1 mb-[12%]  flex-row justify-center items-end">
                    <Animated.Image
                        entering={FadeInUp.delay(200).duration(1000).springify()}
                        source={require('../assets/images/logo.jpeg')}
                        style={{ width: 250, height: 180 }}
                    />
                </View>

                <View
                    className="flex-1   px-4 pt-10 space-y-3 border border-[#dadde0]"
                    style={{ borderTopLeftRadius: 50, borderTopRightRadius: 50 }}
                >
                    <View className="flex items-center mx-5 space-y-4">
                        <Animated.View
                            entering={FadeInDown.duration(1000).springify()}
                            className="border border-gray-500 p-[5%] rounded-2xl w-full">
                            <TextInput
                                placeholder="Email Address"
                                placeholderTextColor={'gray'}
                                style={{ fontFamily: 'poppins-semibold' }}
                            />
                        </Animated.View>

                        <Animated.View
                            entering={FadeInDown.delay(200).duration(1000).springify()}
                            className=" border p-[5%] border-gray-500 rounded-2xl w-full mb-3">
                            <TextInput
                                placeholder="Password"
                                placeholderTextColor={'gray'}
                                secureTextEntry
                                style={{ fontFamily: 'poppins-semibold' }}
                            />
                        </Animated.View>

                        <Animated.View
                            className="w-full"
                            entering={FadeInDown.delay(400).duration(1000).springify()}>

                            <TouchableOpacity className="w-full bg-emerald-800 p-[4%] rounded-xl mb-3">
                                <Text className="font-medium text-white  text-center" style={{ fontFamily: 'poppins-semibold' }}>Sign In</Text>
                            </TouchableOpacity>
                        </Animated.View>
                    </View>
                </View>
            </KeyboardAvoidingView>
        </TouchableWithoutFeedback>
    )
}

export default LoginScreen