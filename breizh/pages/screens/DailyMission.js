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
import Trophy from '../../components/svg/Trophy'

import {Dimensions} from 'react-native'
import FriendAction from '../../components/feed/FriendAction'
import Announcement from '../../components/feed/Announcement'
import FriendQuestProgressBar from '../../components/progress-bar/FriendQuestProgressBar'
import PouceLeve from '../../components/svg/PouceLeve'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function DailyMission(){

    return (
        
        <View style={{marginBottom:100,backgroundColor:"lightgray"}}>

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
                        marginBottom:60,
                    }}
                >
                    
                    <View style={{paddingVertical:40,paddingHorizontal:20,backgroundColor:"gray"}}>

                        <View style={{flexDirection:"row",gap:16,}}>

                            <View style={{paddingBottom:20,width:"40%",justifyContent:"flex-start",alignItems:"flex-start",gap:8}}>

                                <Text style={styles.topTitle}>October 2023</Text>
                                
                                <Text style={{fontSize: 15,fontWeight: "bold",color: "#DDDCE1"}}>Encore 22 jours</Text>

                            </View>

                            <Image src={`https://logos-world.net/wp-content/uploads/2021/03/Duolingo-Symbol-700x394.png`} style={{width:"60%",height:100,objectFit:"contain"}} />

                        </View>

                        <View style={{padding:20,backgroundColor:"green",borderRadius:20,gap:16}}>

                            <Text style={{fontSize:15,fontWeight:"bold",color:"#DDDCE1"}}>Complete 40 quests</Text>
                            
                            <LevelProgressBar used={9} max={40} />

                        </View>

                    </View>

                    <View style={{padding:20,gap:16}}>
                        
                        <View style={{flexDirection:"row",justifyContent:"space-between",alignItems:"baseline"}}>

                            <Text style={styles.topTitleBlack}>Daily Quests</Text>

                            <Text>7 hours</Text>

                        </View>

                        <View style={{backgroundColor:"gray",gap:4,borderColor:"gray",borderRadius:20,borderWidth:4,overflow:"hidden"}}>

                            <View style={{backgroundColor:"lightgray",flexDirection:"row",padding:20,gap:20}}>

                                <View style={{alignItems:"center",justifyContent:"center"}}>

                                    <Trophy/>

                                </View>

                                <View style={{flex:1,gap:16}}>

                                    <Text style={{fontSize:15,fontWeight:"bold",color:"black",}}>Nom de la quête</Text>

                                    <LevelProgressBar used={0} max={1} fontcolor={"black"} linebgcolor={"gray"}/>

                                </View>

                            </View>

                            <View style={{backgroundColor:"lightgray",flexDirection:"row",padding:20,gap:20}}>

                                <View style={{alignItems:"center",justifyContent:"center"}}>

                                    <Trophy/>

                                </View>

                                <View style={{flex:1,gap:16}}>

                                    <Text style={{fontSize:15,fontWeight:"bold",color:"black",}}>Nom de la quête</Text>

                                    <LevelProgressBar used={0} max={1} fontcolor={"black"} linebgcolor={"gray"} />
                                    
                                </View>

                            </View>

                            <View style={{backgroundColor:"lightgray",flexDirection:"row",padding:20,gap:20}}>

                                <View style={{alignItems:"center",justifyContent:"center"}}>

                                    <Trophy/>

                                </View>

                                <View style={{flex:1,gap:16}}>

                                    <Text style={{fontSize:15,fontWeight:"bold",color:"black",}}>Nom de la quête</Text>

                                    <LevelProgressBar used={0} max={1} fontcolor={"black"} linebgcolor={"gray"} />
                                    
                                </View>

                            </View>

                        </View>

                    </View>

                    <View style={{padding:20,gap:16}}>
                        
                        <View style={{gap:4}}>

                            <Text style={styles.topTitleBlack}>Friends Quest</Text>

                            <Text style={{fontSize:15,color:"black"}}>Next in one day</Text>

                        </View>

                        <View style={{gap:4,backgroundColor:"gray",borderColor:"gray",borderRadius:20,borderWidth:4,overflow:"hidden"}}>

                            <View style={{padding:20,gap:16,backgroundColor:"lightgray"}}>

                                <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>Earn 100 EXP</Text>

                                <FriendQuestProgressBar max={100} score1={10} score2={45} text={""} fontcolor={"black"} linebgcolor={"gray"} />

                            </View>

                            <View style={{gap:4,flexDirection:"row"}}>

                                <View style={{padding:20,backgroundColor:"lightgray",gap:10,flex:1,alignItems:"center",justifyContent:"center"}}>
                                    
                                    <Image src={`https://i.pinimg.com/564x/26/fc/1e/26fc1e7b5d00d3ed26513c66c4fb8cf4.jpg`} style={{height:75,width:75,borderRadius:50}} />

                                    <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>You</Text>

                                    <Text style={{fontSize:15,color:"black"}}>10 XP</Text>

                                </View>

                                <View style={{padding:20,backgroundColor:"lightgray",gap:10,flex:1,alignItems:"center",justifyContent:"center"}}>
                                    
                                    <Image src={`https://i.pinimg.com/564x/b0/94/f0/b094f04e7cad45f8d9b598c5dba0c2ae.jpg`} style={{height:75,width:75,borderRadius:50}} />

                                    <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>Yann</Text>

                                    <Text style={{fontSize:15,color:"black"}}>45 XP</Text>

                                </View>

                            </View>
                            
                            <TouchableOpacity style={{padding:20,backgroundColor:"lightgray",gap:10,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

                                <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>Encourager Yann</Text>

                                <PouceLeve/>

                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </ScrollView>

        </View>

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

    topTitleBlack: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
  
})

export default withNavigation(DailyMission)