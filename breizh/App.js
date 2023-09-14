import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './pages/access/WelcomeScreen'
import Login from './pages/access/Login'
import Register from './pages/access/Register'

//  Navigation
const Stack = createStackNavigator()

export default function App() {

  return (

    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Degemer Mat"
          component={WelcomeScreen}
          options={{ title: "Degemer Mat", headerShown: false }}
        />
        <Stack.Screen
          name="Login"
          component={Login}
          options={{ title: "Login", headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ title: "Register", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}