import React from 'react';

import { Container, ButtonsWrapper } from './styles';
import { Title } from '../ButtonsList/styles';

import { Header } from '../Header';
import { ButtonsList } from '../ButtonsList';
import { Slider } from './Slider';
import { Button } from '../../Button';

export function ModalFilters(){
  return (
    <Container>
      <Header
        title="Filters"
        description="Use advanced search to explore Pokémon by type, weakness, height and more!"
      />
      <ButtonsList typeList="types" title="Types"   />
      <ButtonsList typeList="types" title="Weaknesses"   />
      <ButtonsList typeList="weights" title="Weights" />
      <ButtonsList typeList="heights" title="Heights" />
      <Title Margin="19" >Number Range</Title>
      <Slider/>
      <ButtonsWrapper>
        <Button title="Reset" type={false} />
        <Button title="Apply" type={true} />
      </ButtonsWrapper>
    </Container>
  );
};