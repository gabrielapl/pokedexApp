import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Container, PokemonWrapper, Pokemon, Generation } from './styles';

import BallsSvg from '../../../assets/patterns/6x3GGenerations.svg';
import PokemonSvg from '../../../assets/patterns/PokeballCard.svg'

import { GetGeneration } from '../../../utils/ButtonGenerations';

interface Props extends RectButtonProps{
  generation: string;
  selected: boolean;
}

export function ButtonGenerations({ generation, selected, ...rest }: Props){
  return (
    <Container
      type={selected}
      {...rest}
    >
      <BallsSvg
        style={{ position:"absolute", top: 10, left: 15 }}
      />
      <PokemonSvg
        style={{ position:"absolute", bottom: 0, right: 0 }}
      />
      <PokemonWrapper>
        <Pokemon source={GetGeneration(generation)[0]} />
        <Pokemon source={GetGeneration(generation)[1]} />
        <Pokemon source={GetGeneration(generation)[2]} />
      </PokemonWrapper>
        <Generation type={selected} >{generation}</Generation>
    </Container>
  );
};