import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, ButtonsWrapper } from './styles';

import { ButtonGenerations } from '../ButtonGenerations';
import { Header } from '../Header';

import { Generations } from '../../../utils/ButtonGenerations';

interface Props {
  onPress:(generation) => void;
}

export function ModalGenerations({ onPress }: Props){

  const [buttonGeneration, setButtonGeneration] = useState(0);

  function handleButtonGenerationSelected(key: number){
    key == buttonGeneration ? setButtonGeneration(0) : setButtonGeneration(key);
    onPress(key)
  }

  return (
    <Container>
      <Header
        title="Generations"
        description="Use search for generations to explore your Pokémon!"
      />
      <ButtonsWrapper>
        {Generations.map(item => (
            <ButtonGenerations
              key={item.id}
              generation={item.name} 
              onPress={() => handleButtonGenerationSelected(item.id)}
              selected={item.id == buttonGeneration}
            />
        ))}
      </ButtonsWrapper>
      
    </Container>
  );
};