import { View, Text, SafeAreaView, StatusBar, ScrollView, Image, Pressable, TouchableOpacity, Dimensions, ActivityIndicator, Platform } from 'react-native'
import Navbar from '../components/shared/Navbar'
import { useEffect, useState } from 'react'
import { db } from '../firebase'


import { onValue, ref } from "firebase/database"
import ImageSlider from '../components/shared/ImageSlider';

const HomeScreen = () => {

  const [voltageData1, setVoltageData1] = useState([]);
  const [voltageData2, setVoltageData2] = useState([]);
  const [voltageData3, setVoltageData3] = useState([]);

  const [currentData1, setCurrentData1] = useState([]);
  const [currentData2, setCurrentData2] = useState([]);
  const [currentData3, setCurrentData3] = useState([]);





  useEffect(() => {
    try {
      const databaseRef = ref(db);
      console.log(databaseRef);
      if (databaseRef) {
        onValue(databaseRef, (snapshot) => {
          const newData = snapshot.val();

          console.log(newData.phase1);
          if (newData != null && newData.phase1 != null && newData.phase2 != null && newData.phase3 != null) {
            setVoltageData1(newData.phase1.voltage);
            setVoltageData2(newData.phase2.voltage);
            setVoltageData3(newData.phase3.voltage);
            setCurrentData1(newData.phase1.current);
            setCurrentData2(newData.phase2.current);
            setCurrentData3(newData.phase3.current);
          } else {
          }
        });
      }
    } catch (error) {
      console.log(error);
    }
  }, []);


  return (
    <SafeAreaView className="flex-1 bg-[#FFFFFF] flex space-y-3" edges={['top']}>
      <StatusBar style="dark" />
      <Navbar type="main" />

      {voltageData1.length == 0 ?
        (
          <View className="flex-1 justify-center items-center">
            <ActivityIndicator color="black" />
          </View>
        ) : (
          <ScrollView className="flex-1 bg-[#FFFFFF]" bounces={true} overScrollMode={Platform.OS === 'android' ? 'always' : 'auto'} >
            <View className="flex-1  py-4">

              <ImageSlider />
              <View

                className="px-4"
              >
                <Text
                  style={{ fontFamily: 'poppins-semibold' }}
                  className="text-xl mt-10"
                >
                  Voltage Levels :
                </Text>

                <View className="flex flex-row items-center">
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="text-gray-800 px-2  mt-4  text-xl"
                  >R - Phase  :</Text>
                  <Text
                    style={{ fontFamily: 'poppins-regular' }}
                    className="text-gray-800 px-2  mt-4  text-lg"
                  >{voltageData1} volts</Text>
                </View>

                <View className="flex flex-row items-center">
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="text-gray-800 px-2  mt-4  text-xl"
                  >Y - Phase :</Text>
                  <Text
                    style={{ fontFamily: 'poppins-regular' }}
                    className="text-gray-800 px-2  mt-4  text-lg"
                  >{voltageData2} volts</Text>
                </View>

                <View className="flex flex-row items-center">
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="text-gray-800 px-2  mt-4  text-xl"
                  >B - Phase :</Text>
                  <Text
                    style={{ fontFamily: 'poppins-regular' }}
                    className="text-gray-800 px-2  mt-4  text-lg"
                  >{voltageData3} volts</Text>
                </View>

                <Text
                  style={{ fontFamily: 'poppins-semibold' }}
                  className="text-xl  mt-4"
                >
                  Current Levels :
                </Text>

                <View className="flex flex-row items-center">
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="text-gray-800 px-2  mt-4  text-xl"
                  >R - Phase :</Text>
                  <Text
                    style={{ fontFamily: 'poppins-regular' }}
                    className="text-gray-800 px-2  mt-4  text-lg"
                  >{currentData1} amps</Text>
                </View>

                <View className="flex flex-row items-center">
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="text-gray-800 px-2  mt-4  text-xl"
                  >Y - Phase :</Text>
                  <Text
                    style={{ fontFamily: 'poppins-regular' }}
                    className="text-gray-800 px-2  mt-4  text-lg"
                  >{currentData2} amps</Text>
                </View>

                <View className="flex flex-row pb-4 items-center">
                  <Text
                    style={{ fontFamily: 'poppins-semibold' }}
                    className="text-gray-800 px-2  mt-4  text-xl"
                  >B - Phase :</Text>
                  <Text
                    style={{ fontFamily: 'poppins-regular' }}
                    className="text-gray-800 px-2  mt-4  text-lg"
                  >{currentData3} amps</Text>
                </View>
              </View>
            </View>
          </ScrollView>

        )
      }


    </SafeAreaView>
  )
}

export default HomeScreen;
