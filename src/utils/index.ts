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

export const numWord: (value: number, words: string[]) => string = (
  value,
  words
) => {
  value = Math.abs(value) % 100;
  const num = value % 10;

  if (value > 10 && value < 20) return words[2];
  if (num > 1 && num < 5) return words[1];
  if (num === 1) return words[0];

  return words[2];
};
