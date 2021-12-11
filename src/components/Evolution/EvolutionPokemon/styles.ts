import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;

  align-items: center;
`;

export const Pokemon = styled.Image`
  top: 13px;
  margin-bottom: 13px;
`;

export const Code = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemontype}px;
  font-family: ${({ theme }) => theme.fonts.medium};
  color: ${({ theme }) => theme.colors.Text.text_grey};

`;

export const Name = styled.Text`
  font-size: ${({ theme }) => theme.typography.filterTitle}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_black};
`;