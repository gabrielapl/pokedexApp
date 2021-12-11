import React from 'react';
import { View } from 'react-native';

import { Container, Pokemon, Name, Code } from './styles';

import Pokeball from '../../../assets/patterns/PokeballEvolution.svg';
import PokemonImg from '../../../assets/generations/generation1/007.png';

export function EvolutionPokemon(){
  return (
    <Container>
        <Pokeball
          width={100}
          height={100}
          style={{ position: 'absolute' }}
        />
        <Pokemon
          source={PokemonImg}
        />
      <Code>#004</Code>
      <Name>Charmander</Name>
      
    </Container>
  );
};