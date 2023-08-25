import { View, Text, SafeAreaView } from 'react-native'
import React from 'react'
import { TailwindProvider } from 'tailwindcss-react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './screens/Home';
import Discove from './screens/Discove';
const App = () => {

  const Stack = createNativeStackNavigator();

  return (
    <TailwindProvider>
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Discover" component={Discove} />
        </Stack.Navigator>
      </NavigationContainer>
      {/* <View>
        <Text>Usman Khalil</Text>
      </View> */}
    </TailwindProvider>
  )
}

export default App