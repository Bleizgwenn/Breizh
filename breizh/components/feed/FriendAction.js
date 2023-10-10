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
        
        <View style={{borderRadius:20,overflow:"hidden",gap:4,backgroundColor:"gray",borderColor:"gray",borderWidth:4}}>

            <View style={{padding:20,backgroundColor:"lightgray",gap:16}}>
                
                <View style={{flexDirection:"row",gap:8,alignItems:"center"}}>
                    
                    <Image src={`https://i.pinimg.com/736x/03/a2/25/03a225ce038eb1ec64e34032d70a23a9.jpg`} style={{height:50,width:50,borderRadius:50}}/>

                    <View style={{gap:4}}>

                        <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>Fanch</Text>

                        <Text style={{fontSize:12.5,color:"black"}}>3 days ago</Text>

                    </View>

                </View>

                <Text style={{fontSize:15,color:"black"}}>🎉🎉 You and Yann completed the Friends Quest ! 🎉🎉</Text>

            </View>

            <View style={{padding:20,backgroundColor:"lightgray",flexDirection:"row",gap:16}}>

                <TouchableOpacity style={{flex:1,flexDirection:"row",padding:16,backgroundColor:"gray",borderRadius:16,justifyContent:"space-between",alignItems:"center"}}>
                    <Text style={{fontWeight:"bold",fontSize:15,color:"lightgray"}}>Share</Text>
                    <Share/>
                </TouchableOpacity>

                <TouchableOpacity style={{padding:16,backgroundColor:"gray",borderRadius:50,}}>
                    <Text style={{fontWeight:"bold",fontSize:15,color:"black"}}>🎉</Text>
                </TouchableOpacity>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({

})

export default FriendAction