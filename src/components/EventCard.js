import React from 'react';
import styled from 'styled-components/native';

export default function EventCard({ event }) {
  return (
    <Card>
      <Title>{event.name}</Title>
      <SubText>{event.date}</SubText>
      <Location>{event.location}</Location>
    </Card>
  );
}

const Card = styled.View`
  background-color: #333;
  padding: 16px;
  border-radius: 12px;
  margin-bottom: 12px;
`;

const Title = styled.Text`
  color: white;
  font-size: 16px;
  font-weight: bold;
`;

const SubText = styled.Text`
  color: #aaa;
  margin-top: 4px;
`;

const Location = styled.Text`
  color: #ccc;
  margin-top: 4px;
`;
