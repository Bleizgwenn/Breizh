import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    Image,
    TouchableOpacity,
} from 'react-native'
import Selector from '../../components/svg/Selector'

import {Dimensions} from 'react-native'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class HomeScreen extends React.Component {
    
    render() {

        return (
            
            <View style={styles.windowContainer}>
                
                <View id={"window"} style={styles.window}>

                    <View style={styles.topContainer}>
                        
                        <View style={styles.topTitleContainer}>
    
                            <Image style={styles.emojiBzh} source={require("../../assets/bzh_emoji.png")} />

                            <Text style={styles.topTitle}>Deskiñ</Text>
    
                            <Image style={styles.emojiBzh} source={require("../../assets/bzh_emoji.png")} />

                        </View>
                        
                    </View>

                    <TouchableOpacity style={styles.selectLevelContainer}>

                        <View style={styles.infosLevel}>

                            <Text style={styles.infosLevelPetit}>Section 1, unité 1</Text>

                            <Text style={styles.infosLevelGros}>Les bases de la lecture et de l'écriture en breton.</Text>

                        </View>

                        <View style={styles.selectLevel}>
                            
                            <Selector />

                        </View>

                    </TouchableOpacity>
                
                    <View style={styles.containerMiddle}>

                        <Text>Nous sommes les exercices</Text>

                    </View>

                </View>

                <View id={"modale"} style={styles.modale}>

                    

                </View>

            </View>

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

    selectLevelContainer: {
        backgroundColor: "black",
        borderRadius: 20,
        margin: 10,
        height: 100,
        width: screenWidth-20,
        elevation: 2,
        gap: 4,
        flexDirection: "row",
    },

    infosLevel: {
        padding: 16,
        width: "80%",
        backgroundColor: "#381C11",
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
        height: "100%",
        gap: 4,
    },

    infosLevelPetit: {
        fontSize: 12.5,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    infosLevelGros: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    selectLevel: {
        width: ((screenWidth-20)/100)*20-4,
        backgroundColor: "#381C11",
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
        alignItems: "center",
        justifyContent: "center",
        height: "100%",
    },

    // Elements de fenêtre

    windowContainer: {

    },

    window: {

    },

    modale: {

    },
  
})

export default withNavigation(HomeScreen)