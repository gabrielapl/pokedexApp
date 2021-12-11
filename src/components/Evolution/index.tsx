import React from 'react';

import { Container, LevelUpWrapper, LevelUpText } from './styles';

import { EvolutionPokemon } from './EvolutionPokemon';
import LevelUpSvg from '../../assets/patterns/LevelUp.svg';

export function Evolution(){
  return (
    <Container>
      <EvolutionPokemon/>
      <LevelUpWrapper>
        <LevelUpSvg/>
        <LevelUpText>(Level 16)</LevelUpText>
      </LevelUpWrapper>
      <EvolutionPokemon/>
    </Container>
  );
};