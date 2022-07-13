import React, { useState } from "react";

import Grid from "@mui/material/Grid";
import Main from "./layouts/Main";
import Logo from "./components/ui/Logo";
import Filters from "./components/Filters";
import ButtonsGroup from "./components/ui/ButtonsGroup";
import Tickets from "./components/Tickets";

import { sorts, tickets } from "./data/dummy";

function App() {
  const [sortType, setSortType] = useState(Object.keys(sorts)[0]);

  return (
    <Main>
      <Logo />

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Filters />
        </Grid>

        <Grid item xs={9}>
          <ButtonsGroup value={sortType} data={sorts} setValue={setSortType} />
          <Tickets tickets={tickets} />
        </Grid>
      </Grid>
    </Main>
  );
}

export default App;
