import React from 'react';
import { FlatList, View, Text } from 'react-native';
import BookingCard from '../components/BookingCard';
import { useSelector } from 'react-redux';

export default function CruiseBookingsScreen() {
  const bookings = useSelector((state) => state.bookings.items);
  console.log("bookings", bookings)
  return (
    <FlatList
      data={bookings}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => <BookingCard booking={item} />}
      contentContainerStyle={{ padding: 16 }}
    />
  );
}
