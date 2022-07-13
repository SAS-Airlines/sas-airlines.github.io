import React from "react";

import Grid from "@mui/material/Grid";
import Main from "./components/layouts/Main";
import Logo from "./components/ui/Logo";
import Filters from "./components/layouts/Filters";
import ButtonsGroup from "./components/ui/ButtonsGroup";
import Tickets from "./components/Tickets";

import "./App.sass";

import { tickets } from "./data/dummy";

function App() {
  return (
    <Main>
      <Logo />

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Filters />
        </Grid>

        <Grid item xs={9}>
          <ButtonsGroup />
          <Tickets tickets={tickets} />
        </Grid>
      </Grid>
    </Main>
  );
}

export default App;
