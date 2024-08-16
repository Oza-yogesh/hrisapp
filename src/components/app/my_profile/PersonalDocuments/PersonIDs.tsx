import {
  Divider,
  Paper,
  Typography,
  Grid,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  IconButton,
  Box,
  FormControl,
  NativeSelect,
  FormControlLabel,
  Checkbox,
  FormGroup,
  TextField,
  Icon,
} from "@mui/material";
import React, { useState } from "react";
import { Table } from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";


import { Button } from "@mui/material";

import CloseIcon from "@mui/icons-material/Close";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function PersonIDs() {
  const [showBox, setShowBox] = useState<any>(false);
  const [open, setOpen] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (event:any) => {
    const file = event.target.files ? event.target.files[0] : null;
    setSelectedFile(file);
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          marginTop: "20px",
        }}
      >
        <Grid item xs={10}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid
              container
              spacing={2}
              display="flex"
              justifyContent="space-evenly"
            >
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  ID PROOFS
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={10}></Grid>
              <TableContainer component={Paper}>
                <Table aria-label="simple table">
                  <TableBody>
                    <TableRow>
                      <TableCell>Photo ID</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Date of Birth</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Current Address</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell>Permanent Address</TableCell>
                    </TableRow>
                  </TableBody>
                </Table>
              </TableContainer>

              <Grid item xs={12}>
                <Typography variant="body1" color="black" fontWeight="bold">
                  Uploaded Documents
                </Typography>
              </Grid>

              <Table aria-label="simple table">
                <TableHead>
                  <TableRow>
                    <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
                      TYPE
                    </TableCell>
                    <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
                      ID
                    </TableCell>
                    <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
                      UPLOADED BY
                    </TableCell>
                    <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
                      VERIFICATION
                    </TableCell>
                    <TableCell sx={{ color: "#686C61", fontWeight: "bold" }}>
                      ACTIONS
                    </TableCell>
                  </TableRow>
                </TableHead>
              </Table>
              <Box>
                <React.Fragment>
                  <Button
                    onClick={handleClickOpen}
                    sx={{
                      marginRight: "155vh",
                      marginTop: "10px",
                      color: "blue",
                    }}
                  >
                    <AddCircleOutlineIcon fontSize="large" /> Add
                  </Button>
                  <BootstrapDialog
                    onClose={handleClose}
                    aria-labelledby="customized-dialog-title"
                    open={open}
                  >
                    <DialogTitle
                      sx={{ m: 0, p: 2 }}
                      id="customized-dialog-title"
                    >
                      Add Acount
                    </DialogTitle>
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
                    <DialogContent dividers>
                      <Typography fontSize={14} color="gray" textAlign="left">
                        Select ID Type
                      </Typography>
                      <Box>
                        <FormControl fullWidth>
                          <NativeSelect
                            inputProps={{
                              name: "ID Type",
                              id: "uncontrolled-native",
                            }}
                          >
                            <option>...</option>
                            <option>PAN Card</option>
                            <option>Aadhaar Card</option>
                            <option>PassPort</option>
                            <option>Driving licence</option>
                            <option>Voter ID</option>
                            <option>Electricity Bill</option>
                            <option>Phone Bill</option>
                            <option>Bank Passbook</option>
                            <option>Rental Agreement</option>
                          </NativeSelect>
                        </FormControl>
                      </Box>
                      <TextField
                        sx={{ width: "100%", marginTop: "10px" }}
                        id="standard-multiline-static"
                        multiline
                        rows={1}
                        placeholder="Enter ID"
                        variant="standard"
                      />
                      <Typography
                        fontSize={16}
                        color="gray"
                        textAlign="left"
                        marginTop={2}
                      >
                        Use it as proof for
                      </Typography>
                      <Box marginTop={1} color="#484C4F">
                        <FormGroup>
                          <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Photo ID"
                          />
                          <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Date of birth"
                          />
                          <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Current Address"
                          />
                          <FormControlLabel
                            control={<Checkbox size="small" />}
                            label="Permanent Address"
                          />
                        </FormGroup>
                      </Box>
                      <Box margin={2} marginLeft={-1}>
                        <input
                          accept="*"
                          style={{ display: "none" }}
                          id="contained-button-file"
                          type="file"
                          onChange={handleFileChange}
                        />
                        <label htmlFor="contained-button-file">
                          <Button variant="contained" component="span">
                            Select File
                          </Button>
                        </label>
                        {selectedFile && (
                          <Box mt={2}>
                            <Typography variant="body1">
                              Selected File: {selectedFile.name}
                            </Typography>
                            <Typography variant="body2">
                              Size: {selectedFile.size} bytes
                            </Typography>
                          </Box>
                        )}
                      </Box>
                      <Divider
                        variant="fullWidth"
                        sx={{ backgroundColor: "#424242", margin: "10px" }}
                      />
                      <Box
                        margin={2}
                        sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}
                        marginLeft={15}
                      >
                        <Button onClick={handleClose} startIcon={<CloseIcon />}>
                          Close
                        </Button>
                        <Button
                          sx={{
                            bgcolor: "blue",
                            color: "white",
                            width: "80px",
                          }}
                        >
                          Save
                        </Button>
                      </Box>
                    </DialogContent>
                  </BootstrapDialog>
                </React.Fragment>
              </Box>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default PersonIDs;
