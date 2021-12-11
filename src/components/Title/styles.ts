import styled from "styled-components/native";

interface Props {
  about: boolean;
}

export const Container = styled.Text<Props>`
  font-size: ${({ theme }) => theme.typography.filterTitle}px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.type.type_water};

  margin-bottom: ${({ about }) => about ? 0 : 20}px;
`;