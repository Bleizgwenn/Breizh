import {
    Text,
    StyleSheet,
    TouchableOpacity,
    View,
    Dimensions,
    Image
} from 'react-native'
import StarIcon from '../svg/StarIcon'
import Share from '../svg/Share'
  
//  Dimensions de l'écran
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height

function FriendAction({}){

    return(
        
        <>

            <View style={{padding:20,backgroundColor:"green"}}>
                
                <View style={{padding:20,backgroundColor:"orange"}}>
                    
                    <Image src={`https://i.pinimg.com/736x/03/a2/25/03a225ce038eb1ec64e34032d70a23a9.jpg`} style={{height:50,width:50,}}/>

                    <View style={{padding:20,backgroundColor:"purple"}}>

                        <Text>Fanch</Text>

                        <Text>3 days ago</Text>

                    </View>

                </View>

                <Text>You and Yann completed the Friends Quest !</Text>

            </View>

            <View style={{padding:20,backgroundColor:"orange"}}>

                <TouchableOpacity style={{padding:20,backgroundColor:"purple"}}>
                    <Share/>
                    <Text>Share</Text>
                </TouchableOpacity>

                <TouchableOpacity style={{padding:20,backgroundColor:"gray"}}>
                    <StarIcon/>
                </TouchableOpacity>

            </View>

        </>

    )
}

const styles = StyleSheet.create({

})

export default FriendAction