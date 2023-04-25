import { useEffect, useState } from 'react';
import movieDb from '../api/movieDB';
import { MovieFull } from '../interface/movieInterface';
import { Cast, CreditsResponse } from '../interface/creaditsInterface';

interface MovieDetails {
    isLoading: boolean;
    movieFull?: MovieFull
    cast: Cast[];
}

const useMovieDetails = (movieId: number) => {

    const [state, setState] = useState<MovieDetails>({
        isLoading: true,
        movieFull: undefined,
        cast: [],
    });

    const getMovieDetails = async () => {
        const movieFullPromise = movieDb.get<MovieFull>(`/${movieId}`).then(({ data }) => data);
        const castPromise = movieDb.get<CreditsResponse>(`/${movieId}/credits`).then(({ data }) => data);

        const [movieDetailsReponse, castPromiseResp] = await Promise.all([movieFullPromise, castPromise]);

        setState({
            isLoading: false,
            movieFull: movieDetailsReponse,
            cast: castPromiseResp.cast,
        });
    };

    useEffect(() => {
        getMovieDetails();
    }, []);

    return {
        ...state,
    };
};

export default useMovieDetails;
