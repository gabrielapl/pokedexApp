import styled from "styled-components/native";
import Animated from "react-native-reanimated";

interface ContentProps {
  screen: string;
}


export const Container = styled.View`
  flex:1;

  background-color: ${({ theme }) => theme.colors.background_type.bg_type_water};
`;

export const ButtonWrapper = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 19px;
`;

export const Content = styled(Animated.ScrollView)`
  flex:1;
  background-color: ${({ theme }) => theme.colors.background.bg_white};

  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  margin-top: -25px;
`;

export const ContentWrapper = styled.View<ContentProps>`
  padding: 0 40px 50px;
  padding-top: ${({ screen }) => screen == "About" ? 40 : 30}px;
`;