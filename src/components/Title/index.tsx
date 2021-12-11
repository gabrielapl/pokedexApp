import React from 'react';
import { } from 'react-native';

import { Container } from './styles';

interface Props {
  title: string;
  about?: boolean;
}

export function Title({ title, about = false }: Props){
  return (
    <Container about={about} >
      {title}
    </Container>
  );
};