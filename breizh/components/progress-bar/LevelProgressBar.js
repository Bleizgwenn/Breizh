import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
} from 'react-native'

function LevelProgressBar({used,max,text}){
    return(
        <View style={styles.containerClass}>

            <View style={styles.containerMax}>
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

            <Text style={styles.text} >{used} / {max} {text}</Text>

        </View>
    )
}

const styles = StyleSheet.create({

    text: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "#DDDCE1",
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
        backgroundColor: "lightgreen",
        borderRadius: "100%",
    },

})

export default LevelProgressBar