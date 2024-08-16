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

function MsickLeave() {
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
            
                </Typography>
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
                    Details
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Jan
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Feb 
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Mar
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Apr 
                  </TableCell>

                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                 May
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Jun
                  </TableCell>
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Jul
                  </TableCell> 
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Aug
                  </TableCell> 
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Sep
                  </TableCell> 
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Oct 
                  </TableCell> 
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Nov 
                  </TableCell>  
                  <TableCell
                    sx={{
                      textAlign: "center",
                      border: "1px solid #ddd",
                      fontSize: "15px",
                    }}
                  >
                  Dec 
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
export default  MsickLeave;