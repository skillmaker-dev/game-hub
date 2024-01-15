import { SimpleGrid, Image } from "@chakra-ui/react";
import useGameScreenshot from "../hooks/useGameScreenshots";

interface Props {
  gameId: number;
}

const GameScreenshots = ({ gameId }: Props) => {
  const { data: screenshots, isLoading, error } = useGameScreenshot(gameId);
  if (isLoading) return null;
  if (error) throw error;
  return (
    <SimpleGrid spacing={2} columns={{ base: 1, md: 2 }}>
      {screenshots.results != null ? screenshots.results.map((file) => (
        <Image src={file.image} key={file.id} />
      )) : null}
    </SimpleGrid>
  );
};

export default GameScreenshots;
