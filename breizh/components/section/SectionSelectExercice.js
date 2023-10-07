import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
} from 'react-native'
import ProgramDialogBox from '../dialog/ProgramDialogBox'
import SectionExerciceList from './SectionExerciceList'
import LockerFilled from '../svg/LockerFilled'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function SectionSelectExercice(){

    const listexercices1 = [
        {'title':'Make introductions'},
        {'title':'Make introductions'},
        {'title':'Talk about your job'},
        {'title':'Make introductions'},
        {'title':'Talk about your job'},
        {'title':'Talk about your job'},
        {'title':'Talk about your job'},
        {'title':'Make introductions'},
    ]

    const listexercices2 = [
        {'title':'Make introductions'},
        {'title':'Make introductions'},
        {'title':'Talk about your job'},
        {'title':'Make introductions'},
        {'title':'Talk about your job'},
        {'title':'Talk about your job'},
        {'title':'Talk about your job'},
        {'title':'Make introductions'}
    ]

    return(

        <View style={styles.dialogBoxContainer}>
            
            <View style={{padding:10,marginVertical:20,}}>
            
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
                    
                    <SectionExerciceList exerciceslist={listexercices1}/>

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
                    
                    <SectionExerciceList exerciceslist={listexercices2}/>

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
                    
                    <SectionExerciceList exerciceslist={listexercices2}/>

                </View>

            </View>

            <View style={styles.sectionGoToNext}>

                <View style={styles.badgeNext}>
                    <Text style={styles.badgeText}>UP NEXT</Text>
                </View>

                <View style={styles.sectionTitleContainer}>
                    <LockerFilled/>
                    <Text style={styles.sectionTitle}>Section 3 : Traveler</Text>
                </View>

                <Text style={styles.textDescription}>
                    Learn more foundational concepts and sentences for basic conversations
                </Text>

                <TouchableOpacity style={styles.buttonJumpHere}>
                    <Text style={styles.textButton}>Jump here</Text>
                </TouchableOpacity>

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

    sectionGoToNext: {
        padding: 20,
        alignItems: "center",
        justifyContent: "center",
        gap: 20,
        backgroundColor: "gray",
    },

    badgeNext: {
        padding: 7,
        borderRadius: 10,
        backgroundColor: "#381C11"
    },

    badgeText: {
        fontSize: 10,
        fontWeight: "bold",
        color: "white",
        textAlign: "center",
    },

    sectionTitleContainer: {
        gap: 4,
        flexDirection: "row",
    },

    sectionTitle: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "#DDDCE1",
        textAlign: "center",
    },

    textDescription: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#DDDCE1",
        textAlign: "center",
    },

    buttonJumpHere: {
        backgroundColor: "#381C11",
        borderRadius: 20,
        padding: 16,
        alignItems: "center",
        height: 50,
        width: screenWidth-20,
        elevation: 2,
    },

    textButton: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#DDDCE1",
        textAlign: "center",
    },

})

export default SectionSelectExercice