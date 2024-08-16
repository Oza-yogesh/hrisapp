import React, { useState } from "react";
import {
  Grid,
  Box,
  List,
  ListItemText,
  Button,
  ListItemButton,
  Typography,
} from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { addEmployee, removeEmployeeByName } from "./redux/slices/sidebarslice";
import { AppDispatch, RootState } from "./redux/store/store";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import PanoramaFishEyeSharpIcon from "@mui/icons-material/PanoramaFishEyeSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import Swal from "sweetalert2";

interface SidebarProps {
  setname: (name: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ setname }) => {
  const items = useSelector((state: RootState) => state.sidebar.items);
  const dispatch = useDispatch<AppDispatch>();

  const [showbutton, setShowbutton] = useState<boolean>(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const toggleData = () => {
    setShowbutton(!showbutton);
  };

  const handleAddEmployee = () => {
    const newEmployee = {
      name: `New Employee ${items.length + 1}`,
      employees: 0,
    };
    dispatch(addEmployee(newEmployee));
  };

  const handleContractorSalary = () => {
    const newContractorSalary = {
      name: `New Contractor ${items.length + 1}`,
      employees: 0,
    };
    dispatch(addEmployee(newContractorSalary));
  };

  const handleDelete = (name: string) => {
    Swal.fire({
      title: "Delete Confirmation",
      text: `Are you sure you want to delete?`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeEmployeeByName(name));
        Swal.fire("Deleted!", "Record successfully deleted.", "success");
      }
    });
  };

  return (
    <Grid style={{ width: 250 }}>
      <List sx={{ fontSize: ".6rem" }}>
        {items.map((employee, index) => (
          <Box
            key={index}
            sx={{
              height: "auto",
              width: "32vh",
              boxShadow: 3,
              borderRadius: "4px",
              margin: "6px",
              borderLeft: "4px solid lightgray",
              position: "relative",
              "&:hover .delete-icon": {
                display: "block",
              },
            }}
            onMouseEnter={() => setHoveredItem(index)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <ListItemButton onClick={() => setname(employee.name)}>
              <ListItemText
                sx={{ ".MuiListItemText-primary": { fontSize: ".8rem" } }}
                primary={employee.name}
                secondary={`Employees: ${employee.employees}`}
              />
              <DeleteIcon
                className="delete-icon"
                sx={{
                  color: "gray",
                  display: hoveredItem === index ? "block" : "none",
                  position: "absolute",
                  right: 8,
                  width: "15px",
                  height: "15px",
                }}
                onClick={() => handleDelete(employee.name)}
              />
            </ListItemButton>
          </Box>
        ))}
      </List>

      <Button sx={{ fontSize: ".8rem" }} onClick={toggleData}>
        <ControlPointIcon />
        Create new Structure
      </Button>
      {showbutton && (
        <Typography
          component="div"
          sx={{ fontSize: "0.7rem", marginTop: "16px" }}
        >
          <Button
            sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
            onClick={handleAddEmployee}
          >
            <PanoramaFishEyeSharpIcon /> Regular Structure
          </Button>
          <Button
            sx={{ fontSize: "0.7rem", fontWeight: "bold" }}
            onClick={handleContractorSalary}
          >
            <PanoramaFishEyeSharpIcon /> Contractor Structure
          </Button>
        </Typography>
      )}
    </Grid>
  );
};

export default Sidebar;
