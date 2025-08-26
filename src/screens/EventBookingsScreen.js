import React from 'react';
import { FlatList } from 'react-native';
import EventCard from '../components/EventCard';
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';

export default function EventBookingsScreen() {
  const events = useSelector((state) => state.events.items);

  return (
    <>
      <SearchBar placeholder="Search events..." />
      <FlatList
        data={events}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <EventCard event={item} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </>
  );
}
