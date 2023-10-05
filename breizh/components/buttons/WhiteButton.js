import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'

function WhiteButton({ text }){
    return(
        <TouchableOpacity style={styles.slideButtonBox}>
            <Text style={styles.slideButtonText}>{text.substring(0,1).toUpperCase()}{text.substring(1,text.length)}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    slideButtonBox: {
        width: "100%",
        backgroundColor: "#DDDCE1",
        padding: 16,
        borderRadius: 20,
    },

    slideButtonText: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "darkgreen",
        textAlign: "center",
    },

})

export default WhiteButton