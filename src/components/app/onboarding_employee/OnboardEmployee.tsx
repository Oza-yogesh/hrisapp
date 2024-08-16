import React, { useState } from "react";
import { Box, Divider, Grid, Paper } from "@mui/material";
import { Tabs, Tab } from "@mui/material";
import TabPanel2 from "./TabPanel2";
import OptionalInfo from "./OptionalInfo";
import Mandatory_info from "./Mandatory_info";

const OnboardEmployee: React.FC = () => {
  const [value, setValue] = useState(0);
  const [FormDataForNext, setFormDataForNext] = useState([]);

  const handleChange = (event: React.ChangeEvent<{}>, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ p: 4, width: { xs: "100%", md: "820px" }, mx: "auto" }}>
      <Paper elevation={3} sx={{ p: 2, boxShadow: "0px 3px 6px #00000029" }}>
        <Box
          component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: { xs: "100%", md: "25ch" } },
          }}
          noValidate
          autoComplete="off"
        >
          <Grid container spacing={2} sx={{ mb: 2 }}>
            <Grid item xs={12}>
              <Tabs
                value={value}
                onChange={handleChange}
                aria-label="simple tabs example"
              >
                <Tab label="Mandatory Infos" />
                <Tab label="Pre-Onboarding" />
              </Tabs>

              <TabPanel2 value={value} index={0}>
                <Mandatory_info
                  setValueForComponent={setValue}
                  setFormDataForNext={setFormDataForNext}
                />
              </TabPanel2>
              <TabPanel2 value={value} index={1}>
                <OptionalInfo
                  setValueForComponent={setValue}
                  FormDataForNext={FormDataForNext}
                />
              </TabPanel2>
            </Grid>
          </Grid>
          <Divider />
        </Box>
      </Paper>
    </Box>
  );
};

export default OnboardEmployee;
