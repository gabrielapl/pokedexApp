import styled from "styled-components/native";

interface TypeProps{
  color: string;
  selected: boolean;
}

interface TitleProps{
  Margin: string;
}

export const Container = styled.View`
  flex:1;
  width: 100%;
`;

export const Title = styled.Text<TitleProps>`
  font-size: ${({ theme }) => theme.typography.filterTitle}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.Text.text_black};
  padding-left: 40px;
  margin-bottom: ${({ Margin }) => Margin}px;
`;

export const ButtonType = styled.TouchableOpacity<TypeProps>`
  width: 50px;
  height: 50px;

  border-radius: 30px;
  background-color: ${({ color, selected }) => selected ? "transparent" : color};

  align-items: center;
  justify-content: center;
  margin-right: 10px;

`;