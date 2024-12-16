import React, { useState, useEffect } from "react";
import {
  Divider,
  Grid,
  Paper,
  Typography,
  Box,
  IconButton,
  Button,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import { getRequest } from "../../../api/Api";
import { GET_COMPANY_DATA } from "../../../api/Server";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextField from "../common/CustomTextField";
import ActionButtons from "../common/ActionButton";
import SocialProfile from "../common/SocialProfile";

// Define the interface for company data
interface CompanyData {
  registeredCompanyName: string;
  brandName: string;
  companyOfficialEmail: string;
  companyOfficialContact: string;
  domainName: string;
  industryType: string;
}

const Overview = () => {
  const [details, setDetails] = useState<CompanyData>({
    registeredCompanyName: "",
    brandName: "",
    companyOfficialEmail: "",
    companyOfficialContact: "",
    domainName: "",
    industryType: "",
  });

  const [isEditing, setIsEditing] = useState(false);

  // Fetch the data when the component mounts
  useEffect(() => {
    getRequest(GET_COMPANY_DATA)
      .then((response) => {
        setDetails(response.data[0]); // Assuming API returns an array
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, []);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };
  const handleSaveClick = () => {
    formik.handleSubmit(); // Trigger Formik's submit function
  };

  // Formik with Yup validation
  const formik = useFormik({
    initialValues: details,
    enableReinitialize: true, // To populate data when fetched
    validationSchema: Yup.object({
      registeredCompanyName: Yup.string()
        .required("Registered Company Name is required")
        .max(100, "Must be 100 characters or less"),
      brandName: Yup.string().required("Brand Name is required"),
      companyOfficialEmail: Yup.string()
        .email("Invalid email address")
        .required("Company Official Email is required"),
      companyOfficialContact: Yup.string()
        .matches(/^\d{10}$/, "Must be a valid 10-digit phone number")
        .required("Company Official Contact is required"),
      domainName: Yup.string().required("Domain Name is required"),
      industryType: Yup.string().required("Industry Type is required"),
    }),
    onSubmit: (values) => {
      console.log("Updated values:", values);
      setDetails(values);
      setIsEditing(false); // Exit edit mode after saving
    },
  });

  return (
    <Box sx={{ margin: 5, marginLeft: 30, padding: 2 }}>
      <Grid container spacing={3}>
        {/* Company Details */}
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "10px", textAlign: "initial" }}>
            <Box sx={{ paddingLeft: 1 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  borderBottom: "1px solid #D3D3D3",
                  marginBottom: 2,
                }}
              >
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="800"
                  sx={{ fontSize: "0.9rem" }}
                >
                  Overview
                </Typography>
                <IconButton onClick={toggleEdit}>
                  <EditIcon fontSize="small" />
                </IconButton>
              </Box>

              {isEditing ? (
                <form onSubmit={formik.handleSubmit}>
                  <Box
                    sx={{ display: "flex", flexDirection: "column", gap: 2 }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        mt: 2,
                      }}
                    >
                      <CustomTextField
                        label="Registered Company Name"
                        name="registeredCompanyName"
                        value={formik.values.registeredCompanyName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.registeredCompanyName &&
                          Boolean(formik.errors.registeredCompanyName)
                        }
                        helperText={
                          formik.touched.registeredCompanyName &&
                          formik.errors.registeredCompanyName
                        }
                      />
                      <CustomTextField
                        label="Brand Name"
                        name="brandName"
                        value={formik.values.brandName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.brandName &&
                          Boolean(formik.errors.brandName)
                        }
                        helperText={
                          formik.touched.brandName && formik.errors.brandName
                        }
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        mt: 2,
                      }}
                    >
                      <CustomTextField
                        label="Company Official Email"
                        name="companyOfficialEmail"
                        value={formik.values.companyOfficialEmail}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.companyOfficialEmail &&
                          Boolean(formik.errors.companyOfficialEmail)
                        }
                        helperText={
                          formik.touched.companyOfficialEmail &&
                          formik.errors.companyOfficialEmail
                        }
                      />
                      <CustomTextField
                        label="Company Official Contact"
                        name="companyOfficialContact"
                        value={formik.values.companyOfficialContact}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.companyOfficialContact &&
                          Boolean(formik.errors.companyOfficialContact)
                        }
                        helperText={
                          formik.touched.companyOfficialContact &&
                          formik.errors.companyOfficialContact
                        }
                      />
                    </Box>
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                        mt: 2,
                      }}
                    >
                      <CustomTextField
                        label="Domain Name"
                        name="domainName"
                        value={formik.values.domainName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.domainName &&
                          Boolean(formik.errors.domainName)
                        }
                        helperText={
                          formik.touched.domainName && formik.errors.domainName
                        }
                      />
                      <CustomTextField
                        label="Domain Name"
                        name="domainName"
                        value={formik.values.domainName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.domainName &&
                          Boolean(formik.errors.domainName)
                        }
                        helperText={
                          formik.touched.domainName && formik.errors.domainName
                        }
                      />
                    </Box>
                    <FormControl>
                      <InputLabel id="dropdown-label">Industry Type</InputLabel>
                      <Select
                        labelId="dropdown-label"
                        id="dropdown"
                        variant="standard"
                        name="industryType"
                        value={formik.values.industryType}
                        onChange={formik.handleChange}
                        label="Industry Type"
                      >
                        <MenuItem value="Automobile">Automobile</MenuItem>
                        <MenuItem value="Telecommunications">
                          Telecommunications
                        </MenuItem>
                        <MenuItem value="Textiles and Garments">
                          Textiles and Garments
                        </MenuItem>
                        <MenuItem value="Pharmaceuticals">
                          Pharmaceuticals
                        </MenuItem>
                        <MenuItem value="Banking and Finance">
                          Banking and Finance
                        </MenuItem>
                        <MenuItem value="Real Estate">Real Estate</MenuItem>
                        <MenuItem value="Tourism">Tourism</MenuItem>
                        <MenuItem value="Agriculture">Agriculture</MenuItem>
                        <MenuItem value="Energy">Energy</MenuItem>
                        <MenuItem value="Healthcare">Healthcare</MenuItem>
                        <MenuItem value="Education">Education</MenuItem>
                        <MenuItem value="Entertainment and Media">
                          Entertainment and Media
                        </MenuItem>
                        <MenuItem value="Fast-Moving Consumer Goods (FMCG)">
                          Fast-Moving Consumer Goods (FMCG)
                        </MenuItem>
                        <MenuItem value="Steel and Manufacturing">
                          Steel and Manufacturing
                        </MenuItem>
                        <MenuItem value="Retail">Retail</MenuItem>
                        <MenuItem value="Space and Aerospace">
                          Space and Aerospace
                        </MenuItem>
                        <MenuItem value="Information Technology (IT)">
                          Information Technology (IT)
                        </MenuItem>
                        <MenuItem value="Others">Others</MenuItem>
                      </Select>
                    </FormControl>

                    <ActionButtons
                      onSave={handleSaveClick}
                      onCancel={toggleEdit}
                      showButtons={true}
                    />
                  </Box>
                </form>
              ) : (
                <Grid container spacing={2}>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Company Official Contact
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.companyOfficialContact}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Brand Name
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.brandName}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Company Official Email
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.companyOfficialEmail}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Company Official Contact
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.companyOfficialContact}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Domain Name
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.domainName}
                    </Typography>
                  </Grid>
                  <Grid item xs={6}>
                    <Typography variant="body2" fontWeight="bold">
                      Industry Type
                    </Typography>
                    <Typography variant="body2" color="#808080">
                      {details.industryType}
                    </Typography>
                  </Grid>
                </Grid>
              )}
            </Box>
          </Paper>
        </Grid>
        <SocialProfile />
      </Grid>
    </Box>
  );
};

export default Overview;
