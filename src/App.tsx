import React, { useMemo, useEffect } from "react";

import Grid from "@mui/material/Grid";
import Main from "./layouts/Main";
import Logo from "./components/ui/Logo";
import Filters from "./components/Filters";
import ButtonsGroup from "./components/ui/ButtonsGroup";
import Tickets from "./components/Tickets";
import SearchParams from "./components/SearchParams";

import type { AppDispatch, RootState } from "./redux/store";
import { useSelector, useDispatch } from "react-redux";
import { setSortType } from "./redux/filterSlice";

import { sorts, tickets } from "./data/dummy";
import sortTickets from "./utils/sortTickets";

import ticketsAPI from "./API";
import { fetchTickets } from "./redux/ticketsSlice";

function App() {
  const {
    sortType,
    company,
    transfers,
    origin,
    destination,
    dateStart,
    dateEnd,
  } = useSelector((state: RootState) => state.filters);
  const { entities, loading } = useSelector(
    (state: RootState) => state.tickets
  );
  const dispatch = useDispatch<AppDispatch>();

  const sortedTickets = useMemo(
    () =>
      sortTickets(
        entities,
        sortType,
        company,
        transfers,
        origin,
        destination,
        dateStart,
        dateEnd
      ),
    [
      entities,
      sortType,
      company,
      transfers,
      origin,
      destination,
      dateStart,
      dateEnd,
    ]
  );

  useEffect(() => {
    dispatch(fetchTickets());
  }, []);

  return (
    <Main>
      <Logo />

      <SearchParams />

      <Grid container spacing={2}>
        <Grid item xs={4}>
          <Filters />
        </Grid>

        <Grid item xs={8}>
          <ButtonsGroup
            value={sortType}
            data={sorts}
            setValue={(newData) => dispatch(setSortType(newData))}
          />
          {loading === ("pending" || "idle") ? (
            <h3 className="tickets__empty">Идет загрузка...</h3>
          ) : (
            <Tickets tickets={sortedTickets} />
          )}
        </Grid>
      </Grid>
    </Main>
  );
}

export default App;
