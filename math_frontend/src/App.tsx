import { useState } from "react";
import "./App.css";
import { Box, Grid, GridItem, useDisclosure } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import SideDrawer from "./components/SideDrawer";
import WelcomeCard from "./components/WelcomeCard";
import MainSection from "./components/MainSection";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [category, setCategory] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box minHeight="90vh">
      <Grid
        h="90vh"
        templateAreas={{
          base: `"header" "main"`,
        }}
        templateColumns={{
          base: "1fr",
        }}
      >
        <GridItem area="header">
          <NavBar openMenu={onOpen} isLoading={isLoading} />
        </GridItem>
        <GridItem area="main" marginBottom={3}>
          {difficulty ? (
            <MainSection
              category={category}
              difficulty={difficulty}
              disableButton={setIsLoading}
            />
          ) : (
            <WelcomeCard />
          )}
        </GridItem>
      </Grid>
      <SideDrawer
        isOpen={isOpen}
        onClose={onClose}
        changeDifficulty={setDifficulty}
        changeCategory={setCategory}
      />
    </Box>
  );
}

export default App;
