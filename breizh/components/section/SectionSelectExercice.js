import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
} from 'react-native'
import ProgramDialogBox from '../dialog/ProgramDialogBox'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function SectionSelectExercice({unit}){

    return(

        <View style={styles.dialogBoxContainer}>
            
            <View>
            
                <View style={styles.unitTextContainer}>
                    
                    <View
                        style={{
                            flex:1,
                            borderBottomColor: 'white',
                            borderBottomWidth: 2,
                        }}
                    />

                    <Text style={styles.topTitle}>Bases de la lecture et de l'écriture</Text>
                    
                    <View
                        style={{
                            flex:1,
                            borderBottomColor: 'white',
                            borderBottomWidth: 2,
                        }}
                    />

                </View>
                
                <View style={{gap:10}}>

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                </View>

            </View>
            
            <View>
            
                <View style={styles.unitTextContainer}>
                    
                    <View
                        style={{
                            flex:1,
                            borderBottomColor: 'white',
                            borderBottomWidth: 2,
                        }}
                    />

                    <Text style={styles.topTitle}>Bases de la lecture et de l'écriture</Text>
                    
                    <View
                        style={{
                            flex:1,
                            borderBottomColor: 'white',
                            borderBottomWidth: 2,
                        }}
                    />

                </View>
                
                <View style={{gap:10}}>

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                    <View style={{backgroundColor:"white",borderRadius:"full",height:40,width:40}} />

                </View>

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    dialogBoxContainer: {
        minHeight: "100%",
        flexDirection: 'column',
        height: '100%',
        width: screenWidth,
        padding: 10,
        alignContent: "center",
    },

    unitTextContainer: {
        width: "100%",
        flexDirection: "row",
        justifyContent: "center",
        gap: 10,
        alignItems: "center"
    },

    topTitle: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "white",
        maxWidth: "50%",
        textAlign: "center",
    },

})

export default SectionSelectExercice