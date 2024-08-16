import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../company_profile/TabPanel";
import McasualLeave from "./McasualLeave";
import MsickLeave from "./MsickLeave";
import AcasualLeave from "./AcasualLeave";
import SickLeave from "./SickLeave";
import ApplyLeave from "./ApplyLeave";
// import GeneralSetting from "./GeneralSetting"; 
// import AdvancedSettings from "./AdvancedSettings"; 
// import TabPanel from "../../company_profile/TabPanel"; 
// import RuleList from "./RuleList"; 

// import RuleList from "./RuleList";  

export default function () { 
  const [value, setValue] = useState(0);

  const handleTabs = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <>
      <AppBar position="relative" sx={{ mt: 2 }}>
        <Tabs textColor="inherit" value={value} onChange={handleTabs} centered>
          <Tab label="Sick Leave" sx={{ color: "white" }} />  
          <Tab label="Apply Leave" sx={{ color: "white" }} />
          <Tab label="Casual Leave" sx={{ color: "white" }} /> 
          <Tab label="Apply For Leave" sx={{ color: "white" }} />   
      </Tabs>
      </AppBar>
      <TabPanel value={value} index={1}>
         <AcasualLeave />   
      </TabPanel>  
      <TabPanel value={value} index={0}>
     <MsickLeave /> 
      </TabPanel>
      {/* <TabPanel value={value} index={0}>
     <MsickLeave /> 
      </TabPanel>  */} 
      <TabPanel value={value} index={1}>
          <SickLeave />   
      </TabPanel> 
      <TabPanel value={value} index={2}> 
          <McasualLeave />   
      </TabPanel>  
      <TabPanel value={value} index={3}> 
          <ApplyLeave />   
      </TabPanel>   

    </>
  );
}
