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
import LeftArrow from "../../components/svg/LeftArrow"
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class Login extends React.Component {
    
    render(){

        // const [text, onChangeText] = React.useState('Useless Text')
        // const [number, onChangeNumber] = React.useState('')

        return (

            <View style={styles.container}>
              
                <View style={styles.titleWindow}>

                    <TouchableOpacity style={styles.svgContainer}
                        onPress={()=>
                            this.props.navigation.navigate('Degemer Mat')
                        }
                    >
                        
                        <LeftArrow />

                    </TouchableOpacity>
                    
                    <View style={styles.titleContainer}>
        
                        <Text style={styles.title}>Kevreadenn</Text>

                        <Text style={styles.subtitle}>( connexion )</Text>

                    </View>

                    <SafeAreaView>

                        <TextInput style={styles.input}
                            // onChangeText={onChangeText}
                            // value={text}
                            placeholder="Lesanv ( pseudonyme )"
                            // keyboardType="text"
                        />

                        <TextInput style={styles.input}
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
                      this.props.navigation.navigate('Deiziad ganedigezh')
                    }
                  >
        
                    <Text style={styles.textButtonNoBorder}>Pas encore de compte ?</Text>
        
                    <Text style={styles.textButtonNoBorderOrange}>Enskrivadur</Text>
        
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
        fontSize: 40,
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
        flexDirection: "row",
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
  
})

export default withNavigation(Login)