import { TicketProps } from "../data/types";

export const randId = () => Math.floor(Math.random() * 100000000).toString();

export const renderTime = (date: number) =>
  new Date(date).toLocaleTimeString("ru", {
    hour: "2-digit",
    minute: "2-digit",
  });

export const getTransferTime = (duration: number) => {
  const durationInSec = Math.floor(duration / 1000);

  const hours = Math.floor(durationInSec / 3600);
  const minutes = Math.floor((durationInSec - hours * 3600) / 60);

  return [hours, minutes];
};

export const getLongestTime = (ticketA: TicketProps, ticketB: TicketProps) => {
  return ticketA.info.duration - ticketB.info.duration;
};

export const getPriceInRoubles = (price: number) => {
  const roublesIntl = new Intl.NumberFormat("ru", {
    style: "currency",
    currency: "RUB",
    maximumFractionDigits: 0,
  });

  return roublesIntl.format(price);
};
