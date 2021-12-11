import React from 'react';
import { } from 'react-native';
import { Badge } from '../Badge';
import { Title } from '../Title';
import { ItemStats } from './ItemStats';

import { Container, 
  AboutStatsContent, 
  AboutStats, 
  TypeDefenses, 
  TypeDefensesDescription, 
  BadgeWrapper } from './styles';

export function Stats(){
  return (
    <Container>
      <AboutStatsContent>
        <ItemStats stats="HP" statsDetail={44} />
        <ItemStats stats="Attack" statsDetail={44}/>
        <ItemStats stats="Defense" statsDetail={44}/>
        <ItemStats stats="Sp. Atk" statsDetail={44}/>
        <ItemStats stats="Sp. Def" statsDetail={44}/>
        <ItemStats stats="Speed" statsDetail={44} />
        <ItemStats stats="Total" statsDetail={391} />
      </AboutStatsContent>
      <AboutStats>The ranges shown on the right are for a level 100 Pokémon. Maximum values are based on a beneficial nature, 252 EVs, 31 IVs; minimum values are based on a hindering nature, 0 EVs, 0 IVs.</AboutStats>
      <TypeDefenses>
        <Title title="Type Defenses" />
        <TypeDefensesDescription>The effectiveness of each type on Squirtle.</TypeDefensesDescription>
      </TypeDefenses>
      <BadgeWrapper>
        
      </BadgeWrapper>
    </Container>
  );
};