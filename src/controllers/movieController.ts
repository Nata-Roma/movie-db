import { movieResp } from './../dbMovie';
import { MovieModel } from "../model/movieModel";
import { IMovieResp } from "../utils/interfaces/movieInterfaces";

export class MovieController extends MovieModel {
    //for future - get movie from backend using id
    async getMovie(id: string) {
        // const url = `${this.base_Url}${this.selectedOption.movie}${id}?${this.apiKey}`;
        // const resp =  await this.getResource(url) as IMovieResp;
        // console.log(resp);
        
        const movie = movieResp;
        //await this.getMoviePoster(movieResp.poster_path)

        return movie;
    }

    // async getMoviePoster(imgPath: string) {
    //     const url = `${this.imageUrl}${imgPath}`
    //     const resp = await this.getImageResource(url);

    //     //console.log(resp);
        
    // }

    getMoviePosterAddress(imgPath: string) {
        console.log(`${this.imageUrl}${imgPath}`);
        
        return `${this.imageUrl}${imgPath}`
    }
}