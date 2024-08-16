import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import AirplaneTicketIcon from "@mui/icons-material/AirplaneTicket";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import CurrencyRubleIcon from "@mui/icons-material/CurrencyRuble";
import Diversity3Icon from "@mui/icons-material/Diversity3";
import DomainAddRoundedIcon from "@mui/icons-material/DomainAddRounded";
import FolderSharedIcon from "@mui/icons-material/FolderShared";
import PersonSearchIcon from "@mui/icons-material/PersonSearch";
import { Container, Grid, Paper, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function MainDashboard() {
  const navigate = useNavigate();

  type MenusProps = {
    menu_name: string;
    IconComponent: React.ElementType;
    iconColor: string;
    linkToNavigate: any;
  };

  const Menus = ({
    menu_name,
    IconComponent,
    iconColor,
    linkToNavigate,
  }: MenusProps) => {
    return (
      <Paper
        elevation={3}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "space-evenly",
          cursor: "pointer",
        }}
        onClick={() => navigate(linkToNavigate)}
        onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.1)")}
        onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1)")}
      >
        <IconComponent
          sx={{
            display: "block",
            fontSize: "3rem",
            color: iconColor,
          }}
        />
        <Typography
          variant="body1"
          color="#344955"
          fontWeight="550"
          textAlign="center"
        >
          {menu_name}
        </Typography>
      </Paper>
    );
  };

  return (
    <Container fixed>
      {/* first Grid */}
      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          mt: 3,
          "& > :not(style)": {
            m: 2,
            width: 150,
            height: 150,
          },
        }}
      >
        <Menus
          menu_name="Company Profile"
          IconComponent={DomainAddRoundedIcon}
          iconColor="#839898"
          linkToNavigate="/dashboard/company-profile"
        />
        <Menus
          menu_name="My Profile"
          IconComponent={AccountCircleIcon}
          iconColor="#0080ff"
          linkToNavigate="/dashboard/personal-details"
        />
        <Menus
          menu_name="Directory"
          IconComponent={Diversity3Icon}
          iconColor="#B5B86B"
          linkToNavigate="/dashboard/company"
        />
        <Menus
          menu_name="Attendance"
          IconComponent={FolderSharedIcon}
          iconColor="purple"
          linkToNavigate="/dashboard/company"
        />
      </Grid>

      {/* second Grid */}

      <Grid
        container
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          "& > :not(style)": {
            m: 2,
            width: 150,
            height: 150,
          },
        }}
      >
        <Menus
          menu_name="Calender"
          IconComponent={CalendarMonthIcon}
          iconColor="#ff8000"
          linkToNavigate="/dashboard/company"
        />
        <Menus
          menu_name="Leave"
          IconComponent={AirplaneTicketIcon}
          iconColor="green"
          linkToNavigate="/dashboard/company"
        />
        <Menus
          menu_name="Payroll"
          IconComponent={CurrencyRubleIcon}
          iconColor="#211C6A"
          linkToNavigate="/dashboard/pay-slip"
        />
        <Menus
          menu_name="Recruitment"
          IconComponent={PersonSearchIcon}
          iconColor="#561C24"
          linkToNavigate="/dashboard/company"
        />
        <Menus
          menu_name="Onboarding New Employee"
          IconComponent={Diversity3Icon}
          iconColor="#B5B86B"
          linkToNavigate="/dashboard/onboarding-new-employee"
        />
      </Grid>
    </Container>
  );
}
