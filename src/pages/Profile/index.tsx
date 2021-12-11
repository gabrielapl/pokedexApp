import React, { useState, useRef } from 'react';
import Animated, { useSharedValue, useAnimatedScrollHandler, runOnJS } from 'react-native-reanimated';


import { Container, 
  ButtonWrapper, 
  Content, 
  ContentWrapper} from './styles';

import { ButtonType } from '../../components/ButtonType';
import { Header } from '../../components/Header';
import { Evolution } from '../../components/Evolution';
import { Title } from '../../components/Title';
import { Stats } from '../../components/Stats';
import { About } from '../../components/About';


export function Profile(){

  const [selectedScreen, setSelectedScreen] = useState("About");

  function handleSelectedScreen(key){
    setSelectedScreen(key)
  }


  const buttons = [
    {id: 1, name: "About"},
    {id: 2, name: "Stats"},
    {id: 3, name: "Evolution"},
  ]

  /* const offset = useRef(() => {
    const scrollHandler = useAnimatedScrollHandler(event => {
      event.contentOffset.y;
      console.log(event.contentOffset.y)

    });
    setScrollY(scrollHandler)
  }); */


  const ScrollY = useSharedValue(0)

  const scrollHandler = useAnimatedScrollHandler(event => {
    ScrollY.value = event.contentOffset.y
  });

  return (
    <Container>
      <Header
        Scroll={ScrollY}
      />
      <ButtonWrapper>
        {buttons.map(item => (
          <ButtonType
            key={item.id}
            name={item.name}
            selected={selectedScreen != item.name} 
            onPress={() => handleSelectedScreen(item.name)}
          />
        ))}
      </ButtonWrapper>
      <Content
        showsVerticalScrollIndicator={false}
        onScroll={scrollHandler}
        scrollEventThrottle={16}
      >
        <ContentWrapper screen={selectedScreen} >
          {selectedScreen == "About" && <About/>}
            {
              selectedScreen == "Stats" && 
                <>
                <Title
                  title="Base Stats"
                />
                <Stats/>
                </>
            }
           {selectedScreen == "Evolution" && 
              <>
              <Title
                title="Evolution Chart"
              />
              <Evolution/>
              </>
          }
          
        </ContentWrapper>
      </Content>
    </Container>
  );
};