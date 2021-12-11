import React from 'react';
import { TouchableOpacityProps } from 'react-native';

import { Container, Title } from './styles';

interface Props extends TouchableOpacityProps{
  name: string;
  selected: boolean;
}

import Pokeball from '../../assets/patterns/PokeballType.svg';

export function ButtonType({ name, selected, ...rest }: Props){
  return (
    <Container {...rest} >
    <Title selected={selected} >{name}</Title>
    {selected == false &&
      <Pokeball 
        width={100} height={100}
        style={{ position:"absolute"}}
     />
    }
  </Container>
  );
};