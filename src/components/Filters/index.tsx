import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import CheckboxesGroup from "../ui/CheckboxesGroup";
import RadioButtonsGroup from "../ui/RadioButtonsGroup";

import { checkboxesData } from "../../data/types";
import { companies, transfersData } from "../../data/dummy";

const Filters = () => {
  const [transfers, setTransfers] = React.useState(transfersData);
  const [company, setCompany] = React.useState("all");

  const onCheckTransfer = (newData: checkboxesData) => {
    setTransfers({
      ...transfers,
      ...newData,
    });
  };

  return (
    <Stack direction="column" spacing={2}>
      <Card>
        <CardContent>
          <Typography
            variant="h3"
            sx={{
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
            color="text.secondary"
            gutterBottom
          >
            Количество пересадок
          </Typography>
          <CheckboxesGroup data={transfers} setData={onCheckTransfer} />
        </CardContent>
      </Card>
      <Card>
        <CardContent>
          <Typography
            variant="h3"
            sx={{
              fontSize: 12,
              fontWeight: 600,
              textTransform: "uppercase",
              marginBottom: "20px",
            }}
            color="text.secondary"
            gutterBottom
          >
            Компания
          </Typography>
          <RadioButtonsGroup
            state={company}
            data={companies}
            setData={setCompany}
          />
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Filters;
