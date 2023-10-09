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

function Announcement({}){

    return(
        
        <>
                    
            <Image src={`https://i.pinimg.com/736x/03/a2/25/03a225ce038eb1ec64e34032d70a23a9.jpg`} style={{height:100,width:"100%",}}/>

            <View style={{padding:20,backgroundColor:"green"}}>

                <View style={{padding:20,backgroundColor:"purple"}}>

                    <Text>Announcement</Text>

                    <Text>3 days ago</Text>

                </View>

                <Text>New levels added to official store !</Text>

            </View>

            <View style={{padding:20,backgroundColor:"orange"}}>

                <TouchableOpacity style={{padding:20,backgroundColor:"purple"}}>
                    <Text>Like</Text>
                </TouchableOpacity>

                <Text style={{padding:20,backgroundColor:"gray"}}>123445 reactions</Text>

            </View>

        </>

    )
}

const styles = StyleSheet.create({

})

export default Announcement