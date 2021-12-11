import React from 'react';
import { View, Text } from 'react-native';

import { Container, BadgeContent, Type, Level } from './styles';

import WaterSvg from '../../assets/types/water.svg';

import { GetColorByType } from '../../utils/getColorByType';

interface Props {
  name: string;
  noName?: boolean;
  noLevel?: boolean;
  margin_left?: boolean;
  LevelDefense?: string;
}

export function Badge({ name, noName = false, LevelDefense = "", margin_left,noLevel }:Props){
    
  return (
      <Container margin_left={margin_left} noName={noName} noLevel={noLevel} >
      <BadgeContent noName={noName}  noLevel={noLevel} background={GetColorByType(name)} >
        <WaterSvg
          width={15}
          height={15}
          fill="#FFF"
        />
        {noName == false && <Type>{name}</Type>}
      </BadgeContent>
      {LevelDefense != "" && <Level>{LevelDefense}</Level>}
    </Container>
  );
};
