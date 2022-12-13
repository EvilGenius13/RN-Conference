import React, { useEffect, useState } from 'react';
import { StyleSheet, View, Platform } from 'react-native';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';
import ScheduleScreen from './screens/ScheduleScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
  const stackOptions = {
    headerLeft: () => null,
    gestureEnabled: false,
   };

  // useEffect(() => {
  //   if (Platform.OS === 'web') {
  //     StackOptions = {
  //       headerLeft: () => null,
  //       gestureEnabled: false,
  //      }
  //   }
  // },[])


  return (
    <NavigationContainer initialRouteName="Home">
      <Stack.Navigator>
        <Stack.Screen
         name="Home" 
         component={HomeScreen}
         options={{
          title: "Home",
          headerShown: false,
         }}
        />
        <Stack.Screen 
         name="Schedule"
         component={ScheduleScreen}
         options={Platform.OS === 'web' ? undefined : stackOptions}
        />
        <Stack.Screen name="Details" component={DetailsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
