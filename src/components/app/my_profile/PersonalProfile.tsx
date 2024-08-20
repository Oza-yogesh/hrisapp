import {
  Divider,
  Grid,
  IconButton,
  Paper,
  TextField,
  Typography,
  Button,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import EditIcon from "@mui/icons-material/Edit";
import { useEffect, useState } from "react";
import { FormLabel } from "react-bootstrap";
import FemaleIcon from "@mui/icons-material/Female";
import MaleIcon from "@mui/icons-material/Male";
import TransgenderIcon from "@mui/icons-material/Transgender";
import axios from "axios";
import { EmployeeDetails } from "../../interfaces/Interfaces";
import { getRequest } from "../../../api/Api";
import { GET_EMPLOYEE_DETAILS_BY_ID } from "../../../api/Server";

export default function PersonalProfile() {
  type Section = "personalInfo" | "contactInfo" | "addresses" | "socialProfile";

  const [isEditing, setIsEditing] = useState({
    personalInfo: false,
    contactInfo: false,
    addresses: false,
    socialProfile: false,
  });

  const [details, setDetails] = useState<EmployeeDetails>({
    _id: "",
    companyId: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    password: "",
    phoneNumber: "",
    alternatePhoneNumber: "",
    dateOfBirth: "",
    gender: "",
    bloodGroup: "",
    maritalStatus: "",
    employeeId: "",
    departmentId: "",
    subDepartmentId: "",
    designationId: "",
    jobTitle: "",
    reportingManagerId: "",
    workLocation: "",
    employeeType: "",
    probationPeriod: 0,
    probationStatus: "",
    dateOfJoining: "",
    ctc: 0,
    status: "",
    roleId: "",
    bankDetails: {
      accountHolderName: "",
      bankName: "",
      city: "",
      branchName: "",
      ifscCode: "",
      accountNumber: "",
    },
    addresses: {
      currentAddress: "",
      permanentAddress: "",
      houseType: "",
      currentResidenceSince: "",
      currentCitySince: "",
    },
    socialProfile: {
      linkedin: "",
      facebook: "",
      twitter: "",
    },
    workHistory: [],
    __v: 0,
  });

  useEffect(() => {
    const employeeId = "66a201472ab048390c138c35";

    getRequest(`${GET_EMPLOYEE_DETAILS_BY_ID}/${employeeId}`)
      .then((response) => {
        setDetails(response.data);
        setSelectedValue(response.data.gender.toLowerCase());
      })
      .catch((error) => {
        console.error(
          "There was an error fetching the employee details!",
          error
        );
      });
  }, []);

  const [selectedValue, setSelectedValue] = useState("");

  const getIconStyle = (value: any) => ({
    color: selectedValue === value ? "#0093ff" : "inherit",
    transition: "color 0.3s ease",
  });

  const getLabelStyle = (value: any) => ({
    color: selectedValue === value ? "#0093ff" : "inherit",
    transition: "color 0.3s ease",
  });

  const handleEditClick = (section: Section) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [section]: !prevState[section],
    }));
  };

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setDetails((prevDetails) => ({
      ...prevDetails,
      [name]: value,
    }));
  };

  const handleSave = (section: any) => {
    setIsEditing((prevState) => ({
      ...prevState,
      [section]: false,
    }));
  };

  return (
    <>
      <Grid
        container
        spacing={2}
        sx={{
          display: "flex",
          width: "60%",
          justifyContent: "center",
          alignItems: "center",
          textAlign: "center",
          margin: " auto",
        }}
      >
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  PERSONAL INFO
                </Typography>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleEditClick("personalInfo")}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              {isEditing.personalInfo ? (
                <>
                  <Grid item xs={6} md={4}>
                    <TextField
                      label="Name"
                      variant="standard"
                      name="name"
                      value={details.firstName}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={6} md={4}>
                    <TextField
                      label="Date of Birth"
                      variant="standard"
                      name="dateOfBirth"
                      value={details.dateOfBirth}
                      onChange={handleChange}
                      fullWidth
                    />
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
                            checkedIcon={
                              <FemaleIcon style={{ color: "#0093ff" }} />
                            }
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
                            checkedIcon={
                              <MaleIcon style={{ color: "#0093ff" }} />
                            }
                          />
                        }
                        label="Male"
                        style={getLabelStyle("male")}
                      />

                      <FormControlLabel
                        value="other"
                        control={
                          <Radio
                            icon={
                              <TransgenderIcon style={getIconStyle("other")} />
                            }
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

                  <Grid item xs={6} md={4}>
                    <TextField
                      label="Blood Group"
                      variant="standard"
                      name="bloodGroup"
                      value={details.bloodGroup}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <TextField
                      label="Marital Status"
                      variant="standard"
                      name="maritalStatus"
                      value={details.maritalStatus}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave("personalInfo")}
                    >
                      Save
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" fontWeight="bold">
                      Name
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {`${details.firstName}  ${details.lastName}`}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" fontWeight="bold">
                      Date of Birth
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.dateOfBirth}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" fontWeight="bold">
                      Gender
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.gender}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" fontWeight="bold">
                      Blood Group
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.bloodGroup}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={4}>
                    <Typography variant="body2" fontWeight="bold">
                      Marital Status
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.maritalStatus}
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  CONTACT INFO
                </Typography>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleEditClick("contactInfo")}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              {isEditing.contactInfo ? (
                <>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Official Email ID"
                      variant="standard"
                      name="officialEmail"
                      value={details.email}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Personal Email ID"
                      variant="standard"
                      name="personalEmail"
                      value={details.email}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Phone Number"
                      variant="standard"
                      name="phoneNumber"
                      value={details.phoneNumber}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Alternate Phone Number"
                      variant="standard"
                      name="alternatePhoneNumber"
                      value={details.phoneNumber}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave("contactInfo")}
                    >
                      Save
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Official Email ID
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Personal Email ID
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.email}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Phone Number
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.phoneNumber}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Alternate Phone Number
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.phoneNumber}
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  ADDRESSES
                </Typography>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleEditClick("addresses")}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              {isEditing.addresses ? (
                <>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Current Address"
                      variant="standard"
                      name="currentAddress"
                      value={details.addresses.currentAddress}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Permanent Address"
                      variant="standard"
                      name="permanentAddress"
                      value={details.addresses.permanentAddress}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="House Type"
                      variant="standard"
                      name="houseType"
                      value={details.addresses.houseType}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Staying at Current Residence Since"
                      variant="standard"
                      name="currentResidenceSince"
                      value={details.addresses.currentResidenceSince}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Living in Current City Since"
                      variant="standard"
                      name="currentCitySince"
                      value={details.addresses.currentCitySince}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave("addresses")}
                    >
                      Save
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Current Address
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.addresses.currentAddress}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Permanent Address
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.addresses.permanentAddress}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      House Type
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.addresses.houseType}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Staying at Current Residence Since
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.addresses.currentResidenceSince}
                    </Typography>
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Living in Current City Since
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.addresses.currentCitySince}
                    </Typography>
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>

        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid
                item
                xs={12}
                display="flex"
                justifyContent="space-between"
                alignItems="center"
              >
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  SOCIAL PROFILE
                </Typography>
                <IconButton
                  aria-label="edit"
                  onClick={() => handleEditClick("socialProfile")}
                >
                  <EditIcon />
                </IconButton>
              </Grid>
              <Grid item xs={12}>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              {isEditing.socialProfile ? (
                <>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="LinkedIn"
                      variant="standard"
                      name="linkedin"
                      value={details.socialProfile.linkedin}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Facebook"
                      variant="standard"
                      name="facebook"
                      value={details.socialProfile.facebook}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={6} md={6}>
                    <TextField
                      label="Twitter"
                      variant="standard"
                      name="twitter"
                      value={details.socialProfile.twitter}
                      onChange={handleChange}
                      fullWidth
                    />
                  </Grid>
                  <Grid item xs={12} display="flex" justifyContent="flex-end">
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => handleSave("socialProfile")}
                    >
                      Save
                    </Button>
                  </Grid>
                </>
              ) : (
                <>
                  <Grid container spacing={2}>
                    <Grid item xs={12}>
                      <LinkedInIcon
                        sx={{
                          color: "#0080ff",
                          cursor: "pointer",
                          "&:hover": { color: "#0056b3" },
                        }}
                      />

                      <FacebookRoundedIcon
                        sx={{
                          color: "#0040ff",
                          cursor: "pointer",
                          "&:hover": { color: "#002080" },
                        }}
                      />
                      <TwitterIcon
                        sx={{
                          color: "#00bfff",
                          cursor: "pointer",
                          "&:hover": { color: "#0080ff" },
                        }}
                      />
                    </Grid>
                  </Grid>
                </>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
