import React, { useState, useEffect } from "react";
import "@mui/material";
import "@emotion/styled";
import {
  Box,
  Checkbox,
  Grid,
  Typography,
  TablePagination,
  IconButton,
  FormControlLabel,
} from "@mui/material";
import {
  FirstPage,
  LastPage,
  ChevronLeft,
  ChevronRight,
  AddBox,
} from "@mui/icons-material";

// Sample employee data
interface Employee {
  id: number;
  avatar: string;
  name: string;
  department: string;
  designation: string;
  grade: string;
  employeeManager: string;
  email: string;
  phone: string;
  signedIn: string;
  officialMail: string;
  phoneNumber: string;
  dob: string;
  panNumber: string;
  permanentAddress: string;
  currentAddress: string;
  personalMail: string;
  alternateMobile: string;
  bloodGroup: string;
  maritalStatus: string;
  Education: string;
  familyDetails: string;
  emergencyContacts: string;
  status: string;
  inTime: string;
  outTime: string;
  workDuration: string;
  location: string;
  department2: string;
  grade2: string;
  action: string;
}

interface DisplayColumnState {
  Check_boxes?: boolean;
  Id?: boolean;
  Name?: boolean;
  Department?: boolean;
  Designation?: boolean;
  Grade?: boolean;
  EmployeeManager?: boolean;
  Email?: boolean;
  Phone?: boolean;
  SignedIn?: boolean;
  OfficialMail?: boolean;
  PhoneNumber?: boolean;
  Dob?: boolean;
  PanNumber?: boolean;
  PermanentAddress?: boolean;
  CurrentAddress?: boolean;
  PersonalMail?: boolean;
  AlternateMobile?: boolean;
  BloodGroup?: boolean;
  MaritalStatus?: boolean;
  Education?: boolean;
  FamilyDetails?: boolean;
  EmergencyContacts?: boolean;
  Status?: boolean;
  InTime?: boolean;
  OutTime?: boolean;
  WorkDuration?: boolean;
  Location?: boolean;
  Department2?: boolean;
  Grade2?: boolean;
  Action?: boolean;
}

interface BoxColumnState {
  Id?: true;
  Name?: true;
  Department?: boolean;
  Designation?: boolean;
  Grade?: boolean;
  EmployeeManager?: boolean;
  Email?: boolean;
  Phone?: boolean;
  SignedIn?: boolean;
  OfficialMail?: boolean;
  PhoneNumber?: boolean;
  Dob?: boolean;
  PanNumber?: boolean;
  PermanentAddress?: boolean;
  CurrentAddress?: boolean;
  PersonalMail?: boolean;
  AlternateMobile?: boolean;
  BloodGroup?: boolean;
  MaritalStatus?: boolean;
  Education?: boolean;
  FamilyDetails?: boolean;
  EmergencyContacts?: boolean;
  Status?: boolean;
  InTime?: boolean;
  OutTime?: boolean;
  WorkDuration?: boolean;
  Location?: boolean;
  Department2?: boolean;
  Grade2?: boolean;
}

interface IPROPS {
  count?: any;
  onPageChange?: any;
  displayColumn: DisplayColumnState;
  boxCoulmns: DisplayColumnState;
  searchQuery: string;
  setBoxColumns: React.Dispatch<React.SetStateAction<BoxColumnState>>;
}

const PaginationActions = (props: any) => {
  const { count, page, rowsPerPage, onPageChange } = props;

  const handleFirstPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, 0);
  };

  const handleBackButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page - 1);
  };

  const handleNextButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, page + 1);
  };

  const handleLastPageButtonClick = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  };

  const totalPages = Math.ceil(count / rowsPerPage);

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5, display: "flex", alignItems: "center" }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        <FirstPage />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        <ChevronLeft />
      </IconButton>
      <Typography sx={{ mx: 2 }}>{`Page ${
        page + 1
      } of ${totalPages}`}</Typography>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= totalPages - 1}
        aria-label="next page"
      >
        <ChevronRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= totalPages - 1}
        aria-label="last page"
      >
        <LastPage />
      </IconButton>
    </Box>
  );
};

const EmployeeTable: React.FC<IPROPS> = ({
  displayColumn,
  boxCoulmns,
  searchQuery,
  setBoxColumns
}) => {
  const [employees, setEmployees] = useState<Employee[]>([]);
  const [selected, setSelected] = useState<number[]>([]);
  const [hoveredRowId, setHoveredRowId] = useState<number | null>(null);
  const [page, setPage] = useState(0);
  const [showOptionsBox, setShowOptionsBox] = useState(false);
  const rowsPerPage = 10; // Fixed rows per page

  useEffect(() => {
    fetch("/employees.json") // Adjust the path if needed
      .then((response) => response.json())
      .then((data) => setEmployees(data))
      .catch((error) => console.error("Error fetching employees:", error));
  }, []);

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

  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number
  ) => {
    setPage(newPage);
  };

  const isSelected = (id: number) => selected.indexOf(id) !== -1;

  const filteredEmployees = employees.filter((employee) =>
    Object.values(employee).some((value) => {
      if (typeof value === "string" || typeof value === "number") {
        return value
          .toString()
          .toLowerCase()
          .includes(searchQuery.toLowerCase());
      }
      return false;
    })
  );

  // Calculate the current page employees
  const currentEmployees = filteredEmployees.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );

  const handleColumnToggle = (column: keyof typeof boxCoulmns) => {
    setBoxColumns((prev: any) => ({ ...prev, [column]: !prev[column] }));
  };

  return (
    <Box
      sx={{
        width: 1200,
        height: 580,
        overflow: "hidden",
        py: 2,
        px: 1,
        pb: 0,
        position: "relative",
      }}
    >
      <Box
        sx={{
          display: "flex",
          width: "1.5rem",
          height: "1.5rem",
          justifyContent: "center",
          alignItems: "center",
          position: "absolute",
          bgcolor: "white",
          ml: 142.5,
          mt: -1.5,
          zIndex: 4,
        }}
      >
        <IconButton onClick={() => setShowOptionsBox(!showOptionsBox)}>
          <AddBox
            sx={{ position: "absolute", color: "#0093FF", fontSize: "1.8rem" }}
          />
        </IconButton>
      </Box>

      {showOptionsBox && (
        <Box
          sx={{
            position: "absolute",
            right: "3.6rem",
            top: "1.1rem",
            width: 200,
            minHeight: 100,
            bgcolor: "white",
            boxShadow: 3,
            p: 2,
            zIndex: 4,
          }}
        >
          {Object.keys(boxCoulmns).map((column) => (
            <FormControlLabel
              sx={{ display: "flex", m: -1 }}
              key={column}
              control={
                <Checkbox
                  checked={boxCoulmns[column as keyof typeof boxCoulmns]}
                  onChange={() =>
                    handleColumnToggle(column as keyof typeof boxCoulmns)
                  }
                />
              }
              label={
                <Typography sx={{ fontSize: "0.8rem" }}>{column}</Typography>
              }
            />
          ))}
        </Box>
      )}

      <Box
        sx={{
          width: 1150,
          display: "flex",
          flexDirection: "column",
          overflowX: "auto",
          overflowY: "auto",
          height: 514,
          border: "1px solid grey",
          zIndex: 2,
        }}
      >
        <Box sx={{ minWidth: "max-content", height: "100%", display: "flex" }}>
          <Box
            sx={{
              m: 1,
              mt: 1,
              position: "absolute",
              bgcolor: "white",
              boxShadow: "5px -8px 9px 0 #babfc7",
              zIndex: 2,
            }}
          >
            <Grid
              container
              spacing={1}
              sx={{ mb: 1, top: 0, bgcolor: "#f8f8f8" }}
            >
              {displayColumn.Check_boxes && (
                <Grid
                  item
                  style={{
                    width: "3.5rem",
                    height: "2.8rem",
                    position: "sticky",
                    left: 0,
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    padding: "1px 2px 0 6px",
                  }}
                >
                  <Checkbox
                    indeterminate={
                      selected.length > 0 && selected.length < employees.length
                    }
                    checked={
                      employees.length > 0 &&
                      selected.length === employees.length
                    }
                    onChange={handleSelectAllClick}
                    inputProps={{ "aria-label": "select all employees" }}
                    sx={{
                      "&.MuiCheckbox-indeterminate": {
                        color: "#0093FF",
                      },
                      "&.Mui-checked": {
                        color: "#0093FF",
                      },
                    }}
                  />
                </Grid>
              )}

              {displayColumn.Id && (
                <Grid
                  item
                  style={{
                    minWidth: 90,
                    height: "2.8rem",
                    position: "sticky",
                    left: 56,
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "rgb(78, 75, 75)",
                      fontWeight: "700",
                    }}
                  >
                    ID
                  </Typography>
                </Grid>
              )}

              {displayColumn.Name && (
                <Grid
                  item
                  style={{
                    minWidth: 210,
                    height: "2.8rem",
                    position: "sticky",
                    left: 146,
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "rgb(78, 75, 75)",
                      fontWeight: "700",
                    }}
                  >
                    Employee Name
                  </Typography>
                </Grid>
              )}
            </Grid>

            {currentEmployees.map((employee) => {
              const isItemSelected = isSelected(employee.id);
              const isHovered = hoveredRowId === employee.id;
              return (
                <Grid
                  container
                  key={employee.id}
                  onClick={() => handleClick(employee.id)}
                  onMouseEnter={() => setHoveredRowId(employee.id)}
                  onMouseLeave={() => setHoveredRowId(null)}
                  role="row"
                  aria-checked={isItemSelected}
                  spacing={1}
                  sx={{ mb: 1, cursor: "pointer" }}
                >
                  {displayColumn.Check_boxes && (
                    <Grid
                      item
                      style={{
                        width: "3.5rem",
                        height: "2.8rem",
                        backgroundColor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        position: "sticky",
                        left: 0,
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        padding: "1px 2px 0 6px",
                      }}
                    >
                      <Checkbox
                        checked={isItemSelected}
                        inputProps={{
                          "aria-labelledby": `employee-list-checkbox-${employee.id}`,
                        }}
                        sx={{
                          "&.Mui-checked": {
                            color: "#0093FF",
                          },
                        }}
                      />
                    </Grid>
                  )}

                  {displayColumn.Id && (
                    <Grid
                      item
                      style={{
                        minWidth: 90,
                        height: "2.8rem",
                        backgroundColor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        position: "sticky",
                        left: 56,
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.id}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.Name && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        position: "sticky",
                        left: 146,
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                        display: "flex",
                      }}
                    >
                      <Box
                        component="img"
                        src={employee.avatar}
                        sx={{
                          width: "2rem",
                          height: "2rem",
                          margin: "-2px 0 0 10px",
                          border: "1px solid blue",
                          borderRadius: "50%",
                        }}
                      />
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.name}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              );
            })}
          </Box>

          <Box sx={{ ml: 45.5, my: 1, zIndex: 1 }}>
            <Grid
              container
              spacing={1}
              sx={{ mb: 1, position: "sticky", top: 0, bgcolor: "#f8f8f8" }}
            >
              {displayColumn.Department && boxCoulmns.Department && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Department
                  </Typography>
                </Grid>
              )}

              {displayColumn.Designation && boxCoulmns.Designation && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Designation
                  </Typography>
                </Grid>
              )}
              {displayColumn.Grade && boxCoulmns.Grade && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Grade
                  </Typography>
                </Grid>
              )}

              {displayColumn.EmployeeManager && boxCoulmns.EmployeeManager && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Employee Manager
                  </Typography>
                </Grid>
              )}

              {displayColumn.Email && boxCoulmns.Email && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Email
                  </Typography>
                </Grid>
              )}

              {displayColumn.Phone && boxCoulmns.Phone && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Phone
                  </Typography>
                </Grid>
              )}

              {displayColumn.SignedIn && boxCoulmns.SignedIn && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Signed In
                  </Typography>
                </Grid>
              )}
              {displayColumn.OfficialMail && boxCoulmns.OfficialMail && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Official Mail
                  </Typography>
                </Grid>
              )}
              {displayColumn.PhoneNumber && boxCoulmns.PhoneNumber && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Phone Number
                  </Typography>
                </Grid>
              )}
              {displayColumn.Dob && boxCoulmns.Dob && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Date Of Birth
                  </Typography>
                </Grid>
              )}
              {displayColumn.PanNumber && boxCoulmns.PanNumber && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    PAN Number
                  </Typography>
                </Grid>
              )}
              {displayColumn.PermanentAddress &&
                boxCoulmns.PermanentAddress && (
                  <Grid
                    item
                    sx={{
                      minWidth: 210,
                      height: "2.8rem",
                      borderRight: "1px solid #babfc7",
                      borderBottom: "1px solid #babfc7",
                      textAlign: "left",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Open Sans', sans-serif",
                        padding: "0.3rem 0 0 1rem",
                        fontSize: ".8rem",
                        color: "#4E4B4B",
                        fontWeight: "700",
                      }}
                    >
                      Permanent Address
                    </Typography>
                  </Grid>
                )}
              {displayColumn.CurrentAddress && boxCoulmns.CurrentAddress && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Current Address
                  </Typography>
                </Grid>
              )}
              {displayColumn.PersonalMail && boxCoulmns.PersonalMail && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Personal Mail
                  </Typography>
                </Grid>
              )}
              {displayColumn.AlternateMobile && boxCoulmns.AlternateMobile && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Alternate Mobile
                  </Typography>
                </Grid>
              )}
              {displayColumn.BloodGroup && boxCoulmns.BloodGroup && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Blood Group
                  </Typography>
                </Grid>
              )}
              {displayColumn.MaritalStatus && boxCoulmns.MaritalStatus && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Marital Status
                  </Typography>
                </Grid>
              )}
              {displayColumn.Education && boxCoulmns.Education && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Education
                  </Typography>
                </Grid>
              )}
              {displayColumn.FamilyDetails && boxCoulmns.FamilyDetails && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Family Details
                  </Typography>
                </Grid>
              )}
              {displayColumn.EmergencyContacts &&
                boxCoulmns.EmergencyContacts && (
                  <Grid
                    item
                    sx={{
                      minWidth: 210,
                      height: "2.8rem",
                      borderRight: "1px solid #babfc7",
                      borderBottom: "1px solid #babfc7",
                      textAlign: "left",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: "'Open Sans', sans-serif",
                        padding: "0.3rem 0 0 1rem",
                        fontSize: ".8rem",
                        color: "#4E4B4B",
                        fontWeight: "700",
                      }}
                    >
                      Emergency Contacts
                    </Typography>
                  </Grid>
                )}
              {displayColumn.Status && boxCoulmns.Status && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Status
                  </Typography>
                </Grid>
              )}
              {displayColumn.InTime && boxCoulmns.InTime && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    In Time
                  </Typography>
                </Grid>
              )}
              {displayColumn.OutTime && boxCoulmns.OutTime && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Out Time
                  </Typography>
                </Grid>
              )}
              {displayColumn.WorkDuration && boxCoulmns.WorkDuration && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Work Duration
                  </Typography>
                </Grid>
              )}
              {displayColumn.Location && boxCoulmns.Location && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Location
                  </Typography>
                </Grid>
              )}
              {displayColumn.Department2 && boxCoulmns.Department2 && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Department2
                  </Typography>
                </Grid>
              )}
              {displayColumn.Grade2 && boxCoulmns.Grade2 && (
                <Grid
                  item
                  sx={{
                    minWidth: 210,
                    height: "2.8rem",
                    borderRight: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "#4E4B4B",
                      fontWeight: "700",
                    }}
                  >
                    Grade2
                  </Typography>
                </Grid>
              )}
            </Grid>

            {currentEmployees.map((employee) => {
              const isItemSelected = isSelected(employee.id);
              const isHovered = hoveredRowId === employee.id;
              return (
                <Grid
                  container
                  key={employee.id}
                  spacing={1}
                  onClick={() => handleClick(employee.id)}
                  onMouseEnter={() => setHoveredRowId(employee.id)}
                  onMouseLeave={() => setHoveredRowId(null)}
                  role="row"
                  aria-checked={isItemSelected}
                  sx={{ mb: 1, cursor: "pointer" }}
                >
                  {displayColumn.Department && boxCoulmns.Department && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.department}
                      </Typography>
                    </Grid>
                  )}
                  {displayColumn.Designation && boxCoulmns.Designation && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.designation}
                      </Typography>
                    </Grid>
                  )}
                  {displayColumn.Grade && boxCoulmns.Grade && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.grade}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.EmployeeManager &&
                    boxCoulmns.EmployeeManager && (
                      <Grid
                        item
                        sx={{
                          minWidth: 210,
                          height: "2.8rem",
                          bgcolor:
                            isItemSelected || isHovered
                              ? "rgba(33,150,243,0.3)"
                              : "white",
                          borderRight: "1px solid #babfc7",
                          borderBottom: "1px solid #babfc7",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            padding: "0.3rem 0 0 1rem",
                            fontSize: ".8rem",
                            color: "#4E4B4B",
                          }}
                        >
                          {employee.employeeManager}
                        </Typography>
                      </Grid>
                    )}

                  {displayColumn.Email && boxCoulmns.Email && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.email}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.Phone && boxCoulmns.Phone && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.phone}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.SignedIn && boxCoulmns.SignedIn && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.signedIn}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.OfficialMail && boxCoulmns.OfficialMail && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.officialMail}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.PhoneNumber && boxCoulmns.PhoneNumber && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.phoneNumber}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.Dob && boxCoulmns.Dob && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.dob}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.PanNumber && boxCoulmns.PanNumber && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.panNumber}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.PermanentAddress &&
                    boxCoulmns.PermanentAddress && (
                      <Grid
                        item
                        sx={{
                          minWidth: 210,
                          height: "2.8rem",
                          bgcolor:
                            isItemSelected || isHovered
                              ? "rgba(33,150,243,0.3)"
                              : "white",
                          borderRight: "1px solid #babfc7",
                          borderBottom: "1px solid #babfc7",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            padding: "0.3rem 0 0 1rem",
                            fontSize: ".8rem",
                            color: "#4E4B4B",
                          }}
                        >
                          {employee.permanentAddress}
                        </Typography>
                      </Grid>
                    )}

                  {displayColumn.CurrentAddress &&
                    boxCoulmns.CurrentAddress && (
                      <Grid
                        item
                        sx={{
                          minWidth: 210,
                          height: "2.8rem",
                          bgcolor:
                            isItemSelected || isHovered
                              ? "rgba(33,150,243,0.3)"
                              : "white",
                          borderRight: "1px solid #babfc7",
                          borderBottom: "1px solid #babfc7",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            padding: "0.3rem 0 0 1rem",
                            fontSize: ".8rem",
                            color: "#4E4B4B",
                          }}
                        >
                          {employee.currentAddress}
                        </Typography>
                      </Grid>
                    )}

                  {displayColumn.PersonalMail && boxCoulmns.PersonalMail && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.personalMail}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.AlternateMobile &&
                    boxCoulmns.AlternateMobile && (
                      <Grid
                        item
                        sx={{
                          minWidth: 210,
                          height: "2.8rem",
                          bgcolor:
                            isItemSelected || isHovered
                              ? "rgba(33,150,243,0.3)"
                              : "white",
                          borderRight: "1px solid #babfc7",
                          borderBottom: "1px solid #babfc7",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            padding: "0.3rem 0 0 1rem",
                            fontSize: ".8rem",
                            color: "#4E4B4B",
                          }}
                        >
                          {employee.alternateMobile}
                        </Typography>
                      </Grid>
                    )}

                  {displayColumn.BloodGroup && boxCoulmns.BloodGroup && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.bloodGroup}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.MaritalStatus && boxCoulmns.MaritalStatus && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.maritalStatus}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.Education && boxCoulmns.Education && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.Education}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.FamilyDetails && boxCoulmns.FamilyDetails && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.familyDetails}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.EmergencyContacts &&
                    boxCoulmns.EmergencyContacts && (
                      <Grid
                        item
                        sx={{
                          minWidth: 210,
                          height: "2.8rem",
                          bgcolor:
                            isItemSelected || isHovered
                              ? "rgba(33,150,243,0.3)"
                              : "white",
                          borderRight: "1px solid #babfc7",
                          borderBottom: "1px solid #babfc7",
                          textAlign: "left",
                        }}
                      >
                        <Typography
                          sx={{
                            fontFamily: "'Open Sans', sans-serif",
                            padding: "0.3rem 0 0 1rem",
                            fontSize: ".8rem",
                            color: "#4E4B4B",
                          }}
                        >
                          {employee.emergencyContacts}
                        </Typography>
                      </Grid>
                    )}

                  {displayColumn.Status && boxCoulmns.Status && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.status}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.InTime && boxCoulmns.InTime && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.inTime}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.OutTime && boxCoulmns.OutTime && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.outTime}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.WorkDuration && boxCoulmns.WorkDuration && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.workDuration}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.Location && boxCoulmns.Location && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.location}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.Department2 && boxCoulmns.Department2 && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.department2}
                      </Typography>
                    </Grid>
                  )}

                  {displayColumn.Grade2 && boxCoulmns.Grade2 && (
                    <Grid
                      item
                      sx={{
                        minWidth: 210,
                        height: "2.8rem",
                        bgcolor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        borderRight: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.grade2}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              );
            })}
          </Box>

          <Box
            sx={{
              m: 1,
              ml: 0,
              mt: 1,
              left: 947,
              position: "absolute",
              bgcolor: "white",
              boxShadow: "-5px -8px 9px 0 #babfc7",
              zIndex: 2,
            }}
          >
            <Grid
              container
              spacing={1}
              sx={{ mb: 1, ml: 0, top: 0, bgcolor: "#f8f8f8", width: 210 }}
            >
              {displayColumn.Action && (
                <Grid
                  item
                  style={{
                    minWidth: 210,
                    height: "2.8rem",
                    position: "sticky",
                    borderLeft: "1px solid #babfc7",
                    borderBottom: "1px solid #babfc7",
                    textAlign: "left",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "'Open Sans', sans-serif",
                      padding: "0.3rem 0 0 1rem",
                      fontSize: ".8rem",
                      color: "rgb(78, 75, 75)",
                      fontWeight: "700",
                    }}
                  >
                    Action
                  </Typography>
                </Grid>
              )}
            </Grid>

            {currentEmployees.map((employee) => {
              const isItemSelected = isSelected(employee.id);
              const isHovered = hoveredRowId === employee.id;
              return (
                <Grid
                  container
                  key={employee.id}
                  onClick={() => handleClick(employee.id)}
                  onMouseEnter={() => setHoveredRowId(employee.id)}
                  onMouseLeave={() => setHoveredRowId(null)}
                  role="row"
                  aria-checked={isItemSelected}
                  spacing={1}
                  sx={{ mb: 1, ml: 0, cursor: "pointer" }}
                >
                  {displayColumn.Action && (
                    <Grid
                      item
                      style={{
                        minWidth: 210,
                        height: "2.8rem",
                        backgroundColor:
                          isItemSelected || isHovered
                            ? "rgba(33,150,243,0.3)"
                            : "white",
                        position: "sticky",
                        // left: 56,
                        borderLeft: "1px solid #babfc7",
                        borderBottom: "1px solid #babfc7",
                        textAlign: "left",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: "'Open Sans', sans-serif",
                          padding: "0.3rem 0 0 1rem",
                          fontSize: ".8rem",
                          color: "#4E4B4B",
                        }}
                      >
                        {employee.action}
                      </Typography>
                    </Grid>
                  )}
                </Grid>
              );
            })}
          </Box>
        </Box>
      </Box>

      <TablePagination
        sx={{
          ".MuiTablePagination-displayedRows": {
            mt: 2,
          },
          width: 1150,
        }}
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

export default EmployeeTable;