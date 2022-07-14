import React from "react";
import TextField from "@mui/material/TextField";
import { DesktopDatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import ruLocale from "date-fns/locale/ru";

const CalendarInput = ({ label }: { label: string }) => {
  const [value, setValue] = React.useState<Date | null>(null);

  const handleChange = (newValue: Date | null) => {
    setValue(newValue);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={ruLocale}>
      <DesktopDatePicker
        label={label}
        inputFormat="d MMMM, cccccc"
        value={value}
        onChange={handleChange}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  );
};

export default CalendarInput;
