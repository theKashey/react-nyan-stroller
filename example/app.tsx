import * as React from 'react';
import {Component} from 'react';
import {NyanStrollBar, NyanStrollContainer} from "../src";
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
          <NyanStrollContainer draggable>
            Scroll Me!
            <UL/>
            <UL/>
          </NyanStrollContainer>
        </Block>
        <br/>
        <Block>
          <NyanStrollContainer draggable targetAxis="horizontal">
            Scroll Me!
            <UL/>
            <UL/>
          </NyanStrollContainer>
        </Block>
        <br/>
        <Block>
          <NyanStrollContainer oppositePosition>
            Scroll Me!
            <UL/>
            <UL/>
          </NyanStrollContainer>
        </Block>
        <br/>
        <Block>
          <NyanStrollContainer targetAxis="horizontal" oppositePosition>
            Scroll Me!
            <UL/>
            <UL/>
          </NyanStrollContainer>
        </Block>
        <UL/>
        <UL/>

        <NyanStrollBar targetAxis="horizontal" draggable/>
      </AppWrapper>
    )
  }
}