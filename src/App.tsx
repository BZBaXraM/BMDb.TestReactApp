import React, {useEffect, useState} from 'react';
import axios from "axios";

const App = () => {
    const [movie, setMovie] = useState([]);
    useEffect(() => {
        const fetchMovie = async () => {
            const response = await axios.get("https://localhost:7212/api/Movie/");
            setMovie(response.data);
            console.log(response.data);
        }
        fetchMovie().then((r => r));
    }, []);
    return (
        <div>
            {
                movie.map((x) => {
                    return (
                        <img src={x.poster} alt={'image'}/>
                    )
                })
            }
            {
                movie.map((x => {
                    return (
                        <h1>{x.title}</h1>
                    )
                }))
            }
        </div>
    );
};

export default App;