import React from "react"
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    TextInput,
    SafeAreaView,
} from "react-native"
import { withNavigation } from "react-navigation"
import {Dimensions} from 'react-native'
import LeftArrow from "../../../components/svg/LeftArrow"
import RNDateTimePicker from '@react-native-community/datetimepicker'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class UserRegister extends React.Component {

    render(){

        // const [text, onChangeText] = React.useState('Useless Text');
        // const [number, onChangeNumber] = React.useState('');

        return (

            <View style={styles.container}>
                
                <View style={styles.titleWindow}>

                    <TouchableOpacity style={styles.svgContainer}
                        onPress={()=>
                            this.props.navigation.navigate('Deiziad ganedigezh')
                        }
                    >
                        
                        <LeftArrow />

                    </TouchableOpacity>
                    
                    <View style={styles.titleContainer}>
        
                        <Text style={styles.title}>Krouit hoc'h aelad</Text>

                        <Text style={styles.subtitle}>( créez votre profil )</Text>

                    </View>

                    <SafeAreaView>

                        <TextInput style={styles.input}
                            // onChangeText={onChangeText}
                            // value={date}
                            placeholder="Lesanv ( pseudonyme )"
                            // keyboardType="text"
                        />

                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Kentanv ( prénom )"
                            // keyboardType="text"
                        />

                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Postel ( e-mail )"
                            // keyboardType="text"
                        />

                        <TextInput
                            style={styles.input}
                            // onChangeText={onChangeNumber}
                            // value={number}
                            placeholder="Ger-tremen ( mot de passe )"
                            // keyboardType="text"
                        />
                        
                    </SafeAreaView>
        
                </View>
                
                <View style={styles.buttonsContainer}>
        
                    <TouchableOpacity style={styles.button} 
                    onPress={()=>
                        this.props.navigation.navigate('Main')
                    }
                    >
        
                    <Text style={styles.textButton}>Talvoudekaat</Text>
        
                    </TouchableOpacity>
        
                    <TouchableOpacity style={styles.buttonText} 
                        onPress={()=>
                            // this.props.navigation.navigate('Login')
                            alert("Afficher les conditions d'utilisation")
                        }
                    >
        
                        <Text style={styles.textButtonNoBorder}>En vous inscrivant, vous acceptez les</Text>
            
                        <Text style={styles.textButtonNoBorderOrange}>Conditions d'utilisation</Text>
        
                    </TouchableOpacity>
        
                </View>
        
            </View>

        )

    }

}
  
const styles = StyleSheet.create({

    container: {
        flex: 1,
        height: screenHeight,
        width: screenWidth,
        backgroundColor: "#DDDCE1",
        alignItems: "center",
        justifyContent: "between",
    },

    inputDate: {
        height: 60,
        margin: 5,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        // paddingHorizontal: 20,
        width: screenWidth-20,
        borderRadius: 20,
        backgroundColor: "#DB8646",
        borderColor: "#381C11",
        borderWidth: 3,
        overflow: "hidden",
        color: "#381C11",
        fontSize: 16,
        fontWeight: "bold",
    },

    input: {
        height: 60,
        margin: 5,
        paddingHorizontal: 20,
        width: screenWidth-20,
        borderRadius: 20,
        backgroundColor: "#DB8646",
        borderColor: "#381C11",
        borderWidth: 3,
        color: "#381C11",
        fontSize: 16,
        fontWeight: "bold",
    },

    buttonsContainer: {
        margin: 30,
        alignItems: "center",
        justifyContent: "flex-end",
        flexDirection: "column",
        width: '100%',
        gap: 10,
    },

    titleWindow: {
        marginTop: 60,
        width: screenWidth,
        flex: 1,
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        gap: 20,
    },

    titleContainer: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
        gap: 0,
    },

    title: {
        fontSize: 30,
        fontWeight: "bold",
        color: "#381C11",
    },

    subtitle: {
        fontSize: 15,
        fontWeight: "thin",
        color: "rgb(107 114 128)",
    },

    image: {
        height: 200,
        width: 200,
        borderRadius: 100,
    },

    button: {
        backgroundColor: "#381C11",
        borderRadius: 20,
        padding: 16,
        alignItems: "center",
        height: 50,
        width: screenWidth-20,
        elevation: 2,
    },

    buttonText: {
        padding: 16,
        alignItems: "center",
        justifyContent: "center",
        height: 50,
        width: screenWidth-20,
        elevation: 2,
        flexDirection: "column",
        gap: 5,
    },

    textButtonNoBorder: {
        color: "#381C11",
        fontSize: 14,
        fontWeight: "bold",
    },

    textButtonNoBorderOrange: {
        color: "#DB8646",
        fontSize: 14,
        fontWeight: "bold",
    },

    textButton: {
        color: "#DDDCE1",
        fontSize: 16,
        fontWeight: "bold",
    },

    svgContainer: {
        backgroundColor: "#381C11",
        borderRadius: 20,
        marginLeft: 20,
        padding: 10,
        alignSelf: "flex-start",
    },

    dateInputContainer: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: screenWidth-10,
    },

    dateInput: {
        height: 60,
        margin: 5,
        paddingHorizontal: 20,
        flex: 1,
        borderRadius: 20,
        backgroundColor: "#DB8646",
        borderColor: "#381C11",
        borderWidth: 3,
        color: "#381C11",
        fontSize: 16,
        fontWeight: "bold",
    },
  
})

export default withNavigation(UserRegister)