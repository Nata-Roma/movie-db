import { useState, useEffect } from 'react';
import apiSettings from '../api';
import {
  ICredit,
  ICreditCrew,
  ICreditsCast,
  IMovieDetails,
} from '../utils/interfaces';

export interface IUseMovieFetchProps {
  movieId: string;
}

export interface IUseMovieFetchState extends IMovieDetails {
  actors: Array<ICreditsCast>;
  directors: Array<ICreditCrew>;
}

export const useMovieFetch = (movieId: string) => {
  const [ state, setState ] = useState<IUseMovieFetchState>();
  const [ loading, setLoading ] = useState(true);
  const [ error, setError ] = useState(false);

  useEffect(
    () => {
      const fetchMovie = async () => {
        try {
          setLoading(true);
          setError(false);

          const movie: IMovieDetails = await apiSettings.fetchMovie(+movieId);
          const credits: ICredit = await apiSettings.fetchCredits(+movieId);
          console.log('movie', movie);
          console.log('credits', credits);

          // Get directors only
          const directors = credits.crew.filter(
            (member: ICreditCrew) => member.job === 'Director',
          );

          setState({
            ...movie,
            actors: credits.cast,
            directors,
          });

          setLoading(false);
        } catch (error) {
          setError(true);
        }
      };

      fetchMovie();
    },
    [ movieId ],
  );

  return { state, loading, error };
};
