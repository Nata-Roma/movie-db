import { MovieController } from './movieController';

export class AppController {
    private movieController: MovieController;

    constructor() {
        this.movieController = new MovieController();
    }

    async getMovie(id: string) {
        return await this.movieController.getMovie(id);
    }

    getMoviePosterAddress(imgPath: string) {
        return this.movieController.getMoviePosterAddress(imgPath)
    }
}
