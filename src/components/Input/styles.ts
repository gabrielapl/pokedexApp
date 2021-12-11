import styled from "styled-components/native";
import { StyleSheet } from 'react-native';
import theme from "../../theme/theme";

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  
  
`;

export const SearchInput = styled.TextInput`
  width: 100%;

  background-color: ${({theme}) => theme.colors.background.bg_default_input};
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.Text.text_grey};
  padding: 21px 0;
  padding-left: 55px;
  border-radius: 10px;
`;

export const styles = StyleSheet.create({
  icon: {
    position: "absolute",
    left: 25,
  }
})

