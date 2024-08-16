import React, { useState } from "react";
import '@mui/material';
import '@emotion/styled';
import { Box, Checkbox, Grid, Paper, Typography, TablePagination, IconButton, FormControlLabel, TextField, InputAdornment } from "@mui/material";
import { FirstPage, LastPage, ChevronLeft, ChevronRight, AddBox, Search } from "@mui/icons-material";

// Sample employee data
interface Employee {
  id: number;
  name: string;
  department: string;
  position: string;
  email: string;
  phone: string;
  address: string;
  hireDate: string;
}

const employees: Employee[] = [
  {
    id: 10023,
    name: "John Doe",
    department: "Engineering",
    position: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    hireDate: "2020-01-15",
  },
  {
    id: 10038,
    name: "Jane Smith",
    department: "Marketing",
    position: "Marketing Manager",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
    address: "456 Elm St",
    hireDate: "2019-03-22",
  },
  {
    id: 10085,
    name: "John Doe",
    department: "Engineering",
    position: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    hireDate: "2020-01-15",
  },
  {
    id: 10025,
    name: "Jane Smith",
    department: "Marketing",
    position: "Marketing Manager",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
    address: "456 Elm St",
    hireDate: "2019-03-22",
  },
  {
    id: 10019,
    name: "John Doe",
    department: "Engineering",
    position: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    hireDate: "2020-01-15",
  },
  {
    id: 10063,
    name: "Jane Smith",
    department: "Marketing",
    position: "Marketing Manager",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
    address: "456 Elm St",
    hireDate: "2019-03-22",
  },
  {
    id: 10039,
    name: "John Doe",
    department: "Engineering",
    position: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    hireDate: "2020-01-15",
  },
  {
    id: 8,
    name: "Jane Smith",
    department: "Marketing",
    position: "Marketing Manager",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
    address: "456 Elm St",
    hireDate: "2019-03-22",
  },
  {
    id: 9,
    name: "John Doe",
    department: "Engineering",
    position: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    hireDate: "2020-01-15",
  },
  {
    id: 10,
    name: "Jane Smith",
    department: "Marketing",
    position: "Marketing Manager",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
    address: "456 Elm St",
    hireDate: "2019-03-22",
  },
  {
    id: 11,
    name: "John Doe",
    department: "Engineering",
    position: "Software Engineer",
    email: "john.doe@example.com",
    phone: "123-456-7890",
    address: "123 Main St",
    hireDate: "2020-01-15",
  },
  {
    id: 12,
    name: "Jane Smith",
    department: "Marketing",
    position: "Marketing Manager",
    email: "jane.smith@example.com",
    phone: "098-765-4321",
    address: "456 Elm St",
    hireDate: "2019-03-22",
  },
];

const PaginationActions = (props: any) => {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const totalPages = Math.ceil(count / rowsPerPage);

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, display: 'flex', alignItems: 'center' }}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0} aria-label="first page">
        <FirstPage />
      </IconButton>
      <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
        <ChevronLeft />
      </IconButton>
      <Typography sx={{ mx: 2 }}>{`Page ${page + 1} of ${totalPages}`}</Typography>
      <IconButton onClick={handleNextButtonClick} disabled={page >= totalPages - 1} aria-label="next page">
        <ChevronRight />
      </IconButton>
      <IconButton onClick={handleLastPageButtonClick} disabled={page >= totalPages - 1} aria-label="last page">
        <LastPage />
      </IconButton>
    </Box>
  );
};

const Test1: React.FC = () => {
  const [selected, setSelected] = useState<number[]>([]);
  const [page, setPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState(""); // State for search term
  const rowsPerPage = 10; // Fixed rows per page
  const [showColumns, setShowColumns] = useState({
    Department: true,
    Designation: true,
    Grade: true,
    EmployeeManager: true,
    SignedIn: true,
  });

  const [showOptionsBox, setShowOptionsBox] = useState(false);

  const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.checked) {
      const newSelected = employees.map((employee) => employee.id);
      setSelected(newSelected);
      return;
    }
    setSelected([]);
  };

  const handleClick = (id: number) => {
    const selectedIndex = selected.indexOf(id);
    let newSelected: number[] = [];

    if (selectedIndex === -1) {
      newSelected = newSelected.concat(selected, id);
    } else if (selectedIndex === 0) {
      newSelected = newSelected.concat(selected.slice(1));
    } else if (selectedIndex === selected.length - 1) {
      newSelected = newSelected.concat(selected.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelected = newSelected.concat(
        selected.slice(0, selectedIndex),
        selected.slice(selectedIndex + 1)
      );
    }

    setSelected(newSelected);
  };

  const handleChangePage = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number) => {
    setPage(newPage);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return value.toString().toLowerCase().includes(searchTerm.toLowerCase());
      }
      return false; // Ignore non-string values
    })
  );

  // Calculate the current page employees
  const currentEmployees = filteredEmployees.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage);

  const handleColumnToggle = (column: keyof typeof showColumns) => {
    setShowColumns((prev) => ({ ...prev, [column]: !prev[column] }));
  };

  return (
    <Box
      component={Paper}
      sx={{
        width: 1000,
        height: 508,
        overflow: "hidden",
        margin: "5rem",
        p: 8,
      }}
    >

      <TextField
        variant="standard"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <Search />
            </InputAdornment>
          ),
        }}
        sx={{ mt: -5 }}

      />


      <Box sx={{ display: 'flex', justifyContent: 'right', position: 'absolute', bgcolor: 'white', ml: 124, mt: -3, zIndex: 3 }}>
        <IconButton onClick={() => setShowOptionsBox(!showOptionsBox)}>
          <AddBox color="primary" sx={{ position: 'absolute', fontSize: '1.8rem', top: -6, right: -5, }} />
        </IconButton>
      </Box>

      {showOptionsBox && (
        <Box sx={{ position: 'absolute', right: '23.1rem', top: '9.5rem', width: 200, bgcolor: 'white', boxShadow: 3, p: 2, zIndex: 4 }}>
          {Object.keys(showColumns).map((column) => (
            <FormControlLabel
              key={column}
              control={
                <Checkbox
                  checked={showColumns[column as keyof typeof showColumns]}
                  onChange={() => handleColumnToggle(column as keyof typeof showColumns)}
                />
              }
              label={column}
            />
          ))}
        </Box>
      )}

      <Box
        sx={{
          width: '100%',
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
          overflowY: "auto",
          height: "100%",
          mt: -2,
          border: '1px solid black',
          zIndex: 2,
        }}
      >



        <Box sx={{ minWidth: 'max-content', height: '100%', display: 'flex', }}>
          <Box sx={{ m: 1, position: 'absolute', boxShadow: '5px -8px 9px 0 grey', zIndex: 2, }}>
            <Grid
              container
              spacing={1}
              sx={{ mb: 1, top: 0, bgcolor: "#f8f8f8", }}
            >
              <Grid
                item
                style={{
                  width: "3.5rem",
                  height: '2.8rem',
                  position: "sticky",
                  left: 0,
                  borderRight: "1px solid grey",
                  borderBottom: "1px solid grey",
                }}
              >
                <Checkbox
                  indeterminate={
                    selected.length > 0 && selected.length < employees.length
                  }
                  checked={
                    employees.length > 0 && selected.length === employees.length
                  }
                  onChange={handleSelectAllClick}
                  inputProps={{ "aria-label": "select all employees" }}
                />
              </Grid>
              <Grid
                item
                style={{
                  minWidth: 90,
                  height: '2.8rem',
                  position: "sticky",
                  left: 56,
                  borderRight: "1px solid grey",
                  borderBottom: "1px solid grey",
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>ID</Typography>
              </Grid>
              <Grid
                item
                style={{
                  minWidth: 250,
                  height: '2.8rem',
                  position: "sticky",
                  left: 146,
                  borderRight: "1px solid grey",
                  borderBottom: "1px solid grey",
                  textAlign: 'center',
                }}
              >
                <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>Employee Name</Typography>
              </Grid>
            </Grid>

            {currentEmployees.map((employee) => {
              const isItemSelected = isSelected(employee.id);
              return (
                <Grid
                  container
                  key={employee.id}
                  spacing={1}
                  sx={{ mb: 1, backgroundColor: "white", cursor: "pointer" }}
                  onClick={() => handleClick(employee.id)}
                  role="row"
                  aria-checked={isItemSelected}
                >
                  <Grid
                    item
                    style={{
                      width: "3.5rem",
                      height: '2.8rem',
                      backgroundColor: "white",
                      position: "sticky",
                      left: 0,
                      borderRight: "1px solid grey",
                      borderBottom: "1px solid grey",
                    }}
                  >
                    <Checkbox
                      checked={isItemSelected}
                      inputProps={{ "aria-labelledby": `employee-list-checkbox-${employee.id}` }}
                    />
                  </Grid>
                  <Grid
                    item
                    style={{
                      minWidth: 90,
                      height: '2.8rem',
                      backgroundColor: "white",
                      position: "sticky",
                      left: 56,
                      borderRight: "1px solid grey",
                      borderBottom: "1px solid grey",
                      textAlign: 'center',
                    }}
                  >
                    <Typography sx={{ fontSize: '.9rem', fontWeight: '400' }}>{employee.id}</Typography>
                  </Grid>
                  <Grid
                    item
                    sx={{
                      minWidth: 250,
                      height: '2.8rem',
                      bgcolor: "white",
                      position: "sticky",
                      left: 146,
                      borderRight: "1px solid grey",
                      borderBottom: "1px solid grey",
                      textAlign: 'center',
                    }}
                  >
                    <Typography sx={{ fontSize: '.9rem', fontWeight: '400' }}>{employee.name}</Typography>
                  </Grid>
                </Grid>
              );
            })}
          </Box>

          <Box sx={{ ml: 50, my: 1, zIndex: 1, }}>
            <Grid
              container
              spacing={1}
              sx={{ mb: 1, position: "sticky", top: 0, bgcolor: "#f8f8f8", }}
            >
              {showColumns.Department && (
                <Grid
                  item
                  sx={{
                    minWidth: 250,
                    height: '2.8rem',
                    borderRight: "1px solid grey",
                    borderBottom: "1px solid grey",
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>Department</Typography>
                </Grid>
              )}
              {showColumns.Designation && (
                <Grid
                  item
                  sx={{
                    minWidth: 250,
                    height: '2.8rem',
                    borderRight: "1px solid grey",
                    borderBottom: "1px solid grey",
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>Designation</Typography>
                </Grid>
              )}
              {showColumns.Grade && (
                <Grid
                  item
                  sx={{
                    minWidth: 250,
                    height: '2.8rem',
                    borderRight: "1px solid grey",
                    borderBottom: "1px solid grey",
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>Grade</Typography>
                </Grid>
              )}
              {showColumns.EmployeeManager && (
                <Grid
                  item
                  sx={{
                    minWidth: 250,
                    height: '2.8rem',
                    borderRight: "1px solid grey",
                    borderBottom: "1px solid grey",
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>Employee Manager</Typography>
                </Grid>
              )}
              {showColumns.SignedIn && (
                <Grid
                  item
                  sx={{
                    minWidth: 250,
                    height: '2.8rem',
                    borderRight: "1px solid grey",
                    borderBottom: "1px solid grey",
                    textAlign: 'center',
                  }}
                >
                  <Typography sx={{ fontSize: '.9rem', fontWeight: '700' }}>Signed In</Typography>
                </Grid>
              )}
            </Grid>

            {currentEmployees.map((employee) => {
              const isItemSelected = isSelected(employee.id);
              return (
                <Grid
                  container
                  key={employee.id}
                  spacing={1}
                  sx={{ mb: 1, backgroundColor: "blue", cursor: "pointer" }}
                  onClick={() => handleClick(employee.id)}
                  role="row"
                  aria-checked={isItemSelected}
                >
                  {showColumns.Department && (
                    <Grid
                      item
                      sx={{
                        minWidth: 250,
                        height: '2.8rem',
                        bgcolor: "white",
                        borderRight: "1px solid grey",
                        borderBottom: "1px solid grey",
                        textAlign: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '.9rem', fontWeight: '400' }}>{employee.department}</Typography>
                    </Grid>
                  )}
                  {showColumns.Designation && (
                    <Grid
                      item
                      sx={{
                        minWidth: 250,
                        height: '2.8rem',
                        bgcolor: "white",
                        borderRight: "1px solid grey",
                        borderBottom: "1px solid grey",
                        textAlign: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '.9rem', fontWeight: '400' }}>{employee.position}</Typography>
                    </Grid>
                  )}
                  {showColumns.Grade && (
                    <Grid
                      item
                      sx={{
                        minWidth: 250,
                        height: '2.8rem',
                        bgcolor: "white",
                        borderRight: "1px solid grey",
                        borderBottom: "1px solid grey",
                        textAlign: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '.9rem', fontWeight: '400' }}>{employee.email}</Typography>
                    </Grid>
                  )}
                  {showColumns.EmployeeManager && (
                    <Grid
                      item
                      sx={{
                        minWidth: 250,
                        height: '2.8rem',
                        bgcolor: "white",
                        borderRight: "1px solid grey",
                        borderBottom: "1px solid grey",
                        textAlign: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '.9rem', fontWeight: '400' }}>{employee.phone}</Typography>
                    </Grid>
                  )}
                  {showColumns.SignedIn && (
                    <Grid
                      item
                      sx={{
                        minWidth: 250,
                        height: '2.8rem',
                        bgcolor: "white",
                        borderRight: "1px solid grey",
                        borderBottom: "1px solid grey",
                        textAlign: 'center',
                      }}
                    >
                      <Typography sx={{ fontSize: '.9rem', fontWeight: '400' }}>{employee.address}</Typography>
                    </Grid>
                  )}
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>
      <TablePagination
        component="div"
        count={filteredEmployees.length}
        page={page}
        onPageChange={handleChangePage}
        rowsPerPage={rowsPerPage}
        rowsPerPageOptions={[]} // Disable rows per page options
        labelRowsPerPage="" // Hide "Rows per page" text
        ActionsComponent={PaginationActions} // Add this line
      />
    </Box>
  );
};

export default Test1;