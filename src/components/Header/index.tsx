import React, { useState, useEffect } from 'react';
import { useTheme } from 'styled-components';
import { Dimensions, View } from 'react-native';

import { useAnimatedStyle, useSharedValue, useAnimatedProps } from 'react-native-reanimated';


import { Container,
  Content,
  NamePokemon,
  BackButton,
  PokemonContainer, 
  Pokemon, 
  Code, 
  HeaderWrapper, 
  Name, 
  NamesWrapper } from './styles';

import PokemonImage from '../../assets/generations/generation1/007.png';
import CirclePokemon from '../../assets/patterns/Circle.svg';
import Balls from '../../assets/patterns/Ball.svg';
import Back from '../../assets/patterns/Back.svg';

import { Badge } from '../Badge';

interface Props {
  Scroll: any;
}

export function Header({ Scroll }: Props){

  const theme = useTheme();

  return (
    <Container>
      <Content>
      <BackButton>
        <Back
          width={25}
          height={25}
          fill={theme.colors.Text.text_white}
        />
      </BackButton>
      <View onLayout={(event) => {
        //width = event.nativeEvent.layout
        /* padding-left: ${(Dimensions.get('screen').width - theme.typography.title)}px; */
      }} >
     {/*  <NamePokemon onLayout={(event) => {
        setWidth(event.nativeEvent.layout.width)
      }} style={{ paddingVertical: (Dimensions.get("window").width / width) / 2 }} >SQUIRTLE</NamePokemon> */}
        </View>
        <HeaderWrapper>
          <PokemonContainer>
            <CirclePokemon
              style={{ position: "absolute"}}
            />
            <Pokemon
              source={PokemonImage}
            />
          </PokemonContainer>
          <NamesWrapper>
            <Code>#007</Code>
            <Name>Squirtle</Name>
            {/* {Scroll >= 120 && <Badge/>} */}
          </NamesWrapper>
        </HeaderWrapper>
      </Content>
      <Balls
        style={{ alignSelf: "flex-end", marginTop: -105 }}
      />
    </Container>
  );
};