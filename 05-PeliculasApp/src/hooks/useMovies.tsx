import { useEffect, useState } from 'react';
import movieDb from '../api/movieDB';
import { Movie, MovieDBMoviesResponse } from '../interface/movieInterface';

interface MoviesState {
    isLoading: boolean;
    nowPlaying: Movie[];
    popular: Movie[];
    topRated: Movie[];
    upcoming: Movie[];
}

const useMovies = () => {
    const [moviesState, setMoviesState] = useState<MoviesState>({
        isLoading: true,
        nowPlaying: [],
        popular: [],
        topRated: [],
        upcoming: [],
    });

    const getMovies = async () => {

        const nowPlayingPromise = movieDb.get<MovieDBMoviesResponse>('/now_playing').then(({ data }) => data);
        const popularPromise = movieDb.get<MovieDBMoviesResponse>('/popular').then(({ data }) => data);
        const topRatedPromise = movieDb.get<MovieDBMoviesResponse>('/top_rated').then(({ data }) => data);
        const upcomingPromise = movieDb.get<MovieDBMoviesResponse>('/upcoming').then(({ data }) => data);

        const response = await Promise.all([nowPlayingPromise, popularPromise, topRatedPromise, upcomingPromise]);

        setMoviesState({
            isLoading: false,
            nowPlaying: response[0].results,
            popular: response[1].results,
            topRated: response[2].results,
            upcoming: response[3].results,
        });
    };

    useEffect(() => {
        getMovies();
    }, []);

    return {
        ...moviesState,
    };
};

export default useMovies;
