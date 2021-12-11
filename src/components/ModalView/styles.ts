import styled from "styled-components/native";

export const Overlay = styled.View`
  flex:1;
  background-color: ${({ theme }) => theme.colors.background.background_modal};
  
`;

export const Container = styled.View`
  flex:1;

  margin-top: 470px;
`;

export const Bar = styled.TouchableOpacity`
  height: 6px;
  width: 80px;
  background-color: ${({ theme }) => theme.colors.background.bg_white};

  margin-bottom: 6px;
  border-radius: 3px;
  
  align-self: center;
`;

export const Content = styled.ScrollView`
  flex:1;
  background-color: ${({ theme }) => theme.colors.background.bg_white};
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;