import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native'
import { ArrowRightStartOnRectangleIcon, Bars3CenterLeftIcon, ChevronLeftIcon } from 'react-native-heroicons/outline'
import Animated, { FadeInUp } from 'react-native-reanimated'
import { useNavigation } from '@react-navigation/native'
import { useDispatch } from 'react-redux'
import { signOut } from 'firebase/auth';
import { auth } from '../../firebase';

const Navbar = ({ type }) => {

  const screenWidth = Dimensions.get('window').width;
  const marginValue = screenWidth * 0.045;
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await signOut(auth)
      await AsyncStorage.clear();
      dispatch(removeAuth())
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <View className="flex-row justify-between items-center px-5" style={{ marginTop: marginValue }}>
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
      >
        {type === "main" ?
          <TouchableOpacity
            onPress={() => navigation.openDrawer()}
          >
            <Bars3CenterLeftIcon color="black" strokeWidth={2} size="28" />
          </TouchableOpacity> :
          <TouchableOpacity
            onPress={() => navigation.goBack()}
          >

            <ChevronLeftIcon color="black" strokeWidth={2} size="24" />
          </TouchableOpacity>
        }
      </Animated.View>
      <Animated.View
        className="flex-row gap-1 justify-center items-center"
        entering={FadeInUp.delay(200).duration(1000).springify()}
      >
        <Image
          source={require('../../assets/images/login.jpg')}
          style={{ width: 30, height: 30 }}
        />
        <Text
          style={{ fontFamily: 'poppins-semibold' }}
          className="text-2xl   tex"
        >
          SKCET
        </Text>
      </Animated.View>
      <Animated.View
        entering={FadeInUp.delay(200).duration(1000).springify()}
      >

        <TouchableOpacity
          onPress={handleLogout}
          className="p-2"
        >

          <ArrowRightStartOnRectangleIcon color="black" strokeWidth={2} size="27" />
        </TouchableOpacity>
      </Animated.View>
    </View>
  )
}

export default Navbar