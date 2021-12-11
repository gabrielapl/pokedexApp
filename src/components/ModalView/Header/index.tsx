import React from 'react';
import { } from 'react-native';

import { Container, Title, Description } from './styles';

interface Props {
  title: string;
  description: string;
}

export function Header({ description, title }: Props){
  return (
    <Container>
      <Title>{title}</Title>
      <Description>{description}</Description>
    </Container>
  );
};