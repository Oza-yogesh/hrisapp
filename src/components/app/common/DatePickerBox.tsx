import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Box, IconButton, Typography } from "@mui/material";
import { ChevronLeft, ChevronRight } from "@mui/icons-material";

const DatePickerBox: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<dayjs.Dayjs | null>(dayjs());

  const handleDateChange = (date: dayjs.Dayjs | null) => {
    setSelectedDate(date);
  };

  const handlePrevDate = () => {
    setSelectedDate((prevDate) =>
      prevDate ? prevDate.subtract(1, "day") : dayjs()
    );
  };

  const handleNextDate = () => {
    setSelectedDate((prevDate) =>
      prevDate ? prevDate.add(1, "day") : dayjs()
    );
  };

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={handlePrevDate}
        aria-label="previous page"
        sx={{ color: "#0093FF" }}
      >
        <ChevronLeft />
        <Typography>PREVIOUS</Typography>
      </IconButton>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          value={selectedDate}
          onChange={handleDateChange}
          sx={{ mx: 2 }}
          format="DD/MM/YYYY"
          slotProps={{ textField: { size: "small" } }}
        />
      </LocalizationProvider>
      <IconButton
        onClick={handleNextDate}
        aria-label="next page"
        sx={{ color: "#0093FF" }}
      >
        <Typography>NEXT</Typography>
        <ChevronRight />
      </IconButton>
    </Box>
  );
};

export default DatePickerBox;
