import { Content, Wrapper, Text } from './heroImage.styles';

export interface IHeroImage {
  image: string;
  title: string;
  text: string;
}

const HeroImage = ({ image, title, text }: IHeroImage): JSX.Element => (
  <Wrapper image={image}>
    <Content>
      <Text>
        <h1>{title}</h1>
        <p>{text}</p>
      </Text>
    </Content>
  </Wrapper>
);

export default HeroImage;
