import React from 'react';
import { } from 'react-native';
import { ItemAbout } from './ItemAbout';

import { Container, Description } from './styles';

export function About(){
  return (
    <Container>
      <Description>Squirtle's shell is not merely used for protection. The shell's rounded shape and the grooves on its surface help minimize resistance in water, enabling this Pokémon to swim at high speeds.</Description>
      <ItemAbout
        title="Pokédex Data"
        Stats1="Species"
        Stats2="Height"
        Stats3="Weight"
        Stats4="Abilities"
        Stats5="Weaknesses"
        PokemonStats1="Tiny Turtle Pokémon"
        PokemonStats2="0.5m (1′08″)"
        PokemonStats3="9.0kg (19.8 lbs)"
        PokemonStats4="1. Torrent Rain Dish (hidden ability)"
      />
      <ItemAbout
        title="Training"
        Stats1="EV Yield"
        Stats2="Catch Rate"
        Stats3="Base Friendship"
        Stats4="Base Exp"
        Stats5="Growth Rate"
        PokemonStats1="1 Defense"
        PokemonStats2="45 (5.9% with PokéBall, full HP)"
        PokemonStats3="70 (normal)"
        PokemonStats4="63"
        PokemonStats5="Medium Slow"
      />
      <ItemAbout
        title="Breeding"
        Stats1="Gender"
        Stats2="Egg Groups"
        Stats3="Egg Cycles"
        PokemonStats1="♀ 87.5%, ♂ 12.5%"
        PokemonStats2="Dragon, Monster"
        PokemonStats3="20 (4,884 - 5,140 steps)"
        Breeding
      />
       <ItemAbout
        title="Location"
        Stats1="004"
        Stats2="229"
        Stats3="004"
        Stats4="234"
        Stats5="083"
        Stats6="004"
        Stats7="378"
        PokemonStats1="(Red/Blue/Yellow)"
        PokemonStats2="(Gold/Silver/Crystal)"
        PokemonStats3="(FireRed/LeafGreen)"
        PokemonStats4="(HeartGold/SoulSilver)"
        PokemonStats5="(X/Y - Central Kalos)"
        PokemonStats6="(Let's Go Pikachu/Let's Go Eevee)"
        PokemonStats7="(Sword/Shield)"
      />
    </Container>
  );
};