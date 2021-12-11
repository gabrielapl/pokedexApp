import React from 'react';

import { Container, 
  StatsWrapper,
  Stats, 
  StatsDetail, 
  StatsBar,
  StatsBarRange,
  Min,
  Max } from './styles';

interface Props {
  stats: string;
  statsDetail: number;
}

export function ItemStats({ stats, statsDetail }: Props){
  return (
    <Container>
      <StatsWrapper>
        <Stats>{stats}</Stats>
        <StatsDetail stats={stats} >{statsDetail}</StatsDetail>
      </StatsWrapper>
      <StatsBar>
        {stats != "Total" && <StatsBarRange/>}
      </StatsBar>
      <Min stats={stats} >{stats == "Total" ? "Min" : 188}</Min>
      <Max stats={stats} >{stats == "Total" ? "Max" : 282}</Max>
    </Container>
  );
};
