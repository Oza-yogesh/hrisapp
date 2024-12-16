import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import CompanyAddress from "./CompanyAddress";
import CompanyPolicies from "./CompanyPolicies";
import Overview from "./Overview";
import TabPanel from "./TabPanel";
import CompanyDepartment from "./CompanyDepartment";
import Designations from "./Designations";

export default function CompanyProfile() {
  const [value, setValue] = useState(0);

  const handleTabs = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <>
      <AppBar position="relative" sx={{ mt: 2 }}>
        <Tabs textColor="inherit" value={value} onChange={handleTabs} centered>
          <Tab label="Overview" sx={{ color: "white" }} />
          <Tab label="Address" sx={{ color: "white" }} />
          <Tab label="Departments" sx={{ color: "white" }} />
          <Tab label="Designations" sx={{ color: "white" }} />
          <Tab label="Policies" sx={{ color: "white" }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Overview />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <CompanyAddress />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <CompanyDepartment />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <Designations />
      </TabPanel>
      <TabPanel value={value} index={4}>
        <CompanyPolicies />
      </TabPanel>
    </>
  );
}
