import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'
import LevelProgressBar from '../../components/progress-bar/LevelProgressBar'

import {Dimensions} from 'react-native'
import FriendAction from '../../components/feed/FriendAction'
import Announcement from '../../components/feed/Announcement'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function DailyMission(){

    return (
        
        <>

            <View style={styles.topContainer}>
                
                <View style={styles.topTitleContainer}>

                    <Text style={styles.topTitle}>Dalc'h pemdeziek</Text>

                </View>

            </View>
    
            <ScrollView contentContainerStyle={styles.containerMiddle} showsVerticalScrollIndicator={false}>
                
                <View 
                    style={{
                        minHeight: "100%",
                        flexDirection: 'column',
                        height: '100%',
                        width: screenWidth,
                        alignContent: "center",
                    }}
                >
                    
                    <View style={{padding:20,backgroundColor:"blue"}}>

                        <View style={{padding:20,backgroundColor:"green"}}>

                            <View style={{padding:20,backgroundColor:"red"}}>

                                <Text>October 2023</Text>
                                
                                <Text>Encore 22 jours</Text>

                            </View>

                            <Image src={`https://i.imgflip.com/84pun.jpg`} style={{height:100,width:"100%"}} />

                        </View>

                        <View style={{padding:20,backgroundColor:"purple"}}>

                            <Text>Complete 40 quests</Text>
                            
                            <LevelProgressBar used={9} max={40} />

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"gray"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>
                            
                            <View style={{padding:20,backgroundColor:"yellow"}}>

                                <Text>Daily Quests</Text>

                                <Text>7 hours</Text>

                            </View>

                            <View style={{padding:20,backgroundColor:"green",gap:10}}>

                                <View style={{padding:20,backgroundColor:"gray"}}>

                                    <View style={{padding:20,backgroundColor:"orange"}}></View>

                                    <View style={{padding:20,backgroundColor:"red"}}>

                                        <Text>Nom de la quête</Text>

                                        <LevelProgressBar used={0} max={1} />

                                    </View>

                                </View>

                                <View style={{padding:20,backgroundColor:"gray"}}>

                                    <View style={{padding:20,backgroundColor:"orange"}}></View>

                                    <View style={{padding:20,backgroundColor:"red"}}>

                                        <Text>Nom de la quête</Text>

                                        <LevelProgressBar used={0} max={1} />
                                        
                                    </View>

                                </View>

                                <View style={{padding:20,backgroundColor:"gray"}}>

                                    <View style={{padding:20,backgroundColor:"orange"}}></View>

                                    <View style={{padding:20,backgroundColor:"red"}}>

                                        <Text>Nom de la quête</Text>

                                        <LevelProgressBar used={0} max={1} />
                                        
                                    </View>

                                </View>

                            </View>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"gray"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>
                            
                            <View style={{padding:20,backgroundColor:"yellow"}}>

                                <Text>Friends Quest</Text>

                                <Text>Next in one day</Text>

                            </View>

                            <View style={{padding:20,backgroundColor:"green"}}>

                                <View style={{padding:20,backgroundColor:"red"}}>

                                    <Text>Earn 100 EXP</Text>

                                    <LevelProgressBar used={10} max={100} />
                                    
                                    <Text>Completed !</Text>

                                </View>

                                <View style={{padding:20,backgroundColor:"purple",gap:10}}>

                                    <View style={{padding:20,backgroundColor:"yellow",gap:10}}>
                                        
                                        <Image src={`https://i.pinimg.com/564x/26/fc/1e/26fc1e7b5d00d3ed26513c66c4fb8cf4.jpg`} style={{height:50,width:50,}} />

                                        <Text>You</Text>

                                        <Text>90px</Text>

                                    </View>

                                    <View style={{padding:20,backgroundColor:"yellow",gap:10}}>
                                        
                                        <Image src={`https://i.pinimg.com/564x/b0/94/f0/b094f04e7cad45f8d9b598c5dba0c2ae.jpg`} style={{height:50,width:50,}} />

                                        <Text>Him</Text>

                                        <Text>90px</Text>

                                    </View>

                                </View>
                                
                                <TouchableOpacity style={{padding:20,backgroundColor:"yellow",gap:10}}>

                                    <Text>Ancourager Yann</Text>

                                </TouchableOpacity>

                            </View>

                        </View>

                    </View>

                </View>

            </ScrollView>

        </>

    )

}
  
const styles = StyleSheet.create({

    containerMiddle: {
        width: screenWidth,
        backgroundColor: "lightgray",
        position: "relative",
    },

    topContainer: {
        paddingTop: 40,
        width: screenWidth,
        backgroundColor: "#381C11",
        alignItems: "center",
        justifyContent: "center",
    },

    topTitleContainer: {
        height: 60,
        width: screenWidth,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DDDCE1",
    },
  
})

export default withNavigation(DailyMission)