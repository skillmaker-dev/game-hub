import { Link } from "react-router-dom"
import { FavoriteGame } from "../services/games-favorites-service"
import { Card, CardBody, Text, Heading, Image } from "@chakra-ui/react"
import getCroppedImageUrl from "../services/image-url"

interface Props {
    game: FavoriteGame
}

function FavoriteGameCard({ game }: Props) {
    return (
        <Card>
            <Link to={`/games/${game.slug}`}>
                <Image src={getCroppedImageUrl(game.background_image)} />
                <CardBody>
                    <Heading fontSize="2xl">
                        <Text>{game.name}</Text>
                    </Heading>
                </CardBody>
            </Link>
        </Card>
    )
}

export default FavoriteGameCard