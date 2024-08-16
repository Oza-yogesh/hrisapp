import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import {
  Container,
  Paper,
  Typography,
  TableContainer,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Grid,
  TablePagination,
  CircularProgress,
  Box,
  TextField,
  InputAdornment,
  IconButton,
  Stack,
} from "@mui/material";
import Slide from "@mui/material/Slide";
import { TransitionProps } from "@mui/material/transitions";
import axios from "axios";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import SearchIcon from "@mui/icons-material/Search";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";

function Logs() {
  const [users, setUsers] = useState<any>([]);
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);
  const [searchQuery, setSearchQuery] = useState("");
  const [open, setOpen] = React.useState(false);
  const [users1, setUsers1] = useState<any[]>([]);
  const [filterVal, setFilterVal] = useState("");
  const [filterUser, setfilterUser] = useState<any[]>([]);
  const [filteredCount, setFilteredCount] = useState(0);

  const handleChangePage = (event: any, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: any) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  const handleMultipleFilter = (e: any) => {
    const searchValue = e.target.value.toLowerCase();
    if (searchValue === "") {
      setfilterUser(users);
      setFilteredCount(users.length);
    } else {
      const filterResult = users.filter((item: any) => {
        return (
          Object.values(item).some((value) => {
            if (typeof value === "string" || typeof value === "number") {
              const itemValue = String(value).toLowerCase();
              return itemValue.includes(searchValue);
            }
            return false;
          }
          ));
      });

      setfilterUser(filterResult);
      setFilteredCount(filterResult.length);
    }

    setFilterVal(e.target.value);
  };

  return (
    <>
      <Container style={{ width: "100%" }}>
        <Grid container spacing={2}>
          <Grid item xs={6}>
          
          </Grid>
          <Grid item xs={6}></Grid>

          <Grid item xs={12} sm={6}></Grid>
          
          <Grid item xs={12} 
           sx={{ display: "flex", justifyContent: "flex-end" }}
          >
                                  <TextField
                                    label='Select Year'
                                    autoFocus
                                    sx={{width:"100px"}}
                                    name='animalCategory'
                                    select
                                    margin='normal'
                                  >
                                    <MenuItem value='Cow'>2024</MenuItem>
                                    <MenuItem value='Buffalo'>2025</MenuItem>
                                    </TextField>
                                </Grid> 
                              
                           </Grid>

        <Paper elevation={20}>
          <Grid
            container
            sx={{
              p: 2,
              background: "#0288d1",
              color: "white",
              marginTop: "15px",
            }}
          >
            <Grid>
              <Typography variant="h5" sx={{ mx: 3 }}>
               Logs
                </Typography>
            </Grid>
            <Grid item xs={12} 
           sx={{ display: "flex", justifyContent: "flex-end" }}
          >
                                  <TextField
                                    label='Show'
                                    autoFocus
                                    sx={{width:"100px"}}
                                    name='animalCategory'
                                    select
                                    margin='normal'
                                  >
                                    <MenuItem value='10'>10</MenuItem>
                                    <MenuItem value='20'>20</MenuItem>
                                    <MenuItem value='30'>30</MenuItem>
                                    <MenuItem value='40'>40</MenuItem>
                                    <MenuItem value='50'>50</MenuItem>
                                    <MenuItem value='All'>All</MenuItem>
                                    </TextField>
                                </Grid> 
          </Grid>
          <TableContainer className="scrollBarCss">
            <Table>
              <TableHead>
                <TableRow>
                  { }

                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                    Type
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Start Date
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                   End Date
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Days
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Applied On
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                 Status
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                   Actions
                  </TableCell>
                </TableRow>
              </TableHead>

              <TableBody>
                {filterUser.length > 0 &&
                  filterUser
                    ?.slice(
                      page * rowsPerPage,
                      page * rowsPerPage + rowsPerPage
                    )
                    .map((item: any, index: any) => (
                      <React.Fragment key={item.VDID}>
                        <TableRow key={item.VDID}>
                          { }
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid #ddd",
                            }}
                          >
                            {item.VeterinaryDoctorServices}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid #ddd",
                            }}
                          >
                            {item.Qualification}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid #ddd",
                            }}
                          >
                            {item.registrationNumber}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid #ddd",
                            }}
                          >
                            {item.mobileNumber}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid #ddd",
                            }}
                          >
                            {item.doctorAddress}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid #ddd",
                            }}
                          >
                            {item.districtName}
                          </TableCell>


                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid #ddd",
                            }}
                          >
                            {item.emailAddress}
                          </TableCell>
                          <TableCell
                            sx={{
                              textAlign: "center",
                              border: "1px solid #ddd",
                            }}
                          >
                            {item?.status}
                            <Stack direction={"row"}>
                              
                              <IconButton>
                                <DeleteIcon
                                  onClick={() => {

                                    setUsers1(item.VDID);
                                    setOpen(true);
                                  }}
                                  sx={{ color: "red" }}
                                />
                              </IconButton></Stack>
                            { }
                          </TableCell>

                        </TableRow>
                      </React.Fragment>
                    ))}
                <Dialog
                  open={open}
                  aria-describedby="alert-dialog-slide-description"
                >
                  <DialogTitle>{"DELETE"}</DialogTitle>
                  <DialogContent>
                    <DialogContentText id="alert-dialog-slide-description">
                      Are you sure you want to delete this?
                    </DialogContentText>
                  </DialogContent>
                  <DialogActions>
                  
                  </DialogActions>
                </Dialog>
              </TableBody>
            </Table>
          </TableContainer>
          {filterUser && filterUser.length > 0 ? (
            <TablePagination
              rowsPerPageOptions={[10, 25, 50, 100]}
              component="div"
              count={filterUser?.length}
              rowsPerPage={rowsPerPage}
              page={page}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
            />
          ) : null}
        </Paper>
      </Container>
    </>
  );
}
export default Logs;