import { Wrapper } from './button.styles';

export interface IButtonProps {
  text: string;
  loadingMore: () => void
}

const Button = ({ text, loadingMore }: IButtonProps) => (
  <Wrapper type="button" onClick={loadingMore}>
    {text}
  </Wrapper>
);

export default Button;
