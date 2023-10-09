import * as React from 'react'
import { withNavigation } from 'react-navigation'

import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Ionicons from 'react-native-vector-icons/Ionicons'

import HomeScreen from './screens/HomeScreen'
import FeedScreen from './screens/FeedScreen'
import LeagueScreen from './screens/LeagueScreen'
import ProfileScreen from './screens/ProfileScreen'
import DailyMission from './screens/DailyMission'

import {Dimensions} from 'react-native'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

//  Screen Names

const HomeScreenName = "HomeScreen"
const FeedScreenName = "FeedScreen"
const LeagueScreenName = "LeagueScreen"
const ProfileScreenName = "ProfileScreen"
const DailyMissionName = "DailyMission"

const Tab = createBottomTabNavigator()

class MainContainer extends React.Component {
    
    render() {

        return (
            
            <NavigationContainer independent={true}>

                <Tab.Navigator
                    initialRouteName={HomeScreenName}
                    screenOptions={({ route }) => ({
                        tabBarIcon: ({ focused, color, size }) => {
                            let iconName
                            if (route.name === HomeScreenName) {
                                iconName = focused ? 'home' : 'home-outline'
                            } else if (route.name === FeedScreenName) {
                                iconName = focused ? 'list' : 'list-outline'
                            } else if (route.name === LeagueScreenName) {
                                iconName = focused ? 'trophy' : 'trophy'
                            } else if (route.name === ProfileScreenName) {
                                iconName = focused ? 'person' : 'person'
                            } else if (route.name === DailyMissionName) {
                                iconName = focused ? 'grid-outline' : 'grid-outline'
                            }
                            return <Ionicons name={iconName} size={size} color={color} />
                        },
                        tabBarActiveTintColor: '#DB8646',
                        tabBarInactiveTintColor: '#DDDCE1',
                        tabBarShowLabel: false,
                        tabBarStyle: {
                            backgroundColor: '#381C11',
                            height: 90,
                        },
                    })}
                >

                    <Tab.Screen name={HomeScreenName} component={HomeScreen} options={{ headerShown: false }}/>

                    <Tab.Screen name={LeagueScreenName} component={LeagueScreen} options={{ headerShown: false }}/>

                    <Tab.Screen name={DailyMissionName} component={DailyMission} options={{ headerShown: false }}/>

                    <Tab.Screen name={ProfileScreenName} component={ProfileScreen} options={{ headerShown: false }}/>

                    <Tab.Screen name={FeedScreenName} component={FeedScreen} options={{ headerShown: false }}/>

                </Tab.Navigator>

            </NavigationContainer>

        )

    }

}

export default withNavigation(MainContainer)