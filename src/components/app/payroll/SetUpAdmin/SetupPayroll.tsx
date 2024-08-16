import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../company_profile/TabPanel";
import PayrollSetting from "./PayrollSetting";
import AssignStructure from "./AssignStructure";
import Employeedetails from "./CreateStructure/EmployeeDetails";

export default function SetupPayroll() {
  const [value, setValue] = useState(0);

  const handleTabs = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <>
      <AppBar position="relative" sx={{ mt: 2 }}>
        <Tabs textColor="inherit" value={value} onChange={handleTabs} centered>
          <Tab label="Setup Setting" sx={{ color: "white" }} />
          <Tab label="Assign Structure" sx={{ color: "white" }} />
          <Tab label="Create Structure" sx={{ color: "white" }} />s
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PayrollSetting />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AssignStructure />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Employeedetails />
      </TabPanel>
    </>
  );
}
