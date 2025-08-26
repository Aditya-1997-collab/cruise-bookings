import React from 'react';
import { FlatList } from 'react-native';
import HostingCard from '../components/HostingCard';
import { useSelector } from 'react-redux';
import SearchBar from '../components/SearchBar';

export default function HostingScreen() {
  const hosts = useSelector((state) => state.hosting.items);

  return (
    <>
      <SearchBar placeholder="Search hosting..." />
      <FlatList
        data={hosts}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <HostingCard hosting={item} />}
        contentContainerStyle={{ padding: 16 }}
      />
    </>
  );
}
