import React from 'react';
import styled from 'styled-components/native';

export default function HostingCard({ hosting }) {
  return (
    <Card>
      <Title>{hosting.name}</Title>
      <SubText>{hosting.date}</SubText>
      <Status>{hosting.type}</Status>
    </Card>
  );
}

const Card = styled.View`
  background-color: #444;
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

const Status = styled.Text`
  color: #ddd;
  margin-top: 4px;
`;
