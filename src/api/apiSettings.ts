const API_KEY = '6e0c7d49df5d9e98137d6e869e89d1ed';

export class ApiSettings {
    protected base_Url = 'https://api.themoviedb.org/3/';
    protected selectedOption = {
        movie: 'movie/',
    };
    protected apiKey = `api_key=${API_KEY}`;
    protected imageUrl = `https://image.tmdb.org/t/p/original/`
}
