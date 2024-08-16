import {
  Card,
  CardContent,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
  Box,
  Paper,
  Typography,
  Grid,
} from "@mui/material";

const SalaryStructure = () => {
  const data = [
    { col1: "CTC", col2: "9,000", col3: "1,08,000" },
    { col1: "Basic", col2: "3,600", col3: "43,200" },
    { col1: "HRA", col2: "1,400", col3: "17,280" },
    { col1: "PF Employer", col2: "432", col3: "5,184" },
    { col1: "Medical Allowance", col2: "1,250", col3: "15,000" },
    { col1: "Conveyance Allowance", col2: "1,600", col3: "19,200" },
    { col1: "ESI Employer", col2: "0", col3: "0" },
    { col1: "Special Allowance", col2: "1,110", col3: "13,320" },
  ];

  return (
    <Box sx={{ p: 4 }}>
      <Paper
        elevation={3}
        sx={{
          padding: "20px",
          textAlign: "initial",
          boxShadow: "0px 3px 6px #00000029",
        }}
      >
        <Typography
          variant="body1"
          color="#000000"
          fontWeight="bold"
          sx={{ marginBottom: "16px" }}
        >
          Salary Structure
        </Typography>
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          sx={{ marginBottom: "16px" }}
        >
          <Typography variant="body2">Current Salary</Typography>
          <Typography variant="body2" fontWeight="bold">
            Effective Date: March 1, 2024
          </Typography>
        </Grid>

        <Table sx={{ Width: 200 }}>
          <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
            <TableRow>
              <TableCell
                sx={{
                  backgroundColor: "#e0e0e0",
                  border: "1px solid #bdbdbd",
                  fontWeight: "bold",
                }}
              >
                Components
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#e0e0e0",
                  border: "1px solid #bdbdbd",
                  fontWeight: "bold",
                }}
              >
                Monthly
              </TableCell>
              <TableCell
                sx={{
                  backgroundColor: "#e0e0e0",
                  border: "1px solid #bdbdbd",
                  fontWeight: "bold",
                }}
              >
                Annual
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row, index) => (
              <TableRow key={index}>
                <TableCell sx={{ border: "1px solid #bdbdbd" }}>
                  {row.col1}
                </TableCell>
                <TableCell sx={{ border: "1px solid #bdbdbd" }}>
                  {row.col2}
                </TableCell>
                <TableCell
                  sx={{
                    border: "1px solid #bdbdbd",
                    backgroundColor: "#f5f5f5",
                  }}
                >
                  {row.col3}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <Typography variant="body2" sx={{ marginTop: "16px" }}>
          * The effective date is the effective date of the most recent change
          in the CTC/Gross or the structure breakup.
        </Typography>
      </Paper>
    </Box>
  );
};

export default SalaryStructure;
