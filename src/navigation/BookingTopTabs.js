import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import CruiseBookingsScreen from '../screens/CruiseBookingsScreen';
import EventBookingsScreen from '../screens/EventBookingsScreen';
import HostingScreen from '../screens/HostingScreen';

const TopTab = createMaterialTopTabNavigator();

export default function BookingsTopTabs() {
  return (
    <TopTab.Navigator
      screenOptions={({ route }) => ({
        tabBarStyle: { 
          backgroundColor: '#000',   // black background
          elevation: 0,              // remove shadow on Android
        },
        tabBarLabelStyle: { 
          fontSize: 14, 
          fontWeight: '600',
          textTransform: 'none',     // keep original text (no uppercase)
        },
        tabBarIndicatorStyle: { 
          backgroundColor: '#fff',   // white underline
          height: 2, 
          borderRadius: 2,
        },
        tabBarActiveTintColor: '#fff',   // active = white
        tabBarInactiveTintColor: '#777', // inactive = grey
      })}
    >
      <TopTab.Screen 
        name="CruiseBookings" 
        component={CruiseBookingsScreen} 
        options={{ title: 'Cruise Bookings' }} 
      />
      <TopTab.Screen 
        name="EventBookings" 
        component={EventBookingsScreen} 
        options={{ title: 'Event Bookings' }} 
      />
      <TopTab.Screen 
        name="Hosting" 
        component={HostingScreen} 
        options={{ title: 'Hosting' }} 
      />
    </TopTab.Navigator>
  );
}
