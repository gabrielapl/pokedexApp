import styled from "styled-components/native";

interface Title {
  selected: boolean;
}

export const Container = styled.TouchableOpacity`
  width: 100px;
  height: 50px;

  align-items: center;
  justify-content: center;
`;

export const Title = styled.Text<Title>`
  font-size: ${({ theme, selected }) => selected ? theme.typography.description : theme.typography.filterTitle}px;
  font-family: ${({ theme, selected }) => selected ? theme.fonts.regular : theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_white};
  opacity: ${({ selected}) => selected ? 0.5 : 1};
  margin-bottom: 55px;
`;


