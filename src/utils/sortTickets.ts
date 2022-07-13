import { getLongestTime } from ".";
import { TicketProps } from "../data/types";

type transfersType = {
  [prop: string]: {
    value: boolean;
    label: string;
    num: number;
  };
};

const sortTickets = (
  tickets: TicketProps[],
  sortType: string,
  company: string,
  transfers: transfersType
): TicketProps[] => {
  return tickets
    .filter((ticket) => {
      const companyMatch = ticket.company === company || company === "all";
      const transfersMatch =
        Object.values(transfers).find(
          (transfer) => transfer.num === ticket.transfers.length
        )?.value ||
        Object.values(transfers).every((transfer) => !transfer.value);

      return companyMatch && transfersMatch;
    })
    .sort((ticketA, ticketB) => {
      switch (sortType) {
        case "price":
          return ticketA.price - ticketB.price;
        case "speed":
          return getLongestTime(ticketA, ticketB);
        case "optimal":
          const priceDiff = ticketA.price - ticketB.price;
          if (priceDiff === 0) {
            return getLongestTime(ticketA, ticketB);
          } else return priceDiff;
        default:
          return ticketA.price - ticketB.price;
      }
    });
};

export default sortTickets;
