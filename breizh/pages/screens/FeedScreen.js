import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    ScrollView
} from 'react-native'

import {Dimensions} from 'react-native'
import FriendAction from '../../components/feed/FriendAction'
import Announcement from '../../components/feed/Announcement'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function FeedScreen(){

    return (
        
        <>

            <View style={styles.topContainer}>
                
                <View style={styles.topTitleContainer}>

                    <Text style={styles.topTitle}>Obererezh</Text>

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
                    
                    <FriendAction/>

                    <Announcement/>
                    
                    <FriendAction/>

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

export default withNavigation(FeedScreen)