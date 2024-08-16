import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../../company_profile/TabPanel";
import Certifications from "./Certifications";
import Works from "./Works";
import PersonIDs from "./PersonIDs";


export default function DocumentProfile() {
  const [value, setValue] = useState(0);

  const handleTabs = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <>
      <AppBar position="relative" sx={{ mt: 2 }}>
        <Tabs textColor="inherit" value={value} onChange={handleTabs} centered>
          <Tab label="IDs" sx={{ color: "white" }} />
          <Tab label="CERTIFICATIONS" sx={{ color: "white" }} />
          <Tab label="WORK" sx={{ color: "white" }} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <PersonIDs />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Certifications/>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Works />
      </TabPanel>
    </>
  );
}
