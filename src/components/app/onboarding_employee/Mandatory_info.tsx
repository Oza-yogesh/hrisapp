import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Switch,
  Typography,
  TextField,
  Stack,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate } from "react-router-dom";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import dayjs, { Dayjs } from "dayjs"; // Import Dayjs

interface Props {
  setValueForComponent: (value: number) => void;
  setFormDataForNext: (value: any) => void;
}

const MandatoryInfo: React.FC<Props> = ({
  setValueForComponent,
  setFormDataForNext,
}) => {
  const [formData, setFormData] = useState({
    hasPF: false,
    selectedDate: null as Dayjs | null, // Use Dayjs type
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    phone: "",
  });

  const navigate = useNavigate();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSwitchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({ ...prevData, hasPF: e.target.checked }));
  };

  const handleDateChange = (date: Dayjs | null) => {
    // Use Dayjs type
    setFormData((prevData) => ({ ...prevData, selectedDate: date }));
  };

  const handleNext = () => {
    setValueForComponent(1);
    setFormDataForNext(formData);
  };

  return (
    <Box sx={{ p: 4, width: { xs: "100%", md: "820px" }, mx: "auto" }}>
      <Paper elevation={3} sx={{ p: 2, boxShadow: "0px 3px 6px #00000029" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: { xs: "100%", md: "25ch" } },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Box sx={{ p: 2 }}>
                <Typography
                  variant="body2"
                  fontWeight="bold"
                  textTransform="uppercase"
                >
                  PF Enrollment
                </Typography>
                <Switch
                  checked={formData.hasPF}
                  onChange={handleSwitchChange}
                />
              </Box>
            </Grid>
          </Grid>

          <Divider />

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                id="first-name"
                name="firstName"
                label="First Name"
                variant="standard"
                fullWidth
                value={formData.firstName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="middle-name"
                name="middleName"
                label="Middle Name"
                variant="standard"
                fullWidth
                value={formData.middleName}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="last-name"
                name="lastName"
                label="Last Name"
                variant="standard"
                fullWidth
                value={formData.lastName}
                onChange={handleChange}
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                id="email"
                name="email"
                label="Official Email ID"
                variant="standard"
                fullWidth
                value={formData.email}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="phone"
                name="phone"
                label="Phone Number"
                variant="standard"
                fullWidth
                value={formData.phone}
                onChange={handleChange}
              />
            </Grid>

            {formData.hasPF && (
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Choose Date"
                    value={formData.selectedDate}
                    onChange={handleDateChange}
                    slots={{
                      textField: (params) => (
                        <TextField {...params} size="small" />
                      ),
                    }}
                    slotProps={{
                      textField: {
                        sx: {
                          "& .MuiInputBase-root": {
                            height: "50px",
                            fontSize: "0.875rem",
                          },
                          "& .MuiFormLabel-root": {
                            fontSize: "0.875rem",
                          },
                        },
                      },
                    }}
                  />
                </LocalizationProvider>
              </Grid>
            )}
          </Grid>

          <Stack direction="row-reverse" spacing={2} sx={{ mt: 2 }}>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0093ff",
                color: "white",
                fontFamily: "Segoe UI",
                "&:hover": {
                  transition: "transform 0.3s ease",
                  bgcolor: "#0070d8",
                },
              }}
              endIcon={<ArrowForwardIcon />}
              onClick={handleNext}
            >
              Next
            </Button>

            <Button sx={{ fontFamily: "Segoe UI" }} startIcon={<CloseIcon />}>
              Cancel
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default MandatoryInfo;
