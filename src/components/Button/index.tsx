import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, Title } from './styles';

interface Props extends RectButtonProps {
  title: string;
  type: boolean;
  sort?: boolean;
}

export function Button({ title, type, sort, ...rest }: Props){
  return (
    <Container sort={sort} type={type} {...rest}>
      <Title type={type} >{title}</Title>
    </Container>
  );
};