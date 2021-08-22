import { useHomeFetch } from '../hooks/useHomeFetch';
import { BACKDROP_SIZE, IMAGE_BASE_URL, POSTER_SIZE } from '../utils/config';
import Grid from './grid';
import HeroImage from './heroImage';
import noImage from '../assets/images/no_image.jpg';
import Thumb from './thumb';
import Spinner from './spinner';
import SearchBar from './searchBar/searchbar';
import Button from './button/button';

const Home = () => {
  const { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore  } = useHomeFetch();

  if (error) return <div>Something went wrong ...</div>;

  return (
    <div>
      {!searchTerm && state.results[0]?.id && (
        <HeroImage
          title={state.results[0].original_title}
          text={state.results[0].overview}
          image={IMAGE_BASE_URL + BACKDROP_SIZE + state.results[0].backdrop_path
          }
        />
      )}
      <SearchBar setSearchTerm={setSearchTerm} />
      <Grid header='Popular Movies'>
        {state.results.map(movie => (
          <Thumb
          key={movie.id}
          clickable
          image={
            movie.poster_path
              ? IMAGE_BASE_URL + POSTER_SIZE + movie.poster_path
              : noImage
          }
          movieId={movie.id}
        />
        ))}
      </Grid>
      {loading && <Spinner />}
      {state.page < state.total_pages && !loading && (
        <Button text='Load More' loadingMore={() => setIsLoadingMore(true)} />
      )}
    </div>
  );
};

export default Home;
