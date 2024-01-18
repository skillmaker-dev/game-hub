import Game from "../entities/Game"
import { axiosInstance } from "./axiosInstance"

export interface FavoriteGame {
    slug: string,
    name: string,
    background_image: string
}

class GamesFavoritesService {
    GetFavoriteGames = (): Promise<FavoriteGame[]> => axiosInstance.get<FavoriteGame[]>("games/favoritegames").then(resp => resp.data)

    AddGameToFavorites = (game: Game) => axiosInstance.post("games/favoritegames", game)

    RemoveGameFromFavorites = (slug: string) => axiosInstance.delete(`games/favoritegames/${slug}`)

}

export default GamesFavoritesService