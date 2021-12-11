import styled from "styled-components/native";

export const Container = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.background.bg_white};
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;
  
  justify-content: space-between;

  margin-top: 42.5px;
  margin-left: 241px;
  margin-right: 40px;
`;

export const Content = styled.View`
  padding: 35px 40px 0;
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.typography.applicationTitle}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_black};
  margin-bottom: 10px;
`;

export const Description = styled.Text`
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.Text.text_grey};
  margin-bottom: 25px;
`;

