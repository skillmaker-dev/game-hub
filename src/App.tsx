import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";
import NavBar from "./components/NavBar";
import GamesGrid from "./components/GamesGrid";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area={"nav"}>
        <NavBar />
      </GridItem>
      <GridItem area={"main"}>
        <GamesGrid />
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"}>Aside</GridItem>
      </Show>
    </Grid>
  );
}

export default App;
