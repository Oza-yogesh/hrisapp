import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  Divider,
  Grid,
  Paper,
  Typography,
  TextField,
  Button,
  IconButton,
  CircularProgress,
  Alert,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableCell,
  TableBody,
  FormControl,
  Select,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";

const _id = "66a201472ab048390c138c35";

interface ProfileData {
  employeeId: string;
  dateOfJoining: string;
  probationPeriod: string;
  employeeType: string;
  workLocation: string;
  probationStatus: string;
  workExperience: string;
  designationId: string;
  jobTitle: string;
  departmentId: string;
  subDepartmentId: string;
  resignationDate: string;
  lastWorkingDay: string;
  resignationStatus: string;
  noticePeriod: string;
}

const initialData: ProfileData = {
  employeeId: "",
  dateOfJoining: "",
  probationPeriod: "",
  employeeType: "",
  workLocation: "",
  probationStatus: "",
  workExperience: "",
  designationId: "",
  jobTitle: "",
  departmentId: "",
  subDepartmentId: "",
  resignationDate: "",
  lastWorkingDay: "",
  resignationStatus: "",
  noticePeriod: "",
};

const styles = {
  container: { display: "flex", justifyContent: "center", alignItems: "center", marginTop: "20px" },
  paper: { padding: "20px", textAlign: "initial" },
  sectionHeader: { textTransform: "uppercase", color: "#936c6c", fontWeight: "bold" },
  divider: { backgroundColor: "#424242" },
  buttonGroup: { display: "flex", justifyContent: "flex-end" },
};

export default function WorkProfile() {
  const [isEditing, setIsEditing] = useState({ basic: false, work: false, resignation: false });
  const [profileData, setProfileData] = useState<ProfileData>(initialData);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const apiUrl = `http://localhost:4000/api/workprofile/${_id}`;

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(apiUrl);
        const profileData = response.data;
        if (profileData) {
          setProfileData(profileData);
        } else {
          setError("Profile data is missing.");
        }
        setError(null);
      } catch (err: any) {
        setError("Failed to fetch data. Please try again later.");
        console.error("Error fetching data:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [apiUrl]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | { name?: string; value: unknown }>
  ) => {
    const { name, value } = e.target;
    if (name) {
      setProfileData((prevData) => ({ ...prevData, [name]: value }));
    }
  };

  const handleSave = async (section: keyof typeof isEditing) => {
    setIsEditing((prevState) => ({ ...prevState, [section]: false }));
    const dataToSave = { ...profileData };

    try {
      const response = await axios.put(apiUrl, dataToSave);
      if (response.status === 200) {
        console.log("Data saved successfully", response.data);
      } else {
        console.error("Error saving data:", response);
      }
    } catch (err: any) {
      console.error("Error saving data:", err);
      setError("Failed to save data. Please try again later.");
    }
  };

  
  const renderField = (
    section: keyof typeof isEditing,
    name: keyof typeof initialData,
    label: string
  ) => (
    <Grid item xs={6} md={4}>
      <Typography variant="body2" fontWeight="bold">
        {label}
      </Typography>
      {isEditing[section] ? (
        name === "dateOfJoining" || name === "resignationDate" || name === "lastWorkingDay" ? (
          <TextField
            name={name}
            type="date"
            value={profileData[name] || ""}
            onChange={handleChange}
            sx={{ width: "50%" }}
            variant="standard"
            InputLabelProps={{ shrink: true }}
          />
        ) : name === "employeeType" || name === "probationStatus" || name === "resignationStatus" ? (
          <FormControl sx={{ width: "50%" }} variant="standard">
            <Select
              name={name}
              value={profileData[name] || ""}
              onChange={(e) => handleChange(e as React.ChangeEvent<{ value: string }>)}
            >
              {name === "employeeType" && [
                <MenuItem key="full-time" value="Full Time">
                  Full Time
                </MenuItem>,
                <MenuItem key="part-time" value="Part Time">
                  Part Time
                </MenuItem>,
                <MenuItem key="contract" value="Contract">
                  Contract
                </MenuItem>,
              ]}
              {name === "probationStatus" && [
                <MenuItem key="confirmed" value="Confirmed">
                  Confirmed
                </MenuItem>,
                <MenuItem key="probation" value="Probation">
                  Probation
                </MenuItem>,
              ]}
              {name === "resignationStatus" && [
                <MenuItem key="pending" value="Pending">
                  Pending
                </MenuItem>,
                <MenuItem key="approved" value="Approved">
                  Approved
                </MenuItem>,
                <MenuItem key="rejected" value="Rejected">
                  Rejected
                </MenuItem>,
              ]}
            </Select>
          </FormControl>
        ) : (
          <TextField
            name={name}
            value={profileData[name] || ""}
            onChange={handleChange}
            sx={{ width: "50%" }}
            variant="standard"
          />
        )
      ) : (
        <Typography variant="body2" color="#808080">
          {profileData[name] || "N/A"}
        </Typography>
      )}
    </Grid>
  );

  const renderSaveButtons = (section: keyof typeof isEditing) => (
    <Grid item xs={12} sx={styles.buttonGroup}>
      <Button
        variant="contained"
        color="primary"
        onClick={() => handleSave(section)}
        sx={{ marginRight: "10px" }}
      >
        Save
      </Button>
      <Button
        variant="outlined"
        color="secondary"
        onClick={() =>
          setIsEditing((prevState) => ({ ...prevState, [section]: false }))
        }
      >
        Cancel
      </Button>
    </Grid>
  );

  if (loading) {
    return <CircularProgress />;
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <Grid container spacing={2} sx={styles.container}>
      {/* BASIC INFO */}
      <Grid item xs={12}>
        <Paper elevation={3} sx={styles.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1" sx={styles.sectionHeader}>
                Basic Info
              </Typography>
              <IconButton
                onClick={() =>
                  setIsEditing((prevState) => ({ ...prevState, basic: !prevState.basic }))
                }
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </Grid>
            <Divider variant="fullWidth" sx={styles.divider} />
            {renderField("basic", "employeeId", "Employee ID")}
            {renderField("basic", "dateOfJoining", "Date Of Joining")}
            {renderField("basic", "probationPeriod", "Probation Period")}
            {renderField("basic", "employeeType", "Employee Type")}
            {renderField("basic", "workLocation", "Work Location")}
            {renderField("basic", "probationStatus", "Probation Status")}
            {renderField("basic", "workExperience", "Work Experience")}
            {isEditing.basic && renderSaveButtons("basic")}
          </Grid>
        </Paper>
      </Grid>

      {/* WORK INFO */}
      <Grid item xs={12}>
        <Paper elevation={3} sx={styles.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1" sx={styles.sectionHeader}>
                Work Info
              </Typography>
              <IconButton
                onClick={() =>
                  setIsEditing((prevState) => ({ ...prevState, work: !prevState.work }))
                }
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </Grid>
            <Divider variant="fullWidth" sx={styles.divider} />
            {renderField("work", "designationId", "Designation ID")}
            {renderField("work", "jobTitle", "Job Title")}
            {renderField("work", "departmentId", "Department ID")}
            {renderField("work", "subDepartmentId", "Sub-Department ID")}
            {isEditing.work && renderSaveButtons("work")}
          </Grid>
        </Paper>
      </Grid>
                {/* work History */}
                <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  work history
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
               <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <TableCell>Department</TableCell>
            <TableCell align="right">Designation</TableCell>
            <TableCell align="right">From</TableCell>
            <TableCell align="right">To</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
         
        </TableBody>
      </Table>
    </TableContainer>
            </Grid>
          </Paper>
        </Grid>
      {/* RESIGNATION INFO */}
      <Grid item xs={12}>
        <Paper elevation={3} sx={styles.paper}>
          <Grid container spacing={2}>
            <Grid item xs={12} display="flex" justifyContent="space-between" alignItems="center">
              <Typography variant="body1" sx={styles.sectionHeader}>
                Resignation Info
              </Typography>
              <IconButton
                onClick={() =>
                  setIsEditing((prevState) => ({ ...prevState, resignation: !prevState.resignation }))
                }
                aria-label="edit"
              >
                <EditIcon />
              </IconButton>
            </Grid>
            <Divider variant="fullWidth" sx={styles.divider} />
            {renderField("resignation", "resignationDate", "Resignation Date")}
            {renderField("resignation", "lastWorkingDay", "Last Working Day")}
            {renderField("resignation", "resignationStatus", "Resignation Status")}
            {renderField("resignation", "noticePeriod", "Notice Period")}
            {isEditing.resignation && renderSaveButtons("resignation")}
          </Grid>
        </Paper>
      </Grid>
    </Grid>
  );
}
