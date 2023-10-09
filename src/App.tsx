import React, {useEffect, useState} from 'react';

const App = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchMovie = async () => {
            const url = "https://localhost:7212/api/Movie/";
            const response = await fetch(url);
            const data = await response.json();
            setMovie(data);
            // console.log(data);
        }
        fetchMovie();
    }, []);
    return (
        <>
            {
                movie.map((x) => {
                    return (
                        <img src={x.poster} alt={'image'}/>
                    )
                })
            }
        </>
    );
};

export default App;