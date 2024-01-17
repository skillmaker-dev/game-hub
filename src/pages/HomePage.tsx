import { Box, Flex, Grid, GridItem, Show } from "@chakra-ui/react";
import GameHeading from "../components/GameHeading";
import PlatformSelector from "../components/PlatformSelector";
import SortSelector from "../components/SortSelector";
import GamesGrid from "../components/GamesGrid";
import GenreList from "../components/GenreList";
import NavLinkItem from "../components/NavLinkItem";
import { HiHeart } from "react-icons/hi";

const HomePage = () => {
  return (
    <Grid
      templateAreas={{
        base: `"main"`,
        lg: `"aside main"`,
      }}
      templateColumns={{
        base: "1fr",
        lg: "200px 1fr",
      }}>
      <GridItem area={"main"}>
        <Box paddingLeft={2}>
          <GameHeading />
          <Flex marginBottom={5}>
            <Box marginRight={4}>
              <PlatformSelector />
            </Box>
            <SortSelector />
          </Flex>
        </Box>
        <GamesGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area="aside" paddingX={3}>
          <NavLinkItem title="Favorites" link="/favorites" icon={<HiHeart />} />
          <GenreList />
        </GridItem>
      </Show>
    </Grid>
  );
};

export default HomePage;
