import React from "react";
import Stack from "@mui/material/Stack";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";

const Filters = () => {
  const [transfers, setTransfers] = React.useState({
    transfers_0: false,
    transfers_1: false,
    transfers_2: false,
    transfers_3: false,
  });
  const [company, setCompany] = React.useState("all");

  const onCheckTransfer = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTransfers({
      ...transfers,
      [event.target.name]: event.target.checked,
    });
  };

  const onChangeCompany = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCompany((event.target as HTMLInputElement).value);
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
          <FormGroup>
            <FormControlLabel
              control={
                <Checkbox
                  checked={transfers["transfers_0"]}
                  onChange={onCheckTransfer}
                  name="transfers_0"
                />
              }
              label="Без пересадок"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={transfers["transfers_1"]}
                  onChange={onCheckTransfer}
                  name="transfers_1"
                />
              }
              label="1 пересадка"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={transfers["transfers_2"]}
                  onChange={onCheckTransfer}
                  name="transfers_2"
                />
              }
              label="2 пересадки"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={transfers["transfers_3"]}
                  onChange={onCheckTransfer}
                  name="transfers_3"
                />
              }
              label="3 пересадки"
            />
          </FormGroup>
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
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-controlled-radio-buttons-group"
              name="controlled-radio-buttons-group"
              value={company}
              onChange={onChangeCompany}
            >
              <FormControlLabel value="all" control={<Radio />} label="Все" />
              <FormControlLabel
                value="s7_airlanes"
                control={<Radio />}
                label="S7 Airlines"
              />
              <FormControlLabel
                value="xiamen_air"
                control={<Radio />}
                label="XiamenAir"
              />
            </RadioGroup>
          </FormControl>
        </CardContent>
      </Card>
    </Stack>
  );
};

export default Filters;
