import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { HeroImage } from '../assets'
import * as Animatable from 'react-native-animatable';
const Home = () => {

  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (

    <SafeAreaView className=' flex-1 relative'>
      {/* // Header Section  */}
      <View className="flex-row px-5 py-5 ">
        <View className="justify-center w-[60px] h-[60px] bg-[#000000] rounded-full items-center">
          <Text className='text-[#00BDCA] font-semibold text-3xl'>Go</Text>
        </View>
        <View className="justify-center px-2">
          <Text className='font-semibold text-3xl'>Travel</Text>
        </View>
      </View>
      {/* Another Section */}
      <View>
        <View className="">
          <Text className='text-5xl py-5 px-5'>Enjoy the trip with </Text>
        </View>
        <View>
          <Text className='text-5xl pb-5 px-5 text-[#00BDCA] font-semibold'>Good moments</Text>
        </View>
      </View>
      {/* Another Section  */}
      <View>
        <Text className='pb-5 px-5'>Hello! this is amazing app.Hello! this is amazing app.
          Hello! this is amazing app.Hello! this is amazing app.Hello! this is amazing app.Hello! this is amazing app.
        </Text>
      </View>
      {/* circles */}
      <View className="h-[400px] w-[400px] bg-[#00BDCA] rounded-full absolute bottom-[66px] -right-36">
      </View>
      <View className="h-[400px] w-[400px] bg-[#E89264] rounded-full absolute -bottom-28 -left-56">
      </View>
      {/* Image */}
      <View className='relative flex-1 justify-center items-center'>
        <Animatable.Image animation="fadeIn" easing="ease-in-out" source={HeroImage} className="w-full h-full object-cover mt-10" />
        <TouchableOpacity
        onPress={()=>{navigation.navigate("Discover")}}
         className="absolute bottom-20 w-24 h-24 justify-center items-center border-r-2 border-l-2 border-t-4 border-[#00BDCA] rounded-full">

          <Animatable.View animation={"pulse"} easing="ease-in-out" iterationCount={"infinite"} className='w-20 h-20 justify-center items-center bg-[#00BDCA] rounded-full'>
            <Text className='font-semibold text-4xl text-white'>Go</Text>
          </Animatable.View>

        </TouchableOpacity>
      </View>

    </SafeAreaView>
  )
}

export default Home