import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    ScrollView,
} from 'react-native'
import RightChevron from '../svg/RightChevron'
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
                    gap:20,
                    padding:20,
                    marginBottom:40,
                }}
            >
                
                <View style={styles.containerSection}>

                    <Text style={styles.topTitle}>Account</Text>
                    
                    <View style={styles.containerSectionNav}>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderTopStartRadius:16,borderTopEndRadius:16}}>

                            <Text style={styles.buttonTitle}>Preferences</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

                            <Text style={styles.buttonTitle}>Preferences</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

                            <Text style={styles.buttonTitle}>Preferences</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

                            <Text style={styles.buttonTitle}>Preferences</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

                            <Text style={styles.buttonTitle}>Preferences</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

                            <Text style={styles.buttonTitle}>Preferences</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>

                            <Text style={styles.buttonTitle}>Preferences</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomStartRadius:16,borderBottomEndRadius:16}}>

                            <Text style={styles.buttonTitle}>Preferences</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                    </View>

                </View>
                
                <View style={styles.containerSection}>

                    <Text style={styles.topTitle}>Subscription</Text>

                    <View style={styles.containerSectionNav}>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderTopStartRadius:16,borderTopEndRadius:16}}>
                            
                            <View style={{gap:10}}>

                                <Text style={styles.buttonTitle}>Manage Subscription</Text>

                                <Text style={{fontSize:15,fontWeight:"bold",color:"#DDDCE1",}}>Super Duoligo 12 months</Text>

                            </View>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomStartRadius:16,borderBottomEndRadius:16}}>

                            <Text style={styles.buttonTitle}>Restore Subscription</Text>

                        </TouchableOpacity>

                    </View>

                </View>
                
                <View style={styles.containerSection}>

                    <Text style={styles.topTitle}>Support</Text>
                    
                    <View style={styles.containerSectionNav}>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderTopStartRadius:16,borderTopEndRadius:16}}>

                            <Text style={styles.buttonTitle}>Help center</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                        <TouchableOpacity style={{padding:20,backgroundColor:"blue",flexDirection:"row",justifyContent:"space-between",alignItems:"center",borderBottomStartRadius:16,borderBottomEndRadius:16}}>

                            <Text style={styles.buttonTitle}>Feedback</Text>

                            <RightChevron/>

                        </TouchableOpacity>

                    </View>

                </View>

                <TouchableOpacity style={{backgroundColor:"blue",borderRadius: 20,borderColor: "darkblue",padding:20,borderWidth:4}}>

                    <Text style={styles.buttonTitle}>Sign out</Text>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Text style={styles.topTitle}>Terms</Text>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Text style={styles.topTitle}>Privacy policy</Text>

                </TouchableOpacity>

                <TouchableOpacity>

                    <Text style={styles.topTitle}>Acknowledgements</Text>

                </TouchableOpacity>

            </View>

        </ScrollView>

    )

}

const styles = StyleSheet.create({

    containerMiddle: {
        width: screenWidth,
        backgroundColor: "blue",
        position: "relative",
    },

    topTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

    containerSection: {
        gap:20,
    },

    containerSectionNav: {
        gap:4,
        backgroundColor: "darkblue",
        borderRadius: 20,
        borderColor: "darkblue",
        borderWidth:4
    },

    buttonTitle: {
        fontSize: 17.5,
        fontWeight: "bold",
        color: "#DDDCE1",
    },

})

export default sectionSettings