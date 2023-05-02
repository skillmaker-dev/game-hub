import { Grid, GridItem, Show } from "@chakra-ui/react";
import "./App.css";

function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav" "aside main"`,
      }}>
      <GridItem area={"nav"} bg="coral">
        Nav
      </GridItem>
      <GridItem area={"main"} bg="tomato">
        Main
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="dodgerblue">
          Aside
        </GridItem>
      </Show>
    </Grid>
  );
}

export default App;
