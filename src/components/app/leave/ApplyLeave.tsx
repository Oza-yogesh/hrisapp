import {
  Box,
  Button,
  Dialog,
  DialogContent,
  FormControl,
  IconButton,
  MenuItem,
  Select,
  Typography,
  DialogActions,
  DialogTitle,
  TextField,
  InputLabel,
} from "@mui/material";
import React, { useState } from "react";
import CloseIcon from "@mui/icons-material/Close";
import { useForm, Controller } from "react-hook-form";

const ApplyLeave: React.FC = () => {
  const [open, setOpen] = useState(false);
  const [leaveType, setLeaveType] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      leaveType: "",
      startDate: "",
      endDate: "",
      reason: "",
      halfDay: "",
      secondHalfDay: "",
    },
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const onSubmit = (data: any) => {
    console.log(data);
    handleClose();
  };

  const handleClose = () => {
    setOpen(false);
    reset(); // reset form state when form is closed
  };

  // const handleSelectChange = (event: SelectChangeEvent) => {
  //   setLeaveType(event.target.value as string);
  // };

  return (
    <div>
      <Box sx={{ margin: 6 }}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            margin: 8,
            marginBottom: 0,
          }}
        >
          <Typography variant="h5">Apply Leave</Typography>
          <Button
            sx={{
              backgroundColor: "#0000FF",
              color: "white",
              fontSize: "16px",
              margin: "0px",
              fontFamily: "sans-serif",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              "&:hover": {
                backgroundColor: "#0000AA",
              },
            }}
            onClick={handleClickOpen}
          >
            Apply For Leave
          </Button>
          <Dialog
            open={open}
            onClose={handleClose}
            fullWidth
            maxWidth="sm"
            sx={{
              "& .MuiDialogContent-root": {
                overflowY: "hidden", // Ensure no overflow is visible
              },
              "& .MuiPaper-root": {
                maxHeight: "100vh", // Ensure dialog doesn't exceed viewport height
              },
            }}
          >
            <form onSubmit={handleSubmit(onSubmit)}>
              <DialogTitle>
                Apply Leave
                <IconButton
                  aria-label="close"
                  onClick={handleClose}
                  sx={{
                    position: "absolute",
                    right: 8,
                    top: 8,
                    color: (theme) => theme.palette.grey[500],
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </DialogTitle>
              <DialogContent>
                <Box
                  component="form"
                  sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                >
                  <FormControl fullWidth sx={{ mb: 1 }} variant="standard">
                    <InputLabel
                      id="leave-type-label"
                      shrink
                      style={{ color: "#515356" }}
                    >
                      Leave Type
                    </InputLabel>
                    <Select
                      labelId="leave-type-label"
                      value={leaveType}
                      onChange={(e: any) => setLeaveType(e.target.value)}
                      displayEmpty
                      label="Leave Type"
                      MenuProps={{
                        PaperProps: {
                          style: {
                            marginTop: 2, // Margin top to separate menu items from the label
                          },
                        },
                      }}
                      sx={{
                        ".MuiSelect-select": {
                          paddingTop: "1em", // Adjust padding to prevent overlap
                          paddingBottom: "1em",
                          color: "#515356",
                        },
                      }}
                      inputProps={{
                        shrink: true,
                        "aria-label": "Without label",
                      }}
                    >
                      <MenuItem value="">
                        <em>Select Leave Type</em>
                      </MenuItem>
                      <MenuItem value="sick">Loss of Pay</MenuItem>
                    </Select>
                  </FormControl>

                  <Box sx={{ display: "flex", gap: 2 }}>
                    <FormControl fullWidth>
                      <Controller
                        name="startDate"
                        control={control}
                        rules={{ required: "Start Date is required" }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="Start Date"
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                              style: { color: "#616161", fontSize: 20 },
                            }} // Ensure label is visible above the input
                          />
                        )}
                      />
                      {errors.startDate && (
                        <span style={{ color: "red" }}>
                          {errors.startDate.message}
                        </span>
                      )}
                    </FormControl>

                    <FormControl fullWidth>
                      <Controller
                        name="halfDay"
                        control={control}
                        render={({ field }) => (
                          <>
                            <InputLabel
                              id="half-day-label"
                              shrink
                              style={{ color: "#515356" }}
                            >
                              Select Half
                            </InputLabel>
                            <Select
                              {...field}
                              labelId="half-day-label"
                              displayEmpty
                              label="Select Half"
                              MenuProps={{
                                PaperProps: {
                                  style: {
                                    marginTop: 2, // Margin top to separate menu items from the label
                                  },
                                },
                              }}
                              sx={{
                                ".MuiSelect-select": {
                                  paddingTop: "1em", // Adjust padding to prevent overlap
                                  paddingBottom: "1em",
                                },
                              }}
                              inputProps={{ shrink: true }}
                            >
                              <MenuItem value="">
                                <em>Select Half</em>
                              </MenuItem>
                              <MenuItem value="firstHalf">First Half</MenuItem>
                              <MenuItem value="secondHalf">
                                Second Half
                              </MenuItem>
                            </Select>
                          </>
                        )}
                      />
                    </FormControl>
                  </Box>

                  <Box sx={{ display: "flex", gap: 2 }}>
                    <FormControl fullWidth>
                      <Controller
                        name="endDate"
                        control={control}
                        rules={{ required: "End Date is required" }}
                        render={({ field }) => (
                          <TextField
                            {...field}
                            label="End Date"
                            type="date"
                            InputLabelProps={{
                              shrink: true,
                              style: { color: "#616161", fontSize: 20 },
                            }} // Ensure label is visible above the input
                          />
                        )}
                      />
                      {errors.endDate && (
                        <span style={{ color: "red" }}>
                          {errors.endDate.message}
                        </span>
                      )}
                    </FormControl>

                    <FormControl fullWidth>
                      <Controller
                        name="secondHalfDay"
                        control={control}
                        render={({ field }) => (
                          <>
                            <InputLabel
                              id="second-half-day-label"
                              shrink
                              style={{ color: "#515356" }}
                            >
                              Select Half
                            </InputLabel>
                            <Select
                              {...field}
                              labelId="second-half-day-label"
                              displayEmpty
                              label="Select Half"
                              MenuProps={{
                                PaperProps: {
                                  style: {
                                    marginTop: 2, // Margin top to separate menu items from the label
                                  },
                                },
                              }}
                              sx={{
                                ".MuiSelect-select": {
                                  paddingTop: "1em", // Adjust padding to prevent overlap
                                  paddingBottom: "1em",
                                },
                              }}
                              inputProps={{ shrink: true }}
                            >
                              <MenuItem value="">
                                <em>Select Half</em>
                              </MenuItem>
                              <MenuItem value="firstHalf">First Half</MenuItem>
                              <MenuItem value="secondHalf">
                                Second Half
                              </MenuItem>
                            </Select>
                          </>
                        )}
                      />
                    </FormControl>
                  </Box>

                  <FormControl fullWidth>
                    <Controller
                      name="reason"
                      control={control}
                      rules={{ required: "Reason is required" }}
                      render={({ field }) => (
                        <TextField
                          {...field}
                          label="Write Your Reason"
                          multiline
                          rows={6} // Adjust the number of rows as needed
                          fullWidth
                          variant="outlined"
                          InputLabelProps={{ style: { color: "#515356" } }}
                        />
                      )}
                    />
                    {errors.reason && (
                      <span style={{ color: "red" }}>
                        {errors.reason.message}
                      </span>
                    )}
                  </FormControl>
                </Box>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button
                  type="submit"
                  sx={{
                    backgroundColor: "#0000FF",
                    color: "white",
                    "&:hover": {
                      backgroundColor: "#0000AA",
                    },
                  }}
                >
                  Submit
                </Button>
              </DialogActions>
            </form>
          </Dialog>
        </Box>
        <hr></hr>
        <Box sx={{ backgroundColor: "white", margin: 5, color: "#616161" }}>
          <h3>No leave rules have been assigned to you</h3>
        </Box>
      </Box>
    </div>
  );
};

export default ApplyLeave;
