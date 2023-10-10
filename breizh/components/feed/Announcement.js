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
        
        <View style={{borderRadius:20,overflow:"hidden",gap:4,backgroundColor:"gray",borderColor:"gray",borderWidth:4}}>
                    
            <Image src={`https://i.pinimg.com/736x/03/a2/25/03a225ce038eb1ec64e34032d70a23a9.jpg`} style={{height:100,width:"100%",}}/>

            <View style={{padding:20,backgroundColor:"lightgray",gap:16}}>

                <View style={{gap:8,flexDirection:"column"}}>

                    <Text style={{fontSize:15,fontWeight:"bold",color:"black"}}>Annonces</Text>

                    <Text style={{fontSize:12.5,color:"black"}}>3 days ago</Text>

                </View>

                <Text style={{fontSize:15,color:"black"}}>⚡⚡ De nouveaux niveaux ont été ajoutés aux leçons officielles ! ⚡⚡</Text>

            </View>

            <View style={{padding:20,backgroundColor:"lightgray",flexDirection:"row",gap:16}}>

                <TouchableOpacity style={{padding:16,backgroundColor:"gray",borderRadius:50,}}>
                    <Text style={{fontWeight:"bold",fontSize:15,color:"lightgray"}}>❤️</Text>
                </TouchableOpacity>

                <View style={{borderRadius:50,flex:1,justifyContent:"center",alignItems:"flex-end"}}>
                    <Text style={{fontWeight:"bold",fontSize:15,color:"black"}}>❤️ 123445</Text>
                </View>

            </View>

        </View>

    )
}

const styles = StyleSheet.create({

})

export default Announcement