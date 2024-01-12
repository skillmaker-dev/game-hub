import { Card, CardBody, HStack, Heading, Image, Text } from "@chakra-ui/react";
import Game from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
// import Emoji from "./Emoji";
import { Link } from "react-router-dom";
interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  return (
    <Card>
      <Link to={`games/${game.slug}`}>
        <Image src={getCroppedImageUrl(game.background_image)} />
        <CardBody>
          <HStack marginBottom={3} justifyContent={"space-between"}>
            {
              game.parent_platforms != null ? <PlatformIconList
                platforms={game.parent_platforms.map((p) => p.platform)}
              /> : null
            }

            <CriticScore score={game.metacritic} />
          </HStack>
          <Heading fontSize="2xl">
            <Text>{game.name}</Text>
            {/* <Emoji rating={game.rating_top} /> */}
          </Heading>
        </CardBody>
      </Link>
    </Card>
  );
};

export default GameCard;
