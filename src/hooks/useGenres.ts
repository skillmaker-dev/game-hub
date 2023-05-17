import { useQuery } from "@tanstack/react-query";
import ms from "ms";
import { CACHE_KEY_GENRES } from "../constants";
import genres from "../data/genres";
import APIClient, { FetchResponse } from "../services/api-client";
import { Genre } from "../entities/Genre";
const apiClient = new APIClient<Genre>('/genres');


const useGenres = () => 
useQuery<FetchResponse<Genre>,Error>({
        queryKey: CACHE_KEY_GENRES,
        queryFn: apiClient.getAll,
        staleTime:  ms('24h'), 
        initialData: {count: genres.length, results: genres, next: null}
    })


export default useGenres