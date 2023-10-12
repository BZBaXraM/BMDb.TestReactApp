import React from "react";
import useFetchMovies from "../hooks/MovieHooks";

const MovieList = () => {
    const {data} = useFetchMovies();

    return (
        <div className={'container'}>
            <table className={"table table-hover"}>
                <thead>
                <tr>
                    <th>Title:</th>
                    <th>Poster:</th>
                    <th>Director:</th>
                    <th>Genre:</th>
                </tr>
                </thead>
                <tbody>
                {data && data.map((x) => (
                    <tr key={x.id}>
                        <td>{x.title}</td>
                        <td><img src={x.poster} alt={'Error'}/></td>
                        <td>{x.director}</td>
                        <td>{x.genre}</td>
                    </tr>
                ))}
                </tbody>
            </table>
        </div>
    )
}

export default MovieList;