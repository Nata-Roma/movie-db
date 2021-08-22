import { useEffect, useState } from 'react';
import apiSettings from '../api';

export interface IMoviesStateResult {
  adult: boolean;
  backdrop_path: string;
  genre_ids: Array<number>;
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface IMovieState {
  page: number;
  results: Array<IMoviesStateResult>;
  total_pages: number;
  total_results: number;
}

// const initialResults = [
//   {adult: false,
//   backdrop_path: '',
//   genre_ids: [0],
//   id: 0,
//   original_language: 'en',
//   original_title: '',
//   overview: '',
//   popularity: 0,
//   poster_path: '',
//   release_date: '',
//   title: '',
//   video: false,
//   vote_average: 0,
//   vote_count: 0,}
// ]

const initialState = {
  page: 0,
  results: [] as Array<IMoviesStateResult>,
  total_pages: 0,
  total_results: 0,
};

export const useHomeFetch = () => {
  const [ state, setState ] = useState(initialState);
  const [ loading, setLoading ] = useState(false);
  const [ error, setError ] = useState(false);
  const [ searchTerm, setSearchTerm ] = useState('');
  const [ isLoadingMore, setIsLoadingMore ] = useState(false);

  const fetchMovies = async (page: number, searchTerm = '') => {
    try {
      setError(false);
      setLoading(true);

      const movies = await apiSettings.fetchMovies(searchTerm, page);
      console.log(movies);
      setState((prev) => ({
        ...movies,
        results:
          page > 1
            ? [ ...prev.results, ...movies.results ]
            : [ ...movies.results ],
      }));
    } catch (err) {
      setError(true);
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchMovies(1);
  }, []);

  useEffect(
    () => {
      setState(initialState);
      fetchMovies(1, searchTerm);
    },
    [ searchTerm ],
  );

  useEffect(
    () => {
      if (!isLoadingMore) return;
      fetchMovies(state.page + 1, searchTerm);
      setIsLoadingMore(false);
    },
    [ isLoadingMore, searchTerm, state.page ],
  );

  return { state, loading, error, searchTerm, setSearchTerm, setIsLoadingMore  };
};
