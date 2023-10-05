import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Modal,
    Dimensions,
} from 'react-native'
import TransparentButton from '../svg/TransparentButton'
import CloseCross from '../svg/CloseCross'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function ModaleBottomTop({ text, color, closeFunction, openValue, child }){
    return(
        <Modal
            animationType="slide"
            transparent={true}
            visible={openValue}
            onRequestClose={() => {
                closeFunction(!openValue)
            }}
        >

            <View 
                style={{
                    paddingTop: 40,
                    width: screenWidth,
                    backgroundColor: `${color}`,
                    alignItems: "center",
                    justifyContent: "center",
                    borderBottomColor: `dark${color}`,
                    borderBottomWidth: 4,
                }}
            >
                
                <TouchableOpacity 
                    style={{
                        height: 60,
                        width: screenWidth,
                        flexDirection: "row",
                        alignItems: "center",
                        justifyContent: "space-between",
                        paddingHorizontal: 20,
                    }}
                    onPress={() => closeFunction(!openValue)}
                >
                    
                    <CloseCross/>

                    <Text 
                        style={{
                            fontSize: 20,
                            fontWeight: "bold",
                            color: "#DDDCE1",
                        }}
                    >
                        {text.substring(0,1).toUpperCase()}{text.substring(1,text.length)}
                    </Text>
                    
                    <TransparentButton/>

                </TouchableOpacity>
                
            </View>
            
            <View 
                style={{
                    height: screenHeight-104,
                    backgroundColor: `${color}`,
                }}
            >
                
                {child}

            </View>

        </Modal>
    )
}

export default ModaleBottomTop