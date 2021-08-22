export interface ICollection {
  id: number;
  backdrop_path: string | null;
  name: string;
  poster_path: string | null;
}

export interface ICompany {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string
}

export interface ICountry {
  iso_3166_1: string;
  name: string;
}

export interface IGenre {
  id: number;
  name: string;
}

export interface IKeyword {
  id: number;
  name: string;
}

export interface ILanguage {
  english_name: string;
  iso_639_1: string;
  name: string;
}

export interface IMovie {
  id: number;
  title: string;
  original_title: string;
  poster_path: string;
  adult: boolean;
  overview: string;
  release_date: Date;
  // genre_ids: number[];
  original_language: string;
  backdrop_path: string;
  popularity: number;
  vote_count: number;
  video: boolean;
  vote_average: number;
}

export interface ITvShow {
  id: number;
  name: string;
  original_name: string;
  poster_path: string;
  popularity: number;
  backdrop_path: string;
  vote_average: number;
  overview: string;
  origin_country: string[];
  genre_ids: number[];
  original_language: string;
  vote_count: number;
  first_air_date: Date;
}

export interface IMovieDetails extends IMovie {
  belongs_to_collection: ICollection;
  budget: number;
  genres: IGenre[];
  homepage: string;
  imdb_id: string;
  production_companies: ICompany[];
  production_countries: ICountry[];
  revenue: number;
  runtime: number;
  spoken_languages: ILanguage[];
  status: string;
  tagline: string;
}

export interface ICreditPerson {
  adult: boolean;
  credit_id: string;
  id: number;
  known_for_department: string;
  profile_path: string | null;
  name: string;
  original_name: string;
  popularity: number;
  gender: number;
}

export interface ICreditsCast extends ICreditPerson {
  cast_id: number;
  character: string;
  order: number;
}

export interface ICreditCrew extends ICreditPerson {
  department: string;
  job: string;
}

export interface ICredit {
  crew: Array<ICreditCrew>;
  cast: Array<ICreditsCast>;
  id: number;
}
