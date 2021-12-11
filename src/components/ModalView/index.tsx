import React from 'react';
import { Modal, ModalProps, TouchableWithoutFeedback, View } from 'react-native';

import { Overlay, Container, Bar, Content } from './styles';

import { ModalFilters } from './ModalFilters';
import { ModalSort } from './ModalSort';
import { ModalGenerations } from './ModalGenerations';
import theme from '../../theme/theme';

interface Props extends ModalProps {
  generationSelected(generation: number);
  onPress: () => void;
}

export function ModalView({ generationSelected, onPress, ...rest }: Props) {
  return (
    <Modal
      transparent
      animationType="slide"
      statusBarTranslucent
      {...rest}
    >
        <Overlay>
          <Container>
            <Bar onPress={onPress} />
            <Content
              showsVerticalScrollIndicator={false}
            >
              <ModalSort/>
            </Content>
          </Container>
        </Overlay>
    </Modal>
  );
};

/* <ModalGenerations
                onPress={generationSelected}
              /> */