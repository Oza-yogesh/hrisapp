import {
  Divider,
  Grid,
  IconButton,
  Paper,
  Typography,
  Button,
} from "@mui/material";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import { useFormik } from "formik";
import * as Yup from "yup";
import CustomTextField from "../common/CustomTextField";
import ActionButtons from "../common/ActionButton";
import { Box, margin } from "@mui/system";

interface AddressFormProps {
  title: string;
}

const initialValues = {
  companyName: "NWS Soft Consulting Pvt Ltd",
  addressLine1: "503 & 504 Orville Business Port",
  addressLine2: "VIMAN NAGAR NEAR AIR FORCE",
  city: "PUNE",
  state: "Maharashtra",
  country: "INDIA",
  postalCode: "411014",
};

const validationSchema = Yup.object({
  companyName: Yup.string().required("Company Name is required"),
  addressLine1: Yup.string().required("Address Line 1 is required"),
  city: Yup.string().required("City is required"),
  state: Yup.string().required("State is required"),
  country: Yup.string().required("Country is required"),
  postalCode: Yup.string()
    .matches(/^\d{6}$/, "Must be a valid 6-digit postal code")
    .required("Postal Code is required"),
});

export default function AddressForm({ title }: AddressFormProps) {
  const [isEditing, setIsEditing] = useState(false);

  const toggleEdit = () => {
    setIsEditing(!isEditing);
  };

  const handleSaveClick = () => {
    formik.handleSubmit(); // Trigger Formik's submit function
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: (values) => {
      console.log("Updated Address:", values);
      setIsEditing(false); // Exit edit mode after saving
    },
  });

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
          <Paper
            elevation={3}
            sx={{ padding: "20px", textAlign: "initial", marginLeft: 2 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#936c6c"
                  fontWeight="bold"
                >
                  {title}
                  <IconButton onClick={toggleEdit}>
                    <EditIcon fontSize="small" />
                  </IconButton>
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>

              {isEditing ? (
                <form onSubmit={formik.handleSubmit} style={{ width: "100%" }}>
                  <Grid container spacing={2} marginLeft={2}>
                    <Grid item xs={12}>
                      <CustomTextField
                        label="Company Name"
                        name="companyName"
                        value={formik.values.companyName}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.companyName &&
                          Boolean(formik.errors.companyName)
                        }
                        helperText={
                          formik.touched.companyName &&
                          formik.errors.companyName
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTextField
                        label="Address Line 1"
                        name="addressLine1"
                        value={formik.values.addressLine1}
                        onChange={formik.handleChange}
                        error={
                          formik.touched.addressLine1 &&
                          Boolean(formik.errors.addressLine1)
                        }
                        helperText={
                          formik.touched.addressLine1 &&
                          formik.errors.addressLine1
                        }
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <CustomTextField
                        label="Address Line 2"
                        name="addressLine2"
                        value={formik.values.addressLine2}
                        onChange={formik.handleChange}
                      />
                    </Grid>
                    <Grid item xs={12}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          mt: 2,
                        }}
                      >
                        <CustomTextField
                          label="City"
                          name="city"
                          value={formik.values.city}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.city && Boolean(formik.errors.city)
                          }
                          helperText={formik.touched.city && formik.errors.city}
                        />

                        <CustomTextField
                          label="State"
                          name="state"
                          value={formik.values.state}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.state && Boolean(formik.errors.state)
                          }
                          helperText={
                            formik.touched.state && formik.errors.state
                          }
                        />

                        <CustomTextField
                          label="Country"
                          name="country"
                          value={formik.values.country}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.country &&
                            Boolean(formik.errors.country)
                          }
                          helperText={
                            formik.touched.country && formik.errors.country
                          }
                        />

                        <CustomTextField
                          label="Postal Code"
                          name="postalCode"
                          value={formik.values.postalCode}
                          onChange={formik.handleChange}
                          error={
                            formik.touched.postalCode &&
                            Boolean(formik.errors.postalCode)
                          }
                          helperText={
                            formik.touched.postalCode &&
                            formik.errors.postalCode
                          }
                        />
                      </Box>
                    </Grid>
                    <ActionButtons
                      onSave={handleSaveClick}
                      onCancel={toggleEdit}
                      showButtons={true}
                    />
                  </Grid>
                </form>
              ) : (
                <Grid item xs={12}>
                  <Typography variant="body1" fontWeight="bold">
                    {formik.values.companyName}
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {formik.values.addressLine1}
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {formik.values.addressLine2}
                  </Typography>
                  <Typography variant="body2" color="#808080">
                    {formik.values.city}, {formik.values.state},{" "}
                    {formik.values.country} - {formik.values.postalCode}
                  </Typography>
                </Grid>
              )}
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
