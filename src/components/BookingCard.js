import React from 'react';
import styled from 'styled-components/native';
import { Text } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export default function BookingCard({ booking }) {
  return (
    <Card>
      <Icon name="boat-outline" size={50} color="#fff" />
      <Text style={{ color: 'white', fontSize: 16, fontWeight: '600' }}>
        {booking.title}
      </Text>
      <Text style={{ color: '#aaa' }}>{booking.date}</Text>
      <Status status={booking.status}>{booking.status}</Status>
    </Card>
  );
}

const Card = styled.View`
  background-color: #222;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
`;

const Status = styled.Text`
  margin-top: 8px;
  color: ${(props) =>
    props.status === 'Upcoming' ? 'limegreen' :
    props.status === 'Completed' ? 'skyblue' :
    props.status === 'Canceled' ? 'red' : 'orange'};
  font-weight: bold;
`;
