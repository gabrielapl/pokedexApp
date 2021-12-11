import styled from "styled-components/native";

export const Container = styled.View`
  width: 100%;
  
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  margin-top: 30px;
`;

export const LevelUpWrapper = styled.View`
  align-items: center;
`;


export const LevelUpText = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemonNumber}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_black};
  margin-bottom: 26px;
`;

