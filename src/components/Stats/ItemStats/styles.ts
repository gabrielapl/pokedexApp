import styled from "styled-components/native";

interface Total {
  stats: string;
}

export const Container = styled.View`
  width: 100%;

  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
`;

export const Stats = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemontype}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.Text.text_black};
`;

export const StatsWrapper = styled.View`
  flex-direction: row;
  width: 85px;
  justify-content: space-between;
  align-items: center;
`;

export const StatsDetail = styled.Text<Total>`
  font-size: ${({ theme, stats }) => stats == "Total" ? theme.typography.filterTitle : theme.typography.description}px;
  font-family: ${({ theme, stats }) => stats == "Total" ? theme.fonts.bold : theme.fonts.regular};
  color: ${({ theme, stats }) => stats == "Total" ? theme.colors.Text.text_grey : theme.colors.Text.text_grey};

  margin-right: 10px;
`;

export const StatsBar = styled.View`
  flex:1;
  width: 89px;
  justify-content: center;
  margin-right: 10px;
`;

export const StatsBarRange = styled.View`
  width: 100%;
  height: 4px;

  border-radius: 2px;

  background-color: ${({ theme }) => theme.colors.type.type_water};
`;

export const Min = styled.Text<Total>`
  font-size: ${({ theme, stats }) => stats == "Total" ? theme.typography.pokemontype : theme.typography.description}px;
  font-family: ${({ theme, stats }) => stats == "Total" ? theme.fonts.medium : theme.fonts.regular};
  color: ${({ theme, stats }) => stats == "Total" ? theme.colors.Text.text_black : theme.colors.Text.text_grey};
  margin-right: 10px;
`;

export const Max = styled.Text<Total>`
  font-size: ${({ theme, stats }) => stats == "Total" ? theme.typography.pokemontype : theme.typography.description}px;
  font-family: ${({ theme, stats }) => stats == "Total" ? theme.fonts.medium : theme.fonts.regular};
  color: ${({ theme, stats }) => stats == "Total" ? theme.colors.Text.text_black : theme.colors.Text.text_grey};
`;
