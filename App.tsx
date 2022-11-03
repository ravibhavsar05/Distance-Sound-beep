import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './src/HomeScreen';
import DetailsScreen from './src/DetailsScreen';
import { HomeStackRoutesAndParams } from './src/routes/types';
import { HomeRoutes } from './src/routes/enums';
import * as TaskManager from 'expo-task-manager'
import calculateDistance from './src/component-library/CalculateDistance';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Keys } from './src/component-library/Keys';

const HomeStack = createNativeStackNavigator<HomeStackRoutesAndParams>();

TaskManager.defineTask(Keys.LOCATION_TASK_NAME, async ({ data, error }) => {

  if (error) {
    console.log('Something went wrong with background locations')
  }

  if (data) {
    const latitude: any = await AsyncStorage.getItem(Keys.LATITUDE);
    const longitude: any = await AsyncStorage.getItem(Keys.LONGITUDE);

    const { locations }: any = data;
    {
      latitude !== null ?
        calculateDistance(locations[0], { "latitude": JSON.parse(latitude), "longitude": JSON.parse(longitude) })
        : null
    }
  }
})

function App() {

  return (
    <NavigationContainer>
      <HomeStack.Navigator initialRouteName={HomeRoutes.HOME_SCREEN} screenOptions={{ headerShown: false }}>
        <HomeStack.Screen
          name={HomeRoutes.HOME_SCREEN}
          component={HomeScreen}
          options={{ gestureEnabled: false }}
        />
        <HomeStack.Screen
          name={HomeRoutes.DETAILS_SCREEN}
          component={DetailsScreen}
          options={{ gestureEnabled: false }}
        />
      </HomeStack.Navigator>
    </NavigationContainer>
  );
}

export default App;
