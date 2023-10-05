import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
} from 'react-native'
import ProgramDialogBox from '../dialog/ProgramDialogBox'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function SectionKeyWords({unit}){

    return(

        <View style={styles.sectionKeyWords}>

            <View style={styles.sommaireText}>
                <Text style={styles.sommaireTitle}>Phrases et mots clés</Text>
                <Text style={styles.sommaireTextDescriptif}>{unit.title}</Text>
            </View>

            <View style={styles.dialogBoxMap}>

                {unit.list.map((echange, i)=>{
                    return(
                        <ProgramDialogBox key={i} dialog={echange}/>
                    )
                })}

            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    sommaireText: {
        width: "100%",
        flexDirection: "column",
        padding: 20,
        gap: 10,
    },

    sommaireTitle: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "black",
    },

    sommaireTextDescriptif: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    sectionKeyWords: {
        borderTopColor: "darkpurple",
        borderTopWidth: 4,
        width: screenWidth,
        justifyContent: "flex-start",
        alignItems: "flex-start",
        textAlign: "left",
    },

    dialogBoxMap: {
        gap: 20,
    },

})

export default SectionKeyWords