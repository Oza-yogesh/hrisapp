import Button from "@mui/material/Button";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { Container, FormControl, Grid, IconButton, InputAdornment, MenuItem, TextField } from "@mui/material";
// import { useNavigate } from "react-router-dom";

function TypeHere() {        
    const [searchQuery, setSearchQuery] = useState("");
    // const navigate = useNavigate();
    // const navgationHandler = () => {
    //     navigate("/dashboard/Cattle/Executive");
    //   }; 

    return (
        <>
        <Container style={{ width: "100%" }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              {/* <Button variant="contained" size="large" onClick={navgationHandler}>
                Create
              </Button>  */}
            </Grid>
            <Grid item xs={6}></Grid>
  
            <Grid item xs={12} sm={6}></Grid>
            <Grid
              item
              xs={12}
              sm={3} 
              sx={{ display: "flex", justifyContent: "flex-end" }}
            >
              <FormControl>
                <TextField
                  label="Type Here"
                  size="small"
                  sx={{ mx: 3, background: "white" }}
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">
                        <IconButton edge="end">
                          {/* <SearchIcon />  */}   
                        </IconButton>
                      </InputAdornment>
                    ),
                  }}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </FormControl>
            </Grid>
            <Grid item xs={12} 
           sx={{ display: "flex", justifyContent: "flex-end" }}
          >
                                  <TextField
                                    label='Select All'
                                    autoFocus
                                    sx={{width:"100px"}}
                                    name='animalCategory'
                                    select
                                    margin='normal'
                                  >
                                    {/* <MenuItem value='Cow'>2024</MenuItem>
                                    <MenuItem value='Buffalo'>2025</MenuItem>  */}
                                    </TextField>
                                </Grid> 
          </Grid>
          </Container>
          </>




    );

}
export default TypeHere; 