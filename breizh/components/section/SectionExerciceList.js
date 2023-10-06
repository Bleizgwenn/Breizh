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

function SectionExerciceList({exerciceslist}){

    function List({exercices}){
        return(
            exercices.map((exo,index)=>{
                return(
                    <View key={index} 
                        style={
                            [
                                styles.circle,
                                index/(exercices.length)===1/2||index===0?null:(Math.trunc(index/4))%2===0?
                                    (index%4+1)===3?{transform:`translateX(${75}px)`}:{transform:`translateX(${50}px)`}
                                    :
                                    (index%4+1)===3?{transform:`translateX(-${75}px)`}:{transform:`translateX(-${50}px)`}
                                ,
                                (index%4+1)/4===1?styles.coffre:null
                            ]
                        }
                    >
                        {(index%4+1)/4===1?<Treasure/>:<StarIcon/>}

                    </View>
                )
            })
        )
    }

    return(
                
        <View style={styles.exerciceSelectorContainer}>
            
            <List exercices={exerciceslist}/>

            <View style={[styles.circle,styles.trophée]}>
                <Trophy/>
            </View>

        </View>

    )

}

const styles = StyleSheet.create({

    circle: {
        backgroundColor: 'white',
        borderRadius:"100%",
        height:80,
        width:80,
        alignItems: 'center',
        justifyContent: 'center',
    },

    trophée: {
        backgroundColor: 'yellow',
    },

    coffre: {
        backgroundColor: 'orange',
    },

    exerciceSelectorContainer: {
        gap: 20,
        paddingVertical: 20,
        width: "100%",
        alignItems: "center",
    },

})

export default SectionExerciceList