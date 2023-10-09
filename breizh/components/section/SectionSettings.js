import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
} from 'react-native'
import LeftArrow from '../svg/LeftArrow'
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function sectionSettings({}){

    return(
        
        <ScrollView contentContainerStyle={styles.containerMiddle} showsVerticalScrollIndicator={false}>
            
            <View
                style={{
                    minHeight: "100%",
                    flexDirection: 'column',
                    height: '100%',
                    width: screenWidth,
                    alignContent: "center",
                }}
            >
                
                <View style={{padding:20,backgroundColor:"blue",gap:10}}>

                    <Text>Account</Text>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Preferences</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Preferences</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Preferences</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Preferences</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Preferences</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Preferences</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Preferences</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Preferences</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                </View>
                
                <View style={{padding:20,backgroundColor:"blue",gap:10}}>

                    <Text>Subscription</Text>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Manage Subscription</Text>

                        <Text>Super Duoligo 12 months</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Restore Subscription</Text>

                    </TouchableOpacity>

                </View>
                
                <View style={{padding:20,backgroundColor:"blue",gap:10}}>

                    <Text>Support</Text>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Help center</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                    <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                        <Text>Feedback</Text>

                        <LeftArrow/>

                    </TouchableOpacity>

                </View>

                <TouchableOpacity style={{padding:20,backgroundColor:"green"}}>

                    <Text>Sign out</Text>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Text>Terms</Text>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Text>Privacy policy</Text>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Text>Acknowledgements</Text>

                </TouchableOpacity>

            </View>

        </ScrollView>

    )

}

const styles = StyleSheet.create({

    containerMiddle: {
        width: screenWidth,
        backgroundColor: "lightgray",
        position: "relative",
    },

})

export default sectionSettings