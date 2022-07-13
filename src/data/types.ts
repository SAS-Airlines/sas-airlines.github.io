export type checkboxesData = {
  [prop: string]: {
    value: boolean;
    label: string;
    num: number;
  };
};

export type checkboxesProps = {
  data: checkboxesData;
  setData: (newData: checkboxesData) => void;
};

export type radioBtnsData = {
  [prop: string]: string;
};

export type radioBtnsProps = {
  state: string;
  data: radioBtnsData;
  setData: (newState: string) => void;
};

export type buttonsGroupProps = {
  value: string;
  data: {
    [prop: string]: string;
  };
  setValue: (newData: string) => void;
};

export type TicketProps = {
  price: number;
  time: {
    start: Date;
    end: Date;
  };
  transfers: string[];
  company: string;
  route: {
    start: string;
    end: string;
  };
  id: string;
};
