import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Divider, Grid, Paper } from "@mui/material";

const BankAccount: React.FC = () => {
  return (
    <div>
      <Box sx={{ p: 4 }}>
        <Grid item xs={12}>
          <Paper elevation={3} sx={{ padding: "20px", textAlign: "initial" }}>
            <Grid container spacing={2} sx={{ height: '270px' }}>
              <Grid item xs={12}>
                <Typography
                  variant="body1"
                  textTransform="uppercase"
                  color="#000000"
                  fontWeight="bold"
                  sx={{ marginBottom: '16px' }}
                >
                  SALARY ACCOUNT DETAILS
                </Typography>
                <Divider
                  variant="fullWidth"
                  sx={{ backgroundColor: "#424242" }}
                />
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Account Holder's Name
                </Typography>
                <Typography variant="body2" color="#808080">
                  Trupti Kamble
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Account Number
                </Typography>
                <Typography variant="body2" color="#808080">
                  1234567890
                </Typography>
              </Grid>

              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  Branch Name
                </Typography>
                <Typography variant="body2" color="#808080">
                  MUKUND NAGAR
                </Typography>
              </Grid>

              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  City
                </Typography>
                <Typography variant="body2" color="#808080">
                  PUNE
                </Typography>
              </Grid>
              <Grid item xs={6} md={4}>
                <Typography variant="body2" fontWeight="bold">
                  IFSC Code
                </Typography>
                <Typography variant="body2" color="#808080">
                  ICIC0003264
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Box>
    </div>
  );
};

export default BankAccount;
