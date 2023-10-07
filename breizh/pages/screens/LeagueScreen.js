import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    FlatList,
    Image
} from 'react-native'
import { useCallback } from 'react'

import {Dimensions} from 'react-native'
import Shield from '../../components/svg/Shield'
  
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

        function dateDifference(date2, date1) {
            const _MS_PER_DAY = 1000 * 60 * 60 * 24

            console.log(date1)

            console.log(date2)
        
            // Discard the time and time-zone information.
            const utc1 = Date.UTC(date1.getFullYear(), date1.getMonth(), date1.getDate())
            const utc2 = Date.UTC(date2.getFullYear(), date2.getMonth(), date2.getDate())
        
            return Math.floor((utc2 - utc1) / _MS_PER_DAY)
        }

        const currentDate = new Date().toLocaleString({timeZone: "France/Paris"})
        const date = new Date()
        const sundayDate = new Date(date.setDate(date.getDate()-date.getDay()+7))
        const sundayPreciseDate = new Date(`${sundayDate.getFullYear()}-${sundayDate.getMonth()+1}-${sundayDate.getDate()}`)
        
        console.log(sundayDate)

        // console.log(dateDifference(sundayPreciseDate,currentDate))

        if(currentDate){ // Si nous ne sommes pas dimanche prochain

        }

        return (
            
            <>

                <View style={styles.topContainer}>
                    
                    <View style={styles.topTitleContainer}>
                            
                        <Blasons/>
                        
                        <View style={{gap:10,justifyContent:"center",alignItems:"center"}}>

                            <Text style={styles.topTitle}>Saphire Rummad</Text>

                            <Text style={styles.leagueTextDescriptif}>Top 7 advance to the next league</Text>

                            <Text style={styles.topTitle}>20 hours</Text>

                        </View>

                    </View>
                    
                </View>
                
                <View style={styles.containerMiddle}>
                    <Text>Page de la league ( nombre d'exp contrairement aux adversaires )</Text>
                </View>

            </>

        )

    }

}
  
const styles = StyleSheet.create({

    containerMiddle: {
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        backgroundColor: "#DDDCE1",
        alignItems: "center",
        justifyContent: "center",
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