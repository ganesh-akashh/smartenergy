import React from 'react'
import { SafeAreaView } from 'react-native'
import Animated, { FadeInUp } from 'react-native-reanimated';

const SplashScreenn = () => {
    return (
        <SafeAreaView className="flex-1 justify-center items-center">
            <Animated.Image
                entering={FadeInUp.delay(200).duration(1000).springify()}
                source={require('../assets/images/skcet.png')}
                style={{width:240,height:240}}
            />
        </SafeAreaView>
    )
}

export default SplashScreenn