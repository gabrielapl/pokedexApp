import styled from "styled-components/native";
import { RectButton } from 'react-native-gesture-handler';

interface ButtonProps{
  type: boolean;
  sort?: boolean;
}

export const Container = styled(RectButton)<ButtonProps>`
  height: 60px;
  width: ${({ sort }) => sort ? '100%' : "146px"};

  border-radius: 10px;
  background-color: ${({ theme, type }) => type ? theme.colors.type.type_psychic : theme.colors.background.bg_default_input };
  justify-content: center;
  align-items: center;
  margin-bottom: ${({ sort }) => sort ? '20px' : "0"};
`;

export const Title = styled.Text<ButtonProps>`
  font-size: ${({ theme }) => theme.typography.description}px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme, type }) => type ? theme.colors.Text.text_white : theme.colors.Text.text_grey };
`;