import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  padding: 0 40px;
  margin-bottom: 35px;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.pokemonName}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_black};
  margin-bottom: 5px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.Text.text_grey};
`;