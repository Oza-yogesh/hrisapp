import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import {
  Box,
  Button,
  CardActionArea,
  CardActions,
  Grid,
  colors,
} from "@mui/material";

import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import InputLabel from "@mui/material/InputLabel";
import FormControl from "@mui/material/FormControl";
import NativeSelect from "@mui/material/NativeSelect";

const data = [
  { col1: "Up to 2,50,000", col2: "Nil" },
  { col1: "2,50,001 - 5,00,000", col2: "5%" },
  { col1: "5,00,001-10,00,000", col2: "20%" },
  { col1: "10,00,001 and above", col2: "30%" },
];
const data2 = [
  { col1: "Up to 3,00,000", col2: "Nil" },
  { col1: "3,00,000 - 6,00,000", col2: "5%" },
  { col1: "6,00,001-9,00,000", col2: "10%" },
  { col1: "9,00,001-12,00,000", col2: "15%" },
  { col1: "12,00,000 to 15,00,000", col2: "20%" },
  { col1: "15,00,000  and above", col2: "30%" },
];

const Declaration: React.FC = () => {
  return (
    <div
      style={{ display: "flex", justifyContent: "left", alignItems: "left" }}
    >
      <Grid container>
        <Box
          sx={{
            backgroundColor: "#fff3e0",
            padding: "6px",
            borderRadius: "5px",
            border: "1px solid #bdbdbd",
            textAlign: "center",
            margin: 5,
            marginLeft: 11,
            fontSize: "6px",
          }}
        >
          <Typography
            variant="h4"
            gutterBottom
            sx={{
              fontSize: "1rem",
              px: 9,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            New Tax Scheme is selected to change the tax scheme.please connect
            your HR and mayuri kasare
          </Typography>
        </Box>
        {/* //for dropdown */}
        <Typography
          variant="body1"
          gutterBottom
          sx={{ fontWeight: "bold", marginBottom: 4 }}
        >
          SUMMARY OF YOUR TAX DECLARATION /PROOF SUBMISSION FOR FY :
        </Typography>
        <Box sx={{ minWidth: 136, marginLeft: 1 }}>
          <FormControl>
            <NativeSelect
              sx={{ color: "blue" }}
              defaultValue={2024 - 2025}
              inputProps={{
                name: "year",
                id: "uncontrolled-native",
              }}
            >
              <option value={2024 - 2025}>2024-2025</option>
              <option value={2023 - 2024}>2023-2024</option>
              <option value={2022 - 2023}>2022-2023</option>
            </NativeSelect>
          </FormControl>
        </Box>
        <Grid
          container
          sx={{ marginBottom: 2, display: "flex", justifyContent: "left" }}
        >
          <Button variant="contained" color="info">
            Copy From Previous Year{" "}
          </Button>
        </Grid>
        <Box
          sx={{
            display: "flex",
            justifyContent: "left",
            height: "34px", // Adjust height as needed
            width: "100%", // Adjust width as needed
            borderTop: "1px solid gray", // Border for the box
            borderBottom: "1px solid #2196f3",
          }}
        >
          <Button
            variant="contained"
            color="info"
            sx={{ borderRadius: 1, width: "220px", height: "33px" }}
          >
            Tax Scheme Selector
          </Button>
        </Box>

        <Grid container spacing={2}>
          <Grid item sx={{ my: 5, mr: 11, ml: 4, width: 400 }}>
            <Card
              sx={{
                maxWidth: 555,
                border: "2px solid #2196f3",
                borderRadius: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="140"
                  image="https://illustoon.com/photo/7603.png"
                  sx={{
                    borderRadius: "50%",
                    width: 130, // Ensures the width matches the height
                    height: 130, // This ensures the image is square
                    objectFit: "cover",
                    margin: "0 auto",
                    display: "block",
                  }}
                  alt="green iguana"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    Old Tax Scheme
                  </Typography>
                  <Button
                    variant="contained"
                    color="info"
                    sx={{ marginBottom: 2, borderRadius: 5, width: 200 }}
                  >
                    Select
                  </Button>

                  <Table sx={{ Width: 290 }}>
                    <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            backgroundColor: "#e0e0e0",
                            border: "1px solid #bdbdbd",
                          }}
                          colSpan={2}
                        >
                          Tax Slabs: ALL Figures in ₹/Annum
                          <p>individuals below The age of 60 Years </p>
                        </TableCell>
                        {/* <TableCell sx={{ backgroundColor: '#e0e0e0', border: '1px solid #bdbdbd', fontWeight: 'bold' }}>Monthly</TableCell> */}{" "}
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
                          {/* <TableCell sx={{ border: '1px solid #bdbdbd',backgroundColor: '#f5f5f5' }}>{row.col3}</TableCell> */}
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </CardActionArea>
              {/* <CardActions>
      </CardActions> */}
            </Card>
          </Grid>

          {/* 2nd card */}
          <Grid item sx={{ my: 5, mr: 11, ml: 4, width: 400 }}>
            <Card
              sx={{
                maxWidth: 955,
                border: "2px solid #2196f3",
                borderRadius: 2,
              }}
            >
              <CardActionArea>
                <CardMedia
                  component="img"
                  height="130"
                  image="https://icons.iconarchive.com/icons/martz90/circle/512/calculator-icon.png"
                  sx={{
                    borderRadius: "50%",
                    width: 120,
                    height: 120,
                    objectFit: "cover",
                    margin: "0 auto",
                    display: "block",
                    padding: 1,
                  }}
                  alt="green iguana"
                />
                <CardContent sx={{ textAlign: "center" }}>
                  <Typography gutterBottom variant="h5" component="div">
                    New Tax Scheme
                  </Typography>
                  <Button
                    variant="contained"
                    color="info"
                    sx={{ marginBottom: 2, borderRadius: 5, width: 200 }}
                  >
                    Select
                  </Button>

                  <Table sx={{ Width: 290 }}>
                    <TableHead sx={{ backgroundColor: "#f5f5f5" }}>
                      <TableRow>
                        <TableCell
                          sx={{
                            backgroundColor: "#e0e0e0",
                            border: "1px solid #bdbdbd",
                          }}
                          colSpan={2}
                        >
                          Tax Slabs :ALL Figures in ru/Annum{" "}
                          <p>individuals below The age of 60 Years </p>
                        </TableCell>
                        {/* <TableCell sx={{ backgroundColor: '#e0e0e0', border: '1px solid #bdbdbd', fontWeight: 'bold' }}>Monthly</TableCell> */}{" "}
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {data2.map((row, index) => (
                        <TableRow key={index}>
                          <TableCell sx={{ border: "1px solid #bdbdbd" }}>
                            {row.col1}
                          </TableCell>
                          <TableCell sx={{ border: "1px solid #bdbdbd" }}>
                            {row.col2}
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </CardContent>
              </CardActionArea>
              <CardActions>
                {/* <Button size="small" color="primary">
          Share
        </Button> */}
              </CardActions>
            </Card>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
};

export default Declaration;
