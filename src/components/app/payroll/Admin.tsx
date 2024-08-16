import React, { useState } from "react";
import {
  Grid,
  Box,
  Typography,
  Paper,
  Divider,
  Button,
  TextField,
  Avatar,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import CheckIcon from "@mui/icons-material/Check";
import ClearIcon from "@mui/icons-material/Clear";

const Admin = () => {
  const [showSearch, setShowSearch] = useState<boolean>(true);
  const [cancel, setCancel] = useState<boolean>(false);

  const toggleData = () => {
    setShowSearch(!showSearch);
  };

  return (
    <Grid container spacing={2} sx={{ marginTop: "20px" }}>
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                textTransform="uppercase"
                color="black"
                fontWeight="bold"
              >
                CEO
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ backgroundColor: "#424242" }}
              />
            </Grid>
            <Grid item xs={6}>
              <Typography variant="body2">
                CEO is the head of the organization.
              </Typography>
              <Typography variant="body2">
                For Organization Chart, addition of CEO is required.
              </Typography>
              <Box sx={{ marginTop: "20px" }}>
                <Typography variant="body2">
                  CEO is also the HR Admin.
                </Typography>
                <Typography variant="body2">
                  CEO's permissions apply to all employees.
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Typography variant="body2">CEO can:</Typography>
                <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
                  <Typography variant="body2">
                    View all employee profile information
                  </Typography>
                  <Typography variant="body2">
                    View sensitive employee information (such as PAN Card, IDs,
                    and salary)
                  </Typography>
                  <Typography variant="body2">
                    Edit employee profiles
                  </Typography>
                  <Typography variant="body2">
                    Edit, Upload and Approve Attendance and Leaves
                  </Typography>
                  <Typography variant="body2">
                    Create and remove admins, and edit admin permissions
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Typography
                    fontSize={15}
                    sx={{
                      color: "black",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                    }}
                  >
                    <Avatar>RP</Avatar>
                    Rajeshwari Prajapati
                  </Typography>
                </Box>
                <Box sx={{ marginTop: "20px" }}>
                  <Button
                    onClick={() => {
                      toggleData();
                      setShowSearch(false);
                    }}
                  >
                    <AddCircleOutlineIcon fontSize="small" /> Change
                  </Button>
                  {!showSearch && (
                    <Box>
                      <Divider />
                      <Typography>Find Employee</Typography>
                      <TextField
                        id="standard-basic"
                        fullWidth
                        variant="standard"
                      />
                      <Box
                        sx={{
                          display: "flex",
                          justifyContent: "flex-end",
                          gap: "10px",
                          marginTop: "10px",
                        }}
                      >
                        <Button
                          variant="text"
                          onClick={() => {
                            toggleData();
                            setCancel(false);
                          }}
                        >
                          <ClearIcon /> Cancel
                        </Button>
                        <Button variant="contained">
                          <CheckIcon /> Save
                        </Button>
                      </Box>
                    </Box>
                  )}
                  <Divider />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sx={{ marginTop: "20px" }}>
        <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                textTransform="uppercase"
                color="black"
                fontWeight="bold"
              >
                HR ADMIN
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ backgroundColor: "#424242" }}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body2">
                HR Admin's permissions apply to all employees.
              </Typography>
            </Grid>
            <Box sx={{ marginTop: "20px" }}>
              <Typography variant="body2">This admin can:</Typography>
              <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
                <Typography variant="body2">
                  View all employee profile information
                </Typography>
                <Typography variant="body2">
                  View sensitive employee information (such as PAN Card, IDs,
                  and salary)
                </Typography>
                <Typography variant="body2">Edit employee profiles</Typography>
                <Typography variant="body2">
                  Edit, Upload and Approve Attendance and Leaves
                </Typography>
                <Typography variant="body2">
                  Create and remove admins, and edit admin permissions
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Button
                  onClick={() => {
                    toggleData();
                    setShowSearch(false);
                  }}
                >
                  <AddCircleOutlineIcon fontSize="small" /> Add
                </Button>
                {!showSearch && (
                  <Box>
                    <Divider />
                    <Typography>Find Employee</Typography>
                    <TextField
                      id="standard-basic"
                      fullWidth
                      variant="standard"
                    />
                    <Box
                      sx={{
                        display: "flex",
                        justifyContent: "flex-end",
                        gap: "10px",
                        marginTop: "10px",
                      }}
                    >
                      <Button
                        variant="text"
                        onClick={() => {
                          toggleData();
                          setCancel(false);
                        }}
                      >
                        <ClearIcon /> Cancel
                      </Button>
                      <Button variant="contained">
                        <CheckIcon /> Save
                      </Button>
                    </Box>
                  </Box>
                )}
                <Divider />
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sx={{ marginTop: "20px" }}>
        <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                textTransform="uppercase"
                color="black"
                fontWeight="bold"
              >
                FINANCE ADMIN
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ backgroundColor: "#424242" }}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body2">
                Finance admin's permissions apply to all employees.
              </Typography>
            </Grid>
            <Box sx={{ marginTop: "20px" }}>
              <Typography variant="body2">This admin can:</Typography>
              <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
                <Typography variant="body2">
                  View salary and bank details of employee profile
                </Typography>
                <Typography variant="body2">
                  View sensitive employee information (such as PAN Card and IDs)
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Button>
                  <AddCircleOutlineIcon fontSize="small" /> Add
                </Button>
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Grid>

      <Grid item xs={12} sx={{ marginTop: "20px" }}>
        <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                textTransform="uppercase"
                color="black"
                fontWeight="bold"
              >
                HR EXECUTIVE
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ backgroundColor: "#424242" }}
              />
            </Grid>
            <Grid item xs={6} md={4}>
              <Typography variant="body2">
                HR Executive's permissions apply to all employees.
              </Typography>
            </Grid>
            <Box sx={{ marginTop: "20px" }}>
              <Typography variant="body2">This admin can:</Typography>
              <Box sx={{ marginLeft: "20px", marginTop: "20px" }}>
                <Typography variant="body2">
                  View all employee profile information (Non-payroll)
                </Typography>
                <Typography variant="body2">
                  View sensitive employee information (such as PAN Card, IDs,
                  DOB etc)
                </Typography>
                <Typography variant="body2">
                  Add and edit employee profiles
                </Typography>
                <Typography variant="body2">
                  Edit, Upload and Approve Attendance and Leaves
                </Typography>
                <Typography variant="body2">
                  This Admin will not have any payroll access.
                </Typography>
              </Box>
              <Box sx={{ marginTop: "20px" }}>
                <Button>
                  <AddCircleOutlineIcon fontSize="small" /> Add
                </Button>
              </Box>
            </Box>
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default Admin;
