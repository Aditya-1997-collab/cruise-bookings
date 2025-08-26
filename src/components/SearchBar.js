import React from 'react';
import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function SearchBar({ placeholder }) {
  return (
    <Container>
      <Icon name="search-outline" size={20} color="#aaa" />
      <Input placeholder={placeholder} placeholderTextColor="#777" />
      <Icon name="options-outline" size={20} color="#aaa" />
    </Container>
  );
}

const Container = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #222;
  border-radius: 12px;
  padding: 8px 12px;
  margin: 16px;
`;

const Input = styled.TextInput`
  flex: 1;
  color: white;
  margin-left: 8px;
`;
