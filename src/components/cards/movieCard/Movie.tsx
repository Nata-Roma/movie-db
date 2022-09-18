import React, { FC, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import defaultPoster from '../../../assets/projector-576.jpg';
import Star from './Star';

import './movie.css';

import { AppController } from '../../../controllers/appController';
import { IMovieResp } from '../../../utils/interfaces/movieInterfaces';

interface IMovieProps {
    appController: AppController;
}

const Movie: FC<IMovieProps> = ({ appController }) => {
    const { movieId } = useParams();
    const [movie, setMovie] = useState<IMovieResp | null>(null);
    const [isPoster, setIsPoster] = useState(false);
    const [posterUrl, setPosterUrl] = useState('');
    const [star, setStar] = useState(0);

    const getData = async (id: string) => {
        const resp: IMovieResp = await appController.getMovie(id);
        setMovie(resp);
        if (resp.poster_path) {
            setTimeout(() => {
                setIsPoster(true);
                setPosterUrl(
                    `https://image.tmdb.org/t/p/w300/${appController.getMoviePosterAddress(
                        resp.poster_path!,
                    )}`,
                );
            }, 1000);
        }
    };

    const starCount = (votes: number) => {
        const wholeStars = Math.floor(votes / 2);
        const partStar = parseFloat(((votes % 2) / 2).toFixed(2));
    };

    useEffect(() => {
        if (movieId) {
            getData(movieId);
        }
    }, [movieId]);

    return (
        <div className='wrapper'>
            <div className='container'>
                {!isPoster && <img src={defaultPoster} alt='' className='pic_container' />}
                {isPoster && <img src={posterUrl} alt='' className='pic_container' />}
                <div className='title_container'>
                    <div className='title'>{movie?.title}</div>
                    <div className='small_text mb_10'>{movie?.original_language.toUpperCase()}</div>

                    <div className='description mb_10'>{movie?.overview}</div>
                    <div className='star_container'>
                        <div className='stars'>
                            {Array.from({ length: 5 }, () => (
                                <Star />
                            ))}
                            <div
                                className='cover'
                                style={{ width: `${movie ? 100 - movie.vote_average * 10 : 100}%` }}
                            ></div>
                        </div>
                        <div className='small_text pl_10'>{`Total votes: ${movie ? movie.vote_count : 0}`}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Movie;
