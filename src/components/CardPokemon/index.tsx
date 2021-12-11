import React, { useState, useEffect } from 'react';

import { Container, Content, Number, Name, BadgeWrapper, Pokemon } from './styles';

import { api } from '../../services/api';

import PokemonImage from '../../assets/generations/generation1/004.png';
import PokeballSvg from '../../assets/patterns/PokemonCard.svg';
import BallsSvg from '../../assets/patterns/6x3.svg';

import { Badge } from '../Badge';

import { GetBackgroundByType } from '../../utils/getColorByType';

import { PokemonProps } from '../../dtos/PokemonsInterace';

interface PokemonCard {
  name: string;
}

export function CardPokemon({ name }: PokemonCard) {

  const [pokemons, setPokemons] = useState<PokemonProps>();
  const [Loading, setLoading] = useState(true);

  async function GetPokemon() {
    try {
      const response = await api.get(`pokemon/${name}/`);
      setPokemons(response.data);
    } catch (error) {

    } finally {
      setLoading(false)
    }
  }
  
  function codeFormatted() {
    
    return `#${pokemons?.id.toString().padStart(3,'0')}`  
    
  }

  useEffect(() => {
    GetPokemon();
  }, [])

  return (

    Loading == false && (
      <Container
        color={GetBackgroundByType(pokemons?.types[0].type.name)}
      >

        <Content>
          <Number>{codeFormatted()}</Number>
          <Name>{pokemons?.name == undefined ? "" : pokemons?.name}</Name>
          <BadgeWrapper>
            {
              pokemons?.types.map(item => (
                <Badge noLevel margin_left name={item.type.name} key={item.type.name + item.type.url + new Date()} />
              ))
            }
          </BadgeWrapper>
        </Content>
        <BallsSvg
          width={74}
          height={32}
          style={{ position: "absolute", top: 5, left: 90 }}
        />
        <PokeballSvg
          width={145}
          height={145}
          style={{ position: "absolute", right: -10, bottom: -10 }}
        />
        <Pokemon source={{ uri: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemons?.id}.png` }} />
      </Container>
    )
  );
};
