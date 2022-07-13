import React, { useMemo } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { getPriceInRoubles, getTransferTime, renderTime } from "../../utils";

import { TicketProps } from "../../data/types";
import { comaniesLogo } from "../../data/dummy";

import "./styles.sass";

const Ticket = (props: TicketProps) => {
  const transferTime = useMemo(
    () => getTransferTime(props.time.start, props.time.end),
    [props]
  );

  return (
    <Card>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="ticket__top"
        >
          <h2 className="ticket__price">{getPriceInRoubles(props.price)}</h2>
          <img
            src={comaniesLogo[props.company]}
            alt={`${props.company} logo`}
          />
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
