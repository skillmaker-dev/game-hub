import {
  Button,
  HStack,
  Heading,
  Image,
  List,
  ListItem,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import useGameQueryStore from "../stores/gameQueryStore";
import GenreItemSkeleton from "./GenreItemSkeleton";

const GenreList = () => {
  const { gameQuery, setGenreId } = useGameQueryStore((s) => ({
    gameQuery: s.gameQuery,
    setGenreId: s.setGenreId,
  }));
  const { data, isLoading, error } = useGenres();
  const skeletons = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  if (isLoading)
    return (
      <List>
        {skeletons.map((i) => (
          <ListItem key={i} paddingY={3}>
            <GenreItemSkeleton />
          </ListItem>
        ))}
      </List>
    );
  if (error) return null;
  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3}>
        Genres
      </Heading>
      <List height={"73vh"} overflowY={"scroll"}>
        {data?.results.map((genre) => (
          <ListItem
            key={genre.id}
            paddingY={3}
            onClick={() => setGenreId(genre.id)}>
            <HStack>
              <Image
                boxSize="32px"
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                whiteSpace={"normal"}
                textAlign={"left"}
                fontWeight={genre.id === gameQuery.genreId ? "bold" : "normal"}
                fontSize="large"
                variant="link">
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
