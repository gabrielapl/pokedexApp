import React, { useState } from 'react';
import { } from 'react-native';
import { Button } from '../../Button';
import { Header } from '../Header';

import { Container, ButtonsWrapper } from './styles';

import { ButtonsSort } from '../../../utils/ButtonsSort';
export function ModalSort(){

  const [buttonSelected, setButtonSelected] = useState("");

  function handleSelectedSort(key: string){
    key == buttonSelected ?  setButtonSelected("") : setButtonSelected(key);
  }

  return (
    <Container>
      <Header
        title="Sort"
        description="Sort Pokémons alphabetically or by National Pokédex number!"
      />
      <ButtonsWrapper>
        {
          ButtonsSort.map(item => (
            <Button 
              key={item.title} 
              title={item.title} 
              type={item.title == buttonSelected} 
              sort onPress={() => handleSelectedSort(item.title)} 
            />
          ))
        }
      </ButtonsWrapper>
    </Container>
  );
};