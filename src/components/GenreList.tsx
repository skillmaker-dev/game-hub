import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGenres, { Genre } from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreItemSkeleton from "./GenreItemSkeleton";

interface Props {
  onSelectGenre: (genre: Genre) => void;
}

const GenreList = ({ onSelectGenre }: Props) => {
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
    <List>
      {data.map((genre) => (
        <ListItem
          key={genre.id}
          paddingY={3}
          onClick={() => onSelectGenre(genre)}>
          <HStack>
            <Image
              boxSize="32px"
              borderRadius={8}
              src={getCroppedImageUrl(genre.image_background)}
            />
            <Button fontSize="large" variant="link">
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
};

export default GenreList;
