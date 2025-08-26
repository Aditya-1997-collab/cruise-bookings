import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';
import BookingsTopTabs from './BookingsTopTabs'; // 👈 nested top tabs
import { View, Text } from 'react-native';

const Tab = createBottomTabNavigator();

function PlaceholderScreen({ title }) {
  return (
    <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
      <Text style={{color:'#fff'}}>{title}</Text>
    </View>
  );
}

export default function AppNavigator() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;
          if (route.name === 'Bookings') iconName = 'ticket-outline';
          else if (route.name === 'Home') iconName = 'home-outline';
          else if (route.name === 'Events') iconName = 'calendar-outline';
          else if (route.name === 'Support') iconName = 'headset-outline';
          return <Icon name={iconName} size={size} color={color} />;
        },
        headerShown: false,
        tabBarStyle: { backgroundColor: '#111' },
        tabBarActiveTintColor: '#fff',
        tabBarInactiveTintColor: '#777',
      })}
    >
      <Tab.Screen name="Home" children={() => <PlaceholderScreen title="Home Screen" />} />
      <Tab.Screen name="Bookings" component={BookingsTopTabs} />
      <Tab.Screen name="Events" children={() => <PlaceholderScreen title="Events" />} />
      <Tab.Screen name="Support" children={() => <PlaceholderScreen title="Support" />} />
    </Tab.Navigator>
  );
}
