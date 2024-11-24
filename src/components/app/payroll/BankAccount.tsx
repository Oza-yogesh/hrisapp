import React, { useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Button,
  IconButton,
  Grid,
  Paper,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  MenuItem,
  FormControl,
  InputLabel,
  Select,
  Divider,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";
import ActionButtons from "../common/ActionButton";
import CloseIcon from "@mui/icons-material/Close";
import ProfilePhotoUpload from "../my_profile/ProfilePhotoUpload";

const BankAccount = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);

  const [details, setDetails] = useState({
    accountHolderName: "Vaishnavi Gatade",
    bankName: "KOTAK MAHINDRA BANK LIMITED",
    accountNumber: "0713952696",
    branchName: "NARAYAN LAXMI ROAD BRANCH",
    city: "PUNE",
    ifscCode: "KKBK0001775",
    effectiveDate: "",
  });

  const handleEditClick = () => {
    setIsEditing(true); // Enable editing mode
  };

  const handleSaveClick = () => {
    setIsEditing(false); // Disable editing mode
    // Optionally, you can handle saving logic here (e.g., sending data to the backend)
  };

  const handleCancelClick = () => {
    setIsEditing(false);
    setDetails((prevDetails) => ({
      ...prevDetails,
    }));
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleDialogOpen = () => {
    setOpenDialog(true);
  };

  const handleDialogClose = () => {
    setOpenDialog(false);
  };

  return (
    <>
      <div style={{ position: "absolute", top: "100px", left: "200px" }}>
        <ProfilePhotoUpload />
      </div>
      <Box
        sx={{ m: 5, ml: 30, p: 2 }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "10px", textAlign: "initial" }}>
            <Box sx={{ pl: 2 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #D3D3D3",
                }}
              >
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#000000"
                  fontWeight="bold"
                  sx={{ fontSize: "0.9rem" }}
                >
                  Salary Account Details
                </Typography>
                <IconButton
                  onClick={handleEditClick}
                  sx={{
                    visibility: hover && !isEditing ? "visible" : "hidden",
                  }}
                >
                  <EditIcon fontSize="small" />
                </IconButton>
              </Box>

              {isEditing ? (
                <Box component="form">
                  <Box sx={{ display: "flex", gap: 2 }}>
                    <TextField
                      variant="standard"
                      label="Account Holder's Name"
                      name="accountHolderName"
                      value={details.accountHolderName}
                      onChange={handleChange}
                      margin="normal"
                      fullWidth
                    />

                    <TextField
                      variant="standard"
                      label=" Effective Date:"
                      type="date"
                      name="effectiveDate"
                      value={details.effectiveDate}
                      onChange={handleChange}
                      margin="normal"
                      InputLabelProps={{ shrink: true }}
                    />
                  </Box>
                  <Button
                    variant="contained"
                    color="primary"
                    sx={{
                      mt: 2,
                      backgroundColor: "#1976d2",
                      "&:hover": {
                        backgroundColor: "#1565c0",
                      },
                    }}
                    onClick={handleDialogOpen}
                    startIcon={<SearchIcon />}
                  >
                    Find My Branch
                  </Button>
                  <Box display="flex" mt={2} gap={2}>
                    <TextField
                      variant="standard"
                      label="Bank Name"
                      name="bankName"
                      value={details.bankName}
                      onChange={handleChange}
                      fullWidth
                    />
                    <TextField
                      variant="standard"
                      label="City"
                      name="city"
                      value={details.city}
                      onChange={handleChange}
                      fullWidth
                    />
                    <TextField
                      variant="standard"
                      label="Branch Name"
                      name="branchName"
                      value={details.branchName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Box>
                  <Box display="flex" gap={2} mt={2}>
                    <TextField
                      variant="standard"
                      label="IFSC Code"
                      name="ifscCode"
                      value={details.ifscCode}
                      onChange={handleChange}
                      fullWidth
                    />
                    <TextField
                      variant="standard"
                      label="Account Number"
                      name="accountNumber"
                      value={details.accountNumber}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Box>
                  <Box mt={2} display="flex" justifyContent="flex-end" gap={2}>
                    <ActionButtons
                      onCancel={handleCancelClick}
                      onSave={handleSaveClick}
                      showButtons={true}
                    />
                  </Box>
                </Box>
              ) : (
                <Box mt={2}>
                  <Box mt={2} gap={2}>
                    <Grid
                      container
                      spacing={1}
                      direction="column"
                      alignItems="flex-start"
                    >
                      <Grid item>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "black",
                            fontSize: "1rem",
                          }}
                        >
                          <strong>Account Holder's Name:</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: "grey",
                            fontSize: ".9rem",
                            "& .MuiInputBase-input": {
                              whiteSpace: "normal",
                              overflowWrap: "break-word",
                            },
                          }}
                        >
                          {details.accountHolderName}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>

                  <Box display="flex" gap={2}>
                    {/* Bank Name */}
                    <Grid
                      container
                      spacing={1}
                      direction="column"
                      alignItems="flex-start"
                      mt={2}
                    >
                      <Grid item>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "black",
                            fontSize: "1rem",
                          }}
                        >
                          <strong>Bank Name:</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: "grey",
                            fontSize: "0.9rem",
                            "& .MuiInputBase-input": {
                              whiteSpace: "normal",
                              overflowWrap: "break-word",
                            },
                          }}
                        >
                          {details.bankName}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "black",
                            fontSize: "1rem",
                            mt: 4,
                          }}
                        >
                          <strong>City:</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: "grey",
                            fontSize: ".9rem",
                            "& .MuiInputBase-input": {
                              whiteSpace: "normal",
                              overflowWrap: "break-word",
                            },
                          }}
                        >
                          {details.city}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* Account Number */}
                    <Grid
                      container
                      spacing={1}
                      direction="column"
                      alignItems="flex-start"
                      mt={2}
                    >
                      <Grid item>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "black",
                            fontSize: "1rem",
                          }}
                        >
                          <strong>Account Number:</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: "grey",
                            fontSize: ".9rem",
                            "& .MuiInputBase-input": {
                              whiteSpace: "normal",
                              overflowWrap: "break-word",
                            },
                          }}
                        >
                          {details.accountNumber}
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "black",
                            fontSize: "1rem",
                            mt: 4,
                          }}
                        >
                          <strong>IFSC Code:</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: "grey",
                            fontSize: ".9rem",
                            "& .MuiInputBase-input": {
                              whiteSpace: "normal",
                              overflowWrap: "break-word",
                            },
                          }}
                        >
                          {details.ifscCode}
                        </Typography>
                      </Grid>
                    </Grid>
                    {/* Branch Name */}
                    <Grid
                      container
                      spacing={1}
                      direction="column"
                      alignItems="flex-start"
                      mt={2}
                    >
                      <Grid item>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 700,
                            color: "black",
                            fontSize: "1rem",
                          }}
                        >
                          <strong>Branch Name:</strong>
                        </Typography>
                        <Typography
                          variant="body2"
                          sx={{
                            fontWeight: 400,
                            color: "grey",
                            fontSize: ".9rem",
                            "& .MuiInputBase-input": {
                              whiteSpace: "normal",
                              overflowWrap: "break-word",
                            },
                          }}
                        >
                          {details.branchName}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Box>
                  <Box display="flex" mt={2} gap={2}></Box>
                </Box>
              )}
            </Box>
          </Paper>
        </Grid>
      </Box>

      {/* Dialog for Find Branch */}
      <Dialog open={openDialog} onClose={handleDialogClose} fullWidth>
        <DialogTitle
          sx={{
            fontWeight: "bold",
            borderBottom: "1px solid #D3D3D3",
            marginBottom: "2",
          }}
        >
          Find Branch
          <IconButton
            aria-label="close"
            onClick={handleDialogClose}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>{" "}
        </DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center" mt={2} mb={2}>
            <TextField
              fullWidth
              placeholder="Entry IFSC Code"
              variant="outlined"
              sx={{
                flex: 1,
                "&:hover": {
                  outline: "#1565c0",
                },
              }}
            />
            <Button
              variant="contained"
              color="primary"
              sx={{
                ml: 0,
                height: "55px",
                borderRadius: 0,
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
              }}
            >
              Submit
            </Button>
          </Box>
          <Box display="flex" alignItems="center">
            <Divider
              sx={{
                flexGrow: 1,
                borderWidth: "1px",
              }}
            />
            <Typography sx={{ mx: 2, color: "#1976d2" }}>OR</Typography>
            <Divider
              sx={{
                flexGrow: 1,
                borderWidth: "1.5px",
              }}
            />
          </Box>
          <Box display="flex" gap={2} mb={2}>
            <FormControl fullWidth>
              <InputLabel>Select Bank</InputLabel>
              <Select
                sx={{
                  ".MuiOutlinedInput-notchedOutline": { display: "none" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    display: "none",
                  },
                  borderBottom: 1,
                }}
              >
                <MenuItem value="bank1">Bank 1</MenuItem>
                <MenuItem value="bank2">Bank 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Select State</InputLabel>
              <Select
                sx={{
                  ".MuiOutlinedInput-notchedOutline": { display: "none" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    display: "none",
                  },
                  borderBottom: 1,
                }}
              >
                <MenuItem value="state1">State 1</MenuItem>
                <MenuItem value="state2">State 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" gap={2} mb={2}>
            <FormControl fullWidth>
              <InputLabel>Select City</InputLabel>
              <Select
                sx={{
                  ".MuiOutlinedInput-notchedOutline": { display: "none" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    display: "none",
                  },
                  borderBottom: 1,
                }}
              >
                <MenuItem value="city1">City 1</MenuItem>
                <MenuItem value="city2">City 2</MenuItem>
              </Select>
            </FormControl>
            <FormControl fullWidth>
              <InputLabel>Select Branch</InputLabel>
              <Select
                sx={{
                  ".MuiOutlinedInput-notchedOutline": { display: "none" },
                  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                    display: "none",
                  },
                  borderBottom: 1,
                }}
              >
                <MenuItem value="branch1">Branch 1</MenuItem>
                <MenuItem value="branch2">Branch 2</MenuItem>
              </Select>
            </FormControl>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleDialogClose}>Cancel</Button>
          <Button
            variant="contained"
            color="primary"
            sx={{
              backgroundColor: "#1976d2",
              "&:hover": {
                backgroundColor: "#1565c0",
              },
            }}
          >
            Submit
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default BankAccount;
