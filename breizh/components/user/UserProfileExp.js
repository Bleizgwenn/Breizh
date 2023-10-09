import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
} from 'react-native'
import ProgramDialogBox from '../dialog/ProgramDialogBox'
import StarIcon from '../svg/StarIcon'
import Treasure from '../svg/Treasure'
import Trophy from '../svg/Trophy'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function UserProfileExp({user,index}){

    return(
                
        <View style={styles.exerciceSelectorContainer}>
            
            <View style={styles.userRng}>

                <Text style={styles.text}>{index+1}</Text>

                <Text style={styles.text}>{user.username}</Text>

            </View>

            <Text style={styles.text}>{user.score} EXP</Text>

        </View>

    )

}

const styles = StyleSheet.create({

    exerciceSelectorContainer: {
        width: "100%",
        flexDirection: "row",
        paddingVertical: 10,
        paddingHorizontal: 20,
        alignItems: "center",
        justifyContent: "space-between",
    },

    userRng: {
        paddingVertical: 20,
        flexDirection: "row",
        gap: 20,
    },

    text: {
        fontSize: 15,
        fontWeight: "bold",
        color: "black",
    },

})

export default UserProfileExp