import { View, Text, TouchableOpacity, Image } from 'react-native'
import React from 'react'


const DepartmentCard = ({ title, imgUrl }) => {


  return (
    <TouchableOpacity className="rounded-md mb-4  border mt-3  flex  border-[#f8f8f9]  shadow-sm bg-[#FFFFFF]">

      <View className="flex flex-row space-x-4 items-center justify-center">
     
        <Text style={{ fontFamily: 'poppins-regular' }} className="text-xl text-gray-800 text-center  py-5">
          {title} Block
        </Text>
      </View>

    </TouchableOpacity>
  )
}

export default DepartmentCard