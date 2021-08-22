import { ReactNode } from 'react';
import { Wrapper, Content } from './grid.styles';

export interface IGripProps {
  header: string
  children: ReactNode
}

const Grid = ({ header, children }:IGripProps) => (
  <Wrapper>
    <h1>{header}</h1>
    <Content>{children}</Content>
  </Wrapper>
);

export default Grid;