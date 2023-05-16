import { Heading } from "@chakra-ui/react";
import usePlatform from "../hooks/usePlatform";
import useGenre from "../hooks/useGenre";
import useGameQueryStore from "../stores/gameQueryStore";

const GameHeading = () => {
  const gameQuery = useGameQueryStore((s) => s.gameQuery);
  const genre = useGenre(gameQuery.genreId);
  const platform = usePlatform(gameQuery.platformId);
  const heading = `${platform?.name || ""} ${genre?.name || ""}`;
  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
