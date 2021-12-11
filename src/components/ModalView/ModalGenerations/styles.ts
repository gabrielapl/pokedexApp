import styled from "styled-components/native";
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export const Container = styled(GestureHandlerRootView)`
  flex:1;
  padding: 30px 0;
`;

export const ButtonsWrapper = styled.View`
  flex-direction: row;

  margin-left: 40px;
  flex-wrap: wrap;
`;