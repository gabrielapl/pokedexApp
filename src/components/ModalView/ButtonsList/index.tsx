import React, { useState } from 'react';
import { FlatList } from 'react-native';

import { Container, Title, ButtonType } from './styles';

import { ButtonsType, Heights, Weights } from '../../../utils/ButtonsType';

interface Props {
  typeList: string;
  title: string;
}

export function ButtonsList({ typeList, title }: Props){

  const [selected, setSelected] = useState([]);

  function handleSelected(key: string){
    const removeOrAdd = selected.find(selected => selected == key)
    removeOrAdd ? setSelected(selected.filter(item => item != key)) : setSelected(oldValue =>[...oldValue, key]);
    
  }
  const data = typeList == "types" && ButtonsType || typeList == "heights" && Heights || typeList == "weights" && Weights;

  return (
    <Container>
      <Title Margin="10" >{title}</Title>
      <FlatList
        data={data}
        keyExtractor={item => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{ paddingLeft: 40 }}
        style={{ marginBottom: 35 }}
        renderItem={({ item }) => (
          <ButtonType
            color={item.color}
            selected={selected.find(selected => selected == item.id ) == null}
            onPress={() => handleSelected(item.id)}
          >
          <item.Icon
            fill={selected.find(selected => selected == item.id ) == null ?  item.color : "#FFF"}
          />
          </ButtonType>
        )}
      />
    </Container>
  );
};