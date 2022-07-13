import React, { useMemo } from "react";

import Grid from "@mui/material/Grid";
import Main from "./layouts/Main";
import Logo from "./components/ui/Logo";
import Filters from "./components/Filters";
import ButtonsGroup from "./components/ui/ButtonsGroup";
import Tickets from "./components/Tickets";

import type { RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setSortType } from "./redux/filterSlice";

import { sorts, tickets } from "./data/dummy";
import sortTickets from "./utils/sortTickets";

function App() {
  const { sortType, company, transfers } = useSelector(
    (state: RootState) => state.filters
  );
  const dispatch = useDispatch();

  const sortedTickets = useMemo(
    () => sortTickets(tickets, sortType, company, transfers),
    [sortType, company, transfers]
  );

  return (
    <Main>
      <Logo />

      <Grid container spacing={2}>
        <Grid item xs={3}>
          <Filters />
        </Grid>

        <Grid item xs={9}>
          <ButtonsGroup
            value={sortType}
            data={sorts}
            setValue={(newData) => dispatch(setSortType(newData))}
          />
          <Tickets tickets={sortedTickets} />
        </Grid>
      </Grid>
    </Main>
  );
}

export default App;
