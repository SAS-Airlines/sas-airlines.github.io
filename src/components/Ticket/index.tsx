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

const Ticket = ({ price, companyId, info }: TicketProps) => {
  const { origin, destination, dateStart, dateEnd, stops, duration } = info;

  const transferTime = useMemo(() => getTransferTime(duration), [duration]);

  return (
    <Card>
      <CardContent>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          className="ticket__top"
        >
          <h2 className="ticket__price">{getPriceInRoubles(price)}</h2>
          <img src={comaniesLogo[companyId]} alt={`Company logo`} />
        </Stack>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="flex-start"
        >
          <Box className="ticket__infoItem">
            <Typography className="ticket__text_gray ticket__text_upper">
              {origin} - {destination}
            </Typography>
            <Typography className="ticket__text">
              {renderTime(dateStart)} - {renderTime(dateEnd)}
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
            {stops.length === 0 ? (
              <Typography className="ticket__text_gray ticket__text_upper">
                Без пересадок
              </Typography>
            ) : stops.length > 1 ? (
              <>
                <Typography className="ticket__text_gray ticket__text_upper">
                  {stops.length} пересадки
                </Typography>
                <Typography className="ticket__text">
                  {stops.join(", ")}
                </Typography>
              </>
            ) : (
              <>
                <Typography className="ticket__text_gray ticket__text_upper">
                  {stops.length} пересадка
                </Typography>
                <Typography className="ticket__text">
                  {stops.toString()}
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
