import { useState, useEffect } from "react";
import EmployeeTable from "../../common/EmployeeTable";
import {
  Box,
  Paper,
  Button,
  Typography,
  Checkbox,
} from "@mui/material";
import {
  AppBlocking,
  AssignmentTurnedIn,
  DeleteOutline,
  Mail,
  SyncProblem,
  TaskAlt,
  UnsubscribeOutlined,
  Upload,
} from "@mui/icons-material";
import ButtonGlobe from "../../common/ButtonGlobe";
import InfoTags from "../../common/InfoTags";
import Search_Bar from "../../common/Search_Bar";

interface DisplayColumnState {
  Check_boxes: boolean;
  Id: boolean;
  Name: boolean;
  Department: boolean;
  Designation: boolean;
  Grade: boolean;
  EmployeeManager: boolean;
  Email: boolean;
  Phone: boolean;
  SignedIn: boolean;
}

interface BoxColumnState {
  Department?: boolean;
  Designation?: boolean;
  Grade?: boolean;
  EmployeeManager?: boolean;
  Email?: boolean;
  Phone?: boolean;
  SignedIn?: boolean;
}

function AdminDirectory() {

  const [displayColumn, setDisplayColumn] = useState<DisplayColumnState>({
    Check_boxes: false,
    Id: false,
    Name: false,
    Department: false,
    Designation: false,
    Grade: false,
    EmployeeManager: false,
    Email: false,
    Phone: false,
    SignedIn: false,
  });

  const handleAdminDirectoryNavigation = () => {
    setDisplayColumn({
      Check_boxes: true,
      Id: true,
      Name: true,
      Department: true,
      Designation: true,
      Grade: true,
      EmployeeManager: true,
      Email: true,
      Phone: true,
      SignedIn: true,
    });
  };

  const [boxCoulmns, setBoxColumns] = useState<BoxColumnState>({
    Department: true,
    Designation: true,
    Grade: true,
    EmployeeManager: true,
    Email: true,
    Phone: true,
    SignedIn: true,
  });

  const onLoad = () => {
    console.log('Component has loaded');
    handleAdminDirectoryNavigation();
  };

  useEffect(() => {
    onLoad();
  }, []);

  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <Box
      component={Paper}
      sx={{
        width: 1200,
        mt: 5,
        p: 1,
      }}
    >
      <Box sx={{ ml: 1 }} >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontFamily: '"Open Sans", sans-serif',
            pb: 1,
            ml: -1.1,
            gap: 1,
            borderBottom: "1px dotted #eadede",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <Checkbox inputProps={{ "aria-label": "Checkbox demo" }} />
            <Typography
              sx={{ fontWeight: "400", fontSize: "14px", cursor: "pointer" }}
            >
              Include Inactive Employees
            </Typography>
          </Box>
          <InfoTags
            icon={<UnsubscribeOutlined />}
            iconColor="pink"
            title="Invalid Email"
            number={0}
          />
          <InfoTags
            icon={<AppBlocking />}
            iconColor="orange"
            title="Mobile Not Verified"
            number={1}
          />
          <InfoTags
            icon={<TaskAlt />}
            iconColor="#03a84e"
            title="Signed In"
            number={4}
          />
          <InfoTags
            icon={<SyncProblem />}
            iconColor="#ff002a"
            title="Not Signed In"
            number={2}
          />
          <Box sx={{ margin: "0 0 0 11rem" }}>
            <Button
              variant="contained"
              sx={{
                px: "0.7rem",
                py: "0.6rem",
                bgcolor: "#0093FF",
                borderRadius: "2px",
              }}
            >
              RESEND ACTIVATION
            </Button>
          </Box>
        </Box>

        <Box
          sx={{ width: "100%", display: "flex", mt: 2, ml: -1, alignItems: "center" }}
        >
          <Box sx={{ width: '25rem' }} >
            <Search_Bar onSearch = {handleSearch} />
          </Box>

          <Box
            sx={{
              width: "80%",
              height: 50,
              display: "flex",
              alignItems: "center",
              gap: 3,
              ml: 2,
            }}
          >
            <ButtonGlobe
              icon={<AssignmentTurnedIn />}
              iconColor={"white"}
              color={"black"}
              bgColor={"#0093FF"}
              title={"Bulk Edit"}
            />
            <ButtonGlobe
              icon={<Mail />}
              iconColor={"white"}
              color={"black"}
              bgColor={"#0093FF"}
              title={"Mail"}
            />
          </Box>

          <Box
            sx={{
              display: "flex",
              justifyContent: "right",
              mr: 7,
              alignItems: "center",
              gap: 2,
            }}
          >
            <ButtonGlobe
              icon={<DeleteOutline />}
              iconColor={"white"}
              color={"black"}
              bgColor={"#ff002a"}
              title={"Delete"}
            />
            <ButtonGlobe
              icon={<Upload sx={{ rotate: "180deg" }} />}
              iconColor={"white"}
              color={"black"}
              bgColor={"#ff002a"}
              title={"Import"}
            />
            <ButtonGlobe
              icon={<Upload />}
              iconColor={"white"}
              color={"black"}
              bgColor={"#0093FF"}
              title={"Export"}
            />
          </Box>
        </Box>
      </Box>

      <EmployeeTable
        displayColumn={displayColumn}
        boxCoulmns={boxCoulmns}
        setBoxColumns={setBoxColumns}
        searchQuery={searchQuery}
      />

    </Box>
  );
}

export default AdminDirectory;
