import React, { useState } from "react";
import {
  Grid,
  Typography,
  TextField,
  Select,
  MenuItem,
  Button,
  IconButton,
  Paper,
  Divider,
} from "@mui/material";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import DeleteIcon from "@mui/icons-material/Delete";
import ActionButtons from "../common/ActionButton";

const CompanyDepartment = () => {
  const [departments, setDepartments] = useState([
    {
      department: "",
      subDepartments: [""], // Array of sub-departments
      departmentHead: "",
      employees: "Auto-calculated",
    },
  ]);

  const addDepartmentRow = () => {
    setDepartments([
      ...departments,
      {
        department: "",
        subDepartments: [""],
        departmentHead: "",
        employees: "Auto-calculated",
      },
    ]);
  };

  const removeDepartmentRow = (index: number) => {
    const updatedDepartments = departments.filter((_, i) => i !== index);
    setDepartments(updatedDepartments);
  };

  const handleFieldChange = (index: number, field: string, value: string) => {
    const updatedDepartments = [...departments];
    updatedDepartments[index][field] = value;
    setDepartments(updatedDepartments);
  };

  const addSubDepartment = (index: number) => {
    const updatedDepartments = [...departments];
    updatedDepartments[index].subDepartments.push(""); // Add an empty sub-department
    setDepartments(updatedDepartments);
  };

  const removeSubDepartment = (deptIndex: number, subIndex: number) => {
    const updatedDepartments = [...departments];
    updatedDepartments[deptIndex].subDepartments = updatedDepartments[
      deptIndex
    ].subDepartments.filter((_, i) => i !== subIndex);
    setDepartments(updatedDepartments);
  };

  const handleSubDepartmentChange = (
    deptIndex: number,
    subIndex: number,
    value: string
  ) => {
    const updatedDepartments = [...departments];
    updatedDepartments[deptIndex].subDepartments[subIndex] = value;
    setDepartments(updatedDepartments);
  };

  const handleSave = () => {
    console.log("Saved Departments:", departments);
    // Save logic here
  };

  const handleCancel = () => {
    setDepartments([
      {
        department: "",
        subDepartments: [""],
        departmentHead: "",
        employees: "",
      },
    ]);
  };

  return (
    <Paper sx={{ padding: "20px", marginTop: "20px" }} elevation={3}>
      <Typography
        variant="h6"
        fontWeight="bold"
        fontSize="14px"
        color="#936c6c"
      >
        DEPARTMENTS
      </Typography>
      <Divider variant="fullWidth" sx={{ backgroundColor: "#4E4B4B" }} />

      {/* Table Header */}
      <Grid
        container
        spacing={2}
        sx={{ textAlign: "left", fontWeight: "bold", fontSize: "0.8rem", p: 2 }}
      >
        <Grid item xs={3}>
          Department
        </Grid>
        <Grid item xs={3}>
          Sub Departments
        </Grid>
        <Grid item xs={3}>
          Department Head
        </Grid>
        <Grid item xs={3}>
          Employees (Auto calculated)
        </Grid>
      </Grid>
      <Divider variant="fullWidth" sx={{ backgroundColor: "#4E4B4B" }} />
      {/* Table Rows */}
      {departments.map((dept, deptIndex) => (
        <Grid
          container
          spacing={2}
          alignItems="center"
          key={deptIndex}
          sx={{ marginBottom: 2 }}
        >
          <Grid item xs={3}>
            <TextField
              fullWidth
              variant="outlined"
              size="small"
              value={dept.department}
              onChange={(e) =>
                handleFieldChange(deptIndex, "department", e.target.value)
              }
            />
          </Grid>
          <Grid item xs={3}>
            {dept.subDepartments.map((subDept, subIndex) => (
              <Grid container alignItems="center" spacing={1} key={subIndex}>
                <Grid item xs={10}>
                  <TextField
                    fullWidth
                    variant="outlined"
                    size="small"
                    value={subDept}
                    sx={{ mt: 5 }}
                    onChange={(e) =>
                      handleSubDepartmentChange(
                        deptIndex,
                        subIndex,
                        e.target.value
                      )
                    }
                  />
                </Grid>
                <Grid item xs={2} sx={{ mt: 5 }}>
                  <IconButton
                    onClick={() => removeSubDepartment(deptIndex, subIndex)}
                    disabled={dept.subDepartments.length === 1}
                  >
                    <DeleteIcon />
                  </IconButton>
                </Grid>
              </Grid>
            ))}

            <Button
              variant="text"
              startIcon={<AddCircleOutlineIcon />}
              onClick={() => addSubDepartment(deptIndex)}
              sx={{ color: "#2094FF", fontSize: ".8rem", fontWeight: "bold" }}
            >
              Add
            </Button>
          </Grid>
          <Grid item xs={3}>
            <Select
              fullWidth
              variant="outlined"
              size="small"
              value={dept.departmentHead}
              sx={{ mt: 0 }}
              onChange={(e) =>
                handleFieldChange(deptIndex, "departmentHead", e.target.value)
              }
            >
              <MenuItem value="">Select</MenuItem>
              <MenuItem value="test1">test1</MenuItem>
              <MenuItem value="test2">test2</MenuItem>
            </Select>
          </Grid>
          <Grid item xs={2}>
            <Typography variant="body2">{dept.employees}</Typography>
          </Grid>
          <Grid item xs={1}>
            <IconButton
              onClick={() => removeDepartmentRow(deptIndex)}
              disabled={departments.length === 1}
            >
              <DeleteIcon />
            </IconButton>
          </Grid>
        </Grid>
      ))}

      {/* Add Row Button */}
      <Divider variant="fullWidth" sx={{ backgroundColor: "#4E4B4B" }} />
      <Button
        variant="text"
        startIcon={<AddCircleOutlineIcon />}
        onClick={addDepartmentRow}
        sx={{ color: "#2094FF", fontSize: ".9rem" }}
      >
        Add
      </Button>
      <Divider variant="fullWidth" sx={{ backgroundColor: "#4E4B4B" }} />
      {/* Action Buttons */}
      <Grid
        container
        justifyContent="flex-end"
        spacing={2}
        sx={{ marginTop: 2 }}
      >
        <Grid item>
          <ActionButtons
            onSave={handleSave}
            onCancel={handleCancel}
            showButtons={true}
          />
        </Grid>
      </Grid>
    </Paper>
  );
};

export default CompanyDepartment;
