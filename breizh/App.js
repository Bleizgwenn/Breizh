import React from 'react'
import 'react-native-gesture-handler'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import WelcomeScreen from './pages/WelcomeScreen'
import Login from './pages/access/Login'
import BirthDate from './pages/access/register/BirthDate'
import UserRegister from './pages/access/register/UserRegister'
import MainContainer from './pages/MainContainer'

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
          name="Deiziad ganedigezh"
          component={BirthDate}
          options={{ title: "Deiziad ganedigezh", headerShown: false }}
        />
        <Stack.Screen
          name="Roadennoù an arveriad"
          component={UserRegister}
          options={{ title: "Roadennoù an arveriad", headerShown: false }}
        />
        <Stack.Screen
          name="Main"
          component={MainContainer}
          options={{ title: "Main", headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  )
}