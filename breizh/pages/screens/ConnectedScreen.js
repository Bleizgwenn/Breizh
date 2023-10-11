import React from 'react'
import 'react-native-gesture-handler'
import { withNavigation } from 'react-navigation'
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    Image,
    TouchableOpacity
} from 'react-native'

import {Dimensions} from 'react-native'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function ConnectedScreen(){

    return (
        
        <View style={{marginBottom:100,height:"100%"}}>

            <View style={styles.topContainer}>
                
                <View style={styles.topTitleContainer}>

                    <Text style={styles.topTitle}>Vérification de Connexion</Text>

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
                        padding:20,
                        gap:20,
                        marginBottom:40,
                    }}
                >

                    <View style={{flex:1,borderRadius:20,overflow:"hidden",backgroundColor:"gray",padding:20,justifyContent:"flex-start",alignItems:"center"}}>

                        <Text style={{fontSize:20,fontWeight:"bold",color:"#DDDCE1"}}>Mes informations :</Text>

                    </View>

                    <TouchableOpacity style={{borderRadius:20,overflow:"hidden",backgroundColor:"red",padding:20,justifyContent:"center",alignItems:"center"}}>

                        <Text style={{fontSize:20,fontWeight:"bold",color:"#DDDCE1"}}>Me déconnecter</Text>

                    </TouchableOpacity>

                </View>

            </ScrollView>

        </View>

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
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
    },

    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    topTitleBlack: {
        fontSize: 20,
        fontWeight: "bold",
        color: "black",
    },
  
})

export default withNavigation(ConnectedScreen)