import { useState } from "react";
import { Button } from "@chakra-ui/react";
import { HiHeart } from "react-icons/hi";
import GamesFavoritesService from "../services/games-favorites-service";
import Game from "../entities/Game";

interface Props {
    game: Game;
}


function AddGameToFavButton({ game }: Props) {
    const [favorite, setFavorite] = useState(game.isinfavorites);

    const handleToggleFavorite = () => {
        const gamesFavoritesService = new GamesFavoritesService();

        if (favorite) {
            // Remove from favorites
            gamesFavoritesService
                .RemoveGameFromFavorites(game.slug)
                .then(() => setFavorite(false))
                .catch((error) => {
                    console.error("Error removing from favorites:", error);
                });
        } else {
            // Add to favorites
            gamesFavoritesService
                .AddGameToFavorites(game)
                .then(() => setFavorite(true))
                .catch((error) => {
                    console.error("Error adding to favorites:", error);
                });
        }
    };

    return (
        <Button
            onClick={handleToggleFavorite}
            variant={favorite ? "solid" : "outline"}
            backgroundColor={favorite ? "red" : undefined}
            rightIcon={<HiHeart color="white" />}
        >
            {favorite ? "Added to Favorites" : "Add to Favorites"}
        </Button>
    );
}

export default AddGameToFavButton;