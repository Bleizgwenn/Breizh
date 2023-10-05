import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    Pressable,
} from 'react-native'
import HalfTriangle from '../svg/HalfTriangle'
import VolumeSpeaker from '../svg/VolumeSpeaker'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function ProgramDialogBox({dialog}){
    return(
        
        <View style={styles.dialogContainer}>

            <Pressable style={styles.question}>
                    
                <View style={styles.questionDialogTri}>
                    <HalfTriangle color={"lightblue"}/>
                </View>

                <View style={styles.questionTextContainer}>

                    <TouchableOpacity
                        // onPress={()=>setOpenModale2(!openModale2)}
                    >
                        
                        <VolumeSpeaker/>

                    </TouchableOpacity>

                    <View>

                        <Text style={styles.textOriginalL1}>{dialog.q.l1}</Text>

                        <Text style={styles.textOriginalL2}>{dialog.q.l2}</Text>

                    </View>

                </View>

            </Pressable>
            
            {dialog.r!==null?

                <Pressable style={styles.answer}>
                    
                    <View style={styles.answerDialogTri}>
                        <HalfTriangle color={"lightgreen"} />
                    </View>

                    <View style={styles.answerTextContainer}>

                        <TouchableOpacity
                            // onPress={()=>setOpenModale2(!openModale2)}
                        >
                            
                            <VolumeSpeaker/>

                        </TouchableOpacity>

                        <View>

                            <Text style={styles.textOriginalL1}>{dialog.q.l1}</Text>

                            <Text style={styles.textOriginalL2}>{dialog.q.l2}</Text>

                        </View>

                    </View>

                </Pressable>

            :
                null
            }

        </View>

    )
}

const styles = StyleSheet.create({

    dialogContainer: {
        marginHorizontal: 20,
        width: screenWidth-40,
    },

    question: {
        alignSelf: "flex-start",
        maxWidth: "70%",
        flexDirection: "row",
        transform: "translateX(-15px)",
    },

    answer: {
        alignSelf: "flex-end",
        transform: "translateY(-5px) translateX(15px)",
        justifyContent: "space-between",
        maxWidth: "70%",
        flexDirection: "row-reverse",
    },

    questionTextContainer: {
        padding:10,
        width: "100%",
        backgroundColor: "lightblue",
        borderRadius: 10,
        gap: 10,
        flexDirection: "row",
        alignItems: "center",
    },

    answerTextContainer: {
        padding:10,
        width: "100%",
        backgroundColor: "lightgreen",
        borderRadius: 10,
        justifyContent: "space-between",
        gap: 10,
        flexDirection: "row-reverse",
        alignItems: "center",
    },

    textOriginalL1: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "#301934",
    },

    textOriginalL2: {
        fontSize: 15,
        fontWeight: "bold",
        color: "#301934",
        opacity: 0.5,
    },

    questionDialogTri: {
        overflow: "hidden",
        justifyContent: "center",
        transform: "translateX(17px)",
    },

    answerDialogTri: {
        overflow: "hidden",
        justifyContent: "center",
        transform: "translateX(-17px)",
    },

})

export default ProgramDialogBox