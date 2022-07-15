import React from "react";
import Stack from "@mui/material/Stack";
import Ticket from "../Ticket";
import Button from "../ui/Button";

import { TicketProps } from "../../data/types";

import "./styles.sass";
import useShow from "../hooks/useShow";

const Tickets = (props: { tickets: TicketProps[] }) => {
  const [showedTickets, showAll, addTickets] = useShow(props.tickets);

  return (
    <Stack spacing={2} className="tickets">
      {showedTickets.length > 0 ? (
        <>
          {showedTickets.map((ticket) => (
            <Ticket
              key={ticket.id}
              id={ticket.id}
              price={ticket.price}
              companyId={ticket.companyId}
              info={ticket.info}
            />
          ))}
          {!showAll && (
            <Stack justifyContent="center" direction="row">
              <Button onButtonClick={addTickets}>Показать еще 5 билетов</Button>
            </Stack>
          )}
        </>
      ) : (
        <h3 className="tickets__empty">
          Для выбранных фильтров билетов не найдено!
        </h3>
      )}
    </Stack>
  );
};

export default Tickets;
