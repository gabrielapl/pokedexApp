import styled from "styled-components/native";

interface ContainerProps{
  color: string;
}

export const Container = styled.View<ContainerProps>`
  width: 100%;
  background-color: ${({ color }) => color};
  
  flex-direction: row;
  border-radius: 10px;

  align-items: center;
  padding: 20px;
  margin-top: 30px;
`;

export const Content = styled.View`
  
`;

export const Number = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemonNumber}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_number};
`; 
export const Name = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemonName}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_white};
  margin-bottom: 5px;
  text-transform: capitalize;

`; 

export const BadgeWrapper = styled.View`
  flex-direction: row;
`;

export const Pokemon = styled.Image`
  width: 130px;
  height: 130px;

  position: absolute;
  right: 6px;
  bottom: 15px;
`;