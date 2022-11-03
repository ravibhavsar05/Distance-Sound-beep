import { RouteProp } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useEffect, useState } from 'react';
import { View, Text, ScrollView } from 'react-native';
import Button from '../component-library/Button';
import InputField from '../component-library/InputField';
import { HomeRoutes } from '../routes/enums';
import { HomeStackRoutesAndParams } from '../routes/types';
import styles from './styles';
import { getDistance, getPreciseDistance } from 'geolib';
import * as Location from 'expo-location';
import calculateDistance from '../component-library/CalculateDistance';
import { Keys } from '../component-library/Keys';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loading from '../component-library/Loading';
import Header from '../component-library/Header';

interface Props {
  navigation: NativeStackNavigationProp<
    HomeStackRoutesAndParams,
    HomeRoutes.DETAILS_SCREEN
  >;
  route: RouteProp<HomeStackRoutesAndParams, HomeRoutes.DETAILS_SCREEN>;
}

export default function DetailsScreen({ navigation, route }: Props) {

  const [state, setState] = useState({ latitude: 0, longitude: 0 })
  const [location, setLocation] = useState({ latitude: 0, longitude: 0 })

  const MINUTE_MS = 5000;

  useEffect(() => {
    (async () => {

      const { status } = await Location.requestBackgroundPermissionsAsync();
      if (status === "granted") {

        await Location.startLocationUpdatesAsync(Keys.LOCATION_TASK_NAME, {
          accuracy: Location.Accuracy.BestForNavigation,
          timeInterval: 5000,
          foregroundService: {
            notificationTitle: "BackgroundLocation Is On",
            notificationBody: "We are tracking your location",
            notificationColor: "#ffce52",
            killServiceOnDestroy: true,

          },
          showsBackgroundLocationIndicator: true
        });
      }

      let current_location = await Location.getCurrentPositionAsync({});
      setLocation({ ...location, latitude: current_location?.coords?.latitude, longitude: current_location?.coords?.longitude })

    })();
  }, [])

  useEffect(() => {
    const interval = setInterval(async () => {
      let location = await Location.getCurrentPositionAsync({});
      setLocation({ ...location, latitude: location?.coords?.latitude, longitude: location?.coords?.longitude })

      if (state?.latitude.toString().length > 6 || state?.longitude.toString().length > 6) {
        calculateDistance(location, state)

      }
    }, MINUTE_MS);

    return () =>
      clearInterval(interval);
  }, [state])


  const onSubmit = async () => {

    calculateDistance(location, state)
    var dis = getDistance(
      { latitude: location?.coords?.latitude, longitude: location?.coords?.longitude },
      { latitude: state?.latitude, longitude: state.longitude }
    );
    alert(`Distance\n\n${dis} Meter\nOR\n${dis / 1000} KM`);
    await AsyncStorage.setItem(Keys.LATITUDE, JSON.stringify(state?.latitude));
    await AsyncStorage.setItem(Keys.LONGITUDE, JSON.stringify(state?.longitude));
  }

  return (
    <ScrollView style={{ flex: 1 }}>
      <Header title="Details Screen" />

      <View style={styles.outer_view}>
        {location?.latitude == 0 ?
          <Loading style={styles.loading} /> : null
        }
        <View style={[styles.input_view, { marginVertical: 50 }]}>
          <Text style={styles.label_text}>Your current Location :-</Text>
          <Text style={styles.label_text}>Latitude: {location?.latitude}</Text>
          <Text style={styles.label_text}>Longitude: {location?.longitude}</Text>
        </View>

        <View style={styles.input_view}>
          <InputField
            onChange={(text) => { setState({ ...state, latitude: text }) }}
            placeholder={'Latitude'}
            label={'LATITUDE'}
            value={state?.latitude}
            returnKeyType="next"
            keyboardType="numeric"
          />
        </View>
        <View style={styles.input_view}>
          <InputField
            onChange={(text) => { setState({ ...state, longitude: text }) }}
            placeholder={'Longitude'}
            label={'LONGITUDE'}
            value={state?.longitude}
            returnKeyType="done"
            keyboardType="numeric"
          />
        </View>

        <Button style={styles.button} onPress={onSubmit}>
          Submit
        </Button>
      </View>

    </ScrollView>
  );
}