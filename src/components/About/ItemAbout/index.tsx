import React from 'react';

import { Container, PokemonStats, Stats, StatsWrapper, TitleStats } from './styles';


import { Badge } from '../../Badge';
import { Title } from '../../Title';



interface Props {
  title: string;
  Stats1: string;
  Stats2: string;
  Stats3: string;
  Stats4?: string;
  Stats5?: string;
  Stats6?: string;
  Stats7?: string;
  PokemonStats1: string;
  PokemonStats2: string;
  PokemonStats3: string;
  PokemonStats4?: string;
  PokemonStats5?: string;
  PokemonStats6?: string;
  PokemonStats7?: string;
  Breeding?: boolean;
}

export function ItemAbout({
  title,
  Stats1,
  Stats2,
  Stats3,
  Stats4,
  Stats5,
  Stats6 = "",
  Stats7 = "",
  PokemonStats1,
  PokemonStats2,
  PokemonStats3,
  PokemonStats4 = "",
  PokemonStats5 = "",
  PokemonStats6,
  PokemonStats7,
  Breeding = false
 }: Props){
  return (
    <Container>
      <Title title={title}/>
      <StatsWrapper>
        <Stats>{Stats1}</Stats>
        <PokemonStats>{PokemonStats1}</PokemonStats>
      </StatsWrapper>
      <StatsWrapper>
        <Stats>{Stats2}</Stats>
        <PokemonStats>{PokemonStats2}</PokemonStats>
      </StatsWrapper>
      <StatsWrapper>
        <Stats>{Stats3}</Stats>
        <PokemonStats>{PokemonStats3}</PokemonStats>
      </StatsWrapper>
     {PokemonStats4 != '' &&
      <StatsWrapper>
        <Stats>{Stats4}</Stats>
        <PokemonStats>{PokemonStats4}</PokemonStats>
      </StatsWrapper>
     }
      {
        Breeding != true &&  
        <StatsWrapper>
          <Stats style={{ marginRight: 30 }} >{Stats5}</Stats>
          {PokemonStats5 == "" ? <Badge noName noLevel /> : <PokemonStats>{PokemonStats5}</PokemonStats>}
        </StatsWrapper>
      }
      {
        Stats6 != "" &&
        <StatsWrapper>
          <Stats>{Stats6}</Stats>
          <PokemonStats>{PokemonStats6}</PokemonStats>
        </StatsWrapper>

      }
      {Stats7 != "" &&
        <StatsWrapper>
          <Stats>{Stats7}</Stats>
          <PokemonStats>{PokemonStats7}</PokemonStats>
        </StatsWrapper>
      }
    </Container>
  );
};