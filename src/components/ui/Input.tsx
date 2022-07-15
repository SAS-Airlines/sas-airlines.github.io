import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({
  label,
  value,
  setValue,
}: {
  label: string;
  value: string;
  setValue: (newValue: string) => void;
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  return (
    <TextField
      id="outlined-basic"
      label={label}
      variant="outlined"
      value={value}
      onChange={handleChange}
    />
  );
};

export default Input;
