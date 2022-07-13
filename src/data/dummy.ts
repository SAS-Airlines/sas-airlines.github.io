import S7_LOGO from "../assets/s7_logo.png";
import XIAMEN_LOGO from "../assets/xiamen_air_logo.png";

import { TicketProps } from "./types";
import { randId } from "../utils";

export const sorts = {
  speed: "Самый быстрый",
  price: "Самый дешевый",
  optimal: "Оптимальный",
};

export const comaniesLogo: {
  [prop: string]: string;
} = {
  s7_airlanes: S7_LOGO,
  xiamen_air: XIAMEN_LOGO,
};

export const tickets: TicketProps[] = [
  {
    price: 13400,
    time: {
      start: new Date(2022, 6, 12, 10, 45),
      end: new Date(2022, 6, 13, 8, 0),
    },
    transfers: [],
    company: "s7_airlanes",
    route: {
      start: "MOW",
      end: "HKT",
    },
    id: randId(),
  },
  {
    price: 13400,
    time: {
      start: new Date(2022, 6, 12, 10, 45),
      end: new Date(2022, 6, 13, 5, 0),
    },
    transfers: ["HKG"],
    company: "s7_airlanes",
    route: {
      start: "MOW",
      end: "HKT",
    },
    id: randId(),
  },
  {
    price: 13500,
    time: {
      start: new Date(2022, 6, 12, 10, 45),
      end: new Date(2022, 6, 13, 8, 0),
    },
    transfers: ["HKG", "JNB"],
    company: "xiamen_air",
    route: {
      start: "MOW",
      end: "HKT",
    },
    id: randId(),
  },
  {
    price: 13600,
    time: {
      start: new Date(2022, 6, 12, 10, 45),
      end: new Date(2022, 6, 13, 8, 0),
    },
    transfers: ["HKG"],
    company: "s7_airlanes",
    route: {
      start: "MOW",
      end: "HKT",
    },
    id: randId(),
  },
  {
    price: 18500,
    time: {
      start: new Date(2022, 6, 12, 10, 45),
      end: new Date(2022, 6, 12, 18, 30),
    },
    transfers: ["JNB"],
    company: "s7_airlanes",
    route: {
      start: "MOW",
      end: "HKT",
    },
    id: randId(),
  },
  {
    price: 12500,
    time: {
      start: new Date(2022, 6, 12, 10, 45),
      end: new Date(2022, 6, 13, 18, 50),
    },
    transfers: ["HKG", "JNB", "MMB"],
    company: "xiamen_air",
    route: {
      start: "MOW",
      end: "HKT",
    },
    id: randId(),
  },
];

export const companies = {
  all: "Все",
  s7_airlanes: "S7 Airlines",
  xiamen_air: "XiamenAir",
};

export const transfersData = {
  transfers_0: {
    value: false,
    label: "Без пересадок",
    num: 0,
  },
  transfers_1: {
    value: false,
    label: "1 персадка",
    num: 1,
  },
  transfers_2: {
    value: false,
    label: "2 персадки",
    num: 2,
  },
  transfers_3: {
    value: false,
    label: "3 персадки",
    num: 3,
  },
};
