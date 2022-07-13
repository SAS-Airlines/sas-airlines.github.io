import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

import { comaniesLogo, TicketProps } from "../../data/dummy";

import "./styles.sass";

const renderTime = (date: Date) =>
  date.toLocaleTimeString("ru", {
    hour: "2-digit",
    minute: "2-digit",
  });

const getTransferTime = (start: Date, end: Date) => {
  const diff =
    (Date.parse(end.toString()) - Date.parse(start.toString())) / 1000;
  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff - hours * 3600) / 60);

  return [hours, minutes];
};

const getPriceInRoubles = (price: number) => {
  const roublesIntl = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });

  return roublesIntl.format(price);
};

const Ticket = (props: TicketProps) => {
  const transferTime = getTransferTime(props.time.start, props.time.end);

  return (
    <Card>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="ticket__top"
        >
          <Typography className="ticket__price">
            {getPriceInRoubles(props.price)}
          </Typography>
          <img src={comaniesLogo[props.company]} />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box className="ticket__infoItem">
            <Typography className="ticket__text_gray ticket__text_upper">
              {props.route.start} - {props.route.end}
            </Typography>
            <Typography className="ticket__text">
              {renderTime(props.time.start)} - {renderTime(props.time.end)}
            </Typography>
          </Box>

          <Box className="ticket__infoItem">
            <Typography className="ticket__text_gray ticket__text_upper">
              В пути
            </Typography>
            <Typography className="ticket__text">
              {transferTime[0]}ч {transferTime[1]}м
            </Typography>
          </Box>

          <Box sx={{ alignSelf: "center" }} className="ticket__infoItem">
            {props.transfers.length === 0 ? (
              <Typography className="ticket__text_gray ticket__text_upper">
                Без пересадок
              </Typography>
            ) : props.transfers.length > 1 ? (
              <>
                <Typography className="ticket__text_gray ticket__text_upper">
                  {props.transfers.length} пересадки
                </Typography>
                <Typography className="ticket__text">
                  {props.transfers.join(", ")}
                </Typography>
              </>
            ) : (
              <>
                <Typography className="ticket__text_gray ticket__text_upper">
                  {props.transfers.length} пересадка
                </Typography>
                <Typography className="ticket__text">
                  {props.transfers.toString()}
                </Typography>
              </>
            )}
          </Box>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default Ticket;
