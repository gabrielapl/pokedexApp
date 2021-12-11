import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, SearchInput, styles } from './styles';

import SearchSvg from '../../assets/icons/search.svg';

interface Props extends TextInputProps{
  
}

export function Input({ ...rest }: Props){

  const theme = useTheme();

  return (
   <Container>
    <SearchInput
      placeholder="What Pokémon are you looking for?"
      placeholderTextColor={theme.colors.Text.text_grey}
      {...rest}
    />
    <SearchSvg 
      width={20} 
      height={20} 
      style={styles.icon} 
    />
   </Container>
  );
};