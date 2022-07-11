import React, { memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getMovieRank } from './slices/MovieRankSlice';

const Test = memo(() => {
    const dispatch = useDispatch();
    const { data, loading, error } = useSelector((state) => state.movieRank);

    React.useEffect(() => {
        dispatch(getMovieRank({targetDt: ""}));
    }, []);

    return (
        <div>
             {error ? JSON.stringify(error) : JSON.stringify(data)}
        </div>
    );
});

export default Test;