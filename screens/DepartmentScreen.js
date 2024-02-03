import { View, Text, SafeAreaView, StatusBar, ScrollView } from 'react-native'
import Navbar from '../components/shared/Navbar'
import DepartmentCard from '../components/cards/DepartmentCard'


const departments = [
    {
        title: "EEE",
        imgUrl: "",
    },
    {
        title: "ECE",
        imgUrl: "",
    },
    {
        title: "MCT",
        imgUrl: "",
    },
    {
        title: "CIVIL",
        imgUrl: "",
    },
    {
        title: "MECH",
        imgUrl: "",
    },
    {
        title: "MCA",
        imgUrl: "",
    },
    {
        title: "MBA",
        imgUrl: "",
    }
]




const DepartmentScreen = () => {
    return (
        <SafeAreaView className="flex-1 bg-[#FFFFFF] flex space-y-3" edges={['top']}>
            <StatusBar style="light" />
            <Navbar type="main" />
            <ScrollView className="flex-1  ">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl text-center p-3 my-4">
                    Department Blocks
                </Text>
                <View className="flex-1 bg-[#f8f8f8]" >
                    <View className="py-3  px-4">
                        {departments.map((item, index) => (
                            <DepartmentCard key={index} title={item.title} imgUrl={item.imgUrl} />
                        ))}
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default DepartmentScreen