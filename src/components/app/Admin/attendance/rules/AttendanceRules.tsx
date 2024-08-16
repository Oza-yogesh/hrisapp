import React, { useState } from "react";
import {
  Box,
  CssBaseline,
  Grid,
  Paper,
  TextField,
  Typography,
} from "@mui/material";
import { Container } from "@mui/system";
import RuleSidebar from "./RuleSidebar";
import { Edit } from "@mui/icons-material";

const AttendanceRules = () => {
  const [showdata, setshowdata] = useState<boolean>(false);

  const toggledata = () => {
    setshowdata(!showdata);
  };
  return (
    <>
      <CssBaseline />
      <Container maxWidth="lg" sx={{ marginTop: "20px" }}>
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
              <Box display="flex" flexDirection="row" sx={{ margin: "2px" }}>
                <RuleSidebar />
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    boxShadow: 3,
                    height: "auto",
                    width: "170vh",
                    padding: "8px",
                    margin: "12px",
                    borderRadius: "2px",
                  }}
                >
                  <Typography>
                    General Rules
                    <Edit onClick={toggledata} sx={{ marginLeft: "90vh" }} />
                  </Typography>
                  <p> Rule Name</p>

                  <Typography>
                    {showdata && <TextField type="text" size="small" />}
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default AttendanceRules;
