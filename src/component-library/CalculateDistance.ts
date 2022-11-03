import { Audio } from 'expo-av';
import { getDistance, getPreciseDistance } from 'geolib';

export default function calculateDistance(location: any, state: any) {

    var dis = getDistance(
        { latitude: location?.coords?.latitude, longitude: location?.coords?.longitude },
        { latitude: state?.latitude, longitude: state.longitude }
    );

    if (dis <= 1000) {
        playSound()
    }

    async function playSound() {
        try {
            await Audio.setAudioModeAsync({
                allowsRecordingIOS: false,
                staysActiveInBackground: true,
                playsInSilentModeIOS: true,
                shouldDuckAndroid: true,
                playThroughEarpieceAndroid: false,
            });
            const { sound } = await Audio.Sound.createAsync(require('../../assets/beep.mp3'), { shouldPlay: true });
            await sound.playAsync();
        } catch (error) {
            console.log('------', error)
        }
    }
}
