import styled from "styled-components/native";
import { Dimensions } from 'react-native';
import { BorderlessButton } from "react-native-gesture-handler";
import theme from "../../theme/theme";
import Animated from "react-native-reanimated";

export const Container = styled.View`
  margin-bottom: 45px;
`;

export const Content = styled.View`
   padding: 95px 40px 65px;
`;

export const BackButton = styled(BorderlessButton)`
  position: absolute;
  top: 40px;
  left: 40px;
`;

export const NamePokemon = styled.Text`
  font-size: ${({ theme }) => theme.typography.title}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_number};

  text-align: center;
  position: absolute;
`;

export const PokemonContainer = styled.View``;

export const Pokemon = styled.Image`
  height: 125px;
  width: 125px;
`;

export const HeaderWrapper = styled.View`
  flex-direction: row;
`;

export const NamesWrapper = styled.View`
  margin-left: 25px;
`;

export const Code = styled(Animated.Text)`
  font-size: ${({ theme }) => theme.typography.filterTitle}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_number};
`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.typography.applicationTitle}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_white};
  margin-bottom: 5px;
`;
