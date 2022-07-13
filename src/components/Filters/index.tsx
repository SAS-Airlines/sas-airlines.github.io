import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CheckboxesGroup from "../ui/CheckboxesGroup";
import RadioButtonsGroup from "../ui/RadioButtonsGroup";

import { useSelector, useDispatch } from "react-redux";
import type { RootState } from "../../redux/store";
import { setCompany, setTransfers } from "../../redux/filterSlice";

import { companies } from "../../data/dummy";

import "./styles.sass";

const Filters = () => {
  const company = useSelector((state: RootState) => state.filters.company);
  const transfers = useSelector((state: RootState) => state.filters.transfers);
  const dispatch = useDispatch();

  return (
    <Stack direction="column" spacing={2}>
      <Card>
        <CardContent>
          <p className="filters__title">Количество пересадок</p>
          <CheckboxesGroup
            data={transfers}
            setData={(newData) => dispatch(setTransfers(newData))}
          />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <p className="filters__title">Компания</p>
          <RadioButtonsGroup
            state={company}
            data={companies}
            setData={(newState) => dispatch(setCompany(newState))}
          />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Filters;
