import { AppBar, Tab, Tabs } from "@mui/material";
import React, { useState } from "react";
import TabPanel from "../company_profile/TabPanel";
import McasualLeave from "./McasualLeave";
import MsickLeave from "./MsickLeave";
import AcasualLeave from "./AcasualLeave";
import SickLeave from "./SickLeave";
import ApplyLeave from "./ApplyLeave";
import MapplyLeave from "./MapplyLeave";
import Logs from "./Logs";
import RuleList from "./Rules/RuleList";
import CasualLeave from "./Rules/CasualLeave";


export default function () { 
  const [value, setValue] = useState(0);

  const handleTabs = (event: React.SyntheticEvent, value: number) => {
    setValue(value);
  };

  return (
    <>
      <AppBar position="relative" sx={{ mt: 2 }}>
        <Tabs textColor="inherit" value={value} onChange={handleTabs} centered> 
          <Tab label="Apply Leave" sx={{ color: "white" }} />  
          <Tab label="Logs" sx={{ color: "white" }} />
          <Tab label="Rules" sx={{ color: "white" }} /> 
          {/* <Tab label="Apply For Leave" sx={{ color: "white" }} />    */}
      </Tabs>
      </AppBar>
      {/* <TabPanel value={value} index={1}>
         <AcasualLeave />   
      </TabPanel>   */} 
      <TabPanel value={value} index={0}>
       <MapplyLeave /> 
      </TabPanel>
     <TabPanel value={value} index={1}>
       <Logs />   
     </TabPanel> 
      <TabPanel value={value} index={2}> 
          <CasualLeave />   
      </TabPanel>  
      {/* <TabPanel value={value} index={3}> 
          <ApplyLeave />   
      </TabPanel>    */}

    </>
  );
}