import { useQuery } from "@tanstack/react-query";
import apiClient from "../services/api-client";
import { CACHE_KEY_GENRES } from "../constants";
import { FetchResponse } from "./useData";
import genres from "../data/genres";
export interface Genre {
    id: number;
    name: string;
    image_background: string;
}



const useGenres = () => 
useQuery<FetchResponse<Genre>,Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: () => apiClient.get<FetchResponse<Genre>>('/genres').then(res => res.data),
        staleTime:  24 * 60 * 60 * 1000, // 24H
        initialData: {count: genres.length, results: genres}
    })


export default useGenres