import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator } from 'react-native';

import { Container, ButtonsWrapper, Content, Description, Title } from './styles';

import { api } from '../../services/api';

import Pokeball from '../../assets/patterns/PokeballHome.svg';
import SortSvg from '../../assets/icons/sort.svg';
import GenerationSvg from '../../assets/icons/generation.svg';
import FilterSvg from '../../assets/icons/filter.svg';

import { ButtonIconHome } from '../../components/ButtonIconHome';
import { Input } from '../../components/Input';
import { CardPokemon } from '../../components/CardPokemon';
import { ModalView } from '../../components/ModalView';

interface Pokemons {
  name: string;
  url: string;
}

export function Home() {

  const [pokemons, setPokemons] = useState<Pokemons[]>([]);
  const [filterPokemon, setFilterPokemon] = useState<Pokemons[]>([]);
  const [searchText, setSearchText] = useState('');
  const [generationPokemons, setGenerationPokemons] = useState<Pokemons[]>([]);
  const [Loading, setLoading] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [page, setPage] = useState(0);
  const [loadingMore, setLoadingMore] = useState(false);

  async function GetPokemon() {

    try {
      const response = await api.get(`pokemon?limit=1118`);
      setPokemons(response.data.results);
    } catch (error) {

    } finally {
      setLoading(false);
    }
  }

  function handleChangeInputText(text: string) {
    setSearchText(text)
  }

  async function handleGenerationFilter(generation) {
    setGenerationPokemons([]);
    const response = await api.get(`generation/${generation}/`);
    setGenerationPokemons(response.data.pokemon_species);
  }

  async function FilterPokemon() {
    /* const response = await api.get<Pokemons[]>(`pokemon/${searchText}`);
    setFilterPokemon(response.data);
    console.log(response.data); */
  }
  useEffect(() => {
    GetPokemon();
  }, []);

  return (
    <Container>
      <Pokeball
        style={{ position: "absolute", zIndex: -100 }}
      />
      <ButtonsWrapper>
        <ButtonIconHome Icon={GenerationSvg} onPress={() => setModalVisible(true)} />
        <ButtonIconHome Icon={SortSvg} />
        <ButtonIconHome Icon={FilterSvg} />
      </ButtonsWrapper>
      <Content>
        <Title>Pokédex</Title>
        <Description>Search for Pokémon by name or using the National Pokédex number.</Description>
        <Input
          onChangeText={handleChangeInputText}
          onSubmitEditing={FilterPokemon}
          value={searchText}
        />
      </Content>
      {
        Loading == false && <FlatList
          data={pokemons}
          showsVerticalScrollIndicator={false}
          keyExtractor={item => item.name}
          style={{ marginTop: 10, paddingHorizontal: 40 }}
          contentContainerStyle={{ paddingBottom: 40 }}
          renderItem={({ item }) => (
            <CardPokemon name={item.name} />
          )}
        />
      }
      <ModalView
        generationSelected={(generation) => handleGenerationFilter(generation)}
        onPress={() => setModalVisible(false)}
        visible={modalVisible}
      />
    </Container>
  );
};