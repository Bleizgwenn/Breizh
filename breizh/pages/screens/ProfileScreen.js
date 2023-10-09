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
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function AchievementsModaleSection(){
    return(
        
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

                <View style={{padding:20,backgroundColor:"yellow"}}>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <View style={{padding:20,backgroundColor:"orange"}}>

                            <Trophy/>

                            <Text>Niveau 5</Text>

                        </View>

                        <View style={{padding:20,backgroundColor:"blue"}}>

                            <Text>Légendaire</Text>

                            <Text>Complète 50 niveaux légendaires</Text>

                            <LevelProgressBar used={31} max={50}/>

                        </View>

                    </View>

                </View>

            </View>

        </ScrollView>
    )
}

function ProfileScreen(){

    const [openModale1,setOpenModale1] = useState(false)
    const [openModale2,setOpenModale2] = useState(false)

    return (
        
        <>

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
                
                    <View style={{padding:20,backgroundColor:"blue"}}>
                        
                        <View style={{padding:20,backgroundColor:"green"}}>

                            <View style={{padding:20,backgroundColor:"orange"}}>

                                <Text>Fanch</Text>

                                <Text>@fanchbzh</Text>

                                <Text>Learning since June 2023</Text>

                                <View>

                                    <Text>7 following</Text>

                                    <Text>9 followers</Text>

                                </View>

                            </View>

                            <View style={{padding:20,backgroundColor:"gray"}}>

                                <Image style={{padding:4,height:50,width:50,}} src='https://tse4.mm.bing.net/th?id=OIP.X3ajQSoHf9yNy7TQIpAmrwHaHP&pid=Api&P=0&h=180'/>

                            </View>

                        </View>
                        
                        <View style={{padding:20,backgroundColor:"yellow"}}>

                            <TouchableOpacity>
                                
                                <Text>Add Friends</Text>
                                
                            </TouchableOpacity>

                            <TouchableOpacity>
                                
                                <Text>Share</Text>
                                
                            </TouchableOpacity>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"red"}}>

                        <Text>Statistics</Text>

                        <View style={{padding:20,backgroundColor:"green",gap:20}}>

                            <View style={{padding:20,backgroundColor:"orange"}}>

                                <Settings/>

                                <View style={{padding:20,backgroundColor:"red"}}>

                                    <Text>2210</Text>

                                    <Text>Total Exp</Text>

                                </View>

                            </View>

                            <View style={{padding:20,backgroundColor:"orange"}}>

                                <Settings/>

                                <View style={{padding:20,backgroundColor:"red"}}>

                                    <Text>2210</Text>

                                    <Text>Total Exp</Text>

                                </View>

                            </View>

                            <View style={{padding:20,backgroundColor:"orange"}}>

                                <Settings/>

                                <View style={{padding:20,backgroundColor:"red"}}>

                                    <Text>2210</Text>

                                    <Text>Total Exp</Text>

                                </View>

                            </View>

                            <View style={{padding:20,backgroundColor:"orange"}}>

                                <Settings/>

                                <View style={{padding:20,backgroundColor:"red"}}>

                                    <Text>2210</Text>

                                    <Text>Total Exp</Text>

                                </View>

                            </View>

                        </View>

                    </View>

                    <View style={{padding:20,backgroundColor:"yellow"}}>

                        <Text>Achievements</Text>

                        <View style={{padding:20,backgroundColor:"white",gap:20}}>

                            <View style={{padding:20,backgroundColor:"yellow"}}>

                                <View style={{padding:20,backgroundColor:"orange"}}>

                                    <Trophy/>

                                    <Text>Niveau 5</Text>

                                </View>

                                <View style={{padding:20,backgroundColor:"blue"}}>

                                    <Text>Légendaire</Text>

                                    <Text>Complète 50 niveaux légendaires</Text>

                                    <LevelProgressBar used={31} max={50}/>

                                </View>

                            </View>

                            <View style={{padding:20,backgroundColor:"yellow"}}>

                                <View style={{padding:20,backgroundColor:"orange"}}>

                                    <Trophy/>

                                    <Text>Niveau 5</Text>

                                </View>

                                <View style={{padding:20,backgroundColor:"blue"}}>

                                    <Text>Légendaire</Text>

                                    <Text>Complète 50 niveaux légendaires</Text>

                                    <LevelProgressBar used={31} max={50}/>

                                </View>

                            </View>

                            <View style={{padding:20,backgroundColor:"yellow"}}>

                                <View style={{padding:20,backgroundColor:"orange"}}>

                                    <Trophy/>

                                    <Text>Niveau 5</Text>

                                </View>

                                <View style={{padding:20,backgroundColor:"blue"}}>

                                    <Text>Légendaire</Text>

                                    <Text>Complète 50 niveaux légendaires</Text>

                                    <LevelProgressBar used={31} max={50}/>

                                </View>

                            </View>

                            <TouchableOpacity style={{padding:20,backgroundColor:"green"}}
                                onPress={()=>setOpenModale1(!openModale1)}
                            >

                                <Text>View 11 more</Text>

                                <LeftArrow/>
                                
                            </TouchableOpacity>

                        </View>

                    </View>

                </View>

            </ScrollView>

            <ModaleBottomTop
                text={"Achèvements"}
                color={"green"}
                child={<AchievementsModaleSection/>}
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
  
})

export default withNavigation(ProfileScreen)