import React, { useEffect, useMemo } from "react";
import { Grid } from "@mui/material";
import Filters from "../Filters";
import SkeletonTickets from "../SkeletonTickets";
import Tickets from "../Tickets";
import ButtonsGroup from "../ui/ButtonsGroup";

import { useDispatch, useSelector } from "react-redux";
import { fetchCompanies } from "../../redux/companiesSlice";
import { setSortType } from "../../redux/filterSlice";
import { AppDispatch, RootState } from "../../redux/store";
import { fetchTickets } from "../../redux/ticketsSlice";
import sortTickets from "../../utils/sortTickets";
import { sorts } from "../../data/dummy";

const Body = () => {
  const filters = useSelector((state: RootState) => state.filters);
  const { entities, loading } = useSelector(
    (state: RootState) => state.tickets
  );
  const dispatch = useDispatch<AppDispatch>();

  const sortedTickets = useMemo(
    () => sortTickets(entities, filters),
    [entities, filters]
  );

  useEffect(() => {
    dispatch(fetchTickets());
    dispatch(fetchCompanies());
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={4}>
        <Filters />
      </Grid>

      <Grid item xs={8}>
        <ButtonsGroup
          value={filters.sortType}
          data={sorts}
          setValue={(newData) => dispatch(setSortType(newData))}
        />
        {loading === ("pending" || "idle" || "rejected") ? (
          loading === ("pending" || "idle") ? (
            <SkeletonTickets />
          ) : (
            <h3 className="tickets__empty">
              Ошибка загрузки! Перезагрузите страницу!
            </h3>
          )
        ) : (
          <Tickets tickets={sortedTickets} />
        )}
      </Grid>
    </Grid>
  );
};

export default Body;
