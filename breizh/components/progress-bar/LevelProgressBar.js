import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'

function LevelProgressBar({used,max,text,fontcolor,linebgcolor}){
    return(
        <View style={styles.containerClass}>

            <View style={[styles.containerMax,linebgcolor?{backgroundColor:linebgcolor,}:{backgroundColor:"lightgreen",}]}>
                <View style={
                    {
                        width: `${((used*100)/max)}%`,
                        flex:1,
                        // padding:2,
                        backgroundColor: "white",
                        borderRadius: "100%",
                    }
                }/>
            </View>

            <Text style={[styles.text,fontcolor?{color:fontcolor}:{color:"#DDDCE1"}]} >{used} / {max} {text}</Text>

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
        flexDirection: "row",
        gap: 16,
        alignContent: "flex-start",
        justifyContent: "flex-start",
    },

    containerMax: {
        width: "100%",
        flex:1,
        height: 20,
        borderRadius: "100%",
    },

})

export default LevelProgressBar