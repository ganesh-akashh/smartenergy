
import React from 'react';
import { View, Text, TouchableOpacity, SafeAreaView, Image, Dimensions, ScrollView } from 'react-native';
import { HomeIcon, ShieldCheckIcon, ExclamationTriangleIcon, BookOpenIcon, BuildingLibraryIcon, BuildingOfficeIcon, HomeModernIcon, BuildingStorefrontIcon, WifiIcon, LightBulbIcon } from 'react-native-heroicons/outline'

const DrawerContent = ({ navigation }) => {

  const handleDrawerItemPress = (screenName) => {
    navigation.navigate(screenName);
  };

  const screenWidth = Dimensions.get('window').width;
  const marginValue = screenWidth * 0.18;

  return (
    <SafeAreaView className="p-1 flex-1 bg-white items-center" style={{ marginTop: marginValue }}>
      <View className="" >
        <Image
          source={require('../../assets/images/skcet.png')}
          style={{ width: 120, height: 120 }}
        />
        <View className="h-[0.7] mt-5  bg-emerald-800" />
      </View>
      <ScrollView>

        <View className=" self-start p-5 flex gap-2 ">
          <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Home')}>
            <HomeIcon color="#286bb9" size={20} />
            <Text className="text-lg text-blue-800" style={{ fontFamily: 'poppins-medium' }}>Home</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Home')}>
            <HomeModernIcon color="#286bb9" size={20} />
            <Text className="text-lg text-blue-800" style={{ fontFamily: 'poppins-medium' }}>Total Energy</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Admin')}>
            <BuildingLibraryIcon color="#286bb9" size={20} />
            <Text className="text-lg text-blue-800" style={{ fontFamily: 'poppins-medium' }}>Admin Block</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Department')}>
            <BuildingStorefrontIcon color="#286bb9" size={20} />
            <Text className="text-lg text-blue-800" style={{ fontFamily: 'poppins-medium' }}>Department Blocks</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Home')}>
            <WifiIcon color="#286bb9" size={20} />
            <Text className="text-lg text-blue-800" style={{ fontFamily: 'poppins-medium' }}>Convention Center</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Home')}>
            <BuildingOfficeIcon color="#286bb9" size={20} />
            <Text className="text-lg text-blue-800" style={{ fontFamily: 'poppins-medium' }}>Food Court</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Home')}>
            <BookOpenIcon color="#286bb9" size={20} />
            <Text className="text-lg text-blue-800" style={{ fontFamily: 'poppins-medium' }}>Library</Text>
          </TouchableOpacity>
          <TouchableOpacity className="flex gap-2 items-center flex-row" onPress={() => handleDrawerItemPress('Home')}>
            <LightBulbIcon color="#286bb9" size={20} />
            <Text className="text-lg text-blue-800" style={{ fontFamily: 'poppins-medium' }}>Others</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DrawerContent;
