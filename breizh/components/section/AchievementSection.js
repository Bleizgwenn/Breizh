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

import {Dimensions} from 'react-native'
import Trophy from '../../components/svg/Trophy'
import LevelProgressBar from '../../components/progress-bar/LevelProgressBar'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function AchievementSection(){
    return(
        
        <ScrollView contentContainerStyle={styles.containerMiddle} showsVerticalScrollIndicator={false}>
            
            <View 
                style={{
                    minHeight: "100%",
                    flexDirection: 'column',
                    height: '100%',
                    width: screenWidth,
                    alignContent: "center",
                    marginBottom:40,
                    padding:20,
                }}
            >
                
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

                    <View style={{width:screenWidth-48,backgroundColor:"green",padding:16,gap:16,flexDirection:"row",borderBottomEndRadius:16,borderBottomStartRadius:16}}>

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

                </View>

            </View>

        </ScrollView>
    )
}
  
const styles = StyleSheet.create({

    containerMiddle: {
        width: screenWidth,
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

export default AchievementSection