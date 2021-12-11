import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
`;

export const AboutStatsContent = styled.View`
  margin: 20px 0 0 ;
`;

export const AboutStats = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemontype}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.Text.text_grey};
`;

export const TypeDefenses = styled.View`
  
  margin: 20px 0;
`;

export const TypeDefensesTitle = styled.Text`
  font-size: ${({ theme }) => theme.typography.filterTitle}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.type.type_fire};
`;

export const TypeDefensesDescription = styled.Text`
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.Text.text_grey};
  margin: 20px 0px 0;
`;

export const BadgeWrapper = styled.View`
  flex-direction: row;

  flex-wrap: wrap;
`;