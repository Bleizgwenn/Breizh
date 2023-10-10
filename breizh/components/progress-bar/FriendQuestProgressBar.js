import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'

function FriendQuestProgressBar({max,score1,score2,text,fontcolor,linebgcolor}){
    return(
        <View style={styles.containerClass}>

            <View style={[styles.containerMax,linebgcolor?{backgroundColor:linebgcolor,}:{backgroundColor:"lightgreen",}]}>
                <View style={
                    {
                        width: `${((score1*100)/(max))}%`,
                        backgroundColor: "blue",
                    }
                }/>
                <View style={
                    {
                        width: `${((score2*100)/(max))}%`,
                        backgroundColor: "yellow",
                    }
                }/>
            </View>

            <Text style={[styles.text,fontcolor?{color:fontcolor}:{color:"#DDDCE1"}]} >{score2} / 100</Text>

        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 15,
        fontWeight: "bold",
    },

    containerClass: {
        width: "100%",
        flex: 1,
        flexDirection: "column",
        gap: 16,
        alignContent: "flex-start",
        justifyContent: "flex-start",
    },

    containerMax: {
        width: "100%",
        flexDirection:"row",
        overflow:"hidden",
        flex:1,
        height: 20,
        borderRadius: "100%",
    },

})

export default FriendQuestProgressBar