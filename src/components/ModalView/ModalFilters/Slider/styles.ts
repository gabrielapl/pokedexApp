import styled from "styled-components/native";

export const Container = styled.View`
  padding: 0 40px;
  margin-bottom: 51px;
`;

export const SliderWrapper = styled.View`
  height: 4px;
  width: 100%;

  border-radius: 2px;
  background-color: ${({ theme }) => theme.colors.background.bg_default_input};
`;

export const ActiveBackground = styled.View`
  width: 100%;
  height: 4px;

  background-color: ${({ theme }) => theme.colors.type.type_psychic};
`;

export const Toggle = styled.TouchableOpacity`
  width: 30px;
  height: 30px;

  border-radius: 15px;
  border-color: ${({ theme }) => theme.colors.type.type_psychic};
  border-width: 4px;
  background-color: ${({ theme }) => theme.colors.type.type_dark};
 
`;