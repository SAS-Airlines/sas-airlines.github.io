import React from "react";
import TextField from "@mui/material/TextField";

const Input = ({ label }: { label: string }) => {
  return <TextField id="outlined-basic" label={label} variant="outlined" />;
};

export default Input;
