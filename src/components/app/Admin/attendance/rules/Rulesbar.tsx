import React, { useState } from "react";
import { Tabs, Tab, Box, AppBar } from "@mui/material";
import AttendanceRules from "./AttendanceRules";
import AssignAttendanceRules from "./AssignAttendanceRules";
import RosterRule from "./RosterRule";
import AssignRosterRule from "./AssignRosterRule";
import Calendar from "./Calendar";
import TabPanel from "../../../company_profile/TabPanel";



const NestedTabs: React.FC = () => {
  const [mainTab, setMainTab] = useState<number>(0);
  const [nestedTab, setNestedTab] = useState<number>(0);

  const handleMainTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setMainTab(newValue);
    setNestedTab(0);
  };

  const handleNestedTabChange = (
    event: React.SyntheticEvent,
    newValue: number
  ) => {
    setNestedTab(newValue);
  };

  return (
    <>
      <AppBar position="relative" sx={{ mt: 2 }}>
        <Tabs
          textColor="inherit"
          value={mainTab}
          onChange={handleMainTabChange}
        >
          <Tab label="Normal Shift" sx={{ color: "white" }} />
          <Tab label="Rotational Shift" sx={{ color: "white" }} />
        </Tabs>
      </AppBar>

      <TabPanel value={mainTab} index={0}>
        <Tabs value={nestedTab} onChange={handleNestedTabChange}>
          <Tab label="Attendance Rules" />
          <Tab label="Assign Attendance Rules"/>
        </Tabs>
        <TabPanel value={nestedTab} index={0}>
          <AttendanceRules />
        </TabPanel>
        <TabPanel value={nestedTab} index={1}>
          <AssignAttendanceRules />
        </TabPanel>
      </TabPanel>

      <TabPanel value={mainTab} index={1}>
        <Tabs value={nestedTab} onChange={handleNestedTabChange}>
          <Tab label="Roster Rule" />
          <Tab label="Assign Roster Rule" />
          <Tab label="Calendar" />
        </Tabs>
        <TabPanel value={nestedTab} index={0}>
          <RosterRule />
        </TabPanel>
        <TabPanel value={nestedTab} index={1}>
          <AssignRosterRule />
        </TabPanel>
        <TabPanel value={nestedTab} index={2}>
          <Calendar />
        </TabPanel>
      </TabPanel>
    </>
  );
};

export default NestedTabs;
