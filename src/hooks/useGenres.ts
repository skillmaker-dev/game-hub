import { useQuery } from "@tanstack/react-query";
import APIClient, { FetchResponse } from "../services/api-client";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}

const apiClient = new APIClient<Genre>('/genres');


const useGenres = () => 
useQuery<FetchResponse<Genre>,Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: apiClient.getAll,
        staleTime:  24 * 60 * 60 * 1000, // 24H
        initialData: {count: genres.length, results: genres, next: null}
    })


export default useGenres