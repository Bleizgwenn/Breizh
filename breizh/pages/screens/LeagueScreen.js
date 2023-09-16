import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
} from 'react-native'

import {Dimensions} from 'react-native'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class LeagueScreen extends React.Component {
    
    render() {

        return (
            
            <>

                <View style={styles.topContainer}>
                    
                    <View style={styles.topTitleContainer}>

                        <Text style={styles.topTitle}>Rummad</Text>

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

export default withNavigation(LeagueScreen)