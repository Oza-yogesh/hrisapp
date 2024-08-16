import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
// import CompanyAddress from "./CompanyAddress";
// import CompanyPolicies from "./CompanyPolicies";
// import Overview from "./Overview";
import TabPanel from "../../company_profile/TabPanel";
import AdminDepartment from "./AdminDepartment";
import AdminAnnouncement from "./AdminAnnouncement";
import AdminDesignation from "./AdminDesignation";
import AdminStatutory from "./AdminStatutory";

export default function AdminCompanyProfile() {
  const [value, setValue] = useState(0);

  const handleTabs = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <>
      <AppBar position="relative" sx={{ mt: 2 }}>
        <Tabs textColor="inherit" value={value} onChange={handleTabs} centered>
          <Tab label="Department" sx={{ color: "white" }} />
          <Tab label="Announcements" sx={{ color: "white" }} />
          <Tab label="Designation" sx={{ color: "white" }} />
          <Tab label="Statutory" sx={{ color: "white" }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <AdminDepartment />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <AdminAnnouncement />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <AdminDesignation />
      </TabPanel>
      <TabPanel value={value} index={3}>
        <AdminStatutory />
      </TabPanel>
    </>
  );
}
