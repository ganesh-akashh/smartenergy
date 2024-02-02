import { View, Text, SafeAreaView, StatusBar } from 'react-native'
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
            <StatusBar style="dark" />
            <Navbar type="main" />
            <View className="flex-1 bg-[#f8f8f8] space-y-3">
                <Text style={{ fontFamily: 'poppins-semibold' }} className="text-2xl text-center p-3 mt-5">
                    Department Blocks
                </Text>
                <View className="py-4 px-3">
                    <DepartmentCard />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DepartmentScreen