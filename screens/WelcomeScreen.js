import { View, Text, SafeAreaView, TouchableOpacity, Image, Dimensions } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';


const WelcomeScreen = () => {

    const navigation = useNavigation();

    const screenWidth = Dimensions.get('window').width;
    const marginValue = screenWidth * 0.2;
    return (
        <LinearGradient className="flex-1" colors={["#06aef4", "#256eb9"]}>
            <View className="flex-[0.45] justify-center items-center" style={{ marginTop: marginValue }}>
                <Image
                    source={require('../assets/images/welcome.jpg')}
                    style={{ width: 250, height: 250 }}
                    className="rounded-sm"
                />
            </View>

            <View className=" flex-[0.5]  justify-around  px-3 py-1 " >
                <View>
                    <Text
                        style={{ fontFamily: 'poppins-semibold' }}
                        className="text-white text-6xl p-2"
                    >
                        Let's Get
                    </Text>
                    <Text
                        style={{ fontFamily: 'poppins-semibold' }}
                        className="text-white text-6xl px-2  pt-1 pb-2"
                    >
                        Started
                    </Text>
                    <Text
                        style={{ fontFamily: 'poppins-medium' }}
                        className="text-white text-base px-3 py-2"
                    >
                        Revolutionize your campus towards a greener future with our Energy Efficiency Monitoring App.
                    </Text>
                </View>
                <View>
                    <TouchableOpacity className="px-2 py-3 rounded-xl bg-yellow-500" onPress={()=> navigation.navigate("Login")}>
                        <Text
                            style={{ fontFamily: 'poppins-semibold' }}
                            className="text-gray-800 text-center text-base"
                        >Explore now</Text>
                    </TouchableOpacity>
                </View>

            </View>
        </LinearGradient>

    )
}

export default WelcomeScreen