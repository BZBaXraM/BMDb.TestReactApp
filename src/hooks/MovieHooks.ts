import {Movie} from "../types/movie";
import axios, {AxiosError} from "axios";
import {useQuery} from "@tanstack/react-query";
import config from "../config";

const useFetchMovies = () => {
    return useQuery<Movie[], AxiosError>(["movie"], () =>
        axios.get(`${config.baseUrlApi}/movie`).then(
            (resp) => resp.data));

}

export default useFetchMovies;