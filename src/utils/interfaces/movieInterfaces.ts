export interface IGenre {
    id: number;
    name: string;
}
export interface IProductionCompany {
    id: number;
    logo_path: string | null;
    name: string;
    origin_country: string;
}
export interface IProductionCountry {
    iso_3166_1: string;
    name: string;
}
export interface ISpokenLanguages {
    english_name: string;
    iso_639_1: string;
    name: string;
}

export interface IBelongsToCollection {
    id: number;
    name: string;
    poster_path: string;
    backdrop_path: string;
}

export interface IMovieResp {
    adult: boolean;
    backdrop_path: string | null;
    belongs_to_collection: IBelongsToCollection | null;
    budget: number;
    genres: Array<IGenre>;
    homepage: string | null;
    id: number;
    imdb_id: string | null;
    original_language: string;
    original_title: string;
    overview: string | null;
    popularity: number;
    poster_path: string | null;
    production_companies: Array<IProductionCompany>;
    production_countries: Array<IProductionCountry>;
    release_date: string;
    revenue: number;
    runtime: number | null;
    spoken_languages: Array<ISpokenLanguages>;
    status: string;
    tagline: string | null;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
}
