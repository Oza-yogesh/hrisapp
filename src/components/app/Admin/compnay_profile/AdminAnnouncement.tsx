import React, { useState } from "react";
import {
  Grid,
  Typography,
  Paper,
  Icon,
  IconButton,
  Button,
  Divider,
  TextField,
  Box,
} from "@mui/material";
import Announcement from "@mui/icons-material/Announcement";
import ClearIcon from "@mui/icons-material/Clear";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import CloseIcon from "@mui/icons-material/Close";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));

function AdminAnnouncement() {
  const [showBox, setShowbox] = useState(false);
  const [text, setText] = useState("");
  const characterLimit = 100;
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const handleToggle = () => {
    setShowbox(!showBox);
  };

  const handleChange = (event:any) => {
    setText(event.target.value);
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
        <Grid item xs={8}>
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
                  color="black"
                  fontWeight="bold"
                >
                  ANNOUNCEMENTS
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={8}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid
              onClick={handleToggle}
              container
              spacing={2}
              display="flex"
              justifyContent="space-evenly"
            >
              <Grid item xs={12}>
                <IconButton>
                  <Announcement />
                </IconButton>
                <Typography
                  variant="body1"
                  color="black"
                  fontWeight="light"
                  marginLeft={5}
                  marginTop={-4}
                >
                  Post an Announcement
                </Typography>
              </Grid>
            </Grid>
            {showBox && (
              <>
                <IconButton sx={{ ml: "90vh", mt: "-50px" }}>
                  <ClearIcon />
                </IconButton>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#B4B4B4" }}
                />
                <Box
                  component="form"
                  sx={{
                    "& .MuiTextField-root": { width: "100%" },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField
                    id="standard-textarea"
                    placeholder="Message"
                    multiline
                    variant="standard"
                    sx={{ mt: "40px" }}
                    onChange={handleChange}
                    helperText={`${text.length}/${characterLimit} characters`}
                    error={text.length > characterLimit}
                  />
                </Box>
                {text.length > characterLimit && (
                  <Typography color="error" variant="body2" sx={{ ml: "90vh" }}>
                    Message Can only be 100 characters long!
                  </Typography>
                )}
                <Divider
                  variant="fullWidth"
                  sx={{ borderColor: "#B4B4B4", mt: "20px" }}
                />
                <Button
                  onClick={handleClickOpen}
                  variant="contained"
                  sx={{
                    bgcolor: "blue",
                    color: "white",
                    width: "80px",
                    mt: "15px",
                    ml: "85vh",
                  }}
                >
                  POST
                </Button>
                <BootstrapDialog
                  onClose={handleClose}
                  aria-labelledby="customized-dialog-title"
                  open={open}
                >
                  <IconButton
                    aria-label="close"
                    onClick={handleClose}
                    sx={{
                      alignItems: "center",
                      right: 8,
                      fontSize: 120,
                      color: "#ff6b6b",
                    }}
                  >
                    <HighlightOffIcon fontSize="large" />
                  </IconButton>
                  <DialogContent dividers>
                    <Typography
                      fontSize="20px"
                      fontWeight="bold"
                      sx={{ mt: "10px", ml: "20vh" }}
                    >
                      ERROR
                    </Typography>
                    <Typography
                      fontSize="20px"
                      color="413F42"
                      sx={{ mt: "10px" }}
                    >
                      Announcement message cannot be empty.
                    </Typography>
                  </DialogContent>
                  <DialogActions>
                    <Button
                      onClick={handleClose}
                      variant="contained"
                      sx={{
                        bgcolor: "615EFC",
                        color: "white",
                        width: "80px",
                        mr: "22vh",
                      }}
                    >
                      OK
                    </Button>
                  </DialogActions>
                </BootstrapDialog>
              </>
            )}
          </Paper>
        </Grid>
        <Grid item xs={8}>
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
                  color="#4f4f4f"
                  fontWeight="bold"
                >
                  LIVE ANNOUNCEMENTS
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ borderColor: "#B4B4B4", mt: "25px" }}
                />
                <Typography
                  variant="body1"
                  color="#4f4f4f"
                  fontWeight="light"
                  textAlign="center"
                  sx={{mt:"35px"}}
                >
                  No Announcements are active.
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}

export default AdminAnnouncement;
