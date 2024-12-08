import React, { useEffect, useState } from "react";
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
import axios from "axios";
import CustomTextField from "../common/CustomTextField";
import { getRequest } from "../../../api/Api";
import { ACCOUNTDETAILS } from "../../../api/Server";

interface BankDetails {
  IFSC: string;
  MICR: string;
  BANK: string;
  ADDRESS: string;
  DISTRICT: string;
  STATE: string;
}
// Fields to display
const fieldsToDisplay = [
  { key: "IFSC", label: "IFSC Code" },
  { key: "MICR", label: "MICR Code" },
  { key: "BANK", label: "Bank" },
  { key: "ADDRESS", label: "Address" },
  { key: "DISTRICT", label: "District" },
  { key: "STATE", label: "State" },
  { key: "PHONE", label: "Phone Number" },
];

const BankAccount = () => {
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [hover, setHover] = useState<boolean>(false);
  const [openDialog, setOpenDialog] = useState<boolean>(false);
  const [openDialog2, setOpenDialog2] = useState<boolean>(false);
  const [ifscCode, setIfscecode] = useState<String>("");
  const [error, setError] = useState<String>("");
  const [bankDetails, setBankDetails] = useState<BankDetails | null>(null);
  const [banks, setBanks] = useState([]); // List of banks
  const [states, setStates] = useState([]); // List of states for the selected bank
  const [cities, setCities] = useState([]); // List of cities for the selected state
  const [branches, setBranches] = useState([]); // List of branches for the selected city

  const [selectedBank, setSelectedBank] = useState("");
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");
  const [selectedBranch, setSelectedBranch] = useState("");

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
    setIsEditing(true);
  };

  const handleSaveClick = () => {
    setIsEditing(false);
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

  const handleDialogOpen2 = () => {
    setOpenDialog2(true);
  };

  const handleDialogClose2 = () => {
    setOpenDialog2(false);
  };

  const handleSearch = async () => {
    if (!ifscCode) {
      setError("Please enter an IFSC code.");
      return;
    }
    setError("");
    setBankDetails(null);

    try {
      const response = await axios.get<BankDetails>(
        `https://ifsc.razorpay.com/${ifscCode}`
      );
      setBankDetails(response.data);
      console.log(response.data);
    } catch (error) {
      setError("Unable to fetch bank details. Please check the IFSC code.");
    }
  };
  useEffect(() => {
    if (!ifscCode) return;

    handleSearch();
  }, [ifscCode]);

  // Consolidated useEffect to manage dropdowns
  useEffect(() => {
    const fetchData = async () => {
      try {
        if (!selectedBank) {
          // Fetch all banks
          const response = await axios.get("https://ifsc.razorpay.com/");
          setBanks(Object.keys(response.data)); // Adjust this based on the API response
          setStates([]);
          setCities([]);
          setBranches([]);
        } else if (selectedBank && !selectedState) {
          // Fetch states for the selected bank
          const response = await axios.get(
            `https://ifsc.razorpay.com/${selectedBank}`
          );
          setStates(Object.keys(response.data)); // Adjust this based on the API response
          setCities([]);
          setBranches([]);
        } else if (selectedBank && selectedState && !selectedCity) {
          // Fetch cities for the selected state
          const response = await axios.get(
            `https://ifsc.razorpay.com/${selectedBank}/${selectedState}`
          );
          setCities(Object.keys(response.data)); // Adjust this based on the API response
          setBranches([]);
        } else if (selectedBank && selectedState && selectedCity) {
          // Fetch branches for the selected city
          const response = await axios.get(
            `https://ifsc.razorpay.com/${selectedBank}/${selectedState}/${selectedCity}`
          );
          setBranches(response.data); // Adjust this based on the API response
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [selectedBank, selectedState, selectedCity]);


  


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
                  fontWeight="800"
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
                    <CustomTextField
                      label="Account Holder's Name"
                      name="accountHolderName"
                      value={details.accountHolderName}
                      onChange={handleChange}
                    />
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        mt: 2,
                      }}
                    >
                      <Typography
                        variant="body1"
                        sx={{
                          fontWeight: 500,
                          color: "rgba(0, 0, 0, 0.8)",
                          fontSize: "14px",
                          display: "inline-block",
                        }}
                      >
                        Effective Date:
                      </Typography>
                      <TextField
                        variant="standard"
                        type="date"
                        name="effectiveDate"
                        value={details.effectiveDate}
                        onChange={handleChange}
                        margin="normal"
                        InputProps={{
                          style: {
                            fontWeight: 500,
                            color: "#333",
                            fontSize: "16px",
                          },
                        }}
                        sx={{
                          display: "inline-block",
                        }}
                      />
                    </Box>
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
                    <CustomTextField
                      label="Bank Name"
                      name="bankName"
                      value={details.bankName}
                      onChange={handleChange}
                    />

                    <CustomTextField
                      label="City"
                      name="city"
                      value={details.city}
                      onChange={handleChange}
                    />
                    <CustomTextField
                      label="Branch Name"
                      name="branchName"
                      value={details.branchName}
                      onChange={handleChange}
                    />
                  </Box>
                  <Box display="flex" gap={2} mt={2}>
                    <CustomTextField
                      label="IFSC Code"
                      name="ifscCode"
                      value={details.ifscCode}
                      onChange={handleChange}
                      sx={{ width: "50px" }}
                    />
                    <CustomTextField
                      label="Account Number"
                      name="accountNumber"
                      value={details.accountNumber}
                      onChange={handleChange}
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
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center" mt={2} mb={2}>
            <TextField
              fullWidth
              placeholder="Entry IFSC Code"
              variant="outlined"
              value={ifscCode}
              onChange={(e) => setIfscecode(e.target.value)}
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
              onClick={() => {
                handleDialogOpen2();
                handleSearch();
                handleDialogClose();
              }}
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

          {error && (
            <Typography color="error" variant="body1" gutterBottom>
              {error}
            </Typography>
          )}

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
            {/* Bank Dropdown */}
            <FormControl fullWidth sx={{ mb: 2 }}>
              <InputLabel id="bank-label">Bank</InputLabel>
              <Select
                labelId="bank-label"
                value={selectedBank}
                onChange={(e) => {
                  setSelectedBank(e.target.value);
                  setSelectedState("");
                  setSelectedCity("");
                  setSelectedBranch("");
                }}
              >
                <MenuItem value="">
                  <em>Select Bank</em>
                </MenuItem>
                {banks.map((bank) => (
                  <MenuItem key={bank} value={bank}>
                    {bank}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* State Dropdown */}
            <FormControl fullWidth sx={{ mb: 2 }} disabled={!selectedBank}>
              <InputLabel id="state-label">State</InputLabel>
              <Select
                labelId="state-label"
                value={selectedState}
                onChange={(e) => {
                  setSelectedState(e.target.value);
                  setSelectedCity("");
                  setSelectedBranch("");
                }}
              >
                <MenuItem value="">
                  <em>Select State</em>
                </MenuItem>
                {states.map((state) => (
                  <MenuItem key={state} value={state}>
                    {state}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Box display="flex" gap={2} mb={2}>
            {/* City Dropdown */}
            <FormControl fullWidth sx={{ mb: 2 }} disabled={!selectedState}>
              <InputLabel id="city-label">City</InputLabel>
              <Select
                labelId="city-label"
                value={selectedCity}
                onChange={(e) => {
                  setSelectedCity(e.target.value);
                  setSelectedBranch("");
                }}
              >
                <MenuItem value="">
                  <em>Select City</em>
                </MenuItem>
                {cities.map((city) => (
                  <MenuItem key={city} value={city}>
                    {city}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>

            {/* Branch Dropdown */}
            <FormControl fullWidth sx={{ mb: 2 }} disabled={!selectedCity}>
              <InputLabel id="branch-label">Branch</InputLabel>
              <Select
                labelId="branch-label"
                value={selectedBranch}
                onChange={(e) => setSelectedBranch(e.target.value)}
              >
                <MenuItem value="">
                  <em>Select Branch</em>
                </MenuItem>
                {branches.map((branch) => (
                  <MenuItem key={branch} value={branch}>
                    {branch}
                  </MenuItem>
                ))}
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

      {/* for Finding Bank by IFSC code Show */}

      <Dialog open={openDialog2} onClose={handleDialogClose2} fullWidth>
        <DialogTitle
          sx={{
            fontWeight: "500",
            borderBottom: "1px solid #D5E3F3",
            marginBottom: "2",
            color: "#121111",
            fontSize: "18px",
            padding: "15px 20px 5px",
          }}
        >
          Find Branch
          <IconButton
            aria-label="close"
            onClick={handleDialogClose2}
            sx={{
              position: "absolute",
              right: 8,
              top: 8,
            }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <Box display="flex" alignItems="center">
            {bankDetails && (
              <Box>
                {fieldsToDisplay.map(({ key, label }) => (
                  <Box
                    key={key}
                    sx={{
                      padding: "15px 20px",
                      borderBottom: "1px solid rgba(199, 215, 230, 0.38) ",
                      display: "flex",
                      alignItems: "center",
                      // gap: "5px",
                    }}
                  >
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: "600",
                        float: "right",
                        color: "#000000",
                        fontSize: "13px",
                        lineHeight: "18px",
                        width: "40%",
                      }}
                    >
                      <strong>{label}</strong>
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        color: "#696767",
                        fontSize: "13px",
                        float: "left",
                        // width: "60%",
                        flex: 1,
                      }}
                    >
                      {bankDetails[key]}
                    </Typography>
                  </Box>
                ))}
              </Box>
            )}
          </Box>

          <Box display="flex" justifyContent="flex-end">
            <Button
              variant="contained"
              color="primary"
              sx={{
                backgroundColor: "#1976d2",
                "&:hover": {
                  backgroundColor: "#1565c0",
                },
                mt: 2,
              }}
            >
              Select Bank
            </Button>
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default BankAccount;
