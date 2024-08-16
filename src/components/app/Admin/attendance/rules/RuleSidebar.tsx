import {
  Grid,
  List,
  ListItem,
  Button,
  ListItemButton,
  ListItemText,
  Box,
} from "@mui/material";
import ControlPointIcon from "@mui/icons-material/ControlPoint";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  AppDispatch,
  RootState,
} from "../../../payroll/SetUpAdmin/CreateStructure/redux/store/store";
import { addRules } from "../../../payroll/SetUpAdmin/CreateStructure/redux/slices/rulesslice";

const RuleSidebar: React.FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  const rules = useSelector((state: RootState) => state.rules.rules);

  const handleAddRules = () => {
    const newRule = {
      rule: `New Rule ${rules.length + 1}`,
      employees: 0,
    };
    dispatch(addRules(newRule));
  };

  return (
    <>
      <Grid sx={{ width: 250 }}>
        <List sx={{ fontSize: ".6rem" }}>
          {rules.map((item, index) => (
            <Box
              key={index}
              sx={{
                height: "auto",
                width: "30vh",
                boxShadow: 3,
                borderRadius: "4px",
                margin: "6px",
                padding: "3px",
                borderLeft: "4px solid lightgray",
                position: "relative",
                "&:hover .delete-icon": {
                  display: "block",
                },
              }}
            >
              <ListItemText
                sx={{ ".MuiListItemText-primary": { fontSize: ".8rem" } }}
                primary={item.rule}
                secondary={`Employees: ${item.employees}`}
              />
            </Box>
          ))}
        </List>
        <Button
          sx={{
            margin: "6px",
            fontSize: ".8rem",
            cursor: "pointer",
            boxShadow: 1,
          }}
          onClick={handleAddRules}
        >
          <ControlPointIcon />
          Create new Rule
        </Button>
      </Grid>
    </>
  );
};

export default RuleSidebar;
