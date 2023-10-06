import {
    Text,
    StyleSheet,
    TouchableOpacity,
} from 'react-native'
import { Audio } from 'expo-av'
import { useState, useEffect } from 'react'
import VolumeSpeaker from '../svg/VolumeSpeaker'

function AudioPlayerSpeakerButton({ audio }){

    const [sound, setSound] = useState(undefined)

    async function playSound() {

        const { sound } = await Audio.Sound.createAsync(audio)
        setSound(sound)
        const status = await sound.playAsync()

        setTimeout(() => {
            sound.unloadAsync()
            setSound(undefined)
        }, status.playableDurationMillis + 1000)

    }

    async function stopSound() {
        setSound(undefined)
    }

    useEffect(() => {
        return (
            sound?
                () => {sound.unloadAsync()}
            : 
                undefined
        )
    }, [sound])

    return(

        <TouchableOpacity
            onPress={playSound}
        >
            
            <VolumeSpeaker working={sound?false:true}/>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({

    speakerWorking: {
        backgroundColor: "red",
    }

})

export default AudioPlayerSpeakerButton