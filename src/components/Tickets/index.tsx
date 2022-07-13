import React from "react";
import Stack from "@mui/material/Stack";
import Ticket from "../Ticket";

import { TicketProps } from "../../data/types";

import "./styles.sass";

const Tickets = (props: { tickets: TicketProps[] }) => {
  return (
    <Stack spacing={2} className="tickets">
      {props.tickets.length > 0 ? (
        props.tickets.map((ticket) => (
          <Ticket
            key={ticket.id}
            id={ticket.id}
            price={ticket.price}
            time={{ start: ticket.time.start, end: ticket.time.end }}
            transfers={ticket.transfers}
            company={ticket.company}
            route={{ start: ticket.route.start, end: ticket.route.end }}
          />
        ))
      ) : (
        <h3 className="tickets__empty">
          Для выбранных фильтров билетов не найдено!
        </h3>
      )}
    </Stack>
  );
};

export default Tickets;
