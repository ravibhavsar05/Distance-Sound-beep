import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, Text, Alert, Linking, Platform } from 'react-native';
import Button from '../component-library/Button';
import { HomeRoutes } from '../routes/enums';
import { HomeStackRoutesAndParams } from '../routes/types';
import styles from './styles';
import * as Location from 'expo-location';
import { startActivityAsync, ActivityAction } from 'expo-intent-launcher';
import Header from '../component-library/Header';


interface Props {
  navigation: NativeStackNavigationProp<
    HomeStackRoutesAndParams,
    HomeRoutes.HOME_SCREEN
  >;
  route: RouteProp<HomeStackRoutesAndParams, HomeRoutes.HOME_SCREEN>;
}

export default function HomeScreen({ navigation, route }: Props) {

  const onButtonClick = () => {
    (async () => {

      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== 'granted') {
        Alert.alert(
          "Alert",
          "Location permissions are not enabled. Kindly go to setting and enable it and come again.",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "Okay!!", onPress: () => goToSettings() }
          ]
        );
        return;
      }
      navigation.navigate(HomeRoutes.DETAILS_SCREEN)
    })();
  }

  const goToSettings = () => {
    if (Platform.OS === 'ios') {
      Linking.openURL("app-settings:");
    } else {
      startActivityAsync(ActivityAction.LOCATION_SOURCE_SETTINGS);
    }
  }


  return (
    <View style={{ flex: 1 }}>
      <Header title="Home Screen" />
      <View style={styles.outer_view}>

        <Text style={styles.label_text}>Please Enable Location</Text>

        <Button style={styles.button} onPress={onButtonClick}>
          Enable
        </Button>
      </View>
    </View>
  );
}