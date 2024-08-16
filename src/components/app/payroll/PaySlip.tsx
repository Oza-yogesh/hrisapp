import React, { useRef } from "react";
import {
  Box,
  Button,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  NativeSelect,
  Paper,
  Typography,
} from "@mui/material";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "../../../css/PaySlip.css";
import html2pdf from "html2pdf.js";

function PaySlip() {
  const paySlipRef = useRef<HTMLDivElement>(null); // Define the type of useRef
  const [showDownloadButton, setShowDownloadButton] = React.useState(true);

  const personalInfo = [
    { label: "Name", value: "Suraj Somani" },
    { label: "Designation", value: "Software Engineer" },
    { label: "Department", value: "" },
    { label: "Location", value: "Baramati" },
    { label: "Effective Work Days", value: "29" },
    { label: "LOP", value: "0.0" },
  ];

  const companyInfo = [
    { label: "Employee ID", value: "10063" },
    { label: "Bank Name", value: "XYZ Bank" },
    { label: "Bank Account No", value: "001022100000001" },
    { label: "Pan No", value: "NGHPS2353S" },
  ];

  const earningInfo = [
    { label: "Basic", value: "7,200" },
    { label: "HRA", value: "2,880" },
    { label: "Medical Allowance", value: "1,250" },
    { label: "Conveyance Allowance", value: "1,600" },
    { label: "Special Allowance", value: "5,070" },
  ];

  const deductionInfo = [
    { label: "PF Employee", value: "864" },
    { label: "PT", value: "200" },
    { label: "--", value: "--" },
    { label: "--", value: "--" },
    { label: "--", value: "--" },
  ];

  const handleDownload = () => {
    const element = paySlipRef.current!.querySelector(".pay-slip-content");

    const opt = {
      margin: 0.5,
      filename: "PaySlip.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 2 },
      jsPDF: { unit: "in", format: "letter", orientation: "portrait" },
    };

    // Hide download button
    setShowDownloadButton(false);

    html2pdf()
      .from(element)
      .set(opt)
      .save()
      .then(() => {
        // Show download button after PDF generation
        setShowDownloadButton(true);
      });
  };

  return (
    <Grid container spacing={2} marginTop="20px">
      <Grid item xs={12}>
        <Paper elevation={3} sx={{ padding: "20px" }} ref={paySlipRef}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography
                variant="body1"
                textTransform="uppercase"
                color="#936c6c"
                fontWeight="bold"
              >
                Pay Slip
              </Typography>
              <Divider
                variant="fullWidth"
                sx={{ backgroundColor: "#424242" }}
              />
            </Grid>

            <Grid
              item
              xs={12}
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", gap: "10px", alignItems: "center" }}>
                <Box
                  sx={{
                    minWidth: 120,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <InputLabel
                    variant="standard"
                    htmlFor="year"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    Year
                  </InputLabel>
                  <FormControl>
                    <NativeSelect
                      defaultValue={2024}
                      inputProps={{
                        name: "years",
                        id: "year",
                      }}
                    >
                      <option value={2024}>2024</option>
                    </NativeSelect>
                  </FormControl>
                </Box>

                <Box
                  sx={{
                    minWidth: 120,
                    display: "flex",
                    gap: "10px",
                    alignItems: "center",
                  }}
                >
                  <InputLabel
                    variant="standard"
                    htmlFor="month"
                    sx={{ fontWeight: "bold", color: "black" }}
                  >
                    Month
                  </InputLabel>
                  <FormControl>
                    <NativeSelect
                      defaultValue={"jan"}
                      inputProps={{
                        name: "months",
                        id: "month",
                      }}
                    >
                      <option value="jan">January</option>
                    </NativeSelect>
                  </FormControl>
                </Box>
              </Box>

              <Box sx={{ display: "flex", gap: "10px" }}>
                <Button
                  sx={{
                    height: "30px",
                    width: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "white",
                    },
                  }}
                >
                  <ArrowBackIosIcon sx={{ fontSize: "20px" }} />
                </Button>
                <Button
                  sx={{
                    height: "30px",
                    width: "30px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    "&:hover": {
                      backgroundColor: "blue",
                      color: "white",
                    },
                  }}
                >
                  <ArrowForwardIosIcon sx={{ fontSize: "20px" }} />
                </Button>
              </Box>
            </Grid>

            <Grid
              item
              xs={12}
              sx={{ textAlign: "center" }}
              className="pay-slip-content" // Add class to this Grid item
            >
              <Typography variant="h4" fontWeight="bold">
                NWS Soft Consulting Pvt Ltd
              </Typography>
              <Typography variant="body2" color="textSecondary">
                503 & 504 Orville Business Port, VIMAN NAGAR NEAR AIR FORCE,
                PUNE, Maharashtra - 411014
              </Typography>

              <Typography
                variant="body1"
                sx={{ marginTop: "10px", fontSize: "24px" }}
              >
                Payslip for the Month of February, 2024
              </Typography>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  border: "1px solid black",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    textAlign: "start",
                    padding: "10px",
                    borderRight: "1px solid black",
                  }}
                >
                  {personalInfo.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography sx={{ minWidth: "45%" }}>
                        {item.label}:
                      </Typography>
                      <Typography>{item.value}</Typography>
                    </Box>
                  ))}
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                  sx={{
                    flex: 1,
                    textAlign: "start",
                    padding: "10px",
                    borderRight: "1px solid gray",
                  }}
                >
                  {companyInfo.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography sx={{ minWidth: "45%" }}>
                        {item.label}:
                      </Typography>
                      <Typography>{item.value}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  border: "1px solid black",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    textAlign: "start",
                    padding: "10px",
                    borderRight: "1px solid gray",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Earnings
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>Amount</Typography>
                  </Box>
                  <div
                    style={{
                      margin: "5px -10px",
                      height: "1px",
                      backgroundColor: "black",
                    }}
                  />
                  {earningInfo.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography>{item.label}</Typography>
                      <Typography>{item.value}</Typography>
                    </Box>
                  ))}
                  <div
                    style={{
                      margin: "5px -10px",
                      height: "1px",
                      backgroundColor: "black",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Total Earnings (Rs)
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>18,000</Typography>
                  </Box>
                </Box>
                <Divider orientation="vertical" flexItem />
                <Box
                  sx={{
                    flex: 1,
                    textAlign: "start",
                    padding: "10px",
                    borderRight: "1px solid gray",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Deductions
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>Amount</Typography>
                  </Box>
                  <div
                    style={{
                      margin: "5px -10px",
                      height: "1px",
                      backgroundColor: "black",
                    }}
                  />
                  {deductionInfo.map((item, index) => (
                    <Box
                      key={index}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "space-between",
                        marginBottom: "10px",
                      }}
                    >
                      <Typography>{item.label}</Typography>
                      <Typography>{item.value}</Typography>
                    </Box>
                  ))}
                  <div
                    style={{
                      margin: "5px -10px",
                      height: "1px",
                      backgroundColor: "black",
                    }}
                  />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: "auto",
                    }}
                  >
                    <Typography sx={{ fontWeight: "bold" }}>
                      Total Deductions (Rs)
                    </Typography>
                    <Typography sx={{ fontWeight: "bold" }}>1,064</Typography>
                  </Box>
                </Box>
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "start",
                  marginTop: "10px",
                }}
              >
                <Box
                  sx={{
                    flex: 1,
                    textAlign: "start",
                    padding: "10px",
                    display: "flex",
                    justifyContent: "space-between",
                  }}
                >
                  <Typography sx={{ fontWeight: "bold" }}>
                    Net Pay For The Month:
                  </Typography>
                  <Typography sx={{ fontWeight: "bold" }}>16,936</Typography>
                </Box>
                <Box sx={{ flex: 1, padding: "10px" }}></Box>
              </Box>
              <Box
                sx={{
                  textAlign: "start",
                  padding: "10px",
                }}
              >
                (Rupees Sixteen Thousand Nine Hundred And Thirty-Six Only)
                <div
                  style={{
                    height: "2px",
                    backgroundColor: "black",
                    marginTop: "10px",
                  }}
                />
                <Typography
                  variant="body2"
                  sx={{ marginTop: "10px", textAlign: "center" }}
                >
                  This is the system generated payslip and does not require
                  signature
                </Typography>
              </Box>
            </Grid>
          </Grid>
        </Paper>
      </Grid>

      {showDownloadButton && (
        <Grid item xs={12} sx={{ textAlign: "center" }}>
          <Button
            variant="contained"
            onClick={handleDownload}
            sx={{ marginTop: "20px" }}
          >
            Download PDF
          </Button>
        </Grid>
      )}
    </Grid>
  );
}

export default PaySlip;
