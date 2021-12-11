import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  margin-bottom: 5px;
`;

export const TitleStats = styled.Text`
  font-size: ${({ theme }) => theme.typography.filterTitle}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.type.type_grass};

 margin-bottom: 20px;
`;

export const StatsWrapper = styled.View`
  flex-direction: row;

  align-items: center;

  margin-bottom: 15px;
`;

export const Stats = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemontype}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.Text.text_black};
`;

export const PokemonStats = styled.Text`
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.Text.text_grey};

  position: absolute;
  left: 95px;
`;

