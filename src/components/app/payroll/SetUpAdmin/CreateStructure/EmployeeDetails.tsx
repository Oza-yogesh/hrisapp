import Sidebar from "./Sidebar";
import {
  CssBaseline,
  Container,
  Box,
  Typography,
  Paper,
  Grid,
  Button,
  TextField,
  TableContainer,
  TableHead,
  TableCell,
  TableRow,
  TableBody,
} from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import CheckIcon from "@mui/icons-material/Check";
import CreateIcon from "@mui/icons-material/Create";

import { Table } from "react-bootstrap";

import { useState } from "react";

const Employeedetails = () => {
  const [name, setname] = useState<string>("");
  const [cancel, setCancel] = useState<boolean>(false);
  const [showDetails, setShowDetails] = useState<boolean>(false);

  function toggleDetails(): void {
    setShowDetails(!showDetails);
  }

  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg">
        <Grid container spacing={2} marginTop="20px">
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
              <Box display="flex" flexDirection="row">
                <Sidebar setname={setname} />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 3,
                    height: "auto",
                    width: "170vh",
                    padding: "8px",
                    margin: "12px",
                    borderRadius: "2px",
                  }}
                >
                  <Grid sx={{ margin: "10px", fontSize: ".8rem" }}>
                    <Typography sx={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {name}
                    </Typography>

                    <Typography
                      sx={{
                        fontSize: ".8rem",
                        color: " gray",
                      }}
                    >
                      Overview
                      <Button
                        variant="contained"
                        color="primary"
                        size="small"
                        sx={{ marginLeft: "70vh" }}
                      >
                        Set as Company Default
                      </Button>
                      <hr />
                    </Typography>
                    <Box sx={{ marginTop: "2px" }}>
                      <CreateIcon
                        sx={{ marginLeft: 90, cursor: "pointer" }}
                        onClick={toggleDetails}
                        
                      />
                      {!showDetails && (
                        <Typography sx={{ fontSize: ".9rem" }}>
                          Salary Structure Name
                          <Typography sx={{ fontSize: ".8rem", color: "gray" }}>
                            {name}
                          </Typography>
                        </Typography>
                      )}
                      {showDetails && (
                        <Typography sx={{ fontSize: ".8rem" }}>
                          Name <br />
                          <TextField
                            id="standard-basic"
                            variant="standard"
                            sx={{ fontSize: ".8rem" }}
                          />
                        </Typography>
                      )}
                      <Typography sx={{ fontSize: ".9rem", marginTop: "2px" }}>
                        Description
                      </Typography>
                      {showDetails && (
                        <TextField
                          id="outlined-multiline-static"
                          fullWidth
                          multiline
                          rows={2}
                          placeholder="Enter your Description here"
                          sx={{ fontSize: ".8rem" }}
                        />
                      )}
                      <hr />
                      <Typography
                        sx={{
                          fontSize: ".9rem",
                          marginBottom: "10px",
                          fontWeight: "bold",
                        }}
                      >
                        Salary Structure
                      </Typography>
                      <Box sx={{ display: "flex", gap: "16px" }}>
                        <TableContainer
                          component={Paper}
                          sx={{ width: "50%", border: "1px solid lightgray" }}
                        >
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    fontSize: ".9rem",
                                    border: "1px solid lightgray",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Earnings
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontSize: ".9rem",
                                    border: "1px solid lightgray",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Calculation
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  Basic
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  {showDetails ? (
                                    <TextField
                                      hiddenLabel
                                      defaultValue="CTC*0.4"
                                      variant="outlined"
                                      size="small"
                                      sx={{
                                        fontSize: ".8rem",
                                        color: "gray",
                                      }}
                                    />
                                  ) : (
                                    "CTC*0.4"
                                  )}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  HRA
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  {showDetails ? (
                                    <TextField
                                      hiddenLabel
                                      id="filled-hidden-label-small"
                                      defaultValue="BASIC* 0.4"
                                      variant="outlined"
                                      size="small"
                                      sx={{ fontSize: ".8rem" }}
                                    />
                                  ) : (
                                    "BASIC* 0.4"
                                  )}
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  Special Allowance
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  Balancing Amount of CTC
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                        <TableContainer
                          component={Paper}
                          sx={{ width: "50%", border: "1px solid lightgray" }}
                        >
                          <Table>
                            <TableHead>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Deductions
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                    fontWeight: "bold",
                                  }}
                                >
                                  Calculation (Annual)
                                </TableCell>
                              </TableRow>
                            </TableHead>
                            <TableBody>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  PF Employer
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  System Calculated
                                </TableCell>
                              </TableRow>
                              <TableRow>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  ESI Employer
                                </TableCell>
                                <TableCell
                                  sx={{
                                    fontSize: ".8rem",
                                    border: "1px solid lightgray",
                                  }}
                                >
                                  System Calculated
                                </TableCell>
                              </TableRow>
                            </TableBody>
                          </Table>
                        </TableContainer>
                      </Box>
                      {showDetails && (
                        <Typography
                          sx={{
                            display: "flex",
                            justifyContent: "end",
                            margin: "20px",
                            gap: "10px",
                          }}
                        >
                          <Button
                            startIcon={<ClearIcon />}
                            onClick={() => {
                              toggleDetails();
                              setCancel(false);
                            }}
                          >
                            Cancel
                          </Button>
                          <Button variant="contained" startIcon={<CheckIcon />}>
                            Save
                          </Button>
                        </Typography>
                      )}
                    </Box>
                  </Grid>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};
export default Employeedetails;
