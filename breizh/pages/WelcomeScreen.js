import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity,
} from "react-native"
import {Dimensions} from 'react-native'
import 'react-native-gesture-handler'
import { withNavigation } from "react-navigation"
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

class WelcomeScreen extends React.Component {

  render(){

    return (

      <View style={styles.container}>
        
          <View style={styles.imageContainer}>
  
            <Image style={styles.image} source={require("../assets/seizbreur-horse-2.png")} />
                    
            <View style={styles.titleContainer}>
  
              <Text style={styles.title}>Breizh</Text>

              <Text style={styles.subtitle}>Ensavadur Broadel Poblek Breizh</Text>

            </View>
  
          </View>
          
          <View style={styles.buttonsContainer}>
  
            <TouchableOpacity style={styles.button} 
              onPress={()=>
                this.props.navigation.navigate('Login')
              }
            >
  
              <Text style={styles.textButton}>Kevreadenn</Text> 
  
            </TouchableOpacity>
  
            <TouchableOpacity style={styles.button} 
              onPress={()=> 
                this.props.navigation.navigate('Deiziad ganedigezh')
              }
            >
  
              <Text style={styles.textButton}>Enskrivadur</Text> 
  
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

  buttonsContainer: {
    margin: 30,
    alignItems: "center",
    justifyContent: "flex-end",
    flexDirection: "column",
    width: '100%',
    gap: 10,
  },

  imageContainer: {
    marginTop: 40,
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "column",
    gap: 20,
  },

  title: {
    fontSize: 40,
    fontWeight: "bold",
    color: "#381C11",
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

  textButton: {
    color: "#DDDCE1",
    fontSize: 16,
    fontWeight: "bold",
  },
  
})

export default withNavigation(WelcomeScreen)