import React, { useState } from "react";
import {
  Box,
  Button,
  Divider,
  Grid,
  Paper,
  Typography,
  MenuItem,
  Select,
  TextField,
  FormControl,
  InputLabel,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
import { IEducationDetails } from "../../interfaces/Interfaces";
import { useSelector } from "react-redux";
import { RootState } from "../../../redux/store";
import ActionButtons from "../common/ActionButton";

const validationSchema = Yup.object().shape({
  qualificationType: Yup.string().required("Required"),
  courseName: Yup.string().required("Required"),
  courseType: Yup.string().required("Required"),
  stream: Yup.string().required("Required"),
  courseStartDate: Yup.date().required("Required").nullable(),
  courseEndDate: Yup.date().required("Required").nullable(),
  collegeName: Yup.string().required("Required"),
  universityName: Yup.string().required("Required"),
});

const initialValues = {
  employeeId: "",
  _id:"",
  qualificationType: "",
  courseName: "",
  courseType: "",
  stream: "",
  courseStartDate: "",
  courseEndDate: "",
  collegeName: "",
  universityName: "",
};

const saveEducationDetails = async (data: IEducationDetails) => {
  try {
   
    await axios.post("http://localhost:4000/api/profileEducation/education-details", data);
    console.log("Education details saved successfully"); 
  } catch (error) {
    console.error("Error saving education details:", error);
  }
};

export default function EducationProfile() {
  const [formVisible, setFormVisible] = useState(false);
  const [submittedValues, setSubmittedValues] = useState<
    (typeof initialValues)[]
  >([]);

  const [selectedEntryIndex, setSelectedEntryIndex] = useState<number | null>(
    null
  ); 
  const [selectedEntryData, setSelectedEntryData] = useState<
    typeof initialValues | null
  >(null); 

  const userID = useSelector((state: RootState) => state.user._id);

  const handleToggleForm = () => {
    setFormVisible(!formVisible);
    if (!formVisible) {
      setSelectedEntryData(null);
    }
  };

  const handleSubmit = async (
    values: typeof initialValues,
    { resetForm }: { resetForm: () => void }
  ) => {
    if (selectedEntryIndex !== null) {
     
      const updatedValues = [...submittedValues];
      updatedValues[selectedEntryIndex] = values;
      setSubmittedValues(updatedValues);
      setSelectedEntryIndex(null); 
      setSelectedEntryData(null); 

      try {
        console.log("Front end get details %%%%%%%%%%%% : ", userID);
        const response = await axios.get(`http://localhost:4000/api/profileEducation/get-Education-details/${userID}`);
        console.log("Education details get successfully", response.data);
      } catch (error) {
        console.error("Error updating education details:", error);
      }
  
      try {
        console.log("values._id : **************", userID);
        await axios.put(
          `http://localhost:4000/api/profileEducation/update-Education-details/${userID}`,
          values
        );
        console.log("Education details updated successfully"); 
      } catch (error) {
        console.error("Error updating education details:", error);
      }
    } else {
      setSubmittedValues((prevValues) => [...prevValues, values]);

      saveEducationDetails(values);
    }
    resetForm();
    setFormVisible(false); 
  };

  const handleEdit = (index:number) => {
    const entry = submittedValues[index];
    setSelectedEntryIndex(index);
    setSelectedEntryData(entry); 
  };  
  

  const handleDelete = async (index: number) => {
    const entryToDelete = submittedValues[index]; 
    const updatedValues = [...submittedValues]; 
  
    try {
      console.log("Deleting ID: ", entryToDelete._id);

      const response = await axios.delete(
        `http://localhost:4000/api/profileEducation/delete-Education-details/${entryToDelete._id}`
      ); 
  
      if (response.status === 200) {
        console.log("Entry deleted successfully:", response.data);
  
        updatedValues.splice(index, 1); 
        setSubmittedValues(updatedValues); 
      } else {
        console.error("Failed to delete the entry:", response.data.message);
      }
    } catch (error) {
      console.error("Error deleting entry:", error);
    }
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
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid
              container
              spacing={1}
              display="flex"
              justifyContent="space-evenly"
            >
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#31393F"
                  fontWeight="bold"
                  fontSize={"15px"}
                  lineHeight={"19px"}
                  marginBottom={"10px"}
                >
                  Educational info
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#E4E6E4" }}
                />
              </Grid>
              <Grid container spacing={2} marginTop={"5px"}>
                {submittedValues.map((entry, index) => (
                  <React.Fragment key={index}>
                    
                    <Grid
                      item
                      xs={12}
                      display="flex"
                      justifyContent="space-between"
                    >
                      <Grid item xs={10}>
                        <Typography
                          variant="body2"
                          textTransform="uppercase"
                          fontWeight="bold"
                          marginLeft={"15px"}
                        >
                          {entry.qualificationType}
                          
                        </Typography>
                      </Grid>

                      <Grid item xs={1} display="flex">
                        <EditIcon
                          sx={{ color: "#8099B6", marginLeft: "10px" }}
                          onClick={() => {
                            setSelectedEntryIndex(index); 
                            setSelectedEntryData(entry); 
                            setFormVisible(true);
                            handleEdit(index) 
                          }}
                        />
                        <DeleteIcon
                          sx={{ color: "#8099B6", marginLeft: "10px" }}
                          onClick={() => handleDelete(index)}
                        />
                      </Grid>
                    </Grid>
                  
                    <Grid
                      item
                      xs={12}
                      display="flex"
                      justifyContent="space-evenly"
                    >
                      <Grid container spacing={2}>
                        
                        <Grid
                          item
                          xs={12}
                          md={4}
                          display="flex"
                          justifyContent="center"
                          alignItems="center"
                        >
                          <Box
                            sx={{
                              backgroundColor: (theme) =>
                                theme.palette.mode === "light"
                                  ? theme.palette.grey[100]
                                  : theme.palette.grey[900],
                              width: 140,
                              height: 140,
                              display: "grid",
                              placeItems: "center",
                            }}
                          >
                            <img
                              src="https://nwssoft.kredily.com/static/images/university-campus.svg"
                              alt="School Icon"
                              style={{
                                width: "100px",
                                height: "100px",
                                borderRadius: "8px",
                              }}
                            />
                          </Box>
                        </Grid>

                        
                        <Grid item xs={12} md={8}>
                          <div style={{ marginBottom: "16px" }}>
                            {" "}
                            
                            <Typography>{entry.collegeName}</Typography>
                            <Typography variant="body2" color="#808080">
                              {entry.courseName}
                            </Typography>
                            <Typography>{entry.stream}</Typography>
                            <Typography>{entry.courseType}</Typography>
                            <Typography>
                              {entry.courseStartDate} - {entry.courseEndDate}
                            </Typography>
                            <Typography>{entry.universityName}</Typography>
                          </div>
                        </Grid>
                      </Grid>
                    </Grid>
                  </React.Fragment>
                ))}
              </Grid>
            </Grid>
            <Divider
              variant="fullWidth"
              sx={{
                backgroundColor: "#E4E6E4",
                marginBottom: "5px",
                marginTop: "10px",
              }}
            />
            <Box display="flex" alignItems="center" mb={1}>
             
              {!formVisible && (
                <Button
                  startIcon={<AddCircleOutlineIcon />}
                  sx={{
                    color: "#2094FF", 
                    textTransform: "capitalize",
                    fontWeight: "bold",
                    fontSize: "16px",
                  }}
                  onClick={handleToggleForm} 
                >
                  Add
                </Button>
              )}
            </Box>

            {formVisible && (
              <Box p={3}>
                <Formik
                  initialValues={selectedEntryData || initialValues}
                  validationSchema={validationSchema}
                  onSubmit={(values, { resetForm }) =>
                    handleSubmit(values, { resetForm })
                  }
                >
                  {({ errors, touched, handleChange, handleBlur, values }) => (
                    <Form>
                      <Grid container spacing={2}>
                       
                        <Grid item xs={12} md={6}>
                          <FormControl fullWidth>
                            <InputLabel>Qualification Type</InputLabel>
                            <Select
                              variant="standard"
                              name="qualificationType"
                              value={values.qualificationType}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <MenuItem value="Graduation">Graduation</MenuItem>
                              <MenuItem value="Post-Graduation">
                                Post-Graduation
                              </MenuItem>
                              <MenuItem value="Doctorate">Doctorate</MenuItem>
                              <MenuItem value="Diploma">Diploma</MenuItem>
                              <MenuItem value="Pre University">
                                Pre University
                              </MenuItem>
                              <MenuItem value="Other Education">
                                Other Education
                              </MenuItem>
                              <MenuItem value="Certification">
                                Certification
                              </MenuItem>
                            </Select>
                            {touched.qualificationType &&
                              errors.qualificationType && (
                                <Typography variant="caption" color="error">
                                  {errors.qualificationType}
                                </Typography>
                              )}
                          </FormControl>
                        </Grid>
                     
                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            variant="standard"
                            name="courseName"
                            label="Course Name"
                            value={values.courseName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.courseName && Boolean(errors.courseName)
                            }
                            helperText={touched.courseName && errors.courseName}
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <FormControl fullWidth>
                            <InputLabel>Course Type</InputLabel>
                            <Select
                              fullWidth
                              variant="standard"
                              name="courseType"
                              value={values.courseType}
                              onChange={handleChange}
                              onBlur={handleBlur}
                            >
                              <MenuItem value=" ">Full Time</MenuItem>
                              <MenuItem value="Part Time">Part Time</MenuItem>
                              <MenuItem value="Correspondence">
                                Correspondence
                              </MenuItem>
                              <MenuItem value="Certificate">
                                Certificate
                              </MenuItem>
                            </Select>
                            {touched.courseType && errors.courseType && (
                              <Typography variant="caption" color="error">
                                {errors.courseType}
                              </Typography>
                            )}
                          </FormControl>
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            variant="standard"
                            name="stream"
                            label="Stream"
                            value={values.stream}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={touched.stream && Boolean(errors.stream)}
                            helperText={touched.stream && errors.stream}
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            variant="standard"
                            type="date"
                            name="courseStartDate"
                            value={values.courseStartDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.courseStartDate &&
                              Boolean(errors.courseStartDate)
                            }
                            helperText={
                              touched.courseStartDate && errors.courseStartDate
                            }
                            InputLabelProps={{ shrink: true }}
                            label="Course Start Date"
                          />
                        </Grid>


                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            variant="standard"
                            type="date"
                            name="courseEndDate"
                            value={values.courseEndDate}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.courseEndDate &&
                              Boolean(errors.courseEndDate)
                            }
                            helperText={
                              touched.courseEndDate && errors.courseEndDate
                            }
                            InputLabelProps={{ shrink: true }}
                            label="Course End Date"
                          />
                        </Grid>


                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            variant="standard"
                            name="collegeName"
                            label="College Name"
                            value={values.collegeName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.collegeName && Boolean(errors.collegeName)
                            }
                            helperText={
                              touched.collegeName && errors.collegeName
                            }
                          />
                        </Grid>

                        <Grid item xs={12} md={6}>
                          <TextField
                            fullWidth
                            variant="standard"
                            name="universityName"
                            label="University Name"
                            value={values.universityName}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            error={
                              touched.universityName &&
                              Boolean(errors.universityName)
                            }
                            helperText={
                              touched.universityName && errors.universityName
                            }
                          />
                        </Grid>

                        <Grid
                          item
                          xs={12}
                          display="flex"
                          justifyContent="flex-end"
                  
                          >
                          <ActionButtons
                            onCancel={() => setFormVisible(false)}
                            onSave={() => onsubmit}
                            showButtons={true}
                          />
                        </Grid>
                      </Grid>
                    </Form>
                  )}
                </Formik>
              </Box>
            )}
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
