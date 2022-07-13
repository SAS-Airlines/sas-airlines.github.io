import { TicketProps } from "../data/types";

export const randId = () => Math.floor(Math.random() * 100000000).toString();

export const renderTime = (date: Date) =>
  date.toLocaleTimeString("ru", {
    hour: "2-digit",
    minute: "2-digit",
  });

export const getTransferTime = (start: Date, end: Date) => {
  const diff =
    (Date.parse(end.toString()) - Date.parse(start.toString())) / 1000;
  const hours = Math.floor(diff / 3600);
  const minutes = Math.floor((diff - hours * 3600) / 60);

  return [hours, minutes];
};

export const getLongestTime = (ticketA: TicketProps, ticketB: TicketProps) => {
  const diffA =
    (Date.parse(ticketA.time.end.toString()) -
      Date.parse(ticketA.time.start.toString())) /
    1000;
  const diffB =
    (Date.parse(ticketB.time.end.toString()) -
      Date.parse(ticketB.time.start.toString())) /
    1000;

  return diffA - diffB;
};

export const getPriceInRoubles = (price: number) => {
  const roublesIntl = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });

  return roublesIntl.format(price);
};
