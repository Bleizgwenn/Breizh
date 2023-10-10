import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    Image,
    StyleSheet,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import { useState } from 'react'
import ModaleBottomTop from '../../components/modale/ModaleBottomTop'

import {Dimensions} from 'react-native'
import TransparentButton from '../../components/svg/TransparentButton'
import Settings from '../../components/svg/Settings'
import Trophy from '../../components/svg/Trophy'
import LevelProgressBar from '../../components/progress-bar/LevelProgressBar'
import LeftArrow from '../../components/svg/LeftArrow'
import SectionSettings from '../../components/section/SectionSettings'
import AchievementSection from '../../components/section/AchievementSection'
import RightChevron from '../../components/svg/RightChevron'
import Medal from '../../components/svg/Medal'
import Shield from '../../components/svg/Shield'
import Lightning from '../../components/svg/Lightning'
import Fire from '../../components/svg/Fire'
import Edit from '../../components/svg/Edit'
import Share from '../../components/svg/Share'
import AddFriends from '../../components/svg/addFriends'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function ProfileScreen(){

    const [openModale1,setOpenModale1] = useState(false)
    const [openModale2,setOpenModale2] = useState(false)

    return (
        
        <View style={{marginBottom:100,backgroundColor:"lightgray"}}>

            <View style={styles.topContainer}>
                
                <TouchableOpacity style={styles.topTitleContainer}
                    onPress={()=>setOpenModale2(!openModale2)}
                >

                    <TransparentButton/>

                    <Text style={styles.topTitle}>Aelad</Text>

                    <Settings/>

                </TouchableOpacity>
                
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
                
                    <View style={{width:screenWidth}}>
                        
                        <View style={{flexDirection:"row",width:screenWidth}}>

                            <View style={{padding:20,width:"60%",gap:8}}>

                                <Text style={{fontSize:22.5,fontWeight:"bold",color:"black"}}>François</Text>

                                <Text style={{fontSize:15,color:"gray"}}>@fanchbzhfrancois</Text>

                                <Text style={{fontSize:15,color:"black"}}>Learning since June 2023</Text>

                                <Text style={{fontSize:35,color:"black"}}>🏴󠁧󠁢󠁷󠁬󠁳󠁿🏴󠁧󠁢󠁳󠁣󠁴󠁿🇮🇲🇮🇪</Text>

                                <View style={{gap:16,flexDirection:"row"}}>

                                    <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>7 following</Text>

                                    <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>9 followers</Text>

                                </View>

                            </View>

                            <View style={{padding:20,width:"40%",justifyContent:"flex-start",alignItems:"flex-end"}}>

                                <TouchableOpacity style={{padding:4,height:100,width:100,borderRadius:50,position:"relative"}}>

                                    <Image style={{padding:4,height:100,width:100,borderRadius:50}} src='https://tse4.mm.bing.net/th?id=OIP.X3ajQSoHf9yNy7TQIpAmrwHaHP&pid=Api&P=0&h=180'/>

                                    <View style={{position:"absolute",top:3,right:3,backgroundColor:"lightgray",padding:2,borderRadius:50}}>

                                        <View style={{backgroundColor:"#381C11",padding:4,borderRadius:50}}>
                                            
                                            <Edit/>

                                        </View>

                                    </View>

                                </TouchableOpacity>

                            </View>

                        </View>
                        
                        <View style={{padding:20,width:screenWidth,flexDirection:"row",justifyContent:"space-between",gap:16}}>

                            <TouchableOpacity style={{padding:20,backgroundColor:"#381C11",borderRadius:20,flex:1,flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
                                
                                <Text style={{fontSize:15,fontWeight:"bold",color:"#DDDCE1",}}>Add Friends</Text>

                                <AddFriends/>
                                
                            </TouchableOpacity>

                            <TouchableOpacity style={{padding:20,backgroundColor:"#381C11",borderRadius:100,flexDirection:"row",justifyContent:"space-between"}}>
                                
                                <Share/>
                                
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={{padding:20,gap:20}}>

                        <Text style={styles.topTitleSection}>Statistics</Text>

                        <View style={{gap:16,flexDirection:"column",width:"100%"}}>
                            
                            <View style={{gap:16,flexDirection:"row",width:"100%"}}>

                                <View style={{padding:16,flexDirection:"row",alignItems:"start",gap:16,borderRadius:16,borderColor:"gray",borderWidth:4,flex:1}}>

                                    <Fire/>

                                    <View style={{gap:2,width:"80%"}}>

                                        <Text style={{fontSize:15,fontWeight:"bold"}}>24</Text>

                                        <Text style={{fontSize:10}}>Day streak</Text>

                                    </View>

                                </View>

                                <View style={{padding:16,flexDirection:"row",alignItems:"start",gap:16,borderRadius:16,borderColor:"gray",borderWidth:4,flex:1}}>

                                    <Lightning/>

                                    <View style={{gap:2,width:"80%"}}>

                                        <Text style={{fontSize:15,fontWeight:"bold"}}>20500</Text>

                                        <Text style={{fontSize:10}}>Total XP</Text>

                                    </View>

                                </View>

                            </View>
                            
                            <View style={{gap:16,flexDirection:"row",width:"100%"}}>

                                <View style={{padding:16,flexDirection:"row",alignItems:"start",gap:16,borderRadius:16,borderColor:"gray",borderWidth:4,flex:1}}>

                                    <Shield/>

                                    <View style={{gap:2,width:"80%"}}>

                                        <Text style={{fontSize:15,fontWeight:"bold"}}>Ruby</Text>

                                        <Text style={{fontSize:10}}>Current league</Text>

                                    </View>

                                </View>

                                <View style={{padding:16,flexDirection:"row",alignItems:"start",gap:16,borderRadius:16,borderColor:"gray",borderWidth:4,flex:1}}>

                                    <Medal/>

                                    <View style={{gap:2,width:"80%"}}>

                                        <Text style={{fontSize:15,fontWeight:"bold"}}>5</Text>

                                        <Text style={{fontSize:10}}>Golden Medals</Text>

                                    </View>

                                </View>

                            </View>

                        </View>

                    </View>

                    <View style={{padding:20,gap:20,marginBottom:40,}}>

                        <Text style={styles.topTitleSection}>Achievements</Text>
                
                        <View style={{gap:4,backgroundColor:"darkgreen",borderRadius:20,borderWidth:4,borderColor:"darkgreen"}}>

                            <View style={{width:screenWidth-48,backgroundColor:"green",padding:16,gap:16,flexDirection:"row",borderTopEndRadius:16,borderTopStartRadius:16}}>

                                <View style={{padding:8,width:"25%",backgroundColor:"orange",borderRadius:12,justifyContent:"space-between",alignItems:"center"}}>

                                    <Trophy/>

                                    <Text>Niveau 5</Text>

                                </View>

                                <View style={{gap:8,paddingTop:8,width:"70%"}}>

                                    <Text style={{fontSize:20,fontWeight:"bold",color:"#DDDCE1"}}>Légendaire</Text>

                                    <Text style={{fontSize:15,color:"#DDDCE1"}}>Complète 50 niveaux légendaires</Text>

                                    <LevelProgressBar used={31} max={50}/>

                                </View>

                            </View>

                            <View style={{width:screenWidth-48,backgroundColor:"green",padding:16,gap:16,flexDirection:"row"}}>

                                <View style={{padding:8,width:"25%",backgroundColor:"orange",borderRadius:12,justifyContent:"space-between",alignItems:"center"}}>

                                    <Trophy/>

                                    <Text>Niveau 5</Text>

                                </View>

                                <View style={{gap:8,paddingTop:8,width:"70%"}}>

                                    <Text style={{fontSize:20,fontWeight:"bold",color:"#DDDCE1"}}>Légendaire</Text>

                                    <Text style={{fontSize:15,color:"#DDDCE1"}}>Complète 50 niveaux légendaires</Text>

                                    <LevelProgressBar used={31} max={50}/>

                                </View>

                            </View>

                            <View style={{width:screenWidth-48,backgroundColor:"green",padding:16,gap:16,flexDirection:"row"}}>

                                <View style={{padding:8,width:"25%",backgroundColor:"orange",borderRadius:12,justifyContent:"space-between",alignItems:"center"}}>

                                    <Trophy/>

                                    <Text>Niveau 5</Text>

                                </View>

                                <View style={{gap:8,paddingTop:8,width:"70%"}}>

                                    <Text style={{fontSize:20,fontWeight:"bold",color:"#DDDCE1"}}>Légendaire</Text>

                                    <Text style={{fontSize:15,color:"#DDDCE1"}}>Complète 50 niveaux légendaires</Text>

                                    <LevelProgressBar used={31} max={50}/>

                                </View>

                            </View>

                            <TouchableOpacity style={{width:screenWidth-48,backgroundColor:"green",justifyContent:"space-between",alignItems:"center",padding:16,gap:16,flexDirection:"row",borderBottomEndRadius:16,borderBottomStartRadius:16}}
                                onPress={()=>setOpenModale1(!openModale1)}
                            >

                                <Text style={styles.buttonTitle}>View 10 more</Text>

                                <RightChevron/>
                                
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </ScrollView>

            <ModaleBottomTop
                text={"Achèvements"}
                color={"green"}
                child={<AchievementSection/>}
                closeFunction={setOpenModale1}
                openValue={openModale1}
            />

            <ModaleBottomTop
                text={"Settings"}
                color={"blue"}
                child={<SectionSettings/>}
                closeFunction={setOpenModale2}
                openValue={openModale2}
            />

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
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingHorizontal: 20,
    },

    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    topTitleSection: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },

    buttonTitle: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "#DDDCE1",
    },
  
})

export default withNavigation(ProfileScreen)