import { Link } from 'react-router-dom';
import { Image } from './thumb.styles';

export interface IThumb {
  image: string;
  movieId: number;
  clickable: boolean;
}

const Thumb = ({ image, movieId, clickable }: IThumb) => (
  <div>
    {clickable ? (
      <Link to={`/${movieId}`}>
        <Image src={image} alt="movie-thumb" />
      </Link>
    ) : (
      <Image src={image} alt="movie-thumb" />
    )}
  </div>
);

export default Thumb;
