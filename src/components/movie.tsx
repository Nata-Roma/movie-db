import { useParams } from "react-router-dom";
import { useMovieFetch } from "../hooks/useMovieFetch";
import BreadCrumb from "./breadCrumb";
import Spinner from "./spinner";

export interface IMovieUseParams {
  movieId: string;
}

const Movie = () => {
  const { movieId } = useParams<IMovieUseParams>();
  console.log(movieId)
  const { state: movie, loading, error } = useMovieFetch(movieId);

  console.log(movie);

  if (loading) return <Spinner />;
  if (error) return <div>Something went wrong...</div>;

  return (
  <>
  <BreadCrumb movieTitle={movie?.original_title} />
  </>
  )
};

export default Movie;
