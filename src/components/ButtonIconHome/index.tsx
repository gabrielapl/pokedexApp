import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { SvgProps } from 'react-native-svg';
import { useTheme } from 'styled-components';

import { Container } from './styles';

interface Props extends RectButtonProps{
  Icon: React.FC<SvgProps>;
}

export function ButtonIconHome({ Icon, ...rest }: Props){

  const theme = useTheme();

  return (
    <Container {...rest} >
      <Icon 
        width={25} 
        height={25} 
        color={theme.colors.Text.text_black} 
      />
    </Container>
  );
};