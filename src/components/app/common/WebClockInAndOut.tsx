import React, { useState, useEffect } from "react";
import { Button, Box, Typography } from "@mui/material";
import { AccessTime as ClockIcon } from "@mui/icons-material";
import dayjs from "dayjs";
import axios from "axios";

interface ApiResponse {
  message: string;
  data?: {
    clockInTime?: string;
  };
}

interface ErrorResponse {
  response?: {
    data?: {
      message: string;
    };
  };
}

const WebClockInAndOut: React.FC = () => {
  const [time, setTime] = useState<string>(dayjs().format("HH:mm:ss"));
  const [clockedIn, setClockedIn] = useState<boolean>(false);
  const [clockInTime, setClockInTime] = useState<string | null>(null);
  const [clockOutTime, setClockOutTime] = useState<string | null>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(dayjs().format("HH:mm:ss"));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // Check if user is already clocked in when component mounts
  useEffect(() => {
    const checkClockInStatus = async () => {
      try {
        const response = await axios.get<ApiResponse>(
          "http://localhost:4000/api/private/attendance/status",
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with actual token management
            },
          }
        );
        if (response.data.data?.clockInTime) {
          setClockInTime(response.data.data.clockInTime);
          setClockedIn(true);
        }
      } catch (error) {
        const err = error as ErrorResponse;
        console.error(
          "Error fetching clock-in status:",
          err.response?.data?.message
        );
      }
    };

    checkClockInStatus();
  }, []);

  // Handle Clock In
  const handleClockIn = async () => {
    if (clockedIn) {
      window.alert("You have already clocked in!");
      return;
    }

    try {
      const response = await axios.post<ApiResponse>(
        "http://localhost:4000/api/private/attendance/clock-in",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      setClockInTime(dayjs().format("HH:mm:ss"));
      setClockedIn(true);
      console.log(response.data.message);
    } catch (error) {
      const err = error as ErrorResponse;
      alert(err.response?.data?.message);
    }
  };

  // Handle Clock Out
  const handleClockOut = async () => {
    try {
      const response = await axios.post<ApiResponse>(
        "http://localhost:4000/api/private/attendance/clock-out",
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`, // Replace with actual token management
          },
        }
      );
      setClockOutTime(dayjs().format("HH:mm:ss"));
      setClockedIn(false);
      console.log(response.data.message);
    } catch (error) {
      const err = error as ErrorResponse;
      console.error("Error clocking out:", err.response?.data?.message);
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: 2,
        backgroundColor: "#f5f5f5", // Light gray background color
        padding: "10px", // Padding inside the box
        borderRadius: "8px", // Rounded corners
        boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)", // Box shadow for depth
        height: "45px",
      }}
    >
      {/* Clock Icon */}
      <ClockIcon sx={{ color: "#1976d2" }} /> {/* Icon color */}
      {/* Current Time Display */}
      <Typography variant="h6" component="div" sx={{ color: "#333" }}>
        {time}
      </Typography>
      {/* Clock In/Out Buttons */}
      {!clockedIn ? (
        <Button
          variant="contained"
          color="primary"
          onClick={handleClockIn}
          disabled={clockedIn}
        >
          Clock In
        </Button>
      ) : (
        <Button
          variant="contained"
          color="secondary"
          onClick={handleClockOut}
          disabled={!clockedIn}
        >
          Clock Out
        </Button>
      )}
    </Box>
  );
};

export default WebClockInAndOut;
