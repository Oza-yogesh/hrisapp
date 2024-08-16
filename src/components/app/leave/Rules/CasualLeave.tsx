import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import GeneralSetting from "./GeneralSetting";
import AdvancedSettings from "./AdvancedSettings";
import TabPanel from "../../company_profile/TabPanel";
import RuleList from "./RuleList";

// import RuleList from "./RuleList";  

export default function CompanyProfile() { 
  const [value, setValue] = useState(0);

  const handleTabs = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <>
      <AppBar position="relative" sx={{ mt: 2 }}>
        <Tabs textColor="inherit" value={value} onChange={handleTabs} centered>
          <Tab label="AdvancedSettings" sx={{ color: "white" }} />  
          <Tab label="RuleList" sx={{ color: "white" }} />  
      </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
        <RuleList /> 
      </TabPanel>  
      <TabPanel value={value} index={0}>
        <AdvancedSettings />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <GeneralSetting />
      </TabPanel>
    </>
  );
}
