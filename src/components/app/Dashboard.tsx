import React, { FC, MouseEvent, useEffect, useState } from "react";
import {
  Avatar,
  Badge,
  Box,
  Container,
  Divider,
  IconButton,
  Link,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import {
  AccountCircle as AccountCircleIcon,
  ExitToApp as ExitToAppIcon,
  Menu as MenuIcon,
  Notifications as NotificationsIcon,
  Search as SearchIcon,
} from "@mui/icons-material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { Outlet, useNavigate } from "react-router-dom";
import { MenuObject } from "../interfaces/Interfaces";
import {
  AppBar,
  Drawer,
  Search,
  SearchIconWrapper,
} from "../styled/DashboardParts";
import { MainListItems } from "./ListItems";
import { getRequest } from "../../api/Api";
import { GET_ALL_EMPLOYEE_DETAILS } from "../../api/Server";
import { AxiosResponse } from "axios";
import CustomSelect from "./CustomSelect";
import WebClockInAndOut from "./common/WebClockInAndOut";
import { useDispatch, useSelector } from "react-redux";
import { clearUser } from "../../redux/slices/userSlice";
import { RootState } from "../../redux/store";

const MenuList: MenuObject[] = [
  { name: "Profile", icon: <AccountCircleIcon /> },
  { name: "Logout", icon: <ExitToAppIcon /> },
];

const Copyright: FC = () => (
  <Typography variant="body2" color="text.secondary" align="center" mt={5}>
    {"Copyright © "}
    <Link color="inherit" href="">
      SAWA HRIS
    </Link>{" "}
    {new Date().getFullYear()}
    {"."}
  </Typography>
);

const theme = createTheme({
  palette: {
    primary: { main: "#191970" },
    secondary: { main: "#dc004e" },
  },
});

interface Employee {
  _id: string;
  name?: string;
  employeeId?: string;
}

const Dashboard: FC = () => {
  const [allEmployeeData, setAllEmployeeData] = useState<Employee[]>([]);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState<boolean>(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const user = useSelector((state: RootState) => state.user);

  useEffect(() => {
    getRequest(GET_ALL_EMPLOYEE_DETAILS).then((res: AxiosResponse) => {
      setAllEmployeeData(res.data);
    });
  }, []);

  const handleSelect = (option: Employee) => {
    const employeeId: string = option._id;
    navigate(`/dashboard/personal-details/${employeeId}`);
  };

  const toggleDrawer = () => setOpen((prevOpen) => !prevOpen);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (button: string) => {
    if (button === "Logout") {
      // Remove token, Role from local storage
      localStorage.removeItem("token");
      localStorage.removeItem("userId");
      localStorage.removeItem("Role");

      // Dispatch clearUser action to reset Redux store
      dispatch(clearUser());

      // Navigate to login page
      navigate("/login");
    }
    setAnchorElUser(null);
  };

  // Create initials from first and last name
  const userInitials = `${user.firstName?.charAt(0)}${user.lastName?.charAt(0)}`.toUpperCase();

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{ display: "flex" }}>
        <Drawer variant="permanent" open={open}>
          <Toolbar>
            <img
              src={`${process.env.PUBLIC_URL}/SAWA-HRIS.png`}
              alt="SAWA_HRIS_Logo"
              style={{ height: 60, marginLeft: 40 }}
            />
          </Toolbar>
          <Divider />
          <MainListItems />
        </Drawer>

        <Container
          component="main"
          maxWidth="xl"
          sx={{
            flexGrow: 1,
            height: "100vh",
            overflow: "auto",
            backgroundColor: "#F5F5F5",
          }}
        >
          <AppBar
            position="absolute"
            open={open}
            sx={{ height: "10%", display: "flex", alignItems: "center" }}
          >
            <Container maxWidth="xl">
              <Toolbar>
                <IconButton edge="start" color="inherit" onClick={toggleDrawer}>
                  <MenuIcon />
                </IconButton>
                <Typography
                  variant="h6"
                  noWrap
                  sx={{
                    flexGrow: 1,
                    fontWeight: 530,
                    letterSpacing: 5,
                    marginLeft: 5,
                  }}
                >
                  SAWA HR TECHNOLOGIES
                </Typography>

                {/* Search Function */}
                <Box sx={{ marginRight: "15%" }}>
                  <Search sx={{ height: "50px" }}>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <CustomSelect
                      options={allEmployeeData}
                      onSelect={handleSelect}
                    />
                  </Search>
                </Box>

                <WebClockInAndOut />
                {/* Notification Icon */}
                <IconButton color="inherit" sx={{ mx: "18px" }}>
                  <Badge badgeContent={4} color="info">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>

                {/* User Avatar */}
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt={userInitials} src="/static/images/avatar/2.jpg">
                    {userInitials}
                  </Avatar>
                </IconButton>
                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={() => setAnchorElUser(null)}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
                  sx={{ position: "absolute", top: "7%", right: "50%" }}
                >
                  {MenuList.map((menuItem, index) => (
                    <MenuItem
                      key={index}
                      onClick={() => handleCloseUserMenu(menuItem.name)}
                    >
                      {menuItem.icon}
                      <Typography textAlign="center" sx={{ ml: 2 }}>
                        {menuItem.name}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </Toolbar>
            </Container>
          </AppBar>

          <Toolbar />
          <Container sx={{ flexGrow: 1 }}>
            <Outlet />
            <Copyright />
          </Container>
        </Container>
      </Box>
    </ThemeProvider>
  );
};

export default Dashboard;
