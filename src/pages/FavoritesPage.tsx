import { Heading, SimpleGrid, Text } from "@chakra-ui/react"
import GameCardContainer from "../components/GameCardContainer"
import GameCradSkeleton from "../components/GameCradSkeleton"
import useFavoriteGames from "../hooks/useFavoriteGames"
import FavoriteGameCard from "../components/FavoriteGameCard";

function FavoritesPage() {
    const { error, data, isLoading } = useFavoriteGames();
    const skeletons = [1, 2, 3, 4, 5, 6];

    if (error) return <Text>{error.message}</Text>;

    return (
        <>
            <Heading>Favorite Games</Heading>
            <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 4 }} spacing={3}>
                {isLoading &&
                    skeletons.map((Skeleton) => (
                        <GameCardContainer key={Skeleton}>
                            <GameCradSkeleton key={Skeleton} />
                        </GameCardContainer>
                    ))}

                {data && data.map((game) => (
                    <GameCardContainer key={game.slug}>
                        <FavoriteGameCard game={game} />
                    </GameCardContainer>
                ))}

            </SimpleGrid>
        </>
    )
}

export default FavoritesPage