import { View, Text, SafeAreaView, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import { Avatar } from '../assets'

const Discove = () => {
  const navigation = useNavigation()
  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView className="flex-1 relative bg-white">
      <View className='flex-row justify-between items-center px-8'>
        <View>
          <Text className='text-[40px] font-bold text-[#0B646B]'>Discover</Text>
          <Text className='text-[36px] text-[#527283]'>The beauty today</Text>
        </View>
        <View className='bg-slate-500 h-12 w-12 rounded-md'>
          <Image source={Avatar} className='w-full h-full rounded-md object-fill' />
        </View>
      </View>
      <View className="flex-row items-center bg-white mx-4 rounded-xl shadow-lg py-1 px-4 mt-4">
        <GooglePlacesAutocomplete
          placeholder='Usman'
          onPress={(data, details = null) => {
            // 'details' is provided when fetchDetails = true
            console.log(data, details);
          }}
          query={{
            key: 'AIzaSyCCHeyuognWzQ_VZA6Tu1K2_a6u9FjitWw',
            language: 'en',
          }}
        />
      </View>
    </SafeAreaView>
  )
}

export default Discove