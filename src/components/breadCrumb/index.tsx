import { Link } from 'react-router-dom';
import { Wrapper, Content } from './breadCrumb.styles';

export interface IBreadCrumbProps {
  movieTitle: string | undefined;
}

const BreadCrumb = ({ movieTitle }: IBreadCrumbProps) => (
  <Wrapper>
    <Content>
      <Link to="/">
        <span>Home</span>
      </Link>
      <span>|</span>
      <span>{movieTitle}</span>
    </Content>
  </Wrapper>
);

export default BreadCrumb;
