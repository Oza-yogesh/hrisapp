import React, { useEffect, useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Button,
  Paper,
  Divider,
  Box,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import { useFormik, FormikHelpers } from "formik";
import * as Yup from "yup";
import CustomTextField from "../common/CustomTextField";
import ActionButtons from "../common/ActionButton";
import { getRequest, postRequest } from "../../../api/Api";
import { GET_DESINAGATION } from "../../../api/Server";
import ProfilePhotoUpload from "../my_profile/ProfilePhotoUpload";

interface Designation {
  designationTitle: string;
  employees?: number; // Add 'employees' with optional type for new entries
}

const Designations: React.FC = () => {
  const [isEdit, setEdit] = useState<boolean>(false);
  const [designationTitle, setdesignationTitle] = useState<Designation[]>([]);

  const toggleData = () => {
    setEdit((prev) => !prev);
  };

  const handleAddDesignation = (): void => {
    setdesignationTitle((prev) => [...prev, { designationTitle: "" }]);
  };

  const handleAddBtn = () => {
    setEdit(true);
    handleAddDesignation();
  };

  useEffect(() => {
    const fetchDesignations = async () => {
      try {
        const response = await getRequest(GET_DESINAGATION);
        setdesignationTitle(response.data);
      } catch (error) {
        console.error("Failed to fetch designations:", error);
      }
    };
    fetchDesignations();
  }, []);

  const formik = useFormik({
    initialValues: {
      designationTitle: "",
    },
    validationSchema: Yup.object({
      designationTitle: Yup.string()
        .required("Designation title is required")
        .min(3, "Must be at least 3 characters"),
    }),
    onSubmit: async (
      values: { designationTitle: string },
      { resetForm }: FormikHelpers<{ designationTitle: string }>
    ) => {
      await postRequest("/api/private/designation", {
        designationTitle: values.designationTitle,
      });
      resetForm();
    },
  });

  const handleDesignationChange = (index: number, value: string): void => {
    setdesignationTitle((prev) => {
      const updated = [...prev];
      updated[index] = { ...updated[index], designationTitle: value };
      return updated;
    });
  };

  const saveDesignationsToBackend = async () => {
    try {
      await postRequest("/api/private/designation", designationTitle);
    } catch (error) {
      console.error("Failed to save designations:", error);
    }
  };

  const handleSave = async () => {
    saveDesignationsToBackend();
    formik.handleSubmit();
  };

  return (
    <>
      <div style={{ position: "absolute", top: "100px", left: "200px" }}>
        <ProfilePhotoUpload />
      </div>
      <Paper
        sx={{
          padding: "20px",
          marginTop: "20px",
          width: "700px",
          marginLeft: "30vh",
        }}
        elevation={3}
      >
        {/* Title */}
        <Typography
          variant="h6"
          fontWeight="bold"
          fontSize="14px"
          color="#936c6c"
          gutterBottom
        >
          DESIGNATIONS
        </Typography>
        <Divider
          variant="fullWidth"
          sx={{ backgroundColor: "#4E4B4B", my: 2 }}
        />

        {/* Table Header */}
        <Grid
          container
          spacing={2}
          sx={{
            textAlign: "left",
            fontWeight: "bold",
            fontSize: "0.8rem",
            p: 1,
          }}
        >
          <Grid item xs={6}>
            Designation
          </Grid>
          <Grid item xs={6}>
            Employees (Auto calculated)
          </Grid>
        </Grid>
        <Divider
          variant="fullWidth"
          sx={{ backgroundColor: "#4E4B4B", my: 2 }}
        />

        {/* Display data from backend first */}
        {designationTitle.map((designation, index) => (
          <Box
            key={index}
            sx={{ display: "flex", justifyContent: "space-between", p: 1 }}
          >
            <Typography variant="body1">
              {designation.designationTitle}
            </Typography>
            <Typography variant="body1">{designation.employees}</Typography>
            <Divider
              variant="fullWidth"
              sx={{ backgroundColor: "#4E4B4B", my: 2 }}
            />
          </Box>
        ))}

        {/* Editable fields */}
        {isEdit && (
          <Grid sx={{ marginTop: 2, p: 1 }}>
            {designationTitle.map((designation, index) => (
              <Box sx={{ marginTop: 2 }} key={index}>
                <CustomTextField
                  variant="standard"
                  label="Designation Title"
                  name={`designationTitle[${index}]`}
                  value={designation.designationTitle}
                  onChange={(e) =>
                    handleDesignationChange(index, e.target.value)
                  }
                  error={
                    formik.touched.designationTitle &&
                    Boolean(formik.errors.designationTitle)
                  }
                  helperText={
                    formik.touched.designationTitle &&
                    formik.errors.designationTitle
                  }
                />
              </Box>
            ))}
            <Grid item>
              <ActionButtons
                onCancel={toggleData}
                onSave={handleSave}
                showButtons={true}
              />
            </Grid>
          </Grid>
        )}

        {/* Add New Designation */}
        <Divider
          variant="fullWidth"
          sx={{ backgroundColor: "#4E4B4B", my: 2 }}
        />

        <Button
          type="button"
          variant="text"
          startIcon={<AddCircleOutlineIcon />}
          sx={{
            color: "#2094FF",
            fontSize: "0.8rem",
            fontWeight: "bold",
            textTransform: "none",
          }}
          onClick={handleAddBtn}
        >
          Add
        </Button>
      </Paper>
    </>
  );
};

export default Designations;
