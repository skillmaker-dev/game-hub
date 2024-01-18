import { useQuery } from "@tanstack/react-query";
import GamesFavoritesService, { FavoriteGame } from "../services/games-favorites-service";

const service = new GamesFavoritesService()

const useFavoriteGames = () => {
    return useQuery<FavoriteGame[], Error>({
        queryKey: ["favgames"],
        queryFn: () => service.GetFavoriteGames(),
    })
}

export default useFavoriteGames;