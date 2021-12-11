import styled from "styled-components/native";

interface ContainerProps {
  noName: boolean;
  noLevel: boolean;
  margin_left?: boolean;
  background?: string;
}

export const Container = styled.View<ContainerProps>`
    height: ${({ noLevel }) => noLevel ? 25 : 54}px;
    margin-right: ${({ noName, noLevel }) => noName ? 14 : 10}px;
    margin-right: ${({ margin_left }) => margin_left == true && 5}px;
    margin-bottom: ${({ noName, noLevel }) => noLevel ? 0 :noName ? 20 : 0}px;
    align-items: ${({ noName }) => noName ? 'center' : 'baseline'};
    justify-content: space-between;
`;

export const BadgeContent = styled.View<ContainerProps>`
  width: ${({ noName }) => noName ? 25 : 65}px;
  height: 25px;

  border-radius: 3px;

  flex-direction: row;

  align-items: center;
  justify-content: center;

  background-color: ${({ background }) => background};

`;

export const Type = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemontype}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.Text.text_white};
  text-transform: capitalize;
  margin-left: 5px;
`;

export const Level = styled.Text`
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.Text.text_grey};
`;