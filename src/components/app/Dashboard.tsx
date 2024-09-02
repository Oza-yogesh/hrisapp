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

  useEffect(() => {
    getRequest(GET_ALL_EMPLOYEE_DETAILS).then((res: AxiosResponse) => {
      setAllEmployeeData(res.data);
    });
  }, []);

  const handleSelect = (option: Employee) => {
    let employeeId: string = option._id;
    navigate(`/dashboard/personal-details/${employeeId}`);
    
  };

  const toggleDrawer = () => setOpen((prevOpen) => !prevOpen);

  const handleOpenUserMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = (button: string) => {
    if (button === "Logout") navigate("/login");
    setAnchorElUser(null);
  };

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
          <AppBar position="absolute" open={open}>
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

                  {/* search Function */}
                  
                <Box>
                  <Search>
                    <SearchIconWrapper>
                      <SearchIcon />
                    </SearchIconWrapper>
                    <CustomSelect
                      options={allEmployeeData}
                      onSelect={handleSelect}
                    />
                  </Search>
                </Box>

                <IconButton color="inherit" sx={{ mx: "18px" }}>
                  <Badge badgeContent={4} color="info">
                    <NotificationsIcon />
                  </Badge>
                </IconButton>
                <IconButton onClick={handleOpenUserMenu}>
                  <Avatar alt="Name" src="/static/images/avatar/2.jpg" />
                </IconButton>
                <Menu
                  anchorEl={anchorElUser}
                  open={Boolean(anchorElUser)}
                  onClose={() => setAnchorElUser(null)}
                  anchorOrigin={{ vertical: "top", horizontal: "right" }}
                  transformOrigin={{ vertical: "top", horizontal: "right" }}
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
