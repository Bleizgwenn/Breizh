import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    Image,
} from 'react-native'

import {Dimensions} from 'react-native'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class HomeScreen extends React.Component {
    
    render() {

        return (
            
            <>

                <View style={styles.topContainer}>
                    
                    <View style={styles.topTitleContainer}>
  
                        <Image style={styles.emojiBzh} source={require("../../assets/bzh_emoji.png")} />

                        <Text style={styles.topTitle}>Deskiñ</Text>
  
                        <Image style={styles.emojiBzh} source={require("../../assets/bzh_emoji.png")} />

                    </View>
                    
                </View>
            
                <View style={styles.containerMiddle}>
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
        backgroundColor: "#DB8646",
        alignItems: "center",
        justifyContent: "center",
        borderBottomWidth: 3,
        borderBottomColor: "#381C11",
    },

    topTitleContainer: {
        height: 60,
        width: screenWidth-40,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },

    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    emojiBzh: {
        height: 22,
        width: 30,
    },
  
})

export default withNavigation(HomeScreen)