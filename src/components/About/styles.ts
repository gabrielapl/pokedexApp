import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.Text.text_grey};
  
  margin-bottom: 30px;
`;