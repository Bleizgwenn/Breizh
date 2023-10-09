import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image,
    ScrollView
} from 'react-native'
import { useCallback } from 'react'

import {Dimensions} from 'react-native'
import Shield from '../../components/svg/Shield'
import UserProfileExp from '../../components/user/UserProfileExp'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class LeagueScreen extends React.Component {
    
    render() {

        function Blasons(){
    
            const list = [
                require("../../assets/img/leagueshields/blason_1.png"),
                require("../../assets/img/leagueshields/blason_2.png"),
                require("../../assets/img/leagueshields/blason_3.png"),
                require("../../assets/img/leagueshields/blason_4.png"),
                require("../../assets/img/leagueshields/blason_6.png"),
                require("../../assets/img/leagueshields/blason_7.png"),
                require("../../assets/img/leagueshields/blason_8.png"),
                require("../../assets/img/leagueshields/blason_9.png"),
            ]

            const current = 4

            return(
                <FlatList
                    data={list}
                    renderItem={({ item,index }) => {
                        return <Image style={[styles.imageBlason,index===current?styles.imageBlasonCurrentLeage:null]} source={item} />
                    }}
                    style={{marginHorizontal:20,maxHeight:100,overflow:"visible"}}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />
            )
        }
        
        function dayDiff(d1, d2) {
            d1 = d1.getTime()/86400000
            d2 = d2.getTime()/86400000
            return d2 - d1
        }
        
        function dateDiff(date1, date2){
            var diff = {}                          // Initialisation du retour
            var tmp = date2 - date1
         
            tmp = Math.floor(tmp/1000)             // Nombre de secondes entre les 2 dates
            diff.sec = tmp % 60                    // Extraction du nombre de secondes
         
            tmp = Math.floor((tmp-diff.sec)/60)    // Nombre de minutes (partie entière)
            diff.min = tmp % 60                    // Extraction du nombre de minutes
         
            tmp = Math.floor((tmp-diff.min)/60)    // Nombre d'heures (entières)
            diff.hour = tmp % 24                   // Extraction du nombre d'heures
             
            tmp = Math.floor((tmp-diff.hour)/24)   // Nombre de jours restants
            diff.day = tmp
             
            return diff
        }

        function nextSunday(current,date1,date2) {

            if(Math.sign(dayDiff(current,date1))!==-1){

                const diff = dateDiff(current, date1)

                if(diff.day!==0){
                    
                    return(
                        {'unit':'day','value':diff.day}
                    )

                }else{

                    if(diff.hour!==0){
                    
                        return(
                            {'unit':'hour','value':diff.hour}
                        )

                    }else{
                    
                        return(
                            {'unit':'minute','value':diff.min}
                        )
    
                    }

                }
            
            }else{

                const diff = dateDiff(current, date2)

                if(diff.day!==0){
                    
                    return(
                        {'unit':'day','value':diff.day}
                    )

                }else{

                    if(diff.hour!==0){
                    
                        return(
                            {'unit':'hour','value':diff.hour}
                        )

                    }else{
                    
                        return(
                            {'unit':'minute','value':diff.min}
                        )
    
                    }

                }

            }

        }

        const currentDate = new Date()
        const dateOne = new Date()
        const dateSecond = new Date()
        const sundayDateOne = new Date(new Date(new Date(new Date(dateOne.setDate(dateOne.getDate()-dateOne.getDay()+0)).setHours(23)).setMinutes(59)).setSeconds(59))
        const sundayDateSecond = new Date(new Date(new Date(new Date(dateSecond.setDate(dateSecond.getDate()-dateSecond.getDay()+7)).setHours(23)).setMinutes(59)).setSeconds(59))

        const time = nextSunday(currentDate,sundayDateOne,sundayDateSecond)

        const listUsers = [
            {'username':'Jane Doe','score':125},
            {'username':'Jean François','score':224},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
            {'username':'Jane Doe','score':125},
        ]

        return (
            
            <View style={{marginBottom:210,backgroundColor:"lightgray"}}>

                <View style={styles.topContainer}>
                    
                    <View style={styles.topTitleContainer}>
                            
                        <Blasons/>
                        
                        <View style={{gap:10,justifyContent:"center",alignItems:"center"}}>

                            <Text style={styles.topTitle}>Saphire Rummad</Text>

                            <Text style={styles.leagueTextDescriptif}>Top 7 advance to the next league</Text>

                            <Text style={styles.topTitle}>{time.value} {time.unit}{time.value===1?null:'s'}</Text>

                        </View>

                    </View>
                    
                </View>
            
                <ScrollView contentContainerStyle={styles.containerMiddle} showsVerticalScrollIndicator={false}>
                    
                    <View style={{
                        minHeight: "100%",
                        flexDirection: 'column',
                        height: '100%',
                        width: screenWidth,
                        alignContent: "center",
                        paddingVertical:10,
                    }}>
                        
                        {listUsers.map((user,index)=>{
                            return(
                                <UserProfileExp user={user} index={index} key={index} />
                            )
                        })}

                    </View>

                </ScrollView>

            </View>

        )

    }

}
  
const styles = StyleSheet.create({

    containerMiddle: {
        width: screenWidth,
        backgroundColor: "lightgray",
        position: "relative",
    },

    topContainer: {
        paddingTop: 60,
        width: screenWidth,
        backgroundColor: "#381C11",
        height: "42.5%",
    },

    topTitleContainer: {
        height: "100%",
        width: screenWidth,
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        gap:20,
        paddingVertical:20,
    },

    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    imageBlason: {
        width: 75,
        height: 75,
        marginHorizontal: 10,
        objectFit: "contain",
    },

    imageBlasonCurrentLeage: {
        width: 100,
        height: 100,
    },

    leagueTextDescriptif: {
        fontSize: 15,
        fontWeight: "bold",
        textAlign: "center",
        color: "#DDDCE1",
    },
  
})

export default withNavigation(LeagueScreen)