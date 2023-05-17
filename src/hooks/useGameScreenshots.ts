import { useQuery } from "@tanstack/react-query"
import APIClient, { FetchResponse } from "../services/api-client"
import { GameScreenshot } from "../entities/GameScreenshot"

const useGameScreenshot = (gameId: number) => {
    const apiClient = new APIClient<GameScreenshot>(`/games/${gameId}/screenshots`)
    return useQuery<FetchResponse<GameScreenshot>,Error>({
        queryKey: ["screenshots",gameId],
        queryFn: apiClient.getAll
    })
}

export default useGameScreenshot