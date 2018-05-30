import * as React from 'react';
import {Component} from 'react';
import {NyanScrollBar, NyanScrollContainer} from "../src";
import {AppWrapper} from './styled';
import styled from 'styled-components';

export interface AppState {

}


const Block = styled.div`
  height: 200px;  
  width: 800px;
  background-color:#f0f0f0;
  position: relative;
`;


const UL = () => (
  <ul>
    {(Array(50) as any)
      .fill(1)
      .map((_: any, index: number) => <li key={`k${index}`}>{index}</li>)
    }
  </ul>
)
export default class App extends Component <{}, AppState> {
  state: AppState = {}

  render() {
    return (
      <AppWrapper>
        <Block>
          <NyanScrollContainer draggable>
            Scroll Me!
            <UL/>
            <UL/>
          </NyanScrollContainer>
        </Block>
        <br/>
        <Block>
          <NyanScrollContainer draggable targetAxis="horizontal">
            Scroll Me!
            <UL/>
            <UL/>
          </NyanScrollContainer>
        </Block>
        <br/>
        <Block>
          <NyanScrollContainer oppositePosition>
            Scroll Me!
            <UL/>
            <UL/>
          </NyanScrollContainer>
        </Block>
        <br/>
        <Block>
          <NyanScrollContainer targetAxis="horizontal" oppositePosition>
            Scroll Me!
            <UL/>
            <UL/>
          </NyanScrollContainer>
        </Block>
        <UL/>
        <UL/>

        <NyanScrollBar targetAxis="horizontal" draggable/>
      </AppWrapper>
    )
  }
}