import React, { useState } from "react";
import {
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  TextField,
  Stack,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Box,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormLabel,
} from "@mui/material";
import { DatePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import SearchIcon from "@mui/icons-material/Search";
import DoneIcon from "@mui/icons-material/Done";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";

interface Props {
  setValueForComponent: (value: number) => void;
  FormDataForNext: any;
}

const OptionalInfo: React.FC<Props> = ({
  setValueForComponent,
  FormDataForNext,
}) => {
  const [hasPF, setHasPF] = useState<boolean>(false);
  const [selectedValue, setSelectedValue] = useState("");
  const [jobTitle1, setJobTitle1] = useState("");
  const [jobTitle2, setJobTitle2] = useState("");
  const [numberValue, setNumberValue] = useState("");

  const handleNext = () => {
    console.log("Next button clicked");
    console.log({ FormDataForNext });
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSelectedValue(event.target.value);
  };

  const handleChange1 = (event: React.ChangeEvent<{ value: any }>) => {
    setJobTitle1(event.target.value as string);
  };

  const handleChange2 = (event: React.ChangeEvent<{ value: any }>) => {
    setJobTitle2(event.target.value as string);
  };

  const handleNumberChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNumberValue(event.target.value);
  };

  const getLabelStyle = (value: any) => ({
    color: selectedValue === value ? "#0093ff" : "inherit",
    transition: "color 0.3s ease",
  });

  const getIconStyle = (value: any) => ({
    color: selectedValue === value ? "#0093ff" : "inherit",
    transition: "color 0.3s ease",
  });

  return (
    <Box sx={{ p: 4, width: "820px" }}>
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          textAlign: "initial",
          boxShadow: "0px 3px 6px #00000029",
        }}
      >
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "9ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: "16px" }}
          >
            <Typography
              variant="body2"
              fontWeight="bold"
              textTransform="uppercase"
            >
              personal
            </Typography>
          </Grid>

          <Grid container alignItems="center" spacing={2}>
            <Grid item>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="Date of Birth"
                  slots={{
                    textField: (params) => (
                      <TextField {...params} size="small" />
                    ),
                  }}
                  slotProps={{
                    textField: {
                      sx: {
                        "& .MuiInputBase-root": {
                          height: "40px",
                          width: "190px",
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
            
            
            
            {/* male and female grid */}
            <Grid item>
              <FormLabel
                component="legend"
                sx={{ fontWeight: "bold", color: "black" }}
              >
                Select Gender
              </FormLabel>
              <RadioGroup
                row
                name="gender"
                value={selectedValue}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="female"
                  control={
                    <Radio
                      icon={<FemaleIcon style={getIconStyle("female")} />}
                      checkedIcon={<FemaleIcon style={{ color: "#0093ff" }} />}
                    />
                  }
                  label="Female"
                  style={getLabelStyle("female")}
                />
                <FormControlLabel
                  value="male"
                  control={
                    <Radio
                      icon={<MaleIcon style={getIconStyle("male")} />}
                      checkedIcon={<MaleIcon style={{ color: "#0093ff" }} />}
                    />
                  }
                  label="Male"
                  style={getLabelStyle("male")}
                />
                <FormControlLabel
                  value="other"
                  control={
                    <Radio
                      icon={<TransgenderIcon style={getIconStyle("other")} />}
                      checkedIcon={
                        <TransgenderIcon style={{ color: "#0093ff" }} />
                      }
                    />
                  }
                  label="Other"
                  style={getLabelStyle("other")}
                />
              </RadioGroup>
            </Grid>




          </Grid>

          <Divider />

          <Grid
            container
            justifyContent="space-between"
            alignItems="center"
            sx={{ marginBottom: "16px" }}
          >
            <Typography
              sx={{ marginTop: "20px" }}
              variant="body2"
              fontWeight="bold"
              textTransform="uppercase"
            >
              work
            </Typography>
          </Grid>

          <TextField
            id="employee-id"
            label="Employee ID"
            variant="standard"
            fullWidth
          />
          <TextField
            id="department"
            label="Department"
            variant="standard"
            fullWidth
          />
          <TextField
            id="sub-department"
            label="Sub Department"
            variant="standard"
            fullWidth
          />
          <TextField
            id="designation"
            label="Designation"
            variant="standard"
            fullWidth
          />
          <TextField
            id="job-title"
            label="Job Title"
            variant="standard"
            fullWidth
          />
          <TextField
            id="reporting-manager"
            label="Reporting Manager"
            variant="standard"
            fullWidth
          />

          <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="job-title-label-1">Work Location</InputLabel>
              <Select
                sx={{
                  width: "210px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                labelId="job-title-label-1"
                id="job-title-select-1"
                value={jobTitle1}
                onChange={() => handleChange1}
                label="Job Title"
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="Pune">Pune</MenuItem>
                <MenuItem value="Mumbai">Mumbai</MenuItem>
                <MenuItem value="Delhi">Delhi</MenuItem>
                <MenuItem value="Goa">Goa</MenuItem>
              </Select>
            </FormControl>

            <FormControl variant="standard" sx={{ minWidth: 120 }}>
              <InputLabel id="job-title-label-2">Employee Type</InputLabel>
              <Select
                sx={{
                  width: "200px",
                  "& .MuiOutlinedInput-root": {
                    "& fieldset": {
                      border: "none",
                    },
                    "&:hover fieldset": {
                      border: "none",
                    },
                    "&.Mui-focused fieldset": {
                      border: "none",
                    },
                  },
                }}
                labelId="job-title-label-2"
                id="job-title-select-2"
                value={jobTitle2}
                onChange={() => handleChange2}
                label="Job Title"
              >
                <MenuItem value="">
                  <MenuItem>None</MenuItem>
                </MenuItem>
                <MenuItem value="Full Time">Full Time</MenuItem>
                <MenuItem value="Part Time">Part Time</MenuItem>
                <MenuItem value="Intern">Intern</MenuItem>
                <MenuItem value="On Contract">On Contract</MenuItem>
              </Select>
            </FormControl>

            <TextField
              id="number-input"
              label="Probation Period"
              type="number"
              value={numberValue}
              onChange={handleNumberChange}
              variant="standard"
              sx={{ width: "150px" }}
              InputProps={{
                inputProps: {
                  min: 0,
                },
              }}
            />
          </Box>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              label="Choose Date"
              slots={{
                textField: (params) => <TextField {...params} size="small" />,
              }}
              slotProps={{
                textField: {
                  sx: {
                    "& .MuiInputBase-root": {
                      height: "40px",
                      width: "190px",
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

          {hasPF && (
            <Box sx={{ mt: 2 }}>
              <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker
                  label="PF Date"
                  slots={{
                    textField: (params) => (
                      <TextField {...params} size="small" />
                    ),
                  }}
                  slotProps={{
                    textField: {
                      sx: {
                        "& .MuiInputBase-root": {
                          height: "40px",
                          width: "190px",
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
            </Box>
          )}

          <Divider sx={{ mt: 2, mb: 2 }} />

          <Typography
            variant="body2"
            textTransform={"uppercase"}
            sx={{ mb: 2 }}
          >
            salary details
          </Typography>

          <Box
            sx={{
              "& .MuiTextField-root": { m: 1, width: "29ch" },
            }}
          >
            <TextField
              id="ctc"
              label="CTC"
              variant="standard"
              sx={{ mb: 2, width: "50ch" }}
            />
          </Box>

          <Box sx={{ "& .MuiTextField-root": { m: 1, width: "29ch" } }}>
            <TextField
              id="account-holder-name"
              label="Account Holder's Name"
              variant="standard"
              fullWidth
              sx={{ mb: 2 }}
            />
          </Box>

          <div>
            <Button
              variant="contained"
              sx={{
                bgcolor: "#0093ff",
                textTransform: "uppercase",
                color: "white",
                fontFamily: "Segoe UI",
                "&:hover": {
                  transition: "transform 0.3s ease",
                  bgcolor: "#0070d8",
                },
              }}
              startIcon={<SearchIcon />}
              onClick={handleNext}
            >
              find my branch
            </Button>
          </div>

          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <TextField
                id="standard-multiline-flexible"
                label="Bank Name"
                multiline
                maxRows={4}
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="standard-textarea"
                label="City"
                multiline
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="standard-textarea"
                label="Branch Name"
                multiline
                variant="standard"
                fullWidth
              />
            </Grid>

            <Grid item xs={12} md={4}>
              <TextField
                id="standard-textarea"
                label="
                                IFSC Code"
                multiline
                variant="standard"
                fullWidth
              />
            </Grid>
            <Grid item xs={12} md={4}>
              <TextField
                id="standard-textarea"
                label="Account Number"
                multiline
                variant="standard"
                fullWidth
              />
            </Grid>

            {hasPF && (
              <Grid item xs={12} md={6}>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                  <DatePicker
                    label="Choose Date"
                    slots={{
                      textField: (params) => (
                        <TextField {...params} size="small" fullWidth />
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
            {/* <Link to="/dashboard/directory" style={{ textDecoration: "none" }}> */}
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
              startIcon={<DoneIcon />}
              onClick={handleNext}
            >
              save
            </Button>
            {/* </Link> */}

            <Button
              variant="text"
              sx={{ fontFamily: "Segoe UI" }}
              startIcon={<KeyboardBackspaceIcon />}
              onClick={() => setValueForComponent(0)}
            >
              Back
            </Button>
          </Stack>
        </Box>
      </Paper>
    </Box>
  );
};

export default OptionalInfo;
