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
            
            <View style={styles.containerMiddle}>
                <Text>Page de la league ( nombre d'exp contrairement aux adversaires )</Text>
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
  
})

export default withNavigation(LeagueScreen)