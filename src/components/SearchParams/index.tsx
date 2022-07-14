import React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Input from "../ui/Input";
import CalendarInput from "../ui/CalendarInput";
import { IconButton } from "@mui/material";
import ChangeCircleIcon from "@mui/icons-material/ChangeCircle";

const SearchParams = () => {
  return (
    <Box sx={{ width: "100%" }}>
      <Stack
        direction="row"
        justifyContent="center"
        sx={{
          gap: "5px",
          paddingLeft: "15px",
        }}
      >
        <Paper sx={{ position: "relative" }}>
          <Input label="Откуда" />
          <IconButton
            sx={{
              position: "absolute",
              left: "calc(100% + 2px)",
              top: "50%",
              transform: "translate(-50%, -50%)",
              zIndex: 10,
            }}
            color="primary"
          >
            <ChangeCircleIcon fontSize="large" />
          </IconButton>
        </Paper>
        <Paper>
          <Input label="Куда" />
        </Paper>
        <Paper>
          <CalendarInput label="Когда" />
        </Paper>
        <Paper>
          <CalendarInput label="Обратно" />
        </Paper>
      </Stack>
    </Box>
  );
};

export default SearchParams;
