import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps{
  type: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  height: 129px;
  width: 150px;

  border-radius: 10px;
  background-color: ${({ theme, type }) => type ? theme.colors.type.type_psychic : theme.colors.background.bg_default_input };
  justify-content: center;
  align-items: center;
  margin-right: 14px;
  margin-bottom: 14px;
`;

export const PokemonWrapper = styled.View`

  flex-direction: row;
  margin-bottom: 10px;
  

`;

export const Pokemon = styled.Image`
  width: 45px;
  height: 45px;
`;

export const Generation = styled.Text<ButtonProps>`
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) => type ? theme.colors.Text.text_white : theme.colors.Text.text_grey};
`;